import request from "supertest";
import { app } from "@shared/infra/http/app";

// describe("Create Patient Controller", () => {
//   it("should be able to create a new patient", async () => {
//     const response = await request(app).post("/patients")
//       .send({
//         name: "Patient",
//         ethnicity: "test",
//         nationality: "test",
//         cpf: "121212",
//         birth_date: "2022-12-12",
//         marital_status: "test",
//         address: "test",
//         state: "test",
//         city: "test",
//         gender: "test",
//         phone_number: "1000"
//       })
//     console.log(response.body)
//     expect(response.status).toBe(201)
//   })
// })