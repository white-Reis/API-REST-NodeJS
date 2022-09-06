import express from "express";
import peoples from "../models/people.js"

const routes = (main) => {
  main.route('/').get((req, res) => {
    res.status(200).send({função: "Primeiro teste"})
  })

  main.use(
    express.json(),
    peoples
  )
}
export default routes