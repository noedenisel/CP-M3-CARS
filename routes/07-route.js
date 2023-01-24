const router = require('express').Router();
const addCars = require('../controllers/01-controller');
const utils = require('../utils');
/* ⚠️ No modificar nada arriba de esta línea ⚠️

  7️⃣ ***** EJERCICIO 7 ***** - POST /cars 7️⃣:
  
  🟢 Integrar la función addCars que desarrollaste previamente (Ejericio 1) para agregar un nuevo auto en la 
  base de datos.
  📌 Responder un objeto con una propiedad "msg": <la base de datos con el coche agregado>.
  📌 Si hay un error, responder un objeto con una propiedad "err": <el mensaje recibido en el objeto error>.

    📢 PUNTOS A TENER EN CUENTA 📢
  1) Recibirás los argumentos necesarios para ejecutar esa función addCars mediante la propiedad "body" de *req*.
  2) ¡Revisa en los test el status que deben tener tus respuestas!
*/
router.post("/cars", (req, res)=> {
  const { cars, brand} = req.body
  try{
    
    let response = addCars(cars, brand)
    res.status(201).json({msg: response})
  } catch(err) {
    res.status(400).json({err: err.message})
  }
})
//⚠️ No modificar nada debajo de esta línea ⚠️
module.exports = router;
