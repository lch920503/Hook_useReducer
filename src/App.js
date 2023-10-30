import "./App.css";
import { useReducer, useState } from "react";

/*
  OO은행
  입금/출금 가능
  예금 초기금액 1만원
  예금: 1천원 단위
  출금: 1천원 단위
*/

const ACTION_TYPE = {
  deposit: "deposit",
  withdraw: "withdraw",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPE.deposit:
      return state + action.payload;
    case ACTION_TYPE.withdraw:
      return state - action.payload;
    default:
      return state;
  }
};

function App() {
  const [money, dispatch] = useReducer(reducer, 10000);
  const [number, setNumber] = useState(0);

  const handleDeposit = () => {
    dispatch({ type: ACTION_TYPE.deposit, payload: number });
  };
  const handleWithdraw = () => {
    dispatch({ type: ACTION_TYPE.withdraw, payload: number });
  };
  const changeNumber = (e) => {
    setNumber(parseInt(e.target.value));
  };

  return (
    <>
      <h1>useReducer</h1>
      <input
        type="number"
        value={number}
        step={1000}
        onChange={changeNumber}
        min={0}
      />
      <button onClick={handleDeposit}>입금</button>
      <button onClick={handleWithdraw}>출금</button>
      <p>{money}</p>
    </>
  );
}

export default App;
