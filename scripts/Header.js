class Header {
  selectors = {
    root: '[data-js-header]',
    overlay: '[data-js-header-overlay]',
    burgerButton: '[data-js-header-burger-button]',
    menuLinks: '[data-js-header-links]', 
  }

  stateClasses = {
    isActive: 'is-active',
    isLock: 'is-lock',
  }

  constructor() {
    this.rootElement = document.querySelector(this.selectors.root);
    this.overlayElement = this.rootElement.querySelector(this.selectors.overlay);
    this.burgerButtonElement = this.rootElement.querySelector(this.selectors.burgerButton);
    this.menuLinks = this.rootElement.querySelectorAll(this.selectors.menuLinks);

    this.bindEvents();
  }

  onBurgerButtonClick = () => {
    this.toggleMenu();
  }

  onLinkClick = () => {
    this.closeMenu();
  }

  toggleMenu() {
    this.burgerButtonElement.classList.toggle(this.stateClasses.isActive);
    this.overlayElement.classList.toggle(this.stateClasses.isActive);
    document.documentElement.classList.toggle(this.stateClasses.isLock);
  }

  closeMenu() {
    this.burgerButtonElement.classList.remove(this.stateClasses.isActive);
    this.overlayElement.classList.remove(this.stateClasses.isActive);
    document.documentElement.classList.remove(this.stateClasses.isLock);
  }

  bindEvents() {
    this.burgerButtonElement.addEventListener('click', this.onBurgerButtonClick);

    this.menuLinks.forEach(link => {
      link.addEventListener('click', this.onLinkClick);
    });
  }
}

export default Header;
