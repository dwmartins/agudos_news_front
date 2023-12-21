<template>
    <section>
        <AppHeader/>
        <BannerCarousel/>
        <ListingCategories/>
        <AppFooter/>
    </section>
</template>

<script>
import AppHeader from '../../AppComponents/AppHeader/AppHeader.vue';
import BannerCarousel from '../../AppComponents/BannerCarousel/BannerCarousel.vue';
import ListingCategories from '../../AppComponents/ListingCategories/ListingCategories.vue';
import AppFooter from "@/components/AppComponents/AppFooter/AppFooter.vue";

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

    }
};
</script>
<style scoped></style>