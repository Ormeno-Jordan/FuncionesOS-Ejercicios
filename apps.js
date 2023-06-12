////ejercicio 1//
//function filtrarCervezasPorAlcohol (beers, alcoholLevel){
//  const cervezasFiltradas = beers.filter (beer => beer.abv <= alcoholLevel);
//  const resultado = cervezasFiltradas.map (beer => {
//    return {
//      nombre: beer.name,
//      alcohol: beer.abv,
//      amargor: beer.ibu
//    };
//  });
//
//  return resultado;
//}
//console.log(filtrarCervezasPorAlcohol(beers, 5))

//ejercicio 2//
//function cervezasMasAlcoholicas(beers) {
//  beers.sort(function(beer) {
//    return beer.abv - beer.abv;
//  });
//
//  let cervezasAlcoholicas = beers.slice(0, 10);
//
//  return cervezasAlcoholicas;
//}
//console.log(cervezasMasAlcoholicas)

//ejercicio 3//
let nivelDeAmargura= 50;

function cervezasAmargas(beers){
  let CervezasMenosAmargas= beers.filter((cerveza)=> cerveza.ibu <= nivelDeAmargura).slice(0, 10);
  let nuevoArray=CervezasMenosAmargas.map((objeto)=>{
  return{
    name:objeto.name,
    Amargura:objeto.ibu,
}
})
console.log(nuevoArray);
}
cervezasAmargas(beers)

