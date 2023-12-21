<template>
    <section>
        <AppHeader/>
        <BannerCarousel/>
        <ListingCategories/>
    </section>
</template>

<script>
import AppHeader from '../../AppComponents/AppHeader/AppHeader.vue';
import BannerCarousel from '../../AppComponents/BannerCarousel/BannerCarousel.vue';
import ListingCategories from '../../AppComponents/ListingCategories/ListingCategories.vue';

export default {
    components: {
        AppHeader,
        BannerCarousel,
        ListingCategories
    },

    data() {
        return {
        };
    },
    
    methods: {
    },

    mounted() {

    }
};
</script>
<style scoped></style>