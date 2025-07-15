const contactModel = require("../models/contactmodel");

// ✅ Exporting the controller function
module.exports.createContact = (req, res) => {
   
    const { name, phone, email, dob } = req.body;

    console.log("Incoming request:", req.body);

    if (!name || !phone || !email) {
        return res.status(400).json({ error: "name, phone, and email are required" });
    }

    contactModel.addContact(name, phone, email, dob, (err, result) => {
        if (err) {
            return res.status(400).json({ error: err.message });
        }

        res.status(201).json({
            message: "contact added successfully",
            contactId: result.insertId,
        });
    });
};


module.exports.fetchContacts = (req, res)=>{
    contactModel.fetchContacts((err, result)=>{
        if(err){
            return res.status(400).json({ error: err.message });
        }

        res.status(200).json({data: result})
    })
}

module.exports.updateContacts = (req, res)=>{
    const {name, email, phone, dob, id} = req.body

    console.log("incoming data", req.body)

    if(!name || !email || !phone || !dob || !id){
        return res.status(400).json({error: "all data is needed"})
    }

    contactModel.updateContacts(name, email, phone, dob, id, (err, result)=>{
        if(err){
            return res.status(400).json({error: err.message})
        }

        if(result.affectedRows === 0){
            return res.status(400).json({error: "contact not found"})
        }

        res.status(200).json({success: "data updated successfully"})
    })
}

module.exports.deleteContact = (req, res)=>{
    const{id} = req.body

    if(!id){
        return res.status(400).json({error: "id is needed"})
    }

    contactModel.deleteContacts(id, (err,result)=>{
        if(err){
            return res.status(400).json({err: err.message})
        }

        if(result.affectedRows === 0){
            return res.status(400).json({error: "contact not deleted"})
        }
        return res.status(200).json({success: "contact deleted from table"})
    })
}

module.exports.searchContact = (req, res)=>{
    const {keyword} = req.body

    if(!keyword){
        return res.status(400).json({error: "in order to search a keyword is needed"})
    }

    contactModel.searchContacts(keyword, (err, result)=>{
        if(err){
            return res.status(400).json({error: err.message})
        }

        res.status(200).json({contacts: result})
    })
}

module.exports.wishBirthday = (req, res)=>{
    const today = new Date()
    const month = today.getMonth() + 1
    const day = today.getDate();


    contactModel.getTodaysBirthday(month, day, (err, result)=>{
        if(err){
            return res.status(400).json({err: err.message})
        }

        if(result.length == 0){
            return res.status(400).json({no_birthday: "no birthdays today"})
        }

        result.forEach((contact)=>{
            console.log(`happy birthday ${contact.name} `);
        })

        return res.status(200).json({success: "birthday emails sent"})
    })
}
