import { API } from '../../utils/constants';

const giftAPI = {
  fetchVendors() {
    return fetch(`${API}/vendors`);
  },
};

export default giftAPI;
