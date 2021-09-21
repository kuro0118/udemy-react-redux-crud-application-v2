import { Component } from "react"
import { connect } from 'react-redux'
import { Field, reduxForm } from "redux-form";
import { postEvents } from '../actions'
import { Link } from 'react-router-dom';

class EventsNew extends Component {

  constructor(props) {
    super(props)
    // chips: 他のコンポーネントにthis.hogehogeを渡す場合は事前にbindが必要
    this.onSubmit = this.onSubmit.bind(this)
  }

  renderField(field) {
    // chips: 下記errorはvalidateで返却したerrorsオブジェクトが設定
    const { input, label, type, meta: { touched, error } } = field
    return (
      <div>
        <input {...input} placeholder={label} type={type} />
        {/* // chips: hogeがTrue かつ errorがTrueの場合は <span>hoge</span>を表示..ということだと思う。 */}
        {touched && error && <span>{error}</span>}
      </div>
    )
  }

  // chips: promiseオブジェクトがリターンされるため、awaitで待機する
  //        valuesにはFieldタグで指定したフィールドの入力値が入っている..のだろう。(redux-Formの仕様??)
  async onSubmit(values) {
    // chips: postEvents()内でdispatchがコールし、リデューサーへ。
    await this.props.postEvents(values)
    this.props.history.push('/')
  }

  // chips: 上記のbindの件の続きだが、bindを使いたくない場合、以下の記載でもおｋらし
  // onSubmit = async values => {
  //   await this.props.postEvents(values)
  //   this.props.history.push('/')
  // }

  render() {
    // chips: 親コンポーネントからプロップスとして関数を渡している
    const { handleSubmit, pristine, submitting } = this.props
    return (
      <form onSubmit={handleSubmit(this.onSubmit)} >
        <div>
          <Field label="Title" name="title" type="text" component={this.renderField} />
          <Field label="Body" name="body" type="text" component={this.renderField} />
        </div>
        <div>
          <input type="submit" value="SUBMIT" disabled={pristine || submitting} />
          <Link to="/">Cancel</Link>
        </div>
      </form>
    )
  }
}

// chips: postEventsはアクションクリエーターで定義した、dispatch()を内包した関数
//        下記の記述はそのアクションクリエーターを使用しますよーという宣言と思っておく
const mapDispatchToProps = ({ postEvents })

const validate = values => {
  const errors = {}

  if (!values.title) errors.title = "Enter a title, please.";
  if (!values.body) errors.body = "Enter a body, please.";

  return errors
}

export default connect(null, mapDispatchToProps)(
  // chips: コンポーネントにreduxFromを適用するには、reduxFrom()の戻り値の関数の引数にコンポーネントを渡す形式に修正する。
  reduxForm({ validate, form: 'eventNewForm' })(EventsNew)
);