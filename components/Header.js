export default class Header extends HTMLElement {
    css = `	<style>
		ul {list-style: none;}
		a {
			text-decoration: none;
			color: black;
		}
		header > nav > ul{
			display: flex;
			justify-content: space-between;
			padding: 8px 14px;
		}
		form > input  {
			display: block;
			margin: auto;
		}
		select {
			width: 5rem;
			display: inline-block;
			border: none;
			outline: none;
			border-bottom: 1px solid rgb(189, 189, 189);
			color: rgb(128, 128, 128);
			background-color: transparent;
		}
		select::after {
			border: none;
		}
		select option {
			color: rgb(29, 29, 29);
		}
		select option:first-child {
			display: none;
		}
		form {
			padding: 18px 4px 4px 4px;
			position: sticky;
			top: 0;
			z-index: 10;
			transition: 200ms;
		}
		.noButton {
			border: none;
			outline: none;
			background-color: transparent;
		}
		#searchBar{
			border: none;
			border-bottom: 1px solid rgb(189, 189, 189);
			width: 80%;
			padding: 4px;
			outline: none;
			font-size: 16px;
			background-color: transparent;
		}
		#searchBar::placeholder {color: rgb(172, 172, 172);}
		.headerShadow {
			box-shadow: 0 2px 10px rgba(17, 14, 14, 0.1);
			background-color: rgba(201, 201, 201, 0.205);
			padding: 10px;
		}

		aside {
			display: block;
			position: fixed;
			top: 0;
			border-radius: 50%;
			left: -120%;
			z-index: 100;
			height: 10vh;
			width: 10vw;
			transition: 1s;
			background-color: rgb(201, 201, 201);
		}
		.side-bar {
			left: 0;
			height: 100vh;
			width: 100vw;
			border-radius: 0px;
		}
		#close {
			font-size: 35px;
		}
		.header {
			display: flex;
			justify-content: space-between;
			align-items: center;
			border-bottom: 1px solid rgb(189, 189, 189);
		}
		.header, .table-content {
			width: 90%;
			margin: auto;
			padding: 6px 3px;
		}
		.table-content nav {
			margin-bottom: 4px;
		}
		.table-content nav ul {
			display: flex;
			justify-content: start;
			flex-direction: column;
			margin-top: -0.5rem;
		}
		.table-content nav ul li {
			margin: 6px 0 4px 0;
			margin-left: -1rem;
		}
		.table-content nav ul li a {
			color: rgb(51, 51, 51);
		}
		.targetContent {
			background-color: rgba(49, 49, 49, 0.397);
			border-radius: 4px;
			padding: 4px 10px;
		}

	</style>` // BUAT STYLING CSS NYA
    constructor() {
        super()

        this.attachShadow({ mode:  "open"})
        this.render() // FUNGSI RENDER YANG BERISI FUNGSI `template` DAN PROPERTI `css` DIJALANKAN
    }

    template = () => {
        return `
    <header>
        <nav>
            <ul>
                <li><button type="button" onclick="" id="burgerMenu" class="noButton">&#9776;</button></li>
                <li><img src="" alt=""></li>
                <li>
                    <select id="languange-select" onchange="">
                        <option selected disabled >Languange</option>
                        <option value="en">English</option>
                        <option value="id">Bahasa Indonesia</option>
                        <option value="hi">हिन्दी</option>
                    </select>
                </li>
            </ul>
        </nav>
    </header>
    <form action="" method="get">
        <input type="text" name="searchBar" id="searchBar" placeholder="Search Documentation">
    </form>
    <main>
        <aside>
            <section class="header">
                <h2>Documentation</h2>
                <button id="close" class="noButton">&times;</button>
            </section>

            <section class="table-content">
                <nav aria-label="Get Started">
                    <h3>Get Started</h3>
                    <ul>
                        <li><a href="https://samuelvanwilson.github.io/pages/get-started/introduction.html">Introduction</a></li>
                        <li><a href="https://samuelvanwilson.github.io/pages/get-started/installation.html">Installation </a></li>
                    </ul>
                </nav>
                <nav aria-label="Structure Directory">
                    <h3>Structure Directory</h3>
                    <ul>
                        <li><a href="https://samuelvanwilson.github.io/pages/structure-directory/app.html">App</a></li>
                        <li><a href="https://samuelvanwilson.github.io/pages/structure-directory/config.html">Config</a></li>
                        <li><a href="https://samuelvanwilson.github.io/pages/structure-directory/public.html">Public</a></li>
                    </ul>
                </nav>
                <nav aria-label="MVC Concept">
                    <h3>MVC Concept</h3>
                    <ul>
                        <li><a href="https://samuelvanwilson.github.io/pages/structure-directory/model.html">Model</a></li>
                        <li><a href="https://samuelvanwilson.github.io/pages/structure-directory/view.html">View</a></li>
                        <li><a href="https://samuelvanwilson.github.io/pages/structure-directory/controller.html">Controller</a></li>
                    </ul>
                </nav>
            </section>
        </aside>
        <slot name="layout"></slot>
    </main>` // BUAT NARUH ELEMEN-ELEMEN HTMLNYA
    }
    render = () => {
        this.shadowRoot.innerHTML = `
            ${this.css.trim()}
            ${this.template().trim()}
        `
        this.burgerMenu = this.shadowRoot.getElementById("burgerMenu")
        this.closeSideBar = this.shadowRoot.getElementById("close")
        this.sideBar = this.shadowRoot.querySelector("aside")

        this.burgerMenu.addEventListener("click", this.sideBarOnOff)
        this.closeSideBar.addEventListener("click", this.sideBarOnOff)
        window.addEventListener('scroll', this.boxShadow)
        window.addEventListener('DOMContentLoaded', this.targetNav)
    } // FUNGSI `template()` YANG ISINYA ELEMEN HTML DAN PROPERTI `css` YANG ISINYA CSS DIGABUNG SATUKAN AGAR TERBENTUK COMPONENT YANG UTUH, SEKALIGUS NANTINYA DI PANGGIL DI FUNGSI CONSTRUCTOR, KARENA KETIKA MEMANGGIL CLASS MAKA FUNGSI CONSTRUCTOR PUN SEKALIAN DIJALANKAN 

    boxShadow = () => {
		if (window.scrollY > 100) {
			this.shadowRoot.querySelector("form").className = "headerShadow"
		} else {
			this.shadowRoot.querySelector("form").className = ""
		}
	}
	sideBarOnOff = () => {
		this.sideBar.classList.toggle('side-bar')
	}
	targetNav = () => {
		this.currentLink = window.location.href.split('/').slice(-2)
		if (this.currentLink.includes('pages')) {
			this.currentLink.splice(0, 1)
		}
		console.log(this.currentLink);
		this.targetNavContent = this.shadowRoot.querySelector(`.table-content>nav>ul>li>a[href="/pages/${this.currentLink.join('/')}"]`)
		console.log(this.targetNavContent);
		
		
		this.targetNavContent.classList.add('targetContent')
	}
}