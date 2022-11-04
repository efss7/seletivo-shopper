import axios from 'axios';
import { baseUrl } from '../constants/Constants';


export const FindAll = async (setProducts, setIsLoading) => {
  try {
    await setIsLoading(true)
    const result = await axios.get(`${baseUrl}/products`)
    setProducts(result.data);
    await setIsLoading(false);
  } catch (error) {
    console.log(error);
    setIsLoading(false);
  }
};

export const ProductList = async (
  body,
  setIsLoading,
  setDisplaySuccessModal,
  setDisplayServerError,
  setServerMessageError
) => {
  try {
    await setIsLoading(true);
    await axios.post(`${baseUrl}/lists`, body)
    setIsLoading(false);
    await setDisplaySuccessModal(true)
  } catch (error) {
    console.log(error.response);
    setServerMessageError(error.response.data.error)
    setDisplayServerError(true)
    setIsLoading(false);
  }
};
