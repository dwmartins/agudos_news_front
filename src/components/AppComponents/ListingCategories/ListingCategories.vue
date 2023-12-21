<template>
    <section class="my-5">
        <h2 class="custom_title fw-bolder text-center my-5 ">Categorias</h2>

        <div class="container">
            <div class="row gap-5  justify-content-center p-2">
                <div v-for="(category, index) in listCategory" :key="index" class="cursor_pointer col d-flex flex-column justify-content-center align-content-center p-4 border border-1 rounded-1 text-center category_item">
                    <span class="material-symbols-outlined fs-1 mb-1">{{ category.icon }}</span>
                    <p>{{ category.cat_name }}</p>
                </div>

                <div class="cursor_pointer col d-flex flex-column justify-content-center align-content-center p-4 border border-1 rounded-1 text-center category_item">
                    <span class="material-symbols-outlined fs-1 mb-1">more_horiz</span>
                    <p>Mais</p>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped src="./ListingCategories.css"></style>
<script src="./ListingCategories.js"></script>