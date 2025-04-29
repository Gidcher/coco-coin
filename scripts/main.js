import Header from "./Header.js";
import TokenPriceCollection from "./TokenPrice.js";
import FeedbackFormCollection from "./FeedbackForm.js";

new Header()
new FeedbackFormCollection()
document.addEventListener("DOMContentLoaded", () => {
  new TokenPriceCollection();
});