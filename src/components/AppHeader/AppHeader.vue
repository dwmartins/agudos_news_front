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

                    <router-link to="/" class="link_outline_none">
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="#">Home</a>
                        </li>
                    </router-link>

                    <router-link to="/" class="link_outline_none">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Anúncios</a>
                        </li>
                    </router-link>

                    <router-link to="/" class="link_outline_none">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Eventos</a>
                        </li>
                    </router-link>

                    <router-link to="/" class="link_outline_none">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Vagas de emprego</a>
                        </li>
                    </router-link>

                    <router-link to="/" class="link_outline_none">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Blog</a>
                        </li>
                    </router-link>

                    <router-link to="/" class="link_outline_none">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Contato</a>
                        </li>
                    </router-link>
                    <hr>
                    <router-link to="/" class="link_outline_none">
                        <li class="nav-item logged_small">
                            <a class="nav-link" href="#">Anuncie Aqui</a>
                        </li>
                    </router-link>

                    <hr>
                    <!-- not logged in -->
                    <router-link to="/" class="link_outline_none">
                        <li class="nav-item logged_small">
                            <a class="nav-link" href="#">Entrar</a>
                        </li>
                    </router-link>
                    <!-- not logged in -->

                </ul>
                <!-- <div class="logged_large">
                    <router-link to="/" class="btn btn-light btn-sm me-2 ps-0">
                        Anuncie aqui
                    </router-link>
        
                    <div class="btn-group">
                        <button type="button" class="btn btn-sm btn-primary dropdown-toggle" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Douglas
                        </button>
                        <ul class="dropdown-menu">
                            <router-link to="/" class="dropdown-item">Painel</router-link>
                            <router-link to="/" class="dropdown-item">Perfil</router-link>
                            <router-link to="/" class="dropdown-item">Sair</router-link>
                        </ul>
                    </div>
                </div> -->
                <div class="flex-column logged_large">
                    <router-link to="/" class="btn btn-light btn-sm me-2">Anuncie aqui</router-link>
                    <button class="btn btn-primary btn-sm fw-bold rounded-1">Entrar</button>
                </div>
            </div>
        </div>
    </nav>
</template>
  
<script src="./AppHeader.js"></script>
<style scoped src="./AppHedaer.css"></style>
  