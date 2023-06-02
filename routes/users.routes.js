const { Router } = require("express");
const {
  createUser,
  getUserToDoCategory,
} = require("../controllers/users.controllers");

const router = Router();

// createUser
router.post("/", createUser);

// getUserToDoCategory
router.get("/:id", getUserToDoCategory);

module.exports = router;
