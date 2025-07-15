const express = require('express')
const router = express.Router()
const contactController = require("../controllers/contactController")

router.post("/createContact", contactController.createContact)
router.get("/fetchContacts", contactController.fetchContacts)
router.put("/update", contactController.updateContacts)
router.delete("/delete", contactController.deleteContact)
router.post("/searchContacts", contactController.searchContact);

module.exports = router