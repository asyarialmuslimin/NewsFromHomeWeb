import hamburger from '../../images/hamburger.png';

class NavBar extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :host {
        display: flex;
        flex-direction:column;
        background: #3741cf;
        font-size: 20px;
    }
    
    .nav-container{
        display:flex;
        flex-direction:row;
    }

    .logo-container {
        display:flex;
        justify-content:center;
        align-items:center;
        padding-left:10px;
        padding-top:5px;
        padding-bottom:5px;
    }

    h1{
        color:white;
    }

    .linknav-container {
        display: flex;
        flex-grow: 1;
        justify-content: flex-end;
        align-items: center;
    }

    .linknav {
        margin: 5px;
        padding: 5px;
    }

    .mobile-container {
        display: flex;
    }

    .linknav-mobile {
        margin: 5px;
    }

    a {
        color: white;
        text-decoration: none;
    }

    button {
        display: none;
        background: #20299e;
        border: none;
        padding: 10px;
        border-radius: 10px;
    }

    .mobile-container{
        display:flex;
        flex-direction: column;
        padding: 10px;
    }

    .hide {
        display: none;
    }

    @media screen and (max-width: 512px) {
        :host{
            flex-wrap: wrap;
        }

        .linknav-container{
            display: none;
        }

        .fullwidth{
            width: 100%;
        }

        button {
            display: block;
        }
        
        .button-container{
            display: flex;
            justify-content: flex-end;
            align-items: center;
            flex-grow:1;
            margin-right:10px;
        }

        .imghamburger{
            height:15px;
        }
        
    }
</style>

<div class="nav-container">
    <div class="logo-container">
        <h1>NFH</h1>
    </div>
    <div class="linknav-container">
        <div class="linknav">
            <a href="#home">Home</a>
        </div>
        <div class="linknav">
            <a href="#headline">Headline</a>
        </div>
        <div class="linknav">
           <a href="#search">Search</a>
        </div>
        <div class="linknav">
            <a href="#news">News</a>
        </div>
    </div>
    <div class="button-container">
        <button id="btnmenu">
            <img class="imghamburger" />
        </button>
    </div>
</div>
<div class="mobile-container hide">
    <div class="linknav-mobile">
        <a href="#home">Home</a>
    </div>
    <div class="linknav-mobile">
        <a href="#headline">Headline</a>
    </div>
    <div class="linknav-mobile">
        <a href="#search">Search</a>
    </div>
    <div class="linknav-mobile">
        <a href="#news">News</a>
    </div>
</div>`;

        this.shadowDOM.querySelector('.imghamburger').src = hamburger;

        this.shadowDOM.querySelector('button').addEventListener('click', () => {
            this.shadowDOM.querySelector('button').classList.add('hide');
            this.shadowDOM.querySelector('.logo-container').classList.add('fullwidth');
            this.shadowDOM.querySelector('.mobile-container').classList.remove('hide');
        });

        const linknav = this.shadowDOM.querySelectorAll('.linknav-mobile');

        for (let link of linknav) {
            link.addEventListener('click', () => {
                this.shadowDOM.querySelector('.mobile-container').classList.add('hide');
                this.shadowDOM.querySelector('button').classList.remove('hide');
                this.shadowDOM.querySelector('.logo-container').classList.remove('fullwidth');
            })
        }

    }
}

customElements.define('nav-bar', NavBar);