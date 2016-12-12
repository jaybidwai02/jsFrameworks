import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';

class ToDoStore extends EventEmitter{
	constructor(){
		super();
		this.toDo = [
			{
				id:1,
				task:'task1',
				complete:false
			},
			{
				id:2,
				task:'task2',
				complete:false
			}
		];
	}

	createToDo(task){
		let id = Date.now();
		this.toDo.push({
			id,
			task,
			complete:false
		});
		this.emit('change');
	}

	getToDo(){
		return this.toDo;
	}

	handelActions(action){
		switch(action.type){
			case 'CREATE_TODO':
				this.createToDo(action.text);
				break;
			default:
			break;
		}
	}
}


const toDoStore = new ToDoStore;
dispatcher.register(toDoStore.handelActions.bind(toDoStore));
window.toDoStore = toDoStore;
window.dispatcher = dispatcher;

export default toDoStore;