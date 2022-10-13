import axios from 'axios';
import { baseUrl } from '../constants/Constants';

export const FindAll = (setProducts) => {
  axios
    .get(`${baseUrl}/products`)
    .then((res) => {
      setProducts(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
};
