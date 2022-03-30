import { app } from "../../app";
import supertest from "supertest";

const request = supertest(app);

describe("Retornar divisores", () => {
  it("Número 4", async () => {
    await request
      .post("/dividers")
      .send({
        number: 4,
      })
      .expect(200, {
        divisores: [1, 2, 4],
        divisoresPrimos: [1, 2],
      });
  });

  it("Número 30", async () => {
    await request
      .post("/dividers")
      .send({
        number: 30,
      })
      .expect(200, {
        divisores: [1, 2, 3, 5, 6, 10, 15, 30],
        divisoresPrimos: [1, 2, 3, 5],
      });
  });

  it("Número 120", async () => {
    await request
      .post("/dividers")
      .send({
        number: 120,
      })
      .expect(200, {
        divisores: [1, 2, 3, 4, 5, 6, 8, 10, 12, 15, 20, 24, 30, 40, 60, 120],
        divisoresPrimos: [1, 2, 3, 5],
      });
  });

  it("Número 73585332", async () => {
    await request
      .post("/dividers")
      .send({
        number: 73585332,
      })
      .expect(200, {
        divisores: [
          1, 2, 3, 4, 6, 9, 12, 18, 36, 2044037, 4088074, 6132111, 8176148,
          12264222, 18396333, 24528444, 36792666, 73585332,
        ],
        divisoresPrimos: [1, 2, 3, 2044037],
      });
  });

  it("Número 24765664", async () => {
    await request.post("/dividers").send({
      number: 24765664,
    })
    .expect(200, {
      divisores: [
        1, 2, 4, 7, 8, 11, 14, 16, 19, 22, 23, 28, 32, 38, 44, 46, 56, 76, 77,
        88, 92, 112, 133, 152, 154, 161, 176, 184, 209, 224, 253, 266, 304, 308,
        322, 352, 368, 418, 437, 506, 529, 532, 608, 616, 644, 736, 836, 874,
        1012, 1058, 1064, 1232, 1288, 1463, 1672, 1748, 1771, 2024, 2116, 2128,
        2464, 2576, 2926, 3059, 3344, 3496, 3542, 3703, 4048, 4232, 4256, 4807,
        5152, 5819, 5852, 6118, 6688, 6992, 7084, 7406, 8096, 8464, 9614, 10051,
        11638, 11704, 12236, 13984, 14168, 14812, 16928, 19228, 20102, 23276,
        23408, 24472, 28336, 29624, 33649, 38456, 40204, 40733, 46552, 46816,
        48944, 56672, 59248, 67298, 70357, 76912, 80408, 81466, 93104, 97888,
        110561, 118496, 134596, 140714, 153824, 160816, 162932, 186208, 221122,
        269192, 281428, 321632, 325864, 442244, 538384, 562856, 651728, 773927,
        884488, 1076768, 1125712, 1303456, 1547854, 1768976, 2251424, 3095708,
        3537952, 6191416, 12382832, 24765664,
      ],
      divisoresPrimos: [1, 2, 7, 11, 19, 23],
    });
  });

  it("Número 81123242", async () => {
    await request.post("/dividers").send({
      number: 81123242,
    })
    .expect(200, {
      divisores: [1, 2, 1117, 2234, 36313, 72626, 40561621, 81123242],
      divisoresPrimos: [1, 2, 1117, 36313],
    });
  });

  it("Número 5834236", async () => {
    await request.post("/dividers").send({
      number: 5834236,
    })
    .expect(200, {
      divisores: [
        1, 2, 4, 83, 166, 332, 17573, 35146, 70292, 1458559, 2917118, 5834236,
      ],
      divisoresPrimos: [1, 2, 83, 17573],
    });
  });

  it("Número 50735", async () => {
    await request.post("/dividers").send({
      number: 50735,
    })
    .expect(200, {
      divisores: [1, 5, 73, 139, 365, 695, 10147, 50735],
      divisoresPrimos: [1, 5, 73, 139],
    });
  });
  it("Número 105842", async () => {
    await request.post("/dividers").send({
      number: 105842,
    })
    .expect(200, {
      divisores: [
        1, 2, 11, 17, 22, 34, 187, 283, 374, 566, 3113, 4811, 6226, 9622, 52921,
        105842,
      ],
      divisoresPrimos: [1, 2, 11, 17, 283],
    });
  });

  it("Número 24.5", async () => {
    await request.post("/dividers").send({
      number: 24.5,
    }).expect(400);
  });

  it("Número number", async () => {
    await request.post("/dividers").send({
      number: "number",
    }).expect(400);
  });
});
