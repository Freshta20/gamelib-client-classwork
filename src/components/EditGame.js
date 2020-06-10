import React, {Component} from 'react';
import GameModel from '../models/game';

class EditGame extends Component {
  state = {
      title: this.props.game.title,
      publisher: this.props.game.publisher,
      coverArtUrl: this.props.game.coverArtUrl,
      completed: this.props.game.completed
  }

  componentDidMount() {
    console.log('did mount', this.props.game)
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.game !== this.props.game){
      this.setState({
        title: this.props.game.title,
        publisher: this.props.game.publisher,
        coverArtUrl: this.props.game.coverArtUrl,
        completed: this.props.game.completed
      })
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    GameModel.update(this.props.game._id, this.state)
    .then(data => {
      console.log(data)
      this.props.updateGame();
      this.props.toggleForm();
      // redirects to game list page
      // this.props.history.push('/games');
    })
  }

  handleChange = (event) => {
    if (event.target.type !== 'text') {
      // set up a breakpoint using debugger keyword, included in javascript
      // debugger;
      // change checkbox state
      this.setState({ completed: !this.state.completed })
    } else {
      this.setState({
        [event.target.name]: event.target.value
      })
    }
    console.log(this.state)
  }

  render() {
    return (
      <div style={this.props.formStyle}>
        <form onSubmit={this.handleSubmit}>
          <div className="form-input">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              id="title"
              onChange={this.handleChange}
              value={this.state.title}
            />
          </div>
          <div className="form-input">
            <label htmlFor="publisher">Publisher</label>
            <input
              type="text"
              name="publisher"
              id="publisher"
              onChange={this.handleChange}
              value={this.state.publisher}
            />
          </div>
          <div className="form-input">
            <label htmlFor="coverArtUrl">Cover Art URL</label>
            <input
              type="text"
              name="coverArtUrl"
              id="coverArtUrl"
              onChange={this.handleChange}
              value={this.state.coverArtUrl}
            />
          </div>
          <div className="form-input">
            <label htmlFor="completed">Completed</label>
            <input
              type="checkbox"
              name="completed"
              id="completed"
              onChange={this.handleChange}
              checked={this.state.completed}
            />
          </div>
          <input type="submit" value="Save"/>
        </form>
      </div>
    )
  }
}

export default EditGame;