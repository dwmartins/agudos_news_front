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
                    <div v-if="userLogged">
                        <li class="nav-item logged_small">
                            <i class="bi bi-person-fill me-1 "></i>
                            <span>{{ userData.name }}</span>
                        </li>
                        <hr>
                        <li class="nav-item logged_small">
                            <a class="nav-link" href="#">Painel</a>
                        </li>
                        <li class="nav-item logged_small">
                            <router-link class="nav-link" :to="'/perfil/' + userData.id">
                                Perfil
                            </router-link>
                        </li>
                        <li class="nav-item logged_small">
                            <a @click="logout" class="nav-link cursor_pointer">Sair</a>
                        </li>
                    </div>
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
                    <li v-if="!userLogged" class="nav-item logged_small">
                        <a class="nav-link" href="#" data-bs-toggle="modal" data-bs-target="#modalLogin">Entrar</a>
                    </li>
                    <!-- not logged in -->

                </ul>
                <div v-if="userLogged" class="logged_large">
                    <router-link to="/" class="btn btn-light btn-sm me-2 ps-0">
                        Anuncie aqui
                    </router-link>

                    <div class="btn-group">
                        <button type="button" class="btn btn-sm btn-primary dropdown-toggle" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            {{ userData.name }}
                        </button>
                        <ul class="dropdown-menu">
                            <router-link to="/" class="dropdown-item">Painel</router-link>
                            <router-link :to="'/perfil/' + userData.id" class="dropdown-item">Perfil</router-link>
                            <li @click="logout" class="dropdown-item cursor_pointer">Sair</li>
                        </ul>
                    </div>
                </div>
                <div v-if="!userLogged" class="flex-column logged_large">
                    <router-link to="/" class="btn btn-light btn-sm me-2">Anuncie aqui</router-link>
                    <button type="button" class="btn btn-primary btn-sm fw-bold rounded-1" data-bs-toggle="modal"
                        data-bs-target="#modalLogin">Entrar</button>
                </div>
            </div>
        </div>
    </nav>

    <div class="modal fade" ref="modalLogin" id="modalLogin" tabindex="-1" aria-labelledby="modalLogin" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content p-1 p-sm-4 ">
                <div class="modal-header">
                    <nav>
                        <div class="nav nav-tabs" id="nav-tab" role="tablist">
                            <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab"
                                data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home"
                                aria-selected="true">Entrar</button>
                            <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile"
                                type="button" role="tab" aria-controls="nav-profile"
                                aria-selected="false">Registrar</button>
                        </div>
                    </nav>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="tab-content" id="nav-tabContent">
                        <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab"
                            tabindex="0">
                            <form class="row gap-3 needs-validation" novalidate>
                                <div class="col-12">
                                    <input v-model="loginData.email" type="email" class="custom_no_feedback form-control form-control-lg custom_focus custom_placeholder" id="validationCustom01" placeholder="E-mail" required>
                                    <div class="invalid-feedback">
                                        Por favor digite seu e-mail.
                                    </div>
                                </div>
                                <div class="col-12">
                                    <input v-model="loginData.password" type="password" class="custom_no_feedback form-control form-control-lg custom_focus custom_placeholder" id="validationCustom02" placeholder="Senha" required>
                                    <div class="invalid-feedback">
                                        Por favor digite sua senha.
                                    </div>
                                </div>
                                <div class="col-12">
                                    <button @click="login" class="btn btn-primary w-100 fw-semibold fs-5 d-flex justify-content-center "><span v-if="!spinnerLoading">Entrar</span>
                                        <div v-if="spinnerLoading" class="spinner-border text-light m-0" role="status"></div>
                                    </button>
                                </div>
                                <div class="col-12">
                                    <p @click="redirectNewPassword" class="link_outline_none cursor_pointer text-primary ">
                                        Esqueceu a sua senha?
                                    </p> 
                                </div>
                            </form>
                        </div>
                        <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">
                            <form class="row gap-3 needs-validation-register" novalidate>
                                <div class="col-12">
                                    <label for="imagemInput" class="d-flex justify-content-center">
                                        <img id="previewImage" class="img-fluid" v-if="registerData.photo_url" :src="registerData.photo_url" alt="Preview da Imagem" @click="openImageInput">
                                        <div v-else class="placeholder z-3" @click="openImageInput">
                                            <p class="text-dark">Selecionar imagem</p>
                                        </div>
                                    </label>
                                    <input type="file" id="imagemInput" @change="previewImage" style="display: none;" accept="image/*">
                                </div>
                                <div class="col-12">
                                    <input v-model="registerData.name" id="register_name" type="text" class="custom_no_feedback form-control form-control-lg custom_focus custom_placeholder" placeholder="Nome" required>
                                    <div class="invalid-feedback">
                                        Por favor digite seu nome.
                                    </div>
                                </div>
                                <div class="col-12">
                                    <input v-model="registerData.lastName" id="register_lastName" type="text" class="custom_no_feedback form-control form-control-lg custom_focus custom_placeholder" placeholder="Sobrenome" required>
                                    <div class="invalid-feedback">
                                        Por favor digite seu Sobrenome.
                                    </div>
                                </div>
                                <div class="col-12">
                                    <input v-model="registerData.email" id="register_email" type="email" class="custom_no_feedback form-control form-control-lg custom_focus custom_placeholder" placeholder="e-mail" required>
                                    <div class="invalid-feedback">
                                        Por favor digite seu e-mail.
                                    </div>
                                </div>
                                <div class="col-12">
                                    <input v-model="registerData.password" id="register_password" type="password" class="custom_no_feedback form-control form-control-lg custom_focus custom_placeholder" placeholder="Senha" required>
                                    <div class="invalid-feedback">
                                        Por favor digite sua senha.
                                    </div>
                                </div>
                                <div class="col-12">
                                    <button @click="register" class="btn btn-primary w-100 fs-5 d-flex justify-content-center "><span v-if="!spinnerLoading">Cadastre-se</span>
                                        <div v-if="spinnerLoading" class="spinner-border text-light m-0" role="status"></div>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="toast-container position-fixed bottom-0 end-0 p-3">
        <div id="liveToast" class="toast bg-opacity-75" :class="'text-bg-' + alertType" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="d-flex">
                <div class="toast-body fs-6 fw-semibold z-3 ">
                    {{ alertMsg }}
                </div>
                <button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
        </div>
    </div>
</template>
  
<script src="./AppHeader.js"></script>
<style scoped src="./AppHedaer.css"></style>
  