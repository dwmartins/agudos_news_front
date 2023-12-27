/* global bootstrap */
import axios from "axios";
const API_URL = process.env.VUE_APP_API_URL;

export default {
    data() {
        return {
            userData: [],
            loginData: {
                email: '',
                password: ''
            },
            registerData: {
                name: '',
                lastName: '',
                email: '',
                password: '',
                photo_url: ''
            },
            imagePreview: null,
            userLogged: false,
            modalLogin: '',
            alerts: '',
            alertType: '',
            alertMsg: '',
            spinnerLoading: false
        };
    },

    mounted() {
        this.modalLogin = new bootstrap.Modal(document.getElementById('modalLogin'));
        this.alerts = bootstrap.Toast.getOrCreateInstance(document.getElementById('liveToast'));
        this.getLoggedUser();
    },

    methods: {
        async login(e) {
            e.preventDefault()

            if(!this.validForm()) {
                this.openAlert('warning', 'Preencha todos os campos.');
                return;
            }

            this.spinnerLoading = true;

            try {
                const user = await this.validUser();
                this.spinnerLoading = false;

                if (user.success) {
                    this.openAlert('success', 'Logado com sucesso.');
                    this.userData = user.user;
                    this.userLogged = true;
                    this.modalLogin.hide();

                    localStorage.setItem('userData', JSON.stringify(user.user));
                }

                if (user.alert) {
                    this.openAlert('warning', user.alert);
                    return;
                }

            } catch (error) {
                this.spinnerLoading = false;
                console.error(error);
                this.openAlert('danger', 'Falha ao realizar o login.');
                return;
            }

            this.loginData.email = '';
            this.loginData.password = '';
        },

        validForm() {
            const forms = document.querySelectorAll('.needs-validation');

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

        async validUser() {
            try {
                const response = await axios.post(API_URL + '/usuario/login', this.loginData);
                return response.data;

            } catch (error) {
                console.error(error);
                throw new Error('Falha ao autenticar o usuário');
            }
        },

        getLoggedUser() {
            const userDataJson = localStorage.getItem('userData');

            if (userDataJson) {
                this.userData = JSON.parse(userDataJson);
                this.userLogged = true;
            }
        },

        logout() {
            localStorage.removeItem('userData');
            this.userLogged = false;
            this.openAlert('success', 'Você foi desconectado. Sinta-se à vontade para retornar quando quiser!');
        },

        openAlert(type, msg) {
            this.alertType = type;
            this.alertMsg = msg;
            setTimeout(() => {
                this.alerts.show();
            }, 500);
        },

        redirectNewPassword() {
            this.modalLogin.hide();
            this.$router.push('/nova-senha');
        },

        // Register

        async register(e) {
            e.preventDefault();
            if(this.validFormRegister()) {
                this.spinnerLoading = true;
                try {
                    const user = await this.registerUser();

                    if(user.success) {
                        this.openAlert('success', 'Conta criada com sucesso.');
                        this.spinnerLoading = false;
                        return this.modalLogin.hide();
                    }

                    if(user.alert) {
                        this.spinnerLoading = false;
                        return this.openAlert('warning', user.alert);
                    }

                } catch (error) {
                    this.spinnerLoading = false;
                    return this.openAlert('danger', 'Falha ao criar a conta');
                }
            }
            
        },  

        validFormRegister() {
            const forms = document.querySelectorAll('.needs-validation-register');

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

        async registerUser() {
            try {
                const response = await axios.post(API_URL + '/usuario/novo', this.registerData);
                return response.data;
            } catch (error) {
                console.error(error);
                throw new Error('Falha ao criar a conta.');
            }
        },

        previewImage(event) {
            const fileInput = event.target;
            const file = fileInput.files[0];

            if (file) {

                if(file.size > 5 * 1024 * 1024) {
                    this.openAlert('warning', 'A imagem de perfil deve ter no máximo 5 MB.');
                    this.registerData.photo_url = null; 
                    return;
                }

                const reader = new FileReader();
        
                reader.onload = () => {
                    if (reader.result.startsWith("data:image/jpeg;base64,")) {
                        this.registerData.photo_url = reader.result;
                    } else {
                        this.openAlert('warning', 'A imagem de perfil deve ser do tipo JPG');
                        this.registerData.photo_url = null;
                    }
                };
    
                reader.readAsDataURL(file);
            } else {
                this.registerData.photo_url = null;
            }
        }
    }

};