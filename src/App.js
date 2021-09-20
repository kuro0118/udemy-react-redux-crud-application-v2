const App = () => {

  // chips: No Nameのageはデフォルトプロップスで指定した値が使用されていることを確認
  const profiles = [
    { name: "Taro", age: 10 },
    { name: "Hanako", age: 5 },
    { name: "No Name"}
  ];

  return (
    <>
      {/* chips: プロップス(props)は波括弧で渡す */}
      {/* chips: JSのコードを描きたい場合は波括弧内に記載する */}
      {/* chips: Reactの内部で変更したDOMがどれかを判定しているため、キーを指定する必要がある。 */}
      {profiles.map((profile, index) => {
        return <User name={profile.name} age={profile.age} key={index}/>
      })}
    </>
  )
}

// chips: propsを関数の引数として指定する。
const User = (props) => {
  // chips: 以下の様にアクセスしたいフィールドを .hoge と指定する。(オブジェクトのフィールド参照と同じイメージ)
  // chips: divタグで囲む場合、returnと同じ行に<div>の先頭を記述しないと、コードとして認識されないので注意
  // chips: divの代わりに<></>を使用すると、改行されないので注意。(<></> ≠ <div></div>)
  return <div> Hi I am {props.name}!!{props.age} years old!! </div>
}

// chips: コンポーネントが受け取るpropsに対して、デフォルト値を設定出来る。
// chips: [コンポーネント].defaultPropsと記載
User.defaultProps = {
  age: 5
}

export default App;
