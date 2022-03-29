const { Router } = require("express");
const { celebrate, Joi, Segments } = require("celebrate");
const {full_dividers_response} = require("../controller/DividersController");

module.exports = (app) => {
  app.get("/", (req, res) => {
    res.send(
      "Hello, successful request to number_dividers o/. Happy to see you here!"
    );
  });

  app.post(
    "/dividers",
    celebrate({
      [Segments.BODY]: {
        number: Joi.number().integer().required(),
      },
    }),
    (req, res) => {
      res.send(full_dividers_response(req.body.number));
    }
  );
};
