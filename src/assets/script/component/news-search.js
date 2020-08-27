import "./news-item.js";


class NewsSearch extends HTMLElement{
    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode:"open"});
    }

    set error(error){
        this.renderError();
    }

    set data(articles){
        this._articles = articles;
        this.render();
    }

    render(){
        this.shadowDOM.innerHTML = `<style>
        * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        }

        :host{
            display: flex;
            justify-content:center;
            align-items:center;
        }

        .berita-container{
            width: 80%;
            margin: 0 auto;
            font-size: 0; /* remove inline-block extra space */
        }

        news-item{
            margin:5px;
        }

</style>

<div class="berita-container"></div>`;

this._articles.forEach(article => {
    const newsitemElement = document.createElement('news-item');
    newsitemElement.data = article;
    this.shadowDOM.querySelector('.berita-container').appendChild(newsitemElement);
});

    }

    renderError(){
        this.shadowDOM.innerHTML = `<style>
        * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        }

        :host{
            display: flex;
            justify-content:center;
            align-items:center;
        }

        </style>
        <h1>Error data tidak bisa di load</h1>
        `;
    }
}

customElements.define('news-search',NewsSearch);