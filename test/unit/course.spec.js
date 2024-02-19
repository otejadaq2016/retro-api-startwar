const Service = require("../../src/services/course.service");
const Repository = require("../../src/repositories/course.repository");
const sinon = require("sinon");

describe("Course generate errors", () => {
  beforeAll(() => {
    sinon.stub(Repository.prototype, "createCourse").throws(new Error(""));
    sinon.stub(Repository.prototype, "updateCourse").throws(new Error(""));
    sinon.stub(Repository.prototype, "deleteCourse").throws(new Error(""));
    sinon.stub(Repository.prototype, "getCourseById").throws(new Error(""));
    sinon.stub(Repository.prototype, "getCourses").throws(new Error(""));
  });

  it('should define "service" class', () => {
    expect(Service).toBeDefined();
  });

  it("method createCourse should return error", async () => {
    try {
      const service = new Service();
      await service.createCourse("java", "java expert", 2000);
    } catch (error) {
      expect(error).toEqual(new Error());
    }
  });

  it("method updateCourse should return error", async () => {
    try {
      const service = new Service();
      await service.updateCourse("java", "java expert", 2020, "prueba-123");
    } catch (error) {
      expect(error).toEqual(new Error());
    }
  });

  it("method deleteCourse should return error", async () => {
    try {
      const service = new Service();
      await service.deleteCourse("prueba-123");
    } catch (error) {
      expect(error).toEqual(new Error());
    }
  });

  it("method getCourseById should return error", async () => {
    try {
      const service = new Service();
      await service.getCourseById("prueba-123");
    } catch (error) {
      expect(error).toEqual(new Error());
    }
  });

  it("method getCourses should return error", async () => {
    try {
      const service = new Service();
      await service.getCourses();
    } catch (error) {
      expect(error).toEqual(new Error());
    }
  });

  afterAll(() => {
    sinon.restore();
  });
});

describe("Course all success", () => {
  beforeAll(() => {
    sinon.stub(Repository.prototype, "createCourse").callsFake(() => {
      return true;
    });

    sinon.stub(Repository.prototype, "updateCourse").callsFake(() => {
      return true;
    });

    sinon.stub(Repository.prototype, "deleteCourse").callsFake(() => {
      return true;
    });

    sinon.stub(Repository.prototype, "getCourseById").callsFake(() => {
      return {};
    });

    sinon.stub(Repository.prototype, "getCourses").callsFake(() => {
      return {
        Items: {},
      };
    });
  });

  it('should define "service" class', () => {
    expect(Service).toBeDefined();
  });

  it("method createCourse should return success", async () => {
    const service = new Service();
    const response = await service.createCourse(
      "java",
      "java expert",
      2000
    );
    expect(response).toBe(true);
  });

  it("method updateCourse should return success", async () => {
    const service = new Service();
    const response = await service.updateCourse(
      "java",
      "java expert",
      2000,
      "prueba-123"
    );
    expect(response).toBe(true);
  });

  it("method deleteCourse should return success", async () => {
    const service = new Service();
    const response = await service.deleteCourse("prueba-123");
    expect(response).toBe(true);
  });

  it("method getCourseById should return success", async () => {
    const service = new Service();
    const response = await service.getCourseById("prueba-123");
    expect(response).toBeObject();
  });

  it("method getCourses should return success", async () => {
    const service = new Service();
    const response = await service.getCourses();
    expect(response).toBeObject();
  });

  afterAll(() => {
    sinon.restore();
  });
});
