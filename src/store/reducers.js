import types from './types';

const initialState = {
    spin_cls_dir: 'App-logo-spin-cw',
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case (types.SPIN_LOGO):
            return {
                ...state,
                spin_cls_dir: action.payload,
            };
        default:
            return state;
    }
};

export { initialState, reducer };