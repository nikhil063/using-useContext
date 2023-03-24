import React, { useContext } from 'react'
import { context } from './App';

const Newfile3 = () => {
    const name = useContext(context);
  return (
    <><div>
        <h3>This is the third component</h3>
      <h1>The name: {name} is being derived from the App component using useContext hook</h1>
    </div>
    </>
  )
}

export default Newfile3;
