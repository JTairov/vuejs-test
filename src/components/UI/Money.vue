<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<template>
  <!-- <input type="text" v-model="valueInput" class="ui-money" :value="value"/> -->
  <input type="text" class="ui-money" @input="validateAndModify" />
</template>

<script>
import { useFormatMoney } from '../../utils/formatMoney';

export default {

  name: 'UiMoney',

  props: {
    modelValue: {
      type: Number,
    },
  },

  emits: ['update:modelValue'],

  methods: {
    validateAndModify(e) {
      const formated = useFormatMoney(e.target.value
        .replace(',', '.')
        .replace(/[^\d\.]/g, '')
        .replace(/\./, 'x')
        .replace(/\./g, '')
        .replace(/x/, '.'));
      if (e.target.value.length === 0) {
        e.target.value = 0;
      } else {
        e.target.value = formated.result;
      }

      this.$emit('update:modelValue', formated.money || 0);
    },
  },
};
</script>
