<template>
    <section>
        <AppHeader/>
        <div class="my-5">
            <h2 class="custom_title fw-bolder text-center my-5">Recuperação de senha</h2>

            <div class="container">
                <div class="row justify-content-center p-3">
                    <form class="col-11 col-sm-11 col-md-7 col-lg-5 p-3 py-5 border rounded-1 newPasswordForm" novalidate>
                        <div class="mb-3">
                            <label for="newPassword" class="form-label">Por favor, digite seu e-mail.</label>
                            <input v-model="emailData.email" type="email" class="form-control custom_focus custom_placeholder" id="newPassword" placeholder="Seu e-mail" required>
                            <div class="invalid-feedback">
                                Por favor digite seu e-mail.
                            </div>
                        </div>
                        <div>
                            <button @click="submitForm" class="btn btn-primary w-100 fw-semibold">
                                <span>Avançar</span>
                                <div v-if="spinnerLoading" class="spinner-border text-light m-0" role="status"></div>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div class="toast-container position-fixed bottom-0 end-0 p-3">
            <div id="alertsNewPassword" class="toast bg-opacity-75" :class="'text-bg-' + alertType" role="alert" aria-live="assertive" aria-atomic="true">
                <div class="d-flex">
                    <div class="toast-body fs-6 fw-semibold z-3 ">
                        {{ alertMsg }}
                    </div>
                    <button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
            </div>
        </div>
        <div @click="redirectHome" class="modal fade" id="modalNewPassword" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <button @click="redirectHome" type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <h4 class="custom_title mb-4">Foi enviado uma nova senha temporária em seu e-mail.</h4>
                        <p class="text-dark text-opacity-75">Entre em seu perfil e altere para uma de sua preferência.</p>
                    </div>
                    <div class="p-3">
                        <button @click="redirectHome" type="button" class="btn btn-primary w-100" data-bs-dismiss="modal">Ok</button>
                    </div>
                </div>
            </div>
        </div>
        <AppFooter/>
    </section>
</template>

<script>
/* global bootstrap */
import axios from "axios";
import AppHeader from '../components/AppHeader/AppHeader.vue';
import AppFooter from '../components/AppFooter/AppFooter.vue';

const API_URL = process.env.VUE_APP_API_URL;

export default {
    components: {
        AppHeader,
        AppFooter,
    },

    data() {
        return {
            emailData: {
                email: ''
            },
            alertType: '',
            alertMsg: '',
            alerts: '',
            spinnerLoading: false
        };
    },

    mounted() {
        window.scrollTo(0, 0);
        this.modalNewPassword = new bootstrap.Modal(document.getElementById('modalNewPassword'));
        this.alerts = bootstrap.Toast.getOrCreateInstance(document.getElementById('alertsNewPassword'));
    },
    
    methods: {
        async submitForm(e) {
            e.preventDefault()
            const validForm = this.validForm();

            if(validForm) {
                try {
                    const user = await this.requestNewPassword();

                    if(user.success) {
                        return this.modalNewPassword.show();
                    }

                    if(user.alert) {
                        return this.openAlert('warning', 'E-mail não encontrado');
                    }
                } catch (error) {
                    return this.openAlert('danger', 'Falha ao buscar o e-mail');
                }
            }
        },

        validForm() {
            const forms = document.querySelectorAll('.newPasswordForm');

            for (const form of forms) {
                if (form.checkValidity()) {
                  form.classList.add('was-validated');
                } else {
                  form.classList.add('was-validated');
                  return false;
                }
            }
            
            return true;
        },

        async requestNewPassword() {
            try {
                const response = await axios.post(API_URL + '/usuario/nova-senha', this.emailData);
                return response.data;
            } catch (error) {
                console.error(error);
                throw new Error('Falha ao enviar a nova senha do usuário');
            }
        },

        openAlert(type, msg) {
            this.alertType = type;
            this.alertMsg = msg;
            setTimeout(() => {
                this.alerts.show();
            }, 500);
        },

        redirectHome() {
            this.$router.push('/');
        }

        
    },
   
};
</script>

<style scoped></style>