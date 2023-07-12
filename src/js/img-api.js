import axios from "axios";
import Notiflix from 'notiflix';
// Notiflix.Notify.failure('Sorry, there are no images matching your search query. Please try again.');

const BASE_URL = 'https://pixabay.com/api/';
const options = {
    params: {
        key: '38169023-4cd5979d1be751dcc09962885',
        q: '',
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: 1,
        per_page: 40
    }
};


export async function getImgApi(searchQuery, currentPage) { 
    const params = new URLSearchParams(options.params);
    params.set('q', searchQuery)
    params.set('page',currentPage)
    try {
        const response = await axios.get(`${BASE_URL}?${params}`)
        return response.data;
    }
    catch (error) {
         Notiflix.Notify.failure('Error!');
    }
}

//Через then()
// export function getImgApi() { 
//     const params = new URLSearchParams(options.params);
//     return axios
//         .get(`${BASE_URL}?${params}`)
//         .then(res => {
//             console.log(res);
//             return res.data;
//         })
//         .catch(err => console.log('Error >>>>', err))
// }


