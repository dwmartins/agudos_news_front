<template>
    <div class="container-fluid p-0">
        <div id="listing_carousel" class="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
            <div class="carousel-inner carousel_field">

                <div v-if="!carouselImages.length">
                    <div class="carousel-item active">
                        <img src="../../assets/img/img-carousel/Default.png" class="d-block w-100" alt="...">
                    </div>
                </div>

                <div v-else>
                    <div v-for="(image, index) in carouselImages" :key="index" class="carousel-item active">
                        <img :src="image.coverImage" class="d-block w-100" :alt="image.name">
                    </div>
                </div>

                <button class="carousel-control-prev z-3" type="button" data-bs-target="#listing_carousel"
                    data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next z-3" type="button" data-bs-target="#listing_carousel"
                    data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>

                <div class="shadow_img d-flex justify-content-center align-items-center">
                    <div class="mx-2">
                        <h1 class="text-light text-center fw-bolder ">Inicie sua busca aqui</h1>
                        <h3 class="text-light text-center ">O que você está procurando?</h3>

                        <div class="container mt-5">
                            <form class="row g-3">
                                <div class="col-sm-10 ">
                                    <input type="text" class="form-control form-control-lg rounded-1 custom_search">
                                </div>
                                <div class="col-sm-2 ">
                                    <button class="btn btn-lg btn-primary w-100 fw-medium rounded-1 px-1 ">Buscar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script src="./BannerCarousel.js"></script>
<style scoped src="./BannerCarousel.css"></style>
  