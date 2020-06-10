import React from 'react';
import GameModel from '../models/game';

const DeleteGame = (props) => {
  GameModel.delete(props.match.params.id)
  .then(data => {
    console.log('deleted game', data);
    props.history.push('/games')
  });

  return null;
}

export default DeleteGame;