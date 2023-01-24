const e = require('express');
const utils = require('../utils');
/*⚠️ No modificar nada arriba de esta línea ⚠️

  5️⃣ ***** EJERCICIO 5 ***** - getCarsByBrand 5️⃣:
  
  🟢 Retornar un array de coches que pertenezcan a la marca solicitada.
  📌 Si la marca solicitada no existe arrojar un error que diga: "Marca no encontrada".
  📌 Si la marca no tiene coches, retornar un string que diga: "No se encontraron coches".
  
  🟢 El parámetro "sort" puede tener dos valores. Si el valor es "highPrice", debes ordenarlos de mayor a menor 
  según el precio del coche. Si el valor es "lowPrice", debes ordenarlos de menor a mayor.

    📢 PUNTOS A TENER EN CUENTA 📢
  1) Recuerda que el mensaje de error deben ser exactamente como lo pide el enunciado.
  2) Dentro de cada marca, está guardado el ID de sus coches correspondientes (ver examples.json), debes utilizar
  esos IDs para encontrarlos en utils.cars
*/

const getCarsByBrand = (brand, sort) => {
  const findBrand = utils.brands.find(b => b.name === brand);
  if(!findBrand) throw Error("Marca no encontrada");
  if(findBrand.cars.length <= 0) return "No se encontraron coches";

  const cars = findBrand.cars.map(id => utils.cars.find(c => c.id === id));

  if(sort === "highPrice") cars.sort((a, b) => b.price - a.price);
  if(sort === "lowPrice") cars.sort((a, b) => a.price - b.price);

  return cars;

};// ⚠️ No modificar nada debajo de esta línea ⚠️
module.exports = getCarsByBrand;
