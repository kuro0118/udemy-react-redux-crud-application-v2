// chips: propsに対して型チェックを導入するモジュール
import PropTypes from 'prop-types';

const App = () => {

  // chips: 3つ目(コメント)の値がstring型なのに数値型になっているため、ブラウザでエラーが出る。
  // chips: 4つ目(コメント)の値はageが未指定のため、ブラウザでエラーが出る。
  const profiles = [
    { name: "Taro", age: 10 },
    { name: "Hanako", age: 5 },
    // { name: 1, age: "10" }
    // { name: "No Name"}
    { name: "No Name", age: 0}
  ];

  return (
    <>
      {profiles.map((profile, index) => {
        return <User name={profile.name} age={profile.age} key={index} />
      })}
    </>
  )
}

const User = (props) => {
  return <div> Hi I am {props.name}!!{props.age} years old!! </div>
}

// chips: プロップスのフィールドに対して型を定義する。
//        定義外の型の値がコンポーネントに渡された場合はブラウザでエラーが出る。
// chips: .isRequiredを指定すると、その値が未指定の場合はブラウザエラーとして検知出来る。
// refer: 設計の段階で、propsにどのようなプロパティを持たせるかを定義したりすることが多い。
User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}

export default App;
