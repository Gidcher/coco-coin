import BaseComponent from "./BaseComponent.js";

const rootSelector = '[data-js-token-price]';

class TokenPrice extends BaseComponent {
  constructor(rootElement) {
    super()
    this.rootElement = rootElement
    this.apiUrl = "https://api.coingecko.com/api/v3/simple/price?ids=coco-coin&vs_currencies=usd"

    this.updateTokenPrice()
    setInterval(() => this.updateTokenPrice(), 30000)
  }

  async updateTokenPrice() {
    try {
      const response = await fetch(this.apiUrl);
      if (!response.ok) throw new Error(`Server responded with ${response.status}`)

      const data = await response.json()
      if (data["coco-coin"] && this.rootElement) {
        this.rootElement.textContent = `${parseFloat(data["coco-coin"].usd).toFixed(8)} $`
      }
    } catch (error) {
      console.error("Error fetching token price:", error);
      if (this.rootElement) this.rootElement.textContent = "Price unavailable"
    }
  }
}

class TokenPriceCollection {
  constructor() {
    this.init()
  }

  init() {
    document.querySelectorAll(rootSelector).forEach(element => new TokenPrice(element))
  }
}

export default TokenPriceCollection;
