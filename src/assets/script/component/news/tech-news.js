import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

class TechNews extends HTMLElement{
    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode:"open"});
    }

    set data(article){
        this._article = article;
        this.render();
    }

    render(){
        this.shadowDOM.innerHTML = `
        <style>
        *{
            padding:0;
            margin:0;
            box-sizing:border-box;
        }

        :host{
            display: flex;
            border-bottom: solid 1px rgb(131, 131, 131);
            margin: 10px;
        }

        .judul{
            flex-grow: 1;
            height: 50px;
            overflow: hidden;
            font-weight: 700;
            text-align: justify;
            font-size:10px;
            margin:5px 0;
        }

        img{
            margin:10px;
        }

        a{
            text-decoration: none;
            color: black;
        }

        </style>

        <img src="${this._article.urlToImage}" class="lazyload" width="50px" height="50px" onclick="parent.open('${this._article.url}')"  referrerpolicy="no-referrer">
        <div class="judul")"><a href="${this._article.url}" target="_blank">${this._article.title.substring(0,85)}</a></div>
        `;
    }


}

customElements.define('tech-news',TechNews);