import { query } from "express";
import peoples from "../models/people.js";

class PeoplesController {

  static listPeoples = async (req, res) => {
    const { page = 1, limit= 3}=req.query
    try {
      const Peoples = await peoples.find()
      .limit(limit)
      .skip((page - 1)*limit)
      .exec()

      const count = await peoples.countDocuments()
        const totalPages = Math.ceil(count/limit)
        res.json({ Peoples, totalPages, currentPage:page})
      }
      catch (err) {
        res.status(404).send({ message: err.message})
      }
    }

  static listPeopleForId = (req, res) => {
    const id = req.params.id;
    peoples.findById(id, (err, objects) => {
      if(!err) {
        res.status(204).send(objects);
      } else {
        res.status(404).send({message: `${err.message} - ID does not exist.`})
      }
    })
  }
  static listPeopleForName = (req, res) => {
    const name = req.params.name;
    peoples.find({"name": name}, (err, objects) => {
      if(!err) {
        res.status(204).send(objects);
      } else {
        res.status(404).send({message: `${err.message} - Person not found.`})
      }
    })
  }

  static createPeople = (req, res) => {
    let People = new peoples(req.body);

    People.save((err) => {

      if(!err) {
        res.status(201).send(People.toJSON())
      } else {
        res.status(404).send({message: `${err.message} - failed to register person.`})
      }
    })
  }
  static attPeople = (req, res) => {
    const id = req.params.id;
    peoples.findByIdAndUpdate(id, {$set: req.body}, (err) => {
      if(!err) {
        res.status(201).send({message: 'person successfully updated.'})
      } else {
        res.status(404).send({message: err.message+" - ID not found"})
      }
    })
  }

  static deletePeople = (req, res) => {
    const id = req.params.id;
    peoples.findByIdAndDelete(id, (err) => {
      if(!err){
        res.status(204).send({message: 'person successfully removed.'})
      } else {
        res.status(404).send({message: err.message + 'person not found'})
      }
    })
  }
}

export default PeoplesController