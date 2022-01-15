const router = require("express").Router();
const { create, generate_OTP, verify_OTP } = require("../controllers/users");

module.exports = (app) => {
  router.route("/").post(create);
  router.route("/generateOTP").post(generate_OTP);
  router.route("/:user_id/verifyOTP").get(verify_OTP);
  app.use("/users", router);
};
