import {createStore, applyMiddleware,compose} from 'redux';
import reducers from '../reducers/index';


const middleware = [];

function configureStore(preloadedState) {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(
        reducers,
        preloadedState,
        composeEnhancers(applyMiddleware(...middleware))
    );

    if (module.hot) {
        module.hot.accept('../reducers/index', () => {
            const nextRootReducer = require('../reducers/index').default;
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;

}

const store = configureStore();
export default store;