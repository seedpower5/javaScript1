function generarMatriz(...args) {
    if (args.length === 0) {
      return "Error: 0 argumentos";
    }
  
    if (args.length === 1) {
      return "Error: 1 argumento";
    }
  
    const arg1 = parseInt(args[0]);
    const arg2 = parseInt(args[1]);
  
    if (!Number.isInteger(arg1) || !Number.isInteger(arg2) || arg1 < 1 || arg2 < 1) {
      return "Error: no números enteros";
    }
  
    if (args.length === 3) {
      const arg3 = args[2];
      if (typeof arg3 !== "string" || arg3.length !== 1) {
        return "Error: separador erróneo";
      }
  
      const matriz = [];
      for (let i = 0; i < arg1; i++) {
        const fila = [];
        for (let j = 0; j < arg2; j++) {
          fila.push(`${i}${arg3}${j}`);
        }
        matriz.push(fila);
      }
  
      return matriz;
    }
  
    // Si no hay tercer argumento, usar separador por defecto "x"
    const matriz = [];
    for (let i = 0; i < arg1; i++) {
      const fila = [];
      for (let j = 0; j < arg2; j++) {
        fila.push(`${i}x${j}`);
      }
      matriz.push(fila);
    }
  
    return matriz;
  }
  
  // Ejemplos de uso:
  console.log(generarMatriz()); // Error: 0 argumentos
  console.log(generarMatriz(5)); // Error: 1 argumento
  console.log(generarMatriz(3, "a")); // Error: no números enteros
  console.log(generarMatriz(2, 4, "x")); // [["0x0","0x1","0x2","0x3"],["1x0","1x1","1x2","1x3"]]
  console.log(generarMatriz(2, 3, "-")); // [["0-0","0-1","0-2"],["1-0","1-1","1-2"]]
  