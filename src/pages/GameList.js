import React, {Component} from 'react';
import GameModel from '../models/game';
import { Link } from 'react-router-dom';
import GameCard from '../components/GameCard';

class GameList extends Component {
  state = {
    games: []
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    GameModel.all()
      .then(data => {
        console.log(data);
        this.setState({
          games: data.games
        });
      })
      .catch(err => console.log('error in fetch', err));
  }

  render() {
    // map game data to GameCard
    const gameCards = this.state.games.map((game, index) => (
      <>
      <Link to={`/games/${game._id}/`} key={index}>
        <h2>{game.title}</h2>
      </Link>
      <div>
        <Link to={`/games/${game._id}/delete`}>
        <i className="fa fa-trash" aria-hidden="true"></i>
        </Link>
      </div>
        <img src={game.coverArtUrl}></img>
      {/* could use spread operator {...game} */}
      </>
    ));

    return (
      <div>
        <h1>Game List</h1>
        <Link to={'games/new'}>Add New Game</Link>
        {this.state.games ? gameCards : 'Loading...'}
      </div>
    )
  }
}

export default GameList;