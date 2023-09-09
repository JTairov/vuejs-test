import { createStore } from 'vuex';
// import api from '../api';
import getPayments from '../mocks/getPaymentsDev';

export const store = createStore({

  state: () => ({
    data: [],
    isLoading: false,
    isCached: false,
  }),

  mutations: {
    setState(state, value) {
      Object.entries(value).forEach(([key, data]) => {
        if (!Array.isArray(state[key]) && state[key] && typeof state[key] === 'object') {
          state[key] = {
            ...state[key],
            ...data,
          };
        } else {
          state[key] = data;
        }
      });
    },
  },

  actions: {
    async load({ commit }, params = {}) {
      commit('setState', { isLoading: true });
      if (!this.state.isCached) {
        try {
          const { data } = await getPayments(params);

          if (Array.isArray(data)) {
            commit('setState', { data });
          }

          commit('setState', { isCached: true });
        } catch (e) {
          // eslint-disable-next-line no-alert
          alert(e?.message);
        } finally {
          commit('setState', { isLoading: false });
        }
      }
    },
    clearCache({ commit }) {
      const data = [];
      commit('setState', { data });
      commit('setState', { isCached: false });
      this.dispatch('load');
    },
  },
});
