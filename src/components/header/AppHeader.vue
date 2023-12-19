<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary mx-0 ">
        <div class="container">
            <a class="navbar-brand" href="#">
                <div class="my_logo d-flex align-items-center ">
                    <i class="bi bi-geo-alt-fill text-primary fs-3 "></i>
                    <span class="fs-3 fw-bold ">GuiaAgudos</span>
                </div>
            </a>
            <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                    <!-- Logged -->
                    <!-- <li class="nav-item logged_small">
                        <i class="bi bi-person-fill me-1 "></i>
                        <span>Douglas</span>
                    </li>
                    <hr>
                    <li class="nav-item logged_small">
                        <a class="nav-link" href="#">Painel</a>
                    </li>
                    <li class="nav-item logged_small">
                        <a class="nav-link" href="#">Perfil</a>
                    </li>
                    <li class="nav-item logged_small">
                        <a class="nav-link" href="#">Sair</a>
                    </li> -->
                    <!-- Logged -->
                    <hr>

                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Anúncios</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Eventos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Vagas de emprego</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Blog</a>
                    </li>

                    <hr>
                    <li class="nav-item logged_small">
                        <a class="nav-link" href="#">Anuncie Aqui</a>
                    </li>
                    <hr>

                    <!-- not logged in -->
                    <li class="nav-item logged_small">
                        <a class="nav-link" href="#">Entrar</a>
                    </li>
                    <!-- not logged in -->

                </ul>
                <!-- <div class="logged_large">
                    <a href="#" class="btn btn-light btn-sm me-2 ps-0">Anuncie aqui</a>
                    <div class="btn-group">
                        <button type="button" class="btn btn-sm btn-primary dropdown-toggle" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Douglas
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Painel</a></li>
                            <li><a class="dropdown-item" href="#">Perfil</a></li>
                            <li><a class="dropdown-item" href="#">Sair</a></li>
                        </ul>
                    </div>
                </div> -->
                <div class="flex-column logged_large">
                    <button class="btn btn-light btn-sm me-2">Anuncie aqui</button>
                    <button class="btn btn-primary btn-sm fw-bold">Entrar</button>
                </div>
            </div>
        </div>
    </nav>
    <div class="container-fluid p-0">
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
            <div class="carousel-inner carousel_field position-absolute">
                <div class="carousel-item active">
                    <img src="../../assets//img-carousel/1.jpg" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="../../assets//img-carousel/2.jpg" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="../../assets//img-carousel/3.jpg" class="d-block w-100" alt="...">
                </div>
                <div class="shadow_img">
                    
                </div>
            </div>
        </div>
    </div>
</template>
  
<script src="./header.js"></script>
<style scoped src="./header.css"></style>
  