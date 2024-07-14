const persona = {
  nombre: "Juan",
  apellido: "Losada",
  edad: 45,
  direccion: {
    ciudad: "Cali",
    zip: 760050,
    lat: 14.332,
    lng: 32.457,
  },
};

// console.log(persona);

const persona2 = { ...persona };
persona2.nombre = "Peter";

console.log(persona);
console.log(persona2);
