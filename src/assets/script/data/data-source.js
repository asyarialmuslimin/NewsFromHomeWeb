class DataSource{

    static loadHeadlineArticle(){
        return fetch(`https://newsapi.org/v2/top-headlines?country=id&apiKey=<YOUR NEWSAPI APIKEY>&lang=id&pageSize=4`)
        .then(response => {
            return response.json();
        })
        .then(responseJson =>{
            if(responseJson){
                return Promise.resolve(responseJson.articles);
            }else{
                return Promise.reject(`Error`);
            }
        })
    }

    static loadBeritaKategori(kategori, max=20){
        return fetch(`http://newsapi.org/v2/top-headlines?country=id&category=${kategori}&apiKey=e0a8cc9912054a778ef0abb4f07d89d1&pageSize=${max}`)
        .then(response => {
            return response.json();
        })
        .then(responseJson =>{
            if(responseJson){
                return Promise.resolve(responseJson.articles);
            }else{
                return Promise.reject(`${kategori} Not Found`);
            }
        })
    }

    static searchBerita(keyword){
        return fetch(`http://newsapi.org/v2/top-headlines?country=id&q=${keyword}&apiKey=<YOUR NEWSAPI APIKEY>`)
        .then(response => {
            return response.json();
        })
        .then(responseJson =>{
            if(responseJson){
                return Promise.resolve(responseJson.articles);
            }else{
                return Promise.reject(`${keyword} Not Found`);
            }
        })
    }

    static loadStatusCovid(){
        return fetch(`https://api.kawalcorona.com/indonesia/`)
        .then(response => {
            return response.json();
        })
        .then(responseJson =>{
            if(responseJson[0]){
                return Promise.resolve(responseJson[0]);
            }else{
                return Promise.reject(`Error`);
            }
        })
    }
}

export default DataSource;
