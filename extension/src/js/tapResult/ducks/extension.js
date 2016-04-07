const initialState = {
    connected: false,
    options: {
        autoStart: false,
    }
}

export default function reducer(state = initialState, {type, options}) {
    switch (type) {
        case 'options':
            return {
                ...state,
                options,
            }
        case 'tapResult/init':
            return {
                ...state,
                connected: true,
            };
        default:
            return state;
    }
}
