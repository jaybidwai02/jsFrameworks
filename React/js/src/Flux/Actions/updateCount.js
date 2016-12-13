import {Dispatcher} from 'flux';
import dispatcher from '../countDispatcher';
import actionConst from './countActionConst';

//const UPDATE_COUNT = 'update_count';

let countActions = {
	updateCount(count){
		//console.log(count);
		dispatcher.dispatch({
			type:actionConst.UPDATE_COUNT,
			count:1
		})
	},

	decrementCount(count){
		dispatcher.dispatch({
			type:actionConst.DEC_COUNT,
			count:2
		})
	}
}

export default countActions;