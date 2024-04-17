const axios = require('axios');

const { BASE_URL, PATH } = require('./constant');
const { STORIES_LIST } = PATH;

const options = {
  method: 'GET',
  url: `${BASE_URL}/${STORIES_LIST}`,
  params: {
    template: 'CURRENCY',
    id: 'usdjpy'
  },
  headers: {
    'X-RapidAPI-Key': '1eca8ebd4bmsh23e78f9bf42ff4ap1d25b3jsnf76c31cb5352',
    'X-RapidAPI-Host': 'bloomberg-market-and-financial-news.p.rapidapi.com'
  }
};

module.exports = async () => {
  try {
    const response = await axios.request(options);
    return(response.data);
  } catch (error) {
    console.error(error);
  }
}
