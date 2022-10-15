import axios from 'axios';
import { baseUrl } from '../constants/Constants';


export const FindAll = (setProducts, setIsLoading) => {
  setIsLoading(true)
  axios
    .get(`${baseUrl}/products`)
    .then((res) => {
      setProducts(res.data);
      setIsLoading(false);
    })
    .catch((error) => {
      console.log(error);
        setIsLoading(false);
    });
};

export const ProductList = (body, setIsLoading, setDisplaySuccessPopUp) => {
  setIsLoading(true);
  axios
    .post(`${baseUrl}/orders`, body)
    .then((res) => {
        setIsLoading(false);
        setDisplaySuccessPopUp(true)
    })
    .catch((error) => {
      console.log(error);
      setIsLoading(false);
    });
};
