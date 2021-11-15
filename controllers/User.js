const express = require("express");
const router = express.Router();
const UserServices = require("../services/UserServices");
const BaseResponse = require("../base-response/");

router.post("/", async (req, res) => {
  var mobilePhoneNumber = req.body.mobilePhoneNumber;
  var username = req.body.username;
  var password = req.body.password;
  var email = req.body.email;
  try {
    const checkingAvailibilityUsers =
      await UserServices.checkingAvailibilityUsers({
        email,
      });
    if (checkingAvailibilityUsers) {
      res.json(BaseResponse.DATA_ALREADY_EXIST()).status(200);
      return;
    }
    const createUser = await UserServices.createUser({
      mobilePhoneNumber,
      username,
      password,
      email,
    });
    if (!createUser) {
      res.json(BaseResponse.INTERNAL_SERVICE_ERROR()).status(501);
      return;
    }
    res.json(BaseResponse.SUCCESS(createUser)).status(501);
  } catch (error) {
    res.json(BaseResponse.INTERNAL_SERVICE_ERROR()).status(501);
  }
});

router.post("/login", async (req, res) => {
  var password = req.body.password;
  var email = req.body.email;
  try {
    const loginByEmailAndPasswordResponse =
      await UserServices.loginByEmailAndPassword({
        email,
        password,
      });
    if (loginByEmailAndPasswordResponse) {
      res
        .json(BaseResponse.SUCCESS(loginByEmailAndPasswordResponse))
        .status(200);
      return;
    } else {
      res.json(BaseResponse.DATA_NOT_FOUND()).status(200);
    }
  } catch (error) {
    res.json(BaseResponse.INTERNAL_SERVICE_ERROR()).status(501);
  }
});

module.exports = router;
