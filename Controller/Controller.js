
import Info from "../Model/Info.js";
import Model from "../Model/Model.js";
import ElemView from "../View/ElemView.js";
class Controller {
  constructor() {
    let szuloInfo = $(".info");
    const info = new Info(szuloInfo);
    let lepes = 0;
    let szuloelem = $(".jatekter");
    this.MODEL = new Model();
    for (let index = 0; index < 9; index++) {
      new ElemView($(szuloelem), index);
    }

    $(window).on("elemKivalaszt", (event) => {
   /*   if (lepes % 2 === 0) {
        this.MODEL.setAllapot(event.detail.getIndex(), "X");
        info.setJatekos("Az O jön");
      } else {
        this.MODEL.setAllapot(event.detail.getIndex(), "O");
        info.setJatekos("Az X jön");
      }
      lepes++;
      info.setLepes(lepes);
      if (lepes > 8) {
        info.setVege("Vége a játéknak");
      }

      this.MODEL.setAllapot(event.detail.getIndex());
      event.detail.setErtek(this.MODEL.getErtek());
      if (this.MODEL.getVegeVanE() != "tovább") {
        console.log(this.MODEL.getVegeVanE());
      }*/

      const jatekos = this.MODEL.getErtek(); // Aktuális játékállapot lekérése
      if (jatekos === "X") {
        this.MODEL.setAllapot(event.detail.getIndex(), "O"); // Ha "X" következik, akkor "O" jön
        info.setKarakter("Az X jön");
      } else {
        this.MODEL.setAllapot(event.detail.getIndex(), "X"); // Ha "O" következik, akkor "X" jön
        info.setKarakter("Az O jön");
      }
      lepes++;
      info.setLepes(lepes);
      if (lepes > 8) {
        info.setVege();
      }

      event.detail.setErtek(this.MODEL.getErtek());
      if (this.MODEL.getVegeVanE() != "tovább") {
        console.log(this.MODEL.getVegeVanE());}
        info.SetNyert(this.MODEL.getVegeVanE())
    });

  }
}
export default Controller;
