import { useDispatch, useSelector } from "react-redux";
import { add, take, checkWin } from "./store/index";
import { useEffect } from "react";

function App() {
  const { value, incClicks, decClicks, isWin } = useSelector(
    (state) => state.counter
  );
  const disp = useDispatch();
  const addf = () => {
    disp(add());
    disp(checkWin());
  };
  const takef = () => {
    disp(take());
    disp(checkWin());
  };

  return (
    <div className="App">
      <p>{value}</p>
      <button onClick={() => addf()}>increase {incClicks}</button>
      <button onClick={() => takef()}>decrease {decClicks}</button>
      <p>{isWin}</p>
    </div>
  );
}

export default App;
