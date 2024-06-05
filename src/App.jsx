import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Result from "./components/Result.jsx";
import { useState } from "react";

function App() {
  const [userData, setUserData] = useState({
    initialInvestment: 15000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });
  const validUserInput = userData.duration >= 1;
  function userDataHandler(inputIdentifier, newValue) {
    setUserData((oldData) => {
      return {
        ...oldData,
        [inputIdentifier]: +newValue,
      };
    });
  }
  return (
    <main>
      <Header>Investment Calculator</Header>
      <UserInput change={userDataHandler} data={userData} />
      {validUserInput ? (
        <Result data={userData} />
      ) : (
        <p className="center">Please enter correct positive duration</p>
      )}
    </main>
  );
}

export default App;
