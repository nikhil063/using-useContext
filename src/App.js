import React from "react";
import Newfile3 from "./Newfile3"

let context = React.createContext();

const App = () => {
  const name = "JAKE";
  return (
    <>
      <context.Provider value={name}>
        <Newfile3 />
      </context.Provider>
    </>
  );
}
export default App;
export {context};
