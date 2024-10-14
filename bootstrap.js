import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Layout from "./components/Layout.js";
document.addEventListener('DOMContentLoaded', function () {
    customElements.define('header-component', Header)
    customElements.define('footer-component', Footer)
    customElements.define('layout-component', Layout)
})