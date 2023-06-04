import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const KEY = '37026546-2b1865daf098081b40f3ebfca';
const PER_PAGE = 40;

async function fetchQuery(query, page) {
    const params = new URLSearchParams({
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
      per_page: PER_PAGE,
      page,
    });
    return await axios.get(`${BASE_URL}?key=${KEY}&q=${query}&${params}`)
  }
  
  export {fetchQuery, PER_PAGE}