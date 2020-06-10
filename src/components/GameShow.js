import React, {Component} from 'react';
import GameModel from '../models/game';
import GameCard from './GameCard';

class GameShow extends Component {
  state = {
    game: {}
  }

  componentDidMount() {
    this.getGameData();

  }

  updateGame = () => {
    this.getGameData();
  }

  getGameData = () => {
    GameModel.show(this.props.match.params.id)
    .then(data => {
      console.log('data', data);
      this.setState({
        game: data.game
      });
    })
  }

  render() {
    return (
      <div>
        <h1>{this.state.game.title}</h1>
        <GameCard game={this.state.game} updateGame={this.updateGame}/>
      </div>
    )
  }
}

export default GameShow;
