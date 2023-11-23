const express = require("express");
const router = express.Router();
const mainController = require("../controllers/mainController");
const idController = require("../controllers/idController");
const userController = require("../controllers/userController");

router
  .route("/")
  .get(mainController.getUsers)
  .post(mainController.createUser)
  .put(mainController.updateUser)
  .delete(mainController.createUser);

router
  .route("/:id")
  .get(idController.getByID)
  .post(idController.postbyID)
  .delete(idController.deletebyID);

router.route("/user").get(userController.getUserSpecific);
router
  .route("/chats")
  .get(userController.getOrCreateChat) //userController endpoints not fully connected
  .post(userController.CreateChat);

module.exports = router;
