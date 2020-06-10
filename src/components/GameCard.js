import React, {Component} from 'react';
import {Link} from 'react-router-dom';
// use sass to style
// import './GameCard.scss';
import EditGame from './EditGame';

class GameCard extends Component {
  state = {
    formStyle: {display: "none"}
  }
  
  toggleForm = () => {
    if (this.state.formStyle.display === "block") {
      this.setState({
        formStyle: {display: "none"}
      })
    } else {
      this.setState({
        formStyle: {display: "block"}
      })
    }
  }


  render() {
    return (
      <div>
        <span onClick={this.toggleForm} className="edit">Edit</span>
        <EditGame 
          game={this.props.game} 
          formStyle={this.state.formStyle}
          updateGame={this.props.updateGame} 
          toggleForm={this.toggleForm} />
        <Link to={`/games/${this.props.game._id}/delete`}>
          <i className="fa fa-trash" aria-hidden="true"></i>
        </Link>
        <div className="image-wrap">
          <img src={this.props.game.coverArtUrl} alt="game cover art"/>
          <h4>Made By: {this.props.game.publisher}</h4>
          <h4>Completed: {this.props.game.completed ? "Yes" : "No"}</h4>
        </div>

      </div>
    )
  }
}

export default GameCard;