<template>
    <div class="container-fluid p-0">
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
            <div class="carousel-inner carousel_field">

                <div v-if="!carouselImages.length">
                    <div class="carousel-item active">
                        <img src="../../assets//img-carousel/Default.png" class="d-block w-100" alt="...">
                    </div>
                </div>

                <div v-else>
                    <div v-for="(image, index) in carouselImages" :key="index" class="carousel-item active">
                        <img :src="image.coverImage" class="d-block w-100" :alt="image.name">
                    </div>
                </div>

                <div class="shadow_img">

                </div>
            </div>
        </div>
    </div>
</template>
  
<script src="./carouselHome.js"></script>
<style scoped src="./carouselHome.css"></style>
  