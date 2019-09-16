import { handleActions } from 'redux-actions';

const SAVE_USERNAME = 'base/SAVE_USERNAME';

const initialState = {
    userName: '',
}

export default handleActions({
    [SAVE_USERNAME]: (state, action) => {
        const { userName } = action
        console.log(action);
        return{
            ...state,
            userName
        }
    }
}, initialState)