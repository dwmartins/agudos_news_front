import axios from "axios";
const api_url = process.env.VUE_APP_API_URL + '/anuncios/categorias/';

export default {
    components: {

    },

    data() {
        return {
            listCategory: [],
        };
    },

    beforeMount() {
        this.getCategories();
    },

    methods: {
        getCategories() {
            axios.get(api_url, {
                params: {
                    limit: 7
                }
            })
                .then(response => {
                    this.listCategory = response.data;
                })
                .catch(error => {
                    console.log('Erro ao obter as categories de anúncios', error);
                })
        }
    },


};