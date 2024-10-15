import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Layout from "./components/Layout.js";
import Alert from "./components/Alert.js";
document.addEventListener('DOMContentLoaded', function () {
    customElements.define('header-component', Header)
    customElements.define('footer-component', Footer)
    customElements.define('alert-component', Alert)
    customElements.define('layout-component', Layout)
})