import AbstractLinkShareButton from "./AbstractLinkShareButton"
import EventHandler from "./EventHandler";

export default class ShareButtonTwitter extends AbstractLinkShareButton {

    constructor(eventHandler: EventHandler, className: string, url: string) {
       super(eventHandler, className, url);
    }

    createLink(): string{
        return this.url;
    }
}