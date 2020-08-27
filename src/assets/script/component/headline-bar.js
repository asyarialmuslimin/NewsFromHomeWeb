import "./headline-card.js";

class HeadlineBar extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: "open" });
    }

    set articles(articles) {
        this._articles = articles;
        this.render();
    }

    set error(error){
        this._error = error;
        this.renderError();
    }

    render() {
        this.shadowDOM.innerHTML = `<style>

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:host{
    display:flex;
    justify-content: center;
    align-items: center;
    background: #00b0ff;
}

.slider-container{
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
    -ms-overflow-style: none;
    padding: 10px;
}

.slider-container::-webkit-scrollbar {
  display: none;
}


</style>

<div class="slider-container"></div>`;

        this._articles.forEach(article => {
            const headlineCardElement = document.createElement("headline-card");
            headlineCardElement.article = article;
            this.shadowDOM.querySelector(".slider-container").appendChild(headlineCardElement);
        });

    }

    renderError(){
        this.shadowDOM.innerHTML = `
        <style>
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        :host{
            display:flex;
            justify-content: center;
            align-items: center;
            background: #00b0ff;
        }
        
        h1{
            padding:20px;
        }
        </style>
        <h1>Error data tidak bisa di load</h1>
        `;
    }
}

customElements.define('headline-bar', HeadlineBar);