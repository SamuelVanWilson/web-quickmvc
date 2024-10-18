export default class Footer extends HTMLElement {
    css = `
    	<style>
            footer {
                background-color: rgb(201, 201, 201);
                padding: 18px 10px 8px 10px ;
            }
            footer p {color: rgba(0, 0, 0, 0.699);}
            footer section {
                border-bottom: 1px solid rgb(128, 128, 128);
                margin-bottom: 4px;
                padding-bottom: 2px;
            }
            footer span {font-size: 18px;}
            footer section p {margin-top: 4px;}
	    </style>`

    constructor(){
        super()
        
        this.attachShadow({mode: 'open'})
        this.render()
    }
    template = () => {
        return `
        <footer>
            <section>
                <img src="" alt=""><span>QuickMVC</span>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione adipisci sit ipsa, est ex eveniet aut. Reiciendis dolorum iste veritatis.</p>
            </section>
            <p>Code Licensed MIT, Currently v1.0.0</p>
	    </footer>
        `
    }

    render = () => {
        this.shadowRoot.innerHTML = `
            ${this.css.trim()}
            ${this.template().trim()}
        `
    }
}