import { Router } from "express";
import { celebrate, Joi, Segments } from "celebrate";
import { full_dividers_response } from "../controller/DividersController.js";

const routes = (app) => {
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

export { routes };
