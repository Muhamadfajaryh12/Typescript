import React from 'react';
import './App.css';
import { LearnProps } from './components/LearnProps';
import { BasicProps } from './components/BasicProps';
import { BasicPropsList } from './components/BasicPropsList';
function App() {
  const personName ={
    first:'fajar',
    last:'herjanto'
  }
  const personNameList =[
    {
      first:"fajar",
      last:"herjanto"
    },
    {
      first:"Muhamad",
      last:"Yudhistira"
    }
  ]
  return (
    <div className="App">
      <LearnProps name={"test"} messageCount={10} isLoggedIn={true}/>
      <BasicProps name={personName}/>
      <BasicPropsList names={personNameList}/>
    </div>
  );
}

export default App;
