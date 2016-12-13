import {EventEmitter} from 'events';
import dispatcher from '../countDispatcher';
import actionConst from '../Actions/countActionConst';

class CountStore extends EventEmitter{
	constructor(){
		super()
		this.count = 0;
	}

	getCount(){
		return this.count;
	}

	eventListener(action){
		//console.log(action);
		switch(action.type){
			case actionConst.UPDATE_COUNT:
			this.count = this.count + action.count;
			break;

			case actionConst.DEC_COUNT:
			this.count = this.count - action.count;
			break;

			default:
			break;
		}
		this.emit('update');
	}
}

let countStore = new CountStore;
dispatcher.register(countStore.eventListener.bind(countStore));

export default countStore;
