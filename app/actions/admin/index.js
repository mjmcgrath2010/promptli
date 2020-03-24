import { adminActionTypes } from '../../constants/index';

const adminActions = {
	initAdmin() {
		return { type: adminActionTypes.INIT_ADMIN };
	},
};

export default adminActions;
