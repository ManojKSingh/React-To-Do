export const ToDoReducer = (state, action) => {
	switch(action.type) {
		case 'ADD_TO_DO': 
			return {...state, 
			[action.todo.id]: {
					value: action.todo.value,
					isDone: false
			}}
		case 'DELETE_TO_DO': 
			const {[action.id]: removed, ...rest} = state;
			return {
					...rest
			}
		case 'UPDATE_TO_DO':
			const {[action.id]: current, ...remaining} = state;
			const updatedCurrent = {...current, isDone: !current.isDone};
			return {
				...remaining,
				[action.id]: updatedCurrent
			}
		default:
				return state;
	}
};