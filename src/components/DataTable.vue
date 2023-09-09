<template>
  <div class="data-table">
    <div class="data-table__filter">
      <ui-money v-model="moneyFilter" />
    </div>

    <!-- Your component code here -->
    <div class="data-table__heads">
      <div v-for="(col) in columns" :key="col.prop" class="data-table__head" :style="{ width: colWidths[col.prop] }">
        {{ col.label }}
      </div>
    </div>

    <div class="data-table__body" v-for="(row) in filtered" :key="row.id">
      <table-row :row="row" :columnWidth="colWidths" />
    </div>

    <div class="data-table__paginator">
      <ui-pagination v-model="page" :pages="pageCount" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'DataTable',

  props: {
    rows: {
      type: Array,
      required: true,
    },
    columns: {
      type: Array,
      required: true,
    },
  },

  data: () => ({
    page: 1,
    pageSize: 4,
    moneyFilter: 0,
  }),

  computed: {
    pageCount() {
      return Math.ceil(this.rows.length / this.pageSize);
    },
    colWidths() {
      const style = {};
      this.columns.forEach((col) => {
        if (!style[col.prop]) {
          style[col.prop] = col.width;
        }
      });
      return style;
    },
    filtered() {
      let result;
      if (this.moneyFilter === 0) {
        result = this.rows;
      } else {
        result = this.rows.filter((row) => row.money <= this.moneyFilter);
      }
      return result.slice((this.page - 1) * this.pageSize, this.pageSize * this.page);
    },
  },
};
</script>
