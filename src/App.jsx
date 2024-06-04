import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Result from "./components/Result.jsx";
import { useState } from "react";

function App() {
  let [userData, setUserData] = useState({});

  return (
    <main>
      <Header>Investment Calculator</Header>
      <UserInput />
      <Result data={userData} />
    </main>
  );
}

export default App;
