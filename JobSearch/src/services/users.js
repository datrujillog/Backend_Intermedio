"use strict";

const User = require("../models/users");
const { ok, created, notFound } = require("../helpers/sendStatus");

class Users {
  constructor(app) {
    this.app = app;
    this.ok = ok;
    this.created = created;
    this.notFound = notFound;
  }

  async getAll() {
    try {
      const users = await User.find();

      return users;
    } catch (error) {
      // this.ok(res, error);
      console.log(error);
    }
  }

  async create(data) {
    try {
      const user = await User.create(data);

      return user;
    } catch (error) {
      console.log(error);
    }
    }
    
    async update(id, data) {
        try {
            const user = await User.findOneAndUpdate(id, data, {new: true});
            return user;
        } catch (error) {
            console.log(error);
        }
    }

    async delete(id) {
        try {
            const user = await User.findOneAndDelete(id);
            return user;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = Users;
