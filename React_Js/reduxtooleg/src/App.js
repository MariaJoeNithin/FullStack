import { store } from "./app/store";
import Counter from "./components/Couter";
import { Provider } from "react-redux";

export default function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}
