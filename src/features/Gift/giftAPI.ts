import { API } from '../../utils/constants';

const giftAPI = {
  fetchVendors() {
    return fetch(`${API}/vendors`);
  },
  fetchProducts(id: string) {
    return fetch(`${API}/products?vendorId=${id}`);
  },
};

export default giftAPI;
