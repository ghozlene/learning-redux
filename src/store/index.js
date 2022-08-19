import { createStore } from 'redux';

const counterReducer = (state = { counter: 0 }, action) => {
	if (action.type === 'increment') {
		return { counter: state.counter + 1 };
	}
	if (action.type === 'decrement') {
		return { counter: state.counter - 1 };
	} else {
		return state;
	}
};
const store = createStore(counterReducer);

const counterSubscriber = () => {
	const latestState = store.getState();
	console.log(latestState);
};

export default store;