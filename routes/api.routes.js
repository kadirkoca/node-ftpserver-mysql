const express = require("express")
const router = new express.Router()
const MainController = require("../app/http/controllers/main.controller.js")

// Create a new Item
router.post("/", MainController.create)

// Retrieve all Items
router.get("/", MainController.findAll)

// Retrieve all published Items
router.get("/published", MainController.findAllPublished)

// Retrieve a single Item with id
router.get("/:id", MainController.findOne)

// Update a Item with id
router.put("/:id", MainController.update)

// Delete a Item with id
router.delete("/:id", MainController.delete)

// Create a new Item
router.delete("/", MainController.deleteAll)

module.exports = router