import axios from 'axios';

export default function () {
    const host = 'http://localhost:5001/api';

    return {
        getArticles: function () {
            return axios.get(`${host}/articles/`);
        },
        getArticle: function (articleUrl) {
            return axios.get(`${host}/article/${articleUrl}`);
        },
        createAdvice: function (articleUrl, dataObj) {
            return axios.post(`${host}/article/${articleUrl}`, dataObj);
        },
        getAllAdvice: function () {
            return axios.get(`${host}/advice/`);
        },
        approveAdvice: function (id) {
            return axios.put(`${host}/advice/${id}`);
        },
        deleteAdvice: function (id) {
            return axios.delete(`${host}/advice/${id}`)
        }
    }
}