import axios from "axios";

export default {
  data() {
    return {
      carouselImages: []
    };
  },
  methods: {
  },
  beforeMount() {

    const api_url = process.env.VUE_APP_API_URL + '/anuncios/';

    axios.get(api_url)
      .then(response => {
        this.carouselImages = response.data;
      })
      .catch(error => {
        console.log('Erro ao obter as imagens do carousel', error);
      })
  },

  mounted(){
  
  }

};