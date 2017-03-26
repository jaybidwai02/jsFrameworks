import {EventEmitter} from 'events';
import dispatcher from '../dispatcher';

class CountStore extends EventEmitter{
	constructor(){
		super();
		this.data = {
			count: 10
		}
	}

	getData(){
		return this.data.count
	}

	updateStore(data){
		this.data.count = data;

		this.emit('change');
	}

	actionListener(dispatchedAction){
		//console.log(dispatchedAction);
		switch(dispatchedAction.action){
			case 'INC_COUNT': {
				this.updateStore(dispatchedAction.data);
			}
			break;

			case 'DEC_COUNT': {
				this.updateStore(dispatchedAction.data);
			}
			break;
		}
	}
}

const CountStoreObj = new CountStore;

dispatcher.register(CountStoreObj.actionListener.bind(CountStoreObj));

export default CountStoreObj;