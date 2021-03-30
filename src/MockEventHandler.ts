import EventHandler from "./EventHandler";

export default class DOMEventHandler implements EventHandler{

    addEventListenerToClass(className: string, event: string, fn: any) {
        console.log(className, event, fn);
        
    }
}