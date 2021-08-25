import * as api from "../api";

export const getSubs = () => async (dispatch) => {
    try {
        const { data } = await api.fetchSubs();
        data.map((sub) => (dispatch({ type: "DELETE2", payload: sub._id})))
        data.map((sub) => (dispatch({ type: "CREATE2", payload: sub})))
        //dispatch({ type: "CLEAR", payload: data});
    } catch(error){
        console.log(error.message);
    }
}