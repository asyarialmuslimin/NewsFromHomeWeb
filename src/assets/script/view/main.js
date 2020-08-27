import "../component/covid19-counter.js";
import "../component/search-bar.js";
import "../component/headline-bar.js";
import "../component/news-list.js";
import "../component/news-search.js";

import DataSource from '../data/data-source.js';

const main = () => {

    const headlineElement = document.querySelector('headline-bar');
    const statusElement = document.querySelector('covid19-counter');
    const newslistElement = document.querySelector('news-list');
    const newssearchElement = document.querySelector('news-search');

    const searchElement = document.querySelector('search-bar');

    const loadHeadline = async () => {
        try {
            const result = await DataSource.loadHeadlineArticle();
            renderHeadline(result);
        } catch (error) {
            errorHeadline(error);
        }
    }

    const loadStatus = async () => {
        try {
            const result = await DataSource.loadStatusCovid();
            renderStatus(result);
        } catch (error) {
            console.log(error);
        }
    }

    const loadBerita = async (kategori, max) => {
        try {
            const result = await DataSource.loadBeritaKategori(kategori, max);
            renderBerita(result, kategori);
        } catch (error) {
            errorBerita(error);
        }
    }

    const cariBerita = async () => {
        try{
            const result = await DataSource.searchBerita(searchElement.value);
            renderSearch(result);
        }catch(error){
            errorSearch(error);
        }
    }

    window.onload = () => {
        loadHeadline();
        loadStatus();
        loadBerita('sport',5);
        loadBerita('health',5);
        loadBerita('business',5);
        loadBerita('technology',5);
    }

    searchElement.shadowRoot.querySelector('#btncari').addEventListener("click",() => {
        cariBerita(searchElement.value);
    });

    const renderHeadline = results => headlineElement.articles = results;
    const errorHeadline = error => headlineElement.error = error;

    const renderStatus = result => statusElement.datacovid = result;

    const renderSearch = result => newssearchElement.data = result;
    const errorSearch = error => newssearchElement.error = error;

    const renderBerita = (result, kategori) => {
        switch (kategori) {
            case 'sport':
                newslistElement.sport = result;
                break;
            case 'technology':
                newslistElement.tech = result;
                break;
            case 'health':
                newslistElement.health = result;
                break;
            case 'business':
                newslistElement.business = result;
                break;
            default:
                break;
        }
    }

    const errorBerita = error => newslistElement.error = error;

    searchElement.clickSearch = cariBerita;
}

export default main;