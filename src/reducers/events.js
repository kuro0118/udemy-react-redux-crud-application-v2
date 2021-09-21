import _ from 'lodash';
import { READ_EVENTS } from "../actions";

// chips: dispatch()で以下の関数がコールされる。
//        dispatch()の引数に渡したオブジェクトは下記のactionから参照する。
const events = (state = {}, action) => {
    switch (action.type) {
        case READ_EVENTS:
            // chips: action.response.dataに対し、idをキーにしたマップオブジェクトに変換する。
            //        [{id:1, name:hoge}, {id:2, name:peke}]
            //        → {1:{id:1, name:hoge}, 2:{id:2 name:peke}}といったマップオブジェクトに変換する
            return _.mapKeys(action.responce.data, 'id');
        default:
            return state;
    }
}

export default events;