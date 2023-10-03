class Model {
  #lista=[]
  #allapot;
  #lepesszam
 
  constructor() {
    this.#allapot = "X";
    this.#lepesszam = 0
    this.#lista=[".",".",".",".",".",".",".",".","."]
    //kattintasok szama >9 vege a jateknak
    //gyozelem figyeles

  }

  setAllapot(index) {
    if (this.#allapot === "X") {
      this.#allapot = "O";

    } else {
      this.#allapot = "X";
    }
    this.#lista[index]= this.#allapot
    console.log(this.#lista)
    this.#lepesszam++;
  }
  getVegeVanE(){
    let vEll = this.#vizszintesGyozelem()
    if (vEll.indexOf("OOO")>-1) {
      return "O nyert"
    }else if (vEll.indexOf("XXX")>-1) {
      return "X nyert"
    }else
    if (this.#lepesszam == 9) {
      return "Döntetlen!"
    }
      return "tovább"
    }
    
 
  getErtek() {
    return this.#allapot;
  }
  #vizszintesGyozelem(){
    let vEll= ""
    for (let i = 0; i < 9; i++) {
      vEll += this.#lista[i]
        if (i%3 === 2) {
          vEll+="@"
        }
      
      vEll+="@"
      console.log(vEll.indexOf("XXX"),vEll.indexOf("OOO"))
      return vEll
  }
  
}
}
export default Model;
