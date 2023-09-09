import axios from 'axios';

/**
 * @var {Axios}
 */
const instance = axios.create({
  baseURL: import.meta.env.BASE_URL,
});

/**
 * Load payments data.
 *
 * @param {Object} params
 * @returns {Promise}
 */
const getPayments = (params = {}) => instance.request({
  method: 'get',
  url: '/mocks/getPayments',
  params,
});

export default {
  instance,
  getPayments,
};
