<template>
    <section>
        <AppHeader/>
        <BannerCarousel/>
        <ListingCategories/>
        <AppFooter/>
    </section>
</template>

<script>
import AppHeader from '../components/AppHeader/AppHeader.vue';
import BannerCarousel from '../components/BannerCarousel/BannerCarousel.vue';
import ListingCategories from '../components/ListingCategories/ListingCategories.vue';
import AppFooter from "..//components/AppFooter/AppFooter.vue";

export default {
    components: {
        AppHeader,
        BannerCarousel,
        ListingCategories,
        AppFooter
    },

    data() {
        return {
        };
    },
    
    methods: {
    },
    
    mounted() {
        window.scrollTo(0, 0);
    }
};
</script>
<style scoped></style>