import request from "supertest"
import { app } from "@shared/infra/http/app"

// describe("List Patients", () => {
//   it("should be able to list all patients", async () => {
//     await request(app).post("/patients").send({
//       name: "Patient",
//       ethnicity: "test",
//       nationality: "test",
//       cpf: "121212",
//       birth_date: "2022-12-12",
//       marital_status: "test",
//       address: "test",
//       state: "test",
//       city: "test",
//       gender: "test",
//       phone_number: "1000"
//     })
//     const response = await request(app).get("/patients")
//     expect(response.status).toBe(200)
//     expect(response.body.length).toBe(1)
//     expect(response.body[0]).toHaveProperty("id")
//     expect(response.body[0].name).toEqual("Patient")
//   })
// })