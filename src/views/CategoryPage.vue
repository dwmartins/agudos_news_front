<template>
    <section>
        <AppHeader/>
        <ListingCategories type="all"/>
        <AppFooter/>
    </section>
</template>

<script>
import AppHeader from '../components/AppHeader/AppHeader.vue';
import ListingCategories from '@/components/ListingCategories/ListingCategories.vue';
import AppFooter from '../components/AppFooter/AppFooter.vue';

export default {
    components: {
        AppHeader,
        ListingCategories,
        AppFooter
    },

    data() {
        return {
            amout: null
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