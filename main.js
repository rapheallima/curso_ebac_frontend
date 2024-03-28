function Moto(modelo, fabricante, cilindrada, anoMod, anoFab) {
    this.modelo = modelo
    this.fabricante = fabricante
    this.cilindrada = cilindrada
    this.anoMod = anoMod
    this.anoFab = anoFab
}

function Jetski(modelo, fabricante, cilindrada, anoMod, anoFab, velMax, tanque) {
    this.velMax = velMax
    this.tanque = tanque

    Moto.call(this, modelo, fabricante, cilindrada, anoMod, anoFab)
}

function Honda(modelo, fabricante, cilindrada, anoMod, anoFab, velMax, tanque, consumo, reserva) {
    this.consumo = consumo
    this.reserva = reserva

    Jetski.call(this,modelo, fabricante, cilindrada, anoMod, anoFab, velMax, tanque);
  
}

const yamaha = new Moto("Ybr", "Yamaha", 125, 2010, 2009);
const yamahaJet = new Jetski("FxCruiser", "Yamaha", 1052, 2015, 2014, 110, 57);
const carro = new Honda("civic", "honda", 2000, 2012, 2011, 180, 40, "15,9km/l", 15);

console.log(yamaha)
console.log(yamahaJet)
console.log(carro)
