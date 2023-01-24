const utils = require('../utils');
/* ⚠️ No modificar nada arriba de esta línea ⚠️

  6️⃣ ***** EJERCICIO 6 ***** - getBrandPrices 6️⃣:

   🟢 Debes retornar la suma del precio de todos los coches de la marca recibida por parámetro.
   🟢 Si recibes el parámetro "unused" con valor true, entonces retorna la suma de precios sólo de los coches 
   que sean nuevos.
   🟢 Si recibes el parámetro "unused" con valor false, entonces retorna la suma de precios sólo de los coches 
   que sean usados.
   🟢 Si la marca no existe, arrojar un error que diga: "Marca no encontrada".
      
   📢 PUNTOS A TENER EN CUENTA 📢
   1)El parámetro "unused" puede tener el valor null.
   2) Debes obtener los coches a partir de los IDs almacenados en su marca.
*/

const getBrandPrices = (brand, unused) => {
  const findPrice = utils.brands.find((b)=> b.name === brand)

  if (!findPrice) throw Error("Marca no encontrada")

  let cars = findPrice.cars.map((id)=> utils.cars.find((c)=>c.id === id))

  let acc = 0
  if(unused === true) {
    cars = cars.filter((c)=> c.new === true)
    carsPrice = cars.forEach((c) => { acc = acc + c.price});
  } else if (unused === false) {
    cars = cars.filter((c)=> c.new === false)
    carsPrice = cars.forEach((c) => { acc = acc + c.price});
  } else if (unused === null ) {
    carsPrice = cars.forEach((c) => { acc = acc + c.price});
  } return acc
  
};

//⚠️ No modificar nada debajo de esta línea ⚠️
module.exports = getBrandPrices;
