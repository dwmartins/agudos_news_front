<template>
    <section class="my-5">

        <div v-if="!type" class="container">
            <h2 class="custom_title fw-bolder text-center my-5 ">Categorias</h2>
            <div class="row gap-2 gap-md-5 justify-content-center p-3">

                <router-link to="/" v-for="(category, index) in listCategory" :key="index"
                    class="link_outline_none text-dark col d-flex flex-column justify-content-center align-content-center p-4 border border-1 rounded-1 text-center category_item">
                    <span class="material-symbols-outlined fs-1 mb-1">{{ category.icon }}</span>
                    <p>{{ category.cat_name }}</p>
                </router-link>

                <router-link to="/categorias"
                    class="link_outline_none text-dark col d-flex flex-column justify-content-center align-content-center p-4 border border-1 rounded-1 text-center category_item">
                    <span class="material-symbols-outlined fs-1 mb-1">more_horiz</span>
                    <p>Mais</p>
                </router-link>
            </div>
        </div>
        <div v-if="type === 'all'" class="container">
            <div v-if="!endSearch" class="container d-flex align-content-center gap-2 my-5 searchingCategory">
                <div class="spinner-border p-2" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
                <h2 class="custom_title fw-bolder m-0">Buscando categorias, aguarde...</h2>
            </div>

            <div v-if="notResults" class="text-center mb-5 field_notResults">
                <img src="../../assets/img/notFound.png" class="img-fluid img_notFound mb-4"
                    alt="Nenhum resultado encontrado">
                <h1 class="custom_title fw-bolder text-center mb-3">Ops! Nenhuma categoria foi encontrada.</h1>
            </div>


            <div v-if="endSearch && !notResults" class="row justify-content-center gap-2 gap-md-5 p-3 show-animation">
                <h2 class="custom_title fw-bolder text-center mb-2">Categorias</h2>

                <div class="container mb-3 mb-sm-0 p-2 ">
                    <div class="row gap-sm-1">
                        <div class="col-12 col-sm-8 col-md-5">
                            <div class="input-group">
                                <span class="material-symbols-outlined input-group-text">
                                    search
                                </span>
                                <input v-model="searchItem" @input="filterCategories" type="text"
                                    class="form-control custom_search" placeholder="Buscar categoria..."
                                    aria-label="Username" aria-describedby="basic-addon1">
                            </div>
                        </div>
                    </div>
                </div>

                <hr>

                <div v-for="(category, index) in searchItensCategory" :key="index"
                    class="d-flex align-items-center justify-content-center  gap-2 col category_item_all">
                    <span class="material-symbols-outlined fs-3 mb-1">{{ category.icon }}</span>
                    <router-link to="/"
                        class="link-secondary link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover text-dark ">
                        <p class="m-0 text-nowrap">
                            {{ category.cat_name }}
                        </p>
                    </router-link>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped src="./ListingCategories.css"></style>
<script src="./ListingCategories.js"></script>