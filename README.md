### API Routes

- `POST /createContact`  
  → `contactController.createContact`  
  _Add `name`, `phone`, `email`, and `dob`_

- `GET /fetchContacts`  
  → `contactController.fetchContacts`  
  _Just fire the query to fetch all contacts_

- `PUT /update`  
  → `contactController.updateContacts`  
  _Must enter **all fields**_

- `DELETE /delete`  
  → `contactController.deleteContact`  
  _Just enter the `id`_

- `POST /searchContacts`  
  → `contactController.searchContact`  
  _Just enter a **string** to search (name or phone)_

