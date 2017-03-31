import {EventEmitter} from 'events';
import dispatcher from './Dispatcher';

class ToDoAppSotre extends EventEmitter{
	constructor(){
		super();

		this.todo = [
			{
				task:'task1'
			}
		];
	}

	getTodo(){
		return this.todo;
	}

	updateToDo(payload){
		this.todo.push(payload);

		this.emit('storeChange');
	}

	actionListener(action){
		switch(action.type){
			case 'ADD_TASK':{
				this.updateToDo(action.payload);
			}
			break;

			default:
			break;
		}
	}

}

const todoStore = new ToDoAppSotre;

dispatcher.register(todoStore.actionListener.bind(todoStore));

export default todoStore;