import Peoples from "../models/people.js";

class PeoplesController {

  static listPeoples = (req, res) => {
    Peoples.find((err, objects) => {
      res.status(200).json(objects)
  })
  }

  static listPeopleForId = (req, res) => {
    const id = req.params.id;

    Peoples.findById(id, (err, objects) => {
      if(!err) {
        res.status(200).send(objects);
      } else {
        res.status(400).send({message: `${err.message} - Id do People não localizado.`})
      }
    })
  }

  static createPeople = (req, res) => {
    let People = new Peoples(req.body);

    People.save((err) => {

      if(!err) {
        res.status(201).send(People.toJSON())
      } else {
        res.status(500).send({message: `${err.message} - falha ao cadastrar People.`})
      }
    })
  }

  static attPeople = (req, res) => {
    const id = req.params.id;

    Peoples.findByIdAndUpdate(id, {$set: req.body}, (err) => {
      if(!err) {
        res.status(200).send({message: 'People atualizado com sucesso'})
      } else {
        res.status(500).send({message: err.message})
      }
    })
  }

  static DeletePeople = (req, res) => {
    const id = req.params.id;

    Peoples.findByIdAndDelete(id, (err) => {
      if(!err){
        res.status(200).send({message: 'People removido com sucesso'})
      } else {
        res.status(500).send({message: err.message})
      }
    })
  }

}

export default PeopleController