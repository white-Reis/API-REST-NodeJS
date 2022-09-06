import express from "express";
import peoples from "../routes/peopleRoutes.js"

const routes = (app) => {
  app.route('/').get((req, res) => {
    res.status(200).send({Projeto: "API REST:FULL - SPRINT OF NODE"})
  })
  app.use(
    express.json(),peoples
  )
}
export default routes