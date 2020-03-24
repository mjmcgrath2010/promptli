import { adminActionTypes } from '../../constants/index';

const initialState = {
	user: {},
	account: {},
	reservations: [],
	auth: {},
	ready: false,
};

const admin = (state = initialState, action) => {
	switch (action.type) {
		case adminActionTypes.INIT_ADMIN:
			return Object.assign({}, state, {
				ready: true,
			});
		default:
			return state;
	}
};

export default admin;
