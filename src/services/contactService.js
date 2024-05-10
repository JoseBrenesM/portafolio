const {getDatabase} = require ("../repositories/coneRepo");
const msg= async (userData) => {
    const database = getDatabase();
    const newUser = await database
        .collection("contact").insertOne({
            correo: userData.email,
            mensaje: userData.message
        });
        return newUser;
}
module.exports ={
    msg
}