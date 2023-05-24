export function favoriteReducer(state, action) {

    if (state == undefined)
        return []
    if (action.type == 'ADD_TO_FAVORITES') {

        let favControl = state.find(q => q.id == action.payload.id);

        if (!favControl)
            return [...state, action.payload]
        else
            return state
    }
    else if (action.type == 'REMOVE_TO_FAV') {
        let filteredFavorites = state.filter(q => q.id != action.payload);

        return [...filteredFavorites];
    }
    else if (action.type == 'EMPTY') {
        return []
    }
    else {
        return state;
    }

}