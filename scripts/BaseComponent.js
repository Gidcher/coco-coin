class BaseComponent {
  constructor() {
    if (this.constructor === BaseComponent) {
      throw new Error('Cannot create an instance of an abstract class BaseComponent')
    }
  }

  getProxyState(initialState) {
    return new Proxy(initialState, {
      get: (target, prop) => {
        return target[prop]
      },
      set: (target, prop, newValue) => {
        const oldValue = target[prop] 
        
        target[prop] = newValue

        if (newValue !== oldValue) {
          this.updateUI()
        }

        return true
      },
    })
  }

  /**
    UI redraw in response to a status update
   */
  updateUI() {
    throw new Error('You need to implement the method updateUI!')
  }
}

export default BaseComponent