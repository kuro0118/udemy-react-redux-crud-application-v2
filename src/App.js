// chips:Reactパッケージのインポートは要らない模様。
import { Component } from 'react'

class App extends Component {
  render() {
    return (
      <>
        <label htmlFor="bar">default</label>
        <input type="text" onChange={() => { console.log('hellow!!') }} />
        {/* // chips:以下の様な書き方も可能
            // const greeting = "MiMi";
            // const dom = <h1 className="">{greeting}</h1>;
            // >> クォーテーションの囲いが要らない
            // >> 変数を出力する場合は{ }で囲む
            // >> JSXの文法上、classではなくclassNameを使用する
            // return dom 
        */}
      </>
    )
  }
}

export default App;
