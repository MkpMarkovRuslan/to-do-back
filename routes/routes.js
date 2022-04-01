const express = require("express");
const router = express.Router();

const taskControllers = require("../controllers/task.controller");

// Tasks routes
router.get("/getAll", taskControllers.getAllTasks);
router.post("/create", taskControllers.createTask);
router.patch("/update", taskControllers.updateTask);
router.delete("/delete", taskControllers.deleteTask);

//User routes

module.exports = router;
