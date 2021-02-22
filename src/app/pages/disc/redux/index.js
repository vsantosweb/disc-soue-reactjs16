export default function DiscReducer(state = {}, action) {

    let actionData = Object.assign({}, action.payload);

    switch (action.type) {
        case 'SET_CURRENT_STEP':
            return { ...state, currentStep: action.payload };

        case 'SET_DISC_SESSION':
            return { ...state, session: action.payload };

        case 'SET_DISC_QUESTIONS':
            return { ...state, questions: action.payload };
        default:
            return state
    }
}