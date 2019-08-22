import { SET_SELECTION } from "../_constants/redux.contants";

const initialState = {
    selections : []
}

export function selectionsReducer (state = initialState, action) {
    switch (action.type) {
        case SET_SELECTION:
            return {
                //spread the previous things and add the incoming one as well
                selections : [...state.selections, action.payload]
            }
        default:
            return state;
    }
}