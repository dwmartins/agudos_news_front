<template>
    <footer class="bg-primary pt-4 pb-1 p-2">
        <div class="container">
            <div class="row gap-4">
                <div class="col-5 logo_footer">
                    <div class="h-100 w-100 d-flex flex-column justify-content-center text-center">
                        <a class="navbar-brand" href="#">
                            <div class="my_logo d-flex align-items-center justify-content-center">
                                <i class="bi bi-geo-alt-fill text-light fs-3 "></i>
                                <span class="fs-5 fw-bold text-light">GuiaAgudos</span>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="col">
                    <h4 class="text-light fs-5">Navegação</h4>

                    <div class="row">
                        <ul class="navbar-nav col px-3">
                            <li class="nav-item">
                                <router-link to="/" class="nav-link text-light">Home</router-link>
                                <router-link to="/" class="nav-link text-light">Anúncios</router-link>
                                <router-link to="/" class="nav-link text-light">Eventos</router-link>
                            </li>
                        </ul>
                        <ul class="navbar-nav col px-3">
                            <li class="nav-item">
                                <router-link to="/" class="nav-link text-light">Empregos</router-link>
                                <router-link to="/" class="nav-link text-light">Blog</router-link>
                                <router-link to="/" class="nav-link text-light">Contato</router-link>
                            </li>
                        </ul>
                    </div>
                </div>
                <hr class="text-light hr_social_media">
                <div class="col">
                    <h4 class="text-light text-center fs-5">Redes sociais</h4>
                    <div class="d-flex gap-3 justify-content-center ">
                        <a href="#"><i class="bi bi-whatsapp text-light fs-3"></i></a>
                        <a href="#"><i class="bi bi-instagram text-light fs-3"></i></a>
                        <a href="#"><i class="bi bi-facebook text-light fs-3"></i></a>
                    </div>
                </div>
            </div>
            <hr class="text-light">
            <div class="text-center">
                <p class="text-light">Created by: <a href="https://br.linkedin.com/in/douglas-martins-a36a45185"
                        class="text-white-50 link-offset-2 link-underline link-underline-opacity-0">Douglas Wellington
                        Martins</a></p>
            </div>
        </div>
    </footer>
</template>

<script src="./AppFooter.js"></script>
<style scoped src="./AppFooter.css"></style>