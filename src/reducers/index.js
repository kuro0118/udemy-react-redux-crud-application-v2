// chips: 別個で定義したリデューサーを1つに結合
import { combineReducers } from "redux";
import count from './count'

// chips: defaultを指定すると、importする側で任意の名前が使える
export default combineReducers({ count })