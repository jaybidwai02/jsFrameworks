import axios from 'axios'

export default (dispatch) => {
	return (dispatch) => {
		dispatch({type:'Lading_Users'})
		axios.get('http://localhost:8080/js/src/Redux/user.json')
			.then(response => {
				dispatch({type:"User_Loaded",payload:response.data})
			})
			.catch(error => {
				dispatch({type:"User_Load_Error",payload:error})
			})
	}
}