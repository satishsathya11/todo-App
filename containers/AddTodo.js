import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    console.log(props);
  }
  componentWillMount() {
    console.log(this.props);
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.addTodo(this.state.value);
    this.setState({
      value: ''
    });
  }
  handleChange(e) {
    this.setState({
      value: e.target.value
    })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.value} onChange={this.handleChange}/>
          <button type="submit">
            Add Todo
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addTodo: (val) => {
      debugger;
      dispatch(addTodo(val))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTodo);