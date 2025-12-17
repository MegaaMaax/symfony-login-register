import { createApp } from 'vue';
import PasswordValidator from './components/PasswordValidator.vue';
import './styles/app.scss';
import 'bootstrap';

const registerElement = document.getElementById('password-validator-app');
if (registerElement) {
    const app = createApp(PasswordValidator, {
        inputName: registerElement.dataset.inputName,
        inputId: registerElement.dataset.inputId,
        label: 'Mot de passe',
        isRequired: true
    });
    app.mount('#password-validator-app');
}

const profileElement = document.getElementById('profile-password-app');
if (profileElement) {
    const app = createApp(PasswordValidator, {
        inputName: profileElement.dataset.inputName,
        inputId: profileElement.dataset.inputId,
        label: 'Nouveau mot de passe',
        isRequired: false
    });
    app.mount('#profile-password-app');
}
