let PosiblesFichas=["X","O"]; 

function pedirCasilla(){ 

    let casilla=prompt("En que casilla quieres poner una ficha??"); 

    return casilla; 

} 

function obtenerPosicion(casilla){ 

    let TableroPosiciones=[ 

        ["1","2","3"], 

        ["4","5","6"],

        ["7","8","9"] 

    ]; 

    let pos=[]; 

    for(let j=0;j<TableroPosiciones.length;j++){ 

        for(let i=0;i<TableroPosiciones[j].length;i++){ 

            if(casilla===TableroPosiciones[j][i]){ 

                pos=[j,i]; 

            } 

        } 

    } 

    return pos; 

} 
function rellenarTablero(){ 

    let Tablero=[ 

        ["","",""], 

        ["","",""], 

        ["","",""] 

    ]; 
    let turno=0;
    do {
        let casilla = pedirCasilla();
        let pos = obtenerPosicion(casilla);

        if (pos === null) {
            alert("No existe la casilla,elige una entre 1 y 9.");
            continue; 
        }

        
        if (!comprobarCasillaLibre(pos, Tablero)) {
            alert("Casilla ocupada. Inténtalo de nuevo.");
            continue; 
        }

        
        Tablero[pos[0]][pos[1]] = PosiblesFichas[turno % 2];
        
        turno++; 

        
        if (comprobar3enRaya(Tablero)) {
            alert(`¡Jugador ${PosiblesFichas[(turno - 1) % 2]} gana!`);
            break; 
        }
        imprimirTablero(Tablero);

        if (comprobarEmpate(Tablero)) {
            alert("Empate");
            break; 
        }

    } while (true); 

    return Tablero;
} 

function comprobarCasillaLibre(pos,tablero){ 

    return (tablero[pos[0]][pos[1]]===""); 

} 

function comprobar3enRaya(tablero){ 

    for (let i = 0; i < 3; i++) {
        //Las filas
        if (tablero[i][0] === tablero[i][1] && tablero[i][1] === tablero[i][2] && tablero[i][0] !== "") {
            return true;
        }
        //columnas
        if (tablero[0][i] === tablero[1][i] && tablero[1][i] === tablero[2][i] && tablero[0][i] !== "") {
            return true;
        }
    }
    //las 2 diagonales
    if (tablero[0][0] === tablero[1][1] && tablero[1][1] === tablero[2][2] && tablero[0][0] !== "") {
        return true;
    }
    if (tablero[0][2] === tablero[1][1] && tablero[1][1] === tablero[2][0] && tablero[0][2] !== "") {
        return true;
    }
    
    return false;
}
function comprobarEmpate(tablero){ 

    for (let i = 0; i < tablero.length; i++) {
        for (let j = 0; j < tablero[i].length; j++) {
            if (tablero[i][j] === "") {
                return false; 
        }
    }
}
    return true;
}
/*
function imprimirTablero(tablero) {
    console.clear();
    for (let i = 0; i < tablero.length; i++) {
        console.log(tablero[i].join(" | ")); 
    }
    console.log("");
}
*/

function imprimirTablero(tablero) {
    alert(tablero[0].join(" | ") + "\n" + tablero[1].join(" | ") + "\n" + tablero[2].join(" | "));
}

rellenarTablero();