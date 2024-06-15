import { createStore, applyMiddleware, compose } from 'redux';
import reducers from '../reducers/index';

// You can add your middleware here
const middleware = [];

// Function to configure and create the Redux store
function configureStore(preloadedState) {
    // Use Redux DevTools extension compose if available, otherwise use Redux's compose
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    // Create the store with reducers, initial state, and middleware
    const store = createStore(
        reducers,
        preloadedState,
        composeEnhancers(applyMiddleware(...middleware))
    );

    // Enable hot module replacement for reducers
    if (module.hot) {
        module.hot.accept('../reducers/index', () => {
            const nextRootReducer = require('../reducers/index').default;
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
}

// Initialize the store with optional preloaded state (if any)
const store = configureStore(/* preloadedState */);
export default store;
