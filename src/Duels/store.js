/*import {applyMiddleware, combineReducers, createStore} from 'redux';

const username = (state = '', action) => {
    switch (action.type) {
        case 'SET_USERNAME':
            return action.text;
        default:
            return state;
    }
};

const score = (state = {player: 0, computer: 0, lastWinner: ''}, action) => {
    let score;
    switch (action.type) {
        case 'COMPUTER_WIN':
            score = state.computer + 1;
            return Object.assign({}, state, {
                computer: score,
                lastWinner: 'computer'
            });
        case 'PLAYER_WIN':
            score = state.player + 1;
            return Object.assign({}, state, {
                player: score,
                lastWinner: 'player'
            });
        case 'DRAW':
            return Object.assign({}, state, {
                lastWinner: 'draw'
            });
        default:
            return state;
    }
};

const spells = (state = {player: '', computer: ''}, action) => {
    switch (action.type) {
        case 'SET_PLAYER_SPELL':
            return Object.assign({}, state, {
                player: action.text
            });
        case 'SET_COMPUTER_SPELL':
            return Object.assign({}, state, {
                computer: action.text
            });
        default:
            return state;
    }
};

const status = (state = 'player_turn', action) => {
    switch (action.type) {
        case 'PLAYER_TURN':
            return 'player_turn';
        case 'COMPUTER_TURN':
            return 'computer_turn';
        case 'GAME_END':
            return 'end';
        default:
            return state;
    }
};

const game = combineReducers({
    username,
    score,
    spells,
    status
});


export default createStore(game, {}, applyMiddleware(logger));
*/