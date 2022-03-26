import types from './types';

const useActions = (state, dispatch) => ({
    spinLogo: payload => {
        dispatch({
            type: types.SPIN_LOGO,
            payload,
        });
    },
});

export default useActions;