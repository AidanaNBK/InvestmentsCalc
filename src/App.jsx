import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Result from "./components/Result.jsx";
import { useState } from "react";

function App() {
  let [userData, setUserData] = useState({
    initialInvestment: 10000,
    annualInvestement: 1200,
    expecteReturn: 6,
    duration: 10,
  });
  function userDataHandler(inputIdentifier, newValue) {
    setUserData((oldData) => {
      return {
        ...oldData,
        [inputIdentifier]: newValue,
      };
    });
  }
  return (
    <main>
      <Header>Investment Calculator</Header>
      <UserInput change={userDataHandler} data={userData} />
      <Result data={userData} />
    </main>
  );
}

export default App;
