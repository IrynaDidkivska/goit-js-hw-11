import axios from "axios";
import Notiflix from 'notiflix';


const BASE_URL = 'https://pixabay.com/api/';
const options = {
        key: '38169023-4cd5979d1be751dcc09962885',
        q: '',
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: 1,
        per_page: 40
};


export function getImgApi(searchQuery, currentPage) { 
    const params = new URLSearchParams(options);
    params.set('q', searchQuery)
    params.set('page',currentPage)
    return axios
        .get(`${BASE_URL}?${params}`)
        .then(res => {
            return res.data;
        })
        .catch(err =>  Notiflix.Notify.failure('Error!'))
}


