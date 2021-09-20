// chips:クラスコンポーネントを使用しない場合は以下のimportは不要
// import { Component } from 'react'

// chips:以下がクラスコンポーネント 
// class App extends Component {
//   render() {
//     return (
//       <>
//         <label htmlFor="bar">default</label>
//         <input type="text" onChange={() => { console.log('hellow!!') }} />
//       </>
//     )
//   }
// }


// chips:以下がファンクションコンポーネント
const App = () => {
  return (
    <>
      <Cat />
      <Cat />
      <Cat />
      <Cat />
    </>
  )
}

const Cat = () => {
  return <div>Odamari!!</div>
}

export default App;
