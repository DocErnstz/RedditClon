
import * as api from '../api/index.js';
export const signin = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);

    dispatch({ type: "AUTH", data });

    router.push('/');
  } catch (error) {
    if (error.response){
      console.log(error.response);
      //do something
      
      }else if(error.request){
      console.log(error.request);
      //do something else
      
      }else if(error.message){
      console.log(error.message);
      //do something other than the other two
      
      }
  }
};

export const signup = (formData, router) => async (dispatch) => {
  try {
    //get user model data with token
    const { data } = await api.signUp(formData);

    dispatch({ type: "AUTH", data });

    router.push('/');
  } catch (error) {
    if (error.response){
      console.log(error.response);
      //do something
      
      }else if(error.request){
      console.log(error.request);
      //do something else
      
      }else if(error.message){
      console.log(error.message);
      //do something other than the other two
      
      }
  }
};