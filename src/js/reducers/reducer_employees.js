export default function(state = [], action) {
    switch(action.type) {
        case 'ADD_EMPLOYEE':
            action.payload.id = state.length+1;
            return state.concat(action.payload);
        default:
            return state;
    }
}