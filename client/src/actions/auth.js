
import * as api from '../api/index.js';
import { toast } from 'react-toastify';


export const signin = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);
    
    dispatch({ type: "AUTH", data });

    console.log(data);
    window.location.reload();
    
  } catch (error) {
    console.log(error.response?.data.message);
      toast(error.response?.data.message, {
        position: toast.POSITION.BOTTOM_RIGHT
      });
  }
};


export const signup = (formData, router) => async (dispatch) => {
  try {
    //get user model data with token
    const { data } = await api.signUp(formData);
   
    dispatch({ type: "AUTH", data });
    console.log(data);
    window.location.reload();
  } catch (error) {
    console.log(error.response?.data.message);
      toast(error.response?.data.message, {
        position: toast.POSITION.BOTTOM_RIGHT
      });
  }
};
