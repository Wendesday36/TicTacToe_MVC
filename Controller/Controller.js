import Model from "../Model/Model.js"
import ElemView from "../View/ElemView.js"
class Controller{
   constructor(){
    const MODEL = new Model()
    const VIEW= new ElemView($("article"))
    $(window).on("elemKivalaszt",()=>{
        MODEL.setAllapot();
        VIEW.setErtek(MODEL.getErtek())
      })
   }

}
export default Controller