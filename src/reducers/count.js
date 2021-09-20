import { INCREMENT, DECREMENT } from "../actions";

const initialState = { value: 0 }

// chips: 以下の引数の中でstate=hogeという記載はデフォルト引数というJS標準の記載
const count = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return { value: state.value + 1 }
        case DECREMENT:
            return { value: state.value - 1 }
        default:
            return state;
    }
}

export default count;