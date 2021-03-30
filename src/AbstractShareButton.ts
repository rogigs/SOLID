import EventHandler from "./EventHandler"

export default abstract class AbstractShareButton {

    eventHandler: EventHandler;
    className: string;

    constructor(eventHandler: EventHandler, className: string) {
        this.className = className;
        this.eventHandler = eventHandler;
    }

    abstract createAction();

    bind() {
        let action = this.createAction();
        this.eventHandler.addEventListenerToClass(this.className, "click", action )
    }
}