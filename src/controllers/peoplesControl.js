import { query } from "express";
import peoples from "../models/people.js";

class PeoplesController {

  static listPeoples = async (req, res) => {
    peoples.find((err, peoples) => {
      res.status(200).json(peoples)
  })
  }

  static listPeopleForId = (req, res) => {
    const id = req.params.id;
    peoples.findById(id, (err, objects) => {
      if(!err) {
        res.status(200).send(objects);
      } else {
        res.status(400).send({message: `${err.message} - ID does not exist.`})
      }
    })
  }
  static listPeopleForName = (req, res) => {
    const name = req.params.name;
    peoples.find({"name": name}, (err, objects) => {
      if(!err) {
        res.status(200).send(objects);
      } else {
        res.status(400).send({message: `${err.message} - Person not found.`})
      }
    })
  }

  static createPeople = (req, res) => {
    let People = new peoples(req.body);

    People.save((err) => {

      if(!err) {
        res.status(201).send(People.toJSON())
      } else {
        res.status(500).send({message: `${err.message} - failed to register person.`})
      }
    })
  }
  static attPeople = (req, res) => {
    const id = req.params.id;
    peoples.findByIdAndUpdate(id, {$set: req.body}, (err) => {
      if(!err) {
        res.status(200).send({message: 'person successfully updated.'})
      } else {
        res.status(500).send({message: err.message})
      }
    })
  }

  static deletePeople = (req, res) => {
    const id = req.params.id;
    peoples.findByIdAndDelete(id, (err) => {
      if(!err){
        res.status(200).send({message: 'person successfully removed.'})
      } else {
        res.status(500).send({message: err.message})
      }
    })
  }
}

export default PeoplesController