export class cartaAlta {
    baraja;
    tablero;
    propias;
    valor;
    palos;
    
    constructor() {
        this.baraja = new Array(); //baraja vacia
        this.propias = new Array(); //cartas del jugador
        this.tablero = new Array(); //cartas de la mesa
        this.valor = [14, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]; //Del As al King(Rey) 
        this.palos = [1, 2, 3, 4]; //Picas, Diamantes, Tréboles y Corazones.
    }
 
    //Rellena el array "baraja" vacío. Si está lleno, lo vacía primero.
    nuevaBaraja() {
        this.baraja = new Array();
        for(var i = 0; i < this.palos.length; i++) {
            for(var j = 0; j < this.valor.length; j++) {
                let carta = {Valor: this.valor[j], Palo: this.palos[i]};
                this.baraja.push(carta);
            }
        }
        return this.baraja;
    }
    
    
    //Mezcla las cartas de la baraja
    mezclarBaraja() {
        for (var i = 0; i < 1000; i++) {
            var aux1 = Math.floor((Math.random() * this.baraja.length));
            var aux2 = Math.floor((Math.random() * this.baraja.length));
            var aux3 = this.baraja[aux1];
            this.baraja[aux1] = this.baraja[aux2];
            this.baraja[aux2] = aux3;
        }
        return this.baraja;
    }
       
    //Da cartas al jugador y las borra de la baraja.
    cartasPropias() {
        this.propias = new Array();
        for(var i = 0; i < 2; i++) {
            let carta = this.baraja[i];
            this.propias.push(carta);
        } 
        this.baraja.splice(0,2);
        return this.propias;
    }
    
    //Da cartas comunitarias y las borra de la baraja
    cartasTablero() {
        this.tablero = new Array();
        for(var i = 0; i < 2; i++) {
            let carta = this.baraja[i];
            this.tablero.push(carta);
        }   
        this.baraja.splice(0,2);
        return this.tablero;
    }
      
    cartaMasAlta() {
        var maximoValorTablero = this.tablero.sort(this.compararCartas); 
        var maximoValorJugador = this.propias.sort(this.compararCartas); 
        if (maximoValorTablero[0].Valor < maximoValorJugador[0].Valor) {
            return 1;
        }
        if (maximoValorTablero[0].Valor > maximoValorJugador[0].Valor) {
            return -1;
        }
        return 0;
    }

   
    compararCartas(a, b) {
    if (a.Valor < b.Valor) {
        return 1;
    }
    if (a.Valor > b.Valor) {
        return -1;
    }
    return 0;
}
    
    aJugar() {
        this.nuevaBaraja();
        this.mezclarBaraja();
        this.cartasPropias();
        this.cartasTablero();
        this.cartaMasAlta();
    }
}

    




