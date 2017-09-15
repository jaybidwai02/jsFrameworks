import { EventEmitter } from 'events'
import dispatcher from '../dispatcher/Dispatcher'

class FluxStore extends EventEmitter{

	constructor(){
		super()

		this.count = 0;
	}

	getCount(){
		return this.count
	}

	eventHandler(action){
		switch(action.type){
			case 'INC':
				this.count = this.count + action.payload;
			break;

			case 'DEC':
				this.count = this.count - action.payload
			break

			default:
				break
		}

		this.emit('update')
	}

}

const store = new FluxStore();

dispatcher.register(store.eventHandler.bind(store));

export default store;