const server = require("../server.js");
const request = require("supertest");

describe("server", () => {
  it("sets the environment to testing", () => {
    expect(process.env.DB_ENV).toBe("testing");
  });
  describe("GET /", () => {
    it("should return 200 OK", () => {
      return request(server)
        .get("/")
        .expect(200);
    });
    it("should return provided message", () => {
      const expected = { message: 'BW Workout Journal' };
      return request(server)
        .get("/")
        .then(res => {
          expect(res.body).toEqual(expected);
        });
    });
  });
  describe("GET /sanitycheck", () => {
    it("should return 404 Not Found", () => {
      return request(server)
        .get("/sanitycheck")
        .expect(404);
    })});
    describe("POST /sanitycheck", () => {
      it("should return 404 Not Found", () => {
        return request(server)
          .post("/sanitycheck")
          .expect(404);
      })});
});