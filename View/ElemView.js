class ElemView {
  #index; //egesz szam
  constructor(szuloElem, index) {
    this.szuloElem = szuloElem;
    this.#index = index;
    this.allapot = true
    this.#DivOsszerak();
    this.elem = $(`.elem:last-child`);
    this.pElem = this.elem.children("p");
    this.elem.on("click", () => {
        if(this.allapot){this.#sajatesemenyKezelo("elemKivalaszt");}
      this.allapot =false
    });
  }
  getIndex() {
    return this.#index;
  }
  #DivOsszerak() {
    let txt = "";
    txt += `<div class="elem " ><p class = "pElem"></p></div>`;
    this.szuloElem.append(txt);
  }
  setErtek(ertek) {
    this.pElem.html(ertek);
  }
  #sajatesemenyKezelo(esemenynev) {
    const esemenyem = new CustomEvent(esemenynev, { detail: this });
    window.dispatchEvent(esemenyem);
  }
}
export default ElemView;
