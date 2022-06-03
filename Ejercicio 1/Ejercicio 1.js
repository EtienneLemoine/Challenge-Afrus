//Ejercicio 1

function multiplica(c, d) {
    return c > 0 ? multiplica(c-1, d) + d : 0;
  }
  
  console.log(
    multiplica(2,3),
    multiplica(3,4),
    multiplica(4,5),
    multiplica(5,6),
    multiplica(2,-6)
  );