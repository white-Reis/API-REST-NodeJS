import express from "express";

const routes = (main) => {
  main.route('/').get((req, res) => {
    res.status(200).send({titulo: "Primeiro teste"})
  })

  main.use(
    express.json()
  )
}
export default routes