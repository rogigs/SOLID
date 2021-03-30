import AbstractShareButton from './AbstractShareButton';
import ShareButtonTwitter from './ShareButtonTwitter';
import ShareButtonFacebook from './ShareButtonFacebook';
import ShareButtonLinkedin from './ShareButtonLinkedin';
import ShareButtonPrint from './ShareButtonPrint';
import DOMEventHandler from './DOMEventHandler';
// import MockEventHandler from './MockEventHandler';

const eventHandler = new DOMEventHandler();
// const eventHandler = new MockEventHandler();

const twiter: AbstractShareButton = new ShareButtonTwitter(eventHandler,".btn-twitter", "http://twitter.com/");
twiter.bind();
const facebook: AbstractShareButton = new ShareButtonFacebook(eventHandler, ".btn-facebook", "http://facebook.com/");
facebook.bind();
const linkedin: AbstractShareButton = new ShareButtonLinkedin(eventHandler, ".btn-linkedin", "http://linkedin.com/");
linkedin.bind();
const print: AbstractShareButton = new ShareButtonPrint(eventHandler, ".btn-print");
print.bind();