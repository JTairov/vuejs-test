import { createApp } from 'vue';
import App from './App.vue';
import { store } from './store';
import AppHeader from './components/AppHeader.vue';
import AppContent from './components/AppContent.vue';
import DataTable from './components/DataTable.vue';
import TableRow from './components/TableRow.vue';
import Alert from './components/UI/Alert.vue';
import Button from './components/UI/Button.vue';
import Money from './components/UI/Money.vue';
import Pagination from './components/UI/Pagination.vue';
import Spinner from './components/UI/Spinner.vue';

import './assets/index.scss';

const app = createApp(App);

app.component('app-header', AppHeader);
app.component('app-content', AppContent);
app.component('data-table', DataTable);
app.component('table-row', TableRow);
app.component('ui-alert', Alert);
app.component('ui-button', Button);
app.component('ui-money', Money);
app.component('ui-pagination', Pagination);
app.component('ui-spinner', Spinner);
app.use(store);

app.mount('#app');
