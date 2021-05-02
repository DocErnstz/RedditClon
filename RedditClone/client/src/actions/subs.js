import * as api from "../api";

export const getSubs = () => async (dispatch) => {
    try {
        const { data } = await api.fetchSubs();
        data.map((sub) => (dispatch({ type: "DELETE", payload: sub._id})))
        data.map((sub) => (dispatch({ type: "CREATE", payload: sub})))
        //dispatch({ type: "FETCH_ALL", payload: data});
        console.log(data);
    } catch(error){
        console.log(error.message);
    }
}