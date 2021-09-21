import { Component } from "react"
import { connect } from 'react-redux'
// import { postEvents } from '../actions'
import { Link } from 'react-router-dom';

class EventsNew extends Component {

  render() {
    return (
      <>
      </>
    )
  }
}

// const mapDispatchToProps = ({ postEvents })

// chips： 新規作成画面ではステートやプロップスを使うことはないので、nullとしている
export default connect(null, null)(EventsNew);