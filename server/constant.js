const CONSTANTS = {
    port: 3001,
    API_KEY: 'AIzaSyBoWh1W_O_oL0tkLsFLRJHsA01eeQ_ZBMo',
    
    BASE_URL: 'https://bloomberg-market-and-financial-news.p.rapidapi.com',

    PATH: {
        STORIES_LIST: 'stories/list'
    }
}
const { port, API_KEY, BASE_URL, PATH } = CONSTANTS;
module.exports =  { port, API_KEY, BASE_URL, PATH };
