module.exports = {
  SUCCESS(data) {
    return {
      code: "SUCCESS",
      status: "SUCCESS",
      message: "SUCCESS",
      data: data,
    };
  },
  DATA_ALREADY_EXIST() {
    return {
      code: "ERROR",
      status: "DATA_ALREADY_EXIST",
      message: "DATA ALREADY EXIST",
      data: null,
    };
  },
  DATA_NOT_FOUND() {
    return {
      code: "ERROR",
      status: "DATA_NOT_FOUND",
      message: "DATA NOT FOUND",
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
