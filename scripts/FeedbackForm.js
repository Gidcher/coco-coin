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
      "Reminder: You can add the relevant files in the draft email after it is opened."
    );
  
    const subject = encodeURIComponent('A Message for the CoCo CTO');
  
    const lines = [
      this.message.value.trim(),
      '------',
      `From: ${this.firstName.value} ${this.lastName.value}`,
      `Email: ${this.email.value}`
    ];
  
    const phoneVal = this.phone.value.trim();
    if (phoneVal) {
      lines.push(`Phone: ${phoneVal}`);
    }
  
    const body = encodeURIComponent(lines.join('\n'));
  
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
