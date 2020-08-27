import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

class NewsItem extends HTMLElement{
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
                display: inline-block;  
                width:260px;
                font-size: 18px;
                background: rgba(255, 255, 255, 0.137);
                color: white;
                margin: 5px;
            }

            .judul{
                width: 100%;
                padding: 10px;
                height: 100px;
                overflow: hidden;
                text-align: justify;
            }

            a{
                color:white;
                text-decoration:none;
            }
    
            .keterangan{
                font-size: 10px;
                padding:10px;
                display:flex;
                color:white;
            }
    
            .sumber{
                flex-grow:1;
            }

            img{
                cursor:pointer;
            }

        @media screen and (max-width:1000px) {
            :host{
                max-width: 230px;
            }
        }

        @media screen and (max-width:768px){
            :host{
                max-width: 23%;
            }
            img{
                height:90px;
            }
            .judul{
                font-size:13px;
                height:80px;
            }
        }

        @media screen and (max-width:512px) {
            :host{
                max-width: 100%;
            }
            img{
                height:110px;
            }
        }

            </style>

                <img src="${this._article.urlToImage}" class="lazyload" width="100%" height="150px" referrerpolicy="no-referer" onclick="parent.open('${this._article.url}')">
                <div class="judul">
                <a href="${this._article.url}" target="_blank">
                    ${this._article.title.substring(0,100)}
                </a>
                    </div>
                <div class="keterangan">
                    <div class="sumber">${this._article.source.name}</div>
                    <div class="tanggal">${this._article.publishedAt.substring(0,10)}</div>
                </div>
        `;
    }
}

customElements.define('news-item',NewsItem);