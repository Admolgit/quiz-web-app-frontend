import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import { composeWithDevTools } from "redux-devtools-extension";
import { listQuestion } from '../reducers/question';

const rootReducer = combineReducers({
  questionList: listQuestion
})

const initialState = {
  questionList: [],
}

const middleware = [thunk];
const stores = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['questionList']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

let store = createStore(persistedReducer)

let persistor = persistStore(store)

export { store, persistor }