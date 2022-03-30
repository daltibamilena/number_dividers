import express from "express";
import { errors } from "celebrate";
import { routes } from "./routes/index.js"

const app = express();
const port = 3000;
app.use(express.json());
routes(app)

app.use((err, req, res, next) => {
  next(err);
});

app.use(errors());

if (process.env.NODE_ENV !== "test") {
  app.listen(port);
}

export {app}
