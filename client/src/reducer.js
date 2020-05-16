export default (state, action) => {
    switch (action.type) {
        case 'ENTERED':
            return {
                ...state,
                entered: true,
                userName: action.payload.userName,
                roomId: action.payload.roomId
            }
        case 'SET_USERS':
            return {
                ...state,
                users: action.payload,
            }
        case 'NEW_MESSAGE':
            console.log(action.payload)
            return {
                ...state,
                messages: [...state.messages, action.payload],
            }
        case 'EXISTING_MESSAGES':
            console.log(action.payload)
            return {
                ...state,
                messages: action.payload,
            }
        default:
            break;
    }
}