module.exports = {
  SUCCESS(data) {
    return {
      code: "SUCESS",
      status: "SUCCESS",
      message: "SUCCESS",
      data: data,
    };
  },
  DATA_ALREADY_EXIST() {
    return {
      code: "ERROR",
      status: "ERROR",
      message: "DATA ALREADY EXIST",
      data: null,
    };
  },
  INTERNAL_SERVICE_ERROR() {
    return {
      code: "ERROR",
      status: "ERROR",
      message: "contact our team",
      data: null,
    };
  },
};
