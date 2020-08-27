import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

class HeadlineCard extends HTMLElement{
    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode:"open"});
    }

    set article(articles){
        this._article = articles;
        this.render();
    }

    render(){
         this.shadowDOM.innerHTML = `<style>
    * {
        margin: 0;
        padding: 0;
    }

    img {
        cursor: pointer;
    }

    :host {
        display: inline-block;
    }

    .headlinecard-container {
        display: block;
        color: black;
        margin: 10px;
        padding: 10px;
        width: 200px;
        border-radius: 10px;
        background: rgba(255, 255, 255, 0.466);
    }

    .judul-headline {
        font-weight: 700;
        font-size: 1vw;
        overflow: hidden;
        white-space: initial;
        text-align: justify;
        height: 100px;
    }

    a{
        text-decoration: none;
        color: black;
    }

    .author-headline {
        width: 100%;
        display: flex;
        font-size: 8px;
    }

    .author-website-headline {
        flex-grow: 1;
    }

    .kategori{
        background: #d50000;
        padding:5px;
        color: white;
        text-align: center;
        border:none;
    }

    @media screen and (max-width:1000px){
        .judul-headline{
            font-size: 1.4vw;
            height: 70px;
        }
    }

    @media screen and (max-width:512px){
        .judul-headline{
            font-size: 3vw;
            height: 70px;
        }
    }

</style>

<div class="headlinecard-container">
    <div class="kategori">Headline</div>
    <img src="${this._article.urlToImage}" width="200px" height="150px" class="lazyload" onclick="parent.open('${this._article.url}')"  referrerpolicy="no-referrer">
    <div class="judul-headline">
        <a href="${this._article.url}" target="_blank">
            ${this._article.title}</a>
    </div>
    <div class="author-headline">
        <div class="author-website-headline">${this._article.source.name != null ? this._article.source.name : ' '}
        </div>
        <div class="author-name-headline">${this._article.publishedAt.substring(0,10)}</div>
    </div>
</div>

</div>`;
    }
}

customElements.define('headline-card',HeadlineCard);