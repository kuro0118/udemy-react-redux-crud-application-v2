import axios from "axios"

export const READ_EVENTS = 'READ_EVENTS'

const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1';
const QUERYSTRING = '?token=token123'

// chips: redux-thunkを使用することで、アクションクリエーターから関数を返すことが出来る様になる
//        内部の関数の引数にはdispatchとgetStateを指定が出来る様になる
//        記載のイメージはexents_index.jsに記載していたmapDispatchToPropsの定義と同様
//        // const mapDispatchToProps = dispatch => ({
//            increment: () => dispatch(increment()),
//            decrement: () => dispatch(decrement())
//           })
export const readEvents = () => async dispatch => {
    // chips: パラメーター入りの文字列はバッククォートで囲む
    //        axios.get()の戻り値はPromice
    //        async～awaitを使用することで、axiot.get()の結果が帰るまで待機する。
    const responce = await axios.get(`${ROOT_URL}/events${QUERYSTRING}`);
    // chips: 引数のオブジェクトはreducer側の関数でactionオブジェクトとして参照可能
    dispatch({ type: READ_EVENTS, responce });
}