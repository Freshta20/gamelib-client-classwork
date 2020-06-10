import React, {Component} from 'react';
import GameModel from '../models/game';

class NewGame extends Component {
  state = {
    title: '',
    publisher: '',
    coverArtUrl: '',
    completed: false
  }

  handleSubmit = (event) => {
    event.preventDefault();
    GameModel.create(this.state)
    .then(data => {
      // redirects to game list page
      this.props.history.push('/games');
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
  }

  render() {
    return (
      <div>
        New Game form
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

export default NewGame;