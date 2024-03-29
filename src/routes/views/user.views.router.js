const express = require("express")
const router = express.Router()

router.get("/register", (req, res) => {
  res.render("register")
})

router.get("/login", async (req, res) => {
  if (req.session.login) {
    return res.redirect("/products")
  }
  res.render("login")
})

router.get("/logout", (req, res) => {
  if(req.session.login) {
      req.session.destroy();
  }
  res.redirect("/login");
})

module.exports = router