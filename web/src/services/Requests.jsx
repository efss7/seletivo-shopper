import axios from 'axios';
import { baseUrl } from '../constants/Constants';


export const FindAll = (setProducts, SetIsLoading) => {
  SetIsLoading(true)
  axios
    .get(`${baseUrl}/products`)
    .then((res) => {
      setProducts(res.data);
      SetIsLoading(false);
    })
    .catch((error) => {
      console.log(error);
        SetIsLoading(false);
    });
};

export const ProductList = (body, SetIsLoading) => {
  // SetIsLoading(true);
  axios
    .post(`${baseUrl}/orders`, body)
    .then((res) => {
      console.log(res.data)
    })
    .catch((error) => {
      console.log(error);
      // SetIsLoading(false);
    });
};
