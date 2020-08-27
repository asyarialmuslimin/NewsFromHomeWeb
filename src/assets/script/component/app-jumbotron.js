class AppJumbotron extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML =
            `<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :host{
        height:150px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    h1{
        position:relative;
        font-size:80px;
        font-weight:700;
        bottom:-13px;
        height:90px;
    }

    </style>
    <h1>NFH</h1>
    <h3>News From Home</h3>
    `;
    
    }
}

customElements.define("app-jumbotron", AppJumbotron);