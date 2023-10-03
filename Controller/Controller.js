import Model from "../Model/Model.js";
import ElemView from "../View/ElemView.js";
class Controller {
  constructor() {
    this.MODEL = new Model();

    for (let index = 0; index < 9; index++) {
      this.VIEW = new ElemView($(".jatekter"), index);
    }
    $(window).on("elemKivalaszt", (event) => {
      //console.log(event.detail);
      this.MODEL.setAllapot(event.detail.getIndex());
      event.detail.setErtek(this.MODEL.getErtek());

      //vege e a jateknak
      if (this.MODEL.getVegeVanE() !== "tovább") {
        console.log(this.MODEL.getVegeVanE());
      }
    });
  }
}
export default Controller;
