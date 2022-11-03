/* eslint-disable no-unused-vars */
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

export const ProductList = (body, setIsLoading, setDisplaySuccessPopUp, setDisplayServerError, setServerMessageError) => {
  setIsLoading(true);
  console.log(setDisplayServerError, setServerMessageError)
  axios
    .post(`${baseUrl}/lists`, body)
    .then((res) => {
        setIsLoading(false);
        setDisplaySuccessPopUp(true)
    })
    .catch(error => {
      console.log(error.response);
      setServerMessageError(error.response.data.error)
      setDisplayServerError(true)
      setIsLoading(false);
    });
};
