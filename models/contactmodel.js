const db = require("../config/dbconnection");

function addContact(name, phone, email, dob, callback) {


    const checksql = "SELECT * FROM contacts WHERE phone = ?";
    db.query(checksql, [phone], (err, result) => {

        //kai error ave toh nai work karse
        if (err) {
            return callback(err);
        }

        //koi phone hase toh work nai karse
        if (result.length > 0) {
            return callback(new Error("Phone number already exists"));
        }

        //ek sql string banavo pella. pachi ene db.query ma nakho. 
        const insertSql = "INSERT INTO contacts (name, phone, email, dob) VALUES (?, ?, ?, ?)";

        db.query(insertSql, [name, phone, email, dob], callback);
    });
}

function fetchContacts(callback){
    const getdataString = "Select * from contacts"
    db.query(getdataString, [], callback);
}

function updateContacts(name, phone, email, dob, id, callback){
    updateString = "update contacts set name=? , phone = ?, email = ?, dob = ? where id = ?"
    db.query(updateString, [name, phone, email, dob, id], callback)
}

function deleteContacts(id, callback){
    const deleteString = "delete from contacts where id=?"
    db.query(deleteString, [id], callback)
}

function searchContacts(keyword, callback){
    searchString = "select * from contacts where name like ? or phone like ?"

    const wildcard = `%${keyword}%`;

    db.query(searchString, [wildcard, wildcard], callback)
}

function getTodaysBirthday(month, day, callback){
    birthdayString = "select * from contacts where MONTH(dob)=? and day(dob)=?"
    db.query(birthdayString, [month, day], callback)
}

module.exports = {
    addContact,
    fetchContacts,
    updateContacts,
    deleteContacts,
    searchContacts,
    getTodaysBirthday
};
