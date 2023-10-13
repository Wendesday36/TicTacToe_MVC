class Info {
  constructor(szuloelem) {
    szuloelem.append(`<p id="lepes"></p>`);
    szuloelem.append(`<p id ="karakter"></p>`);
    szuloelem.append(`<p id = "vege"></p>`);
    this.lepes = $("#lepes");
    this.karakter = $("#karakter");
    this.vege = $("#vege");
  }
  setLepes(lepes) {
    this.lepes.html(lepes).append(" .lépés");
  }
  setKarakter(karakter) {
    this.karakter.html(karakter);
  }
  setVege(vege) {
    this.vege.html(vege).append("Vége a játéknak");
  }
  SetNyert(karakter) {
    this.karakter.html(karakter).append("");
  }
}
export default Info;
