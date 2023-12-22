import axios from "axios";
const api_url = process.env.VUE_APP_API_URL + '/anuncios/categorias/';

export default {
    components: {

    },
    props: {
        type: ''
    },

    data() {
        return {
            endSearch: false,
            listCategory: [],
            searchItensCategory: [],
            notResults: false,
            searchItem: '',
        };
    },

    beforeMount() {
        this.getCategories();
    },

    mounted() {

    },

    methods: {
        getCategories() {

            const limit = this.type ? null : 7;

            axios.get(api_url, {
                params: {
                    limit: limit
                }
            })
                .then(response => {
                    this.endSearch = true;
                    if (response.data.length) {
                        this.listCategory = response.data;
                        this.searchItensCategory = response.data;
                        return;
                    }

                    this.notResults = true;
                })
                .catch(error => {
                    this.endSearch = true;
                    this.notResults = true;
                    console.log('Erro ao obter as categories de anúncios', error);
                })
        },

        filterCategories() {
            this.searchItensCategory = this.listCategory.filter(object => 
                object.cat_name.toLowerCase().includes(this.searchItem.toLowerCase())
            );
        },
    },


};