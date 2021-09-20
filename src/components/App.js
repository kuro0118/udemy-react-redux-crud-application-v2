import { Component } from "react"

// chips: 波括弧の場合は波括弧の中でreturnが必要
//        丸括弧の場合は呼び出し先でreturnが必要
const App = () => (<Counter></Counter>)

class Counter extends Component {
  // chips: constructor()は初期化時に実行されるメソッド
  //        Counterコンポーネントが呼び出された時に一度実行される
  constructor(props) {
    super(props)
    // chips: this.state = hogehogeで初期化する。
    this.state = { count: 0 }
  }

  handlePlusButton = () => {
    // chips: ステートを設定する用のメソッド
    //        setStateを行うと、ステートが変更されたと見なし、レンダリングが行われる。(render(hogehoge)がコールする)
    this.setState({ count: this.state.count + 1});
  }

  handleMinusButton = () => {
    this.setState({ count: this.state.count - 1});
  }

  render() {
    console.log(this.state)
    return (
      <>
        <div>counter: {this.state.count}</div>
        <button onClick={this.handlePlusButton}>+1</button>
        <button onClick={this.handleMinusButton}>-1</button>
      </>
    )
  }
}

export default App;
