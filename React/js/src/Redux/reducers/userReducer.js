const initialState = {
	list:[],
	loading:false
}
export const userReducer = (state=initialState, action) => {
	switch(action.type){
		case "Lading_Users":
		case "User_Load_Error":
		state = {...state, loading:true} 
		break;
		case "User_Loaded":
		state = {...state,loading:false,list:action.payload}
		break;
	}
 	return state
}

export const appReducer = (state, action) =>{

}