const initialState = {
    tests: {},
    status: 'empty',
    assertCount: 0,
    okCount: 0,
    errorCount: 0,
}

export function resetStatus() {
    return {
        type: 'reset',
    }
}

export default function reducer(state = initialState, action) {
    const {
        id,
        ok,
        name,
        operator,
        actual,
        expected,
        test,
        type,
        parent,
    } = action;
    let updatedTests = {};

    switch (type) {
        case 'tapResult/init':
        case 'reset':
            return initialState;

        case 'tapResult/test':
            // add reference to parent
            if (typeof parent !== 'undefined') {
                const parentTest = state.tests[parent];
                updatedTests = {
                    [parent]: {
                        ...parentTest,
                        subtests: [
                            ...parentTest.subtests,
                            id
                        ]
                    }
                };
            }

            return {
                ...state,
                tests: {
                    ...state.tests,
                    ...updatedTests,
                    [id]: {
                        ...action,
                        subtests: [],
                        assertions: [],
                        ended: false,
                    },
                },
                status: 'running'
            }

        case 'tapResult/assert':

            const containingTest = state.tests[test];
            const assertCount = state.assertCount + 1;
            const okCount = state.okCount + (ok ? 1 : 0);
            const errorCount = state.errorCount + (ok ? 0 : 1);

            return {
                ...state,
                tests: {
                    ...state.tests,
                    [containingTest.id]: {
                        ...containingTest,
                        assertions: [
                            ...containingTest.assertions,
                            action,
                        ],
                    },
                },
                assertCount,
                okCount,
                errorCount,
            };

        case 'tapResult/end':
            const finishedTest = state.tests[test];
            return {
                ...state,
                tests: {
                    ...state.tests,
                    [finishedTest.id]: {
                        ...finishedTest,
                        ended: true,
                    },
                },
            };

        case 'tapResult/endAll':
            return {
                ...state,
                status: 'finished',
            }
        default:
            return state;
    }
}
