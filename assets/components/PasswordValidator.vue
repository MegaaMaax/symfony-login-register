<template>
  <div class="password-validator-container">
    <div class="mb-3">
        <label :for="inputId" class="form-label" :class="{ required: isRequired }">{{ label }}</label>
        <input 
            type="password" 
            :id="inputId" 
            :name="inputName" 
            :required="isRequired" 
            class="form-control" 
            v-model="password"
            @input="checkPassword"
        >
        <div class="password-feedback mt-2">
            <ul class="list-unstyled mb-0">
                <li :class="criteria.length ? 'text-success' : 'text-danger'">
                    <i :class="criteria.length ? 'bi bi-check-circle-fill' : 'bi bi-x-circle-fill'"></i> 8 caractères minimum
                </li>
                <li :class="criteria.special ? 'text-success' : 'text-danger'">
                    <i :class="criteria.special ? 'bi bi-check-circle-fill' : 'bi bi-x-circle-fill'"></i> Au moins un caractère spécial
                </li>
                <li :class="criteria.uppercase ? 'text-success' : 'text-danger'">
                    <i :class="criteria.uppercase ? 'bi bi-check-circle-fill' : 'bi bi-x-circle-fill'"></i> Au moins une majuscule
                </li>
                <li :class="criteria.number ? 'text-success' : 'text-danger'">
                    <i :class="criteria.number ? 'bi bi-check-circle-fill' : 'bi bi-x-circle-fill'"></i> Au moins un chiffre
                </li>
            </ul>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    inputName: {
      type: String,
      required: true
    },
    inputId: {
      type: String,
      required: true
    },
    label: {
      type: String,
      default: 'Mot de passe'
    },
    isRequired: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      password: '',
      criteria: {
        length: false,
        special: false,
        uppercase: false,
        number: false
      }
    };
  },
  methods: {
    checkPassword() {
      this.criteria.length = this.password.length >= 8;
      this.criteria.special = /[!@#$%^&*(),.?":{}|<>]/.test(this.password);
      this.criteria.uppercase = /[A-Z]/.test(this.password);
      this.criteria.number = /[0-9]/.test(this.password);
    }
  }
};
</script>

<style scoped>
.password-feedback ul li {
    font-size: 0.9em;
    margin-bottom: 0.2rem;
}
.bi {
    margin-right: 5px;
}
</style>
