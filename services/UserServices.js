const User = require("../models/User");
module.exports = {
  checkingAvailibilityUsers(payload) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await User.findOne({
          email: payload.email,
        });
        console.log(payload);
        resolve(response);
      } catch (error) {
        reject(error);
      }
    });
  },
  createUser(payload) {
    return new Promise(async (resolve, reject) => {
      try {
        const newUser = new User(payload);
        const response = await newUser.save();
        resolve(response);
      } catch (error) {
        reject(error);
      }
    });
  },
};
