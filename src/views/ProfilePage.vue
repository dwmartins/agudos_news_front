<template>
    <section>
        <AppHeader/>
        <div>
            <h2 class="custom_title fw-bolder text-center my-5">Perfil</h2>

            <div class="toast-container position-fixed bottom-0 end-0 p-3">
                <div id="alertsProfile" class="toast bg-opacity-75" :class="'text-bg-' + alertType" role="alert" aria-live="assertive" aria-atomic="true">
                    <div class="d-flex">
                        <div class="toast-body fs-6 fw-semibold z-3 ">
                            {{ alertMsg }}
                        </div>
                        <button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
                    </div>
                </div>
            </div>
        </div>
        <AppFooter/>
    </section>
</template>

<script>
/* global bootstrap */
import AppHeader from '../components/AppHeader/AppHeader.vue';
import AppFooter from "..//components/AppFooter/AppFooter.vue";
import axios from 'axios';

const API_URL = process.env.VUE_APP_API_URL;

export default {
    components: {
        AppHeader,
        AppFooter
    },

    data() {
        return {
            userId: null,
            userData: '',
            alerts: '',
            alertType: '',
            alertMsg: '',
        };
    },

    created() {
        this.userId = this.$route.params.id;
        this.userData = JSON.parse(localStorage.getItem('userData'));
    },
    
    mounted() {
        this.alerts = bootstrap.Toast.getOrCreateInstance(document.getElementById('alertsProfile'));
        window.scrollTo(0, 0);
        this.getUser();
    },

    methods: {
        async getUser() {
            try {
                this.userData = await this.searchUser();
                console.log(this.userData)
            } catch (error) {
                if(error.response.status === 401) {
                    this.openAlert('warning', 'Você precisa realizar o login.');
                    setTimeout(() => {
                        this.$router.push('/');
                    }, 2000);
                    return;
                }

                if(error.response.status === 500) {
                    this.openAlert('warning', 'Houve uma falha ao buscar as informações do seu perfil');
                    setTimeout(() => {
                        this.$router.push('/');
                    }, 2000);
                    return;
                }   
            }
        },

        async searchUser() {
            const token = this.userData.token;
            const userId = this.userData.id;
            const config = {
                headers: {
                    'token': token,
                    'user_id': userId
                }
            }

            try {
                const response = await axios.get(API_URL + '/usuario/' + this.userId, config);
                return response.data
            } catch (error) {
                console.error(error);
                throw error
            }
        },
        
        openAlert(type, msg) {
            this.alertType = type;
            this.alertMsg = msg;
            setTimeout(() => {
                this.alerts.show();
            }, 500);
        },
    },
};
</script>
<style scoped>
</style>