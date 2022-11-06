import supertest from "supertest"
import app from "../../app"
const request = supertest(app)


describe("test / end point", () => {
  it("test  response for the root route", async () => {
    const result = await request.get("/")
    expect(result.status).toBe(200)
    });
  })
  
describe("test resize endpoint with paramters", () => {
    it("test endpoint  without filename", async () => {
    const result = await request.get("/api/images?width=200&height=200");
    expect(result.status).toBe(404);
    })
    it("test endpoint  without width", async () => {
    await  request.get("/api/images?filename=encenadaport&height=200").expect(400)
    })
    it("test endpoint  without height", async () => {
    await request.get("/api/images?filename=encenadaport&width=600").expect(400)
    })
    it("test endpoint  without positive integer for width", async () => {
      await request.get("/api/images?filename=encenadaport&width=0&height=600").expect(400)
      })
    it("test endpoint  without positive integer for height", async () => {
      await request.get("/api/images?filename=encenadaport&width=500&height=-200").expect(400)
      })
  })
  
  describe("Test endpoint  with image not in images folder ", () => {
    it("Test route with image not in images folder", async () => {
      await request.get("/api/images?filename=rwrrwrwrev&width=200&height=300").expect(404)
    })
  })
  
  describe("Test endpoint with correct paramters", () => {
    it("Test endpoint with correct paramters", async () => {
    await  request.get("/api/images?filename=encenadaport&width=500&height=600").expect(200)
    })
  })
