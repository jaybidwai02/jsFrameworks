import dispatcher from '../Dispatcher';

export function addTask(task){
	console.log(task);
	dispatcher.dispatch({
		type:'ADD_TASK',
		payload: task
	});
}