import { app }  from "../../app"
import supertest from "supertest"

const request = supertest(app);

describe("Retornar divisores", () => {
  test("Número 30", async () => {
    let response = await request.post("/dividers").send({
      number: 30,
    });
    expect(response.status).toBe(200);
    expect(response.body).toStrictEqual({
      divisores: [1, 2, 3, 5, 6, 10, 15, 30],
      divisoresPrimos: [1, 2, 3, 5],
    });
  });

  test("Número 24.5", async () => {
    let response = await request.post("/dividers").send({
      number: 24.5,
    });
    expect(response.status).toBe(400);
    expect(response.body.message).toStrictEqual("Validation failed");
  });

  test("Número number", async () => {
    let response = await request.post("/dividers").send({
      number: "number",
    });
    expect(response.status).toBe(400);
    expect(response.body.message).toStrictEqual("Validation failed");
  });
});
