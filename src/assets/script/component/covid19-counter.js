import corona from '../../images/corona.png';
import mati from '../../images/mati.png';
import sehat from '../../images/sehat.png';

import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

class Covid19Counter extends HTMLElement{
    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode:"open"});
    }

    set datacovid(status){
        this._status = status;
        this.render();
    }

    render(){
        this.shadowDOM.innerHTML = `<style>
    * {
        margin: 0;
        box-sizing: border-box;
    }

    :host {
        display: flex;
        width: 100%;
    }

    .covid19-wrapper {
        width: 100%;
        padding: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .statusicon {
        height: 75px;
        margin: 0;
    }

    .icontitle {
        color: white;
        font-size: 25px;
        font-weight: 700;
        margin-bottom: 15px;
        text-transform: uppercase;
    }

    .count {
        margin-top: 10px;
        color: white;
        font-size: 25px;
        font-weight: 700;
    }

    .statuscard {
        margin: 8px;
        width: 15%;
        height: 200px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .titlestatus {
        font-size: 2vw;
        font-weight: 700;
        text-align: center;
    }

    .sembuh {
        background: #009432;
    }

    .kematian {
        background: #EA2027;
    }

    .kasus {
        background: #F79F1F;
    }

    @media screen and (max-width: 912px) {

        .covid19-wrapper {
            flex-wrap: wrap;
        }

        .statuscard {
            flex-grow: 1;
            margin: 8px;
            padding: 20px;
            width: 30%;
            height: 190px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
    }

    @media screen and (max-width: 512px) {
        :host {
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }

        .covid19-wrapper {
            flex-direction: column;
        }

        .statuscard {
            flex-grow: 1;
            margin: 8px;
            padding: 20px;
            width: 80%;
            height: 190px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        .titlestatus {
            font-size: 8vw;
            font-weight: 700;
            text-align: center;
        }

        .statusicon {
            height: 80px;
            margin: 0;
        }
    }
</style>

<div class="covid19-wrapper">
    <div class="statuscard">
        <div class="titlestatus">DATA KASUS COVID19 DI INDONESIA</div>
    </div>
    <div class="statuscard kasus">
        <div class="icontitle">
            Positif
        </div>
        <img class="statusicon corona lazyload" alt="Corona Icon">
        <div class="count">${this._status.positif}</div>
    </div>
    <div class="statuscard kematian">
        <div class="icontitle">
            Kematian
        </div>
        <img class="statusicon mati lazyload" src="./src/assets/images/mati.png" alt="Dead Icon">
        <div class="count">${this._status.meninggal}</div>
    </div>
    <div class="statuscard sembuh">
        <div class="icontitle">
            Sembuh
        </div>
        <img class="statusicon sehat lazyload" src="./src/assets/images/sehat.png" alt="Sehat Icon">
        <div class="count">${this._status.sembuh}</div>
    </div>
</div>`;

this.shadowDOM.querySelector('.corona').src = corona;
this.shadowDOM.querySelector('.mati').src = mati;
this.shadowDOM.querySelector('.sehat').src = sehat;

    }
}

customElements.define('covid19-counter',Covid19Counter);