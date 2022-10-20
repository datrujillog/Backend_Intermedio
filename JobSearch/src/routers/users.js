'use strict'

const express = require('express')
const { ok, created, notFound } = require('../helpers/sendStatus')
const { count } = require('../models/users')
const UserServices = require('../services/users')

function users (app) {
  const router = express.Router()
  const userSer = new UserServices()

  app.use('/api/V1/users', router)

  router.get('/', async (req, res) => {
    const users = await userSer.getAll()
    const count = users.length
    res.status(ok).json({
      count: count,
      data: users
    })
  })

  router.post('/', async (req, res) => {
    const { name, email, password } = req.body
    const user = await userSer.create({ name, email, password })
    res.status(created).json(user)
  })

  router.put('/:d', async (req, res) => {
    const { id } = req.params
    const body = req.body
    const user = await userSer.update(id, body)
    console.log(user)
    res.status(ok).json(user)
  })

  router.delete('/:id', (req, res) => {
    const { id } = req.params
    const user = userSer.delete(id)
    res.status(ok).json(user)
  })

  return router
}

module.exports = users
