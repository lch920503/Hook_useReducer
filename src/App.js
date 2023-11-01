import "./App.css";
import { useReducer, useState } from "react";

/*
  OO은행
  입금/출금 가능
  예금 초기금액 1만원
  예금: 1천원 단위
  출금: 1천원 단위
  잔액 < 출금액 : 출금 불가
  최저 잔액: 0
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
      if (state < action.payload) {
        return state;
      }
      return state - action.payload;
    default:
      return state;
  }
};

const initialState = 10000;

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [money, setMoney] = useState(0);

  const handleDeposit = () => {
    dispatch({ type: ACTION_TYPE.deposit, payload: money });
  };
  const handleWithdraw = () => {
    dispatch({ type: ACTION_TYPE.withdraw, payload: money });
  };
  const changeMoney = (e) => {
    setMoney(parseInt(e.target.value));
  };

  return (
    <>
      <h1>useReducer</h1>
      <input
        type="number"
        value={money}
        step={1000}
        onChange={changeMoney}
        min={0}
      />
      <button onClick={handleDeposit}>입금</button>
      <button onClick={handleWithdraw}>출금</button>
      <p>{state}</p>
    </>
  );
}

export default App;
