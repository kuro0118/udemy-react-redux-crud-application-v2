import { Component } from "react"
import { connect } from 'react-redux'
import { readEvents } from '../actions'
import _ from 'lodash';
import { Link } from 'react-router-dom';

class EventsIndex extends Component {
  // chips: コンポーネントがマウントされた時に呼ばれる
  //        >> 登録や更新後に全件表示をしたいとき、その全件表示する処理をここに書いたりする。
  componentDidMount() {
    // chips: 複雑な処理は基本的にアクションに書く
    this.props.readEvents()
  }

  renderEvents() {
    return _.map(this.props.events, event => (
      <tr key={event.id}>
        <td>{event.id}</td>
        <td>{event.title}</td>
        <td>{event.body}</td>
      </tr>
    ))
  }

  render() {
    return (
      <>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {this.renderEvents()}
          </tbody>
        </table>
        {/* chips: 下記のリンク押下後のルーティングは親コンポーネント(index.js)に記載する */}
        <Link to="/events/new">New Event</Link>
      </>
    )
  }
}

// chips: mapStateToPropsとはステートの情報からコンポーネントに必要な情報を取り出し、コンポーネント内のプロップスにマッピングを行う。
//        reducerを介したstateが引数として渡される
//        props.valueとしてクラスコンポーネント内で使用可能
//        state.countのcountはリデューサーで定義したcount。
//        >> 複数のリデューサーを作成した場合、state.hoge、state.hageみたいにリデューサー別の値を使用することが出来る。(今回はcountだけだけど..)
//        　 親でstoreを渡すことで全ステートにアクセスすることを可能としているのかと。
//           conbineReducerの引数にした名前.hogeみたいなアクセスの方法
const mapStateToProps = state => ({ events: state.events })
// chips: mapDispatchToPropsとはあるアクションが発生したときにリデューサーに通知を送るための関数
//        dispathの引数にはアクションクリエーターを指定する
// const mapDispatchToProps = dispatch => ({
//   increment: () => dispatch(increment()),
//   decrement: () => dispatch(decrement())
// })

const mapDispatchToProps = ({ readEvents })

// chips： connect()はコンポーネントにステートとアクションを関連付ける関数
export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex);