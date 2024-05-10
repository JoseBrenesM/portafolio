const contacS = require("../services/contactService");
async function msg(req, res){
    try{
        const contact = await contacS.msg(req.body);
    }catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error en el servidoor' });
      }
}
module.exports ={
    msg
}