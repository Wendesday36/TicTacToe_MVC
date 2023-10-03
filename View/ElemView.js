class ElemView{
    constructor(szuloElem){
        this.szuloElem=szuloElem       
        this.#DivOsszerak()
        this.elem = $(`.elem:last-child`);
        this.pElem = this.elem.children("p");
        this.elem.on("click",()=>{
            this.#sajatesemenyKezelo("elemKivalaszt")
        })
        
    }
    #DivOsszerak(){
        let txt = "";
        txt+= `<div class="elem"><p class = "pElem"></p></div>`
        this.szuloElem.append(txt)
    }
    setErtek(ertek){
        this.pElem.html(ertek);
    }
    #sajatesemenyKezelo(esemenynev){
        //console.log(esemenynev)
        const esemenyem = new CustomEvent(esemenynev)
        window.dispatchEvent(esemenyem)
      }
}
export default ElemView