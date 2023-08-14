import React from 'react';
import './App.css';
import { type } from 'os';
import InputField from './components/InputField';

const App: React.FC = () => {
  
  return (
    <div className="App">
      <span className='heading'>Taskify</span>
      <InputField />
    </div>
  );
}

export default App;