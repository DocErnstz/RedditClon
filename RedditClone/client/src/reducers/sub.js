export default (subs = [], action) => {
    switch(action.type) {
        case "FETCH_ALL":
            return subs;
        case "CREATE":
            return [...subs, action.payload];
        case "DELETE":
            return subs.filter((sub) => sub._id !== action.payload);
        default:
            return subs;
    }
}