const redux = require("redux");

const counterReducer = (state = { counter: 0 }, action) => {
  const { counter } = state;

  if (action.type === "increment") {
    return { counter: counter + 1 };
  }

  if (action.type === "decrement") {
    return { counter: counter - 1 };
  }
  if (action.type === "incrementBy2") {
    return { counter: counter + 2 };
  }
  if (action.type === "decrementBy2") {
    return { counter: counter -2 };
  }

  return state;
};

const store = redux.createStore(counterReducer);

const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

store.subscribe(counterSubscriber);

for (let i = 0; i < 5; i++) {
  store.dispatch({ type: "increment" });
}

store.dispatch({ type: "decrement" });

console.log("Final state:", store.getState());
