<template>
    <section>
        <AppHeader/>
        <AppFooter/>
    </section>
</template>

<script>
import AppHeader from '../components/AppHeader/AppHeader.vue';
import AppFooter from '../components/AppFooter/AppFooter.vue';

export default {
    components: {
        AppHeader,
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
<style scoped>
</style>