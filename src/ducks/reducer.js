const INITIAL_STATE = {
	user: ''
}

const SET_USER = 'SET_USER';


export function reducer(state = INITIAL_STATE, action) {
	console.log("REDUCER HIT: Action =>", action);
	switch(action.type) {
		case SET_USER:
		return Object.assign({}, state, { user: action.payload });

		default: return state;
	}
}

export function setUser(user) {
	return {
		type: SET_USER,
		payload: user
	}
}