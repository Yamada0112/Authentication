const express = require("express")
const bcrypt = require("bcryptjs")
const router = express.Router()
const { login, home, register } = require("../controllers/auth-controller")
const { SignUpSchema } = require("../validators/auth-validator")
const validate = require("../middlewares/validate-middleware")
//Basic route setup using Router
router.route("/").get(home)
router.route("/register").post(validate(SignUpSchema), register)
router.route("/login").post(login)

module.exports = router