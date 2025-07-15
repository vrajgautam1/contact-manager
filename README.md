router.post("/createContact", contactController.createContact) //- add name, phone, email and dob
router.get("/fetchContacts", contactController.fetchContacts) //just fire the query
router.put("/update", contactController.updateContacts) // must enter all fields
router.delete("/delete", contactController.deleteContact) // just enter id
router.post("/searchContacts", contactController.searchContact); // just enter a string to search

