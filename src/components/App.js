import { Component } from "react"
import { connect } from 'react-redux'

import { increment, decrement } from '../actions'

class App extends Component {
  render() {
    const props = this.props;
    return (
      <>
        <div>value: {props.value}</div>
        {/* chips: mapDispatchToPropsで定義したincrement、decrementをコールする。 */}
        <button onClick={props.increment}>+1</button>
        <button onClick={props.decrement}>-1</button>
      </>
    )
  }
}

// chips: mapStateToPropsとはステートの情報からコンポーネントに必要な情報を取り出し、コンポーネント内のプロップスにマッピングを行う。
//        props.valueとしてクラスコンポーネント内で使用可能
//        state.countのcountはリデューサーで定義したcount。
//        >> 複数のリデューサーを作成した場合、state.hoge、state.hageみたいにリデューサー別の値を使用することが出来る。(今回はcountだけだけど..)
//        　 親でstoreを渡すことで全ステートにアクセスすることを可能としているのかと
const mapStateToProps = state => ({ value: state.count.value })
// chips: mapDispatchToPropsとはあるアクションが発生したときにリデューサーに通知を送るための関数
//        dispathの引数にはアクションクリエーターを指定する
const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement())
})

// chips： connect()はコンポーネントにステートとアクションを関連付ける関数
export default connect(mapStateToProps, mapDispatchToProps)(App);