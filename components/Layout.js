export default class Layout extends HTMLElement {
    css = `
    `

    constructor(){
        super()

        this.attachShadow({mode: "open"})
        this.render()
    }

    template = () => {
        return `
        <header-component>
            <slot name="content" slot="layout"></slot>
        </header-component>
        <footer-component></footer-component>
        `
    }

    render = () => {
        this.shadowRoot.innerHTML = `
            ${this.css.trim()}
            ${this.template().trim()}
        ` 
    }
}