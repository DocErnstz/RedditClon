export default (subs = [], action) => {
    switch(action.type) {
        case "FETCH_ALL":
            return subs;
        case "CREATE2":
            return [...subs, action.payload];
        case "DELETE2":
            return subs.filter((sub) => sub._id !== action.payload);
        case "CLEAR":
            return [];
        default:
            return subs;
    }
}