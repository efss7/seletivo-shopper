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
