class lingkaran {
    constructor(r){
        this.r = r;
    }

    luas = () => {
        return 3.14 * (this * this.r)
    }

    keliling = () =>{
        return 3.14 * (this.r * 2)
    }
   
}

// tabung
class tabung extends lingkaran {
    constructor(r,t){
        super(r)
        this.t = t
    }

    volume = () => {
        return(3.14 * (this.r * this.r)) * this.t
    }

    luaspermukaan = () => {
        return (3.14 * (this.r * 2)* this.t) + (2 *(3.14 * (this.r * this.r)))
    }

    luasselimut = () => {
        return(3.14 * (this.r * 2)) * this.t
    }
}
// print
let tabung1 = new tabung (7,5,50);
console.log("gelas : ");
console.log("volume : " + tabung1.volume());
console.log("luas permukaan : " + tabung1.luaspermukaan());
console.log("luas selimut : " + tabung1.luasselimut());
console.log("----");

// bola
class bola extends lingkaran{
    constructor(r){
        super{r}
    }

    volume = () => {
        return 4/3 * 3.14 * this.r * this.r * this.r
    }

    luaspermukaan = () => {
        return 4 * 3.14 * (this.r * this.r)
    }
}
// print
let bola = new bola (15);
console.log("Bola : ");
console.log("volume : " + bola.volume());
console.log("luaspermukaan : " + bola.luaspermukaan());