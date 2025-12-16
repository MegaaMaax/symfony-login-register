import { createApp } from 'vue';
import PasswordValidator from './components/PasswordValidator.vue';
import './styles/app.scss';
import 'bootstrap';

const passwordValidatorElement = document.getElementById('password-validator-app');

if (passwordValidatorElement) {
    const app = createApp(PasswordValidator);
    app.mount('#password-validator-app');
}
