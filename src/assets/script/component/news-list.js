import "./news/sport-news.js";
import "./news/health-news.js";
import "./news/business-news.js";
import "./news/tech-news.js";

class NewsList extends HTMLElement{
    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode:"open"});
    }

    set error(error){
        this.renderError();
    }

    set sport(data){
        this._datasport = data;
        this.checkdata();
    }

    set health(data){
        this._datahealth = data;
        this.checkdata();
    }

    set business(data){
        this._databusiness = data;
        this.checkdata();
    }

    set tech(data){
        this._datatech = data;
        this.checkdata();
    }

    checkdata(){
        if(this._datasport != undefined
            && this._datahealth != undefined
            && this._databusiness != undefined
            && this._datatech != undefined){
                this.render();            
        }
    }

    render(){
        this.shadowDOM.innerHTML = `<style>
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    :host {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .news-container {
        padding: 10px;
        background: rgba(255, 255, 255, 0.466);;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        margin: 5px;
        width: 20%;
        border-radius: 10px;
    }

    .kategori{
        color:black;
        text-decoration: underline;
    }

    @media screen and (max-width: 1000px) {
        :host {
            flex-direction: column;
        }

        .news-container {
            width: 80%;
        }
    }
</style>

<div class="news-container">
    <div class="kategori">
        Sport
    </div>
    <div class="sport-container">

    </div>
</div>

<div class="news-container">
    <div class="kategori">
        Health
    </div>
    <div class="health-container">

    </div>
</div>

<div class="news-container">
    <div class="kategori">
        Business
    </div>
    <div class="business-container">

    </div>
</div>

<div class="news-container">
    <div class="kategori">
        Technology
    </div>
    <div class="tech-container">

    </div>
</div>`;

        this._datasport.forEach(data => {
            const sport = document.createElement('sport-news');
            sport.data = data;
            this.shadowDOM.querySelector(".sport-container").appendChild(sport);
        });
        this._datahealth.forEach(data => {
            const health = document.createElement('health-news');
            health.data = data;
            this.shadowDOM.querySelector(".health-container").appendChild(health);
        });
        this._databusiness.forEach(data => {
            const bisnis = document.createElement('business-news');
            bisnis.data = data;
            this.shadowDOM.querySelector(".business-container").appendChild(bisnis);
        });
        this._datatech.forEach(data => {
            const tech = document.createElement('tech-news');
            tech.data = data;
            this.shadowDOM.querySelector(".tech-container").appendChild(tech);
        });
    }

    renderError(){
        this.shadowDOM.innerHTML = `
        <style>
        * {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
        }
    
        :host {
            display: flex;
            align-items: center;
            justify-content: center;
        }
        </style>
        <h1>Error data tidak bisa di load</h1>
        `;
    }
}

customElements.define('news-list',NewsList);