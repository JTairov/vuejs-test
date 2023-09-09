<template>
  <div class="table-row">
    <div class="cell" :style="{ width: columnWidth['id'] }">
      <p class="cell__head">Id</p>
      <span class="cell__value">{{ row.id }}</span>
    </div>
    <div class="cell" :style="{ width: columnWidth['date'] }">
      <p class="cell__head">Date</p>
      <span class="cell__value">{{ formatedDate }}</span>
    </div>
    <div class="cell" :style="{ width: columnWidth['name'] }">
      <p class="cell__head">Name</p>
      <span class="cell__value">{{ row.name }}</span>
    </div>
    <div class="cell" :style="{ width: columnWidth['money'] }">
      <p class="cell__head">Money</p>
      <span class="cell__value">{{ formatedMoney.result }}</span>
    </div>
  </div>
</template>

<script>
import { useFormatMoney } from '../utils/formatMoney';
import { useFormatDate } from '../utils/formatDate';

export default {
  name: 'TableRow',

  props: {
    row: {
      type: Object,
      required: true,
    },
    columnWidth: {
      type: Object,
      required: true,
    },
  },

  computed: {
    formatedMoney() {
      return useFormatMoney(this.row.money);
    },
    formatedDate() {
      return useFormatDate(this.row.date);
    },
  },
};

</script>
