const express = require("express");
const userModel = require("./models");
const app = express();

app.post("/add_user", async (request, response) => {
    const user = new userModel(request.body);
   console.log("req received")
    try {
      await user.save();
      response.send(user);
    } catch (error) {
      response.status(500).send(error);
    }
});

module.exports = app;