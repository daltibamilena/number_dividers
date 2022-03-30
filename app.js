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

app.listen(port, () => {
  //console.log(`Example app listening on port ${port}`);
});

export {app}
