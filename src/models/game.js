const url = `http://localhost:3001/api/v1`

class GameModel {
  static all = () => {
    return fetch(`${url}/games`).then(res => res.json())
  }

  static show = (gameId) => {
    return fetch(`${url}/games/${gameId}`).then(res => res.json())
  }

  static create = (game) => {
    return fetch(`${url}/games`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(game)
      })
      .then(res => res.json())
  }

  static delete = (gameId) => {
    return fetch(`${url}/games/${gameId}`, {
      method: "DELETE"
    })
    .then(res => res.json())
  }

  static update = (gameId, game) => {
    return fetch(`${url}/games/${gameId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(game)
    })
    .then(res => res.json())
  }
}

export default GameModel;