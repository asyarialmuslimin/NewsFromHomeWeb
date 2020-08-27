class SearchBar extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    set clickSearch(event) {
        this._searchEvent = event;
        this.render();
    }

    get value() {
        return this.shadowDOM.querySelector('input').value;
    }

    render() {
        this.shadowDOM.innerHTML = `<style>

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:host{
    display: block;
    width: 100%;
}

.searchbox{
    box-sizing: border-box;
    margin: 10px auto;
    padding: 10px 0;
    width: 50%;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.searchbox-container{
    display: flex;
    width: 80%;
    margin: 10px 0;
}

input{
    width: 100%;
    padding: 10px 20px;
    font-size: 15px;
    border-radius: 20px;
    border:none;
    background: rgba(255, 255, 255, 0.295);
    color: white;
}

::placeholder{
    color: rgba(255, 255, 255, 0.486);
}

#btncari{
    position: static;
}

button{
    margin-left: 10px;
    padding: 10px 20px;
    border-radius: 20px;
    border: solid 2px white;
    color: white;
    background: #1565C0;
    font-size: 15px;
    cursor: pointer;
}

button:hover{
    border: solid 2px #1565C0;
    color: #1565C0;
    background: white;
}

h4{
    font-weight:300;
}

@media screen and (max-width: 1000px) {
    .searchbox{
        width: 80%;
    }

    .searchbox-container{
        width: 100%;
    }

    .category-container{
        flex-direction: column;
    }

    .btn-category{
        margin: 5px;
        width: 80%;
    }   
    
}

</style>

<div class="searchbox">
    <h2>Cari Berita</h2>
    <div class="searchbox-container">
        <input type="text" name="searchbox" id="searchbox" placeholder="Cari Berita...">
        <button id="btncari">Cari</button>
    </div>
</div>`;

    this.shadowDOM.querySelector('#btncari').addEventListener("click", this._searchEvent);
    }
}

customElements.define('search-bar', SearchBar);