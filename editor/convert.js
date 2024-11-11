function updatePreview() {
    document.getElementById('preview').setAttribute('html',document.getElementById('html-in').value ?? " ");
    document.getElementById('preview').setAttribute('css',document.getElementById('css-in').value) ?? " ";
}


class WebComponentPreview extends HTMLElement {
    static observedAttributes = ["html","css"];
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: "open" });
    }
    attributeChangedCallback(name, oldValue, newValues) { render() }
    render() {this.shadowRoot.innerHTML = `<style>${this.getAttribute('css') ?? " "}</style>${this.getAttribute('html') ?? " "}`}
    connectedCallback() { this.render();}
    attributeChangedCallback() { this.render(); }    
}

customElements.define("wc-preview", WebComponentPreview);