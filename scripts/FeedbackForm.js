import BaseComponent from "./BaseComponent.js";

const rootSelector = '[data-js-feedback-form]';

class FeedbackForm extends BaseComponent {
  constructor(rootElement) {
    super();
    this.rootElement = rootElement;

    this.firstName = this.rootElement.querySelector('[data-js-feedback-first-name]');
    this.lastName = this.rootElement.querySelector('[data-js-feedback-last-name]');
    this.email = this.rootElement.querySelector('[data-js-feedback-email]');
    this.phone = this.rootElement.querySelector('[data-js-feedback-phone]');
    this.message = this.rootElement.querySelector('[data-js-feedback-message]');

    this.bindEvents();
  }

  bindEvents() {
    this.rootElement.addEventListener('submit', this.onSubmit);
  }

  onSubmit = (e) => {
    e.preventDefault();
  
    alert(
      "Reminder: You may add attachments once your email draft opens."
    );
  
    const subject = encodeURIComponent('A Message for the CoCo CTO');
    const body = encodeURIComponent(
      `${this.message.value.trim()}\n` +
      `------\n` +
      `From: ${this.firstName.value} ${this.lastName.value}\n` +
      `Email: ${this.email.value}\n` +
      `Phone: ${this.phone.value}\n`
    );
  
    const mailtoLink = `mailto:test@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
  }  
}


class FeedbackFormCollection {
  constructor() {
    this.init();
  }

  init() {
    document.querySelectorAll(rootSelector).forEach(element => new FeedbackForm(element));
  }
}

export default FeedbackFormCollection;
