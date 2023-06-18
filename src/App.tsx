import React from 'react';
import LabeledInput from './components/LabeledInput';
import './App.css';

function App() {
  return (
    <div >
       <LabeledInput type='text' label='Your Name' inputLabel='topAligned-label' box='outlined'/>
       <LabeledInput type='text' label='Your Name' inputLabel='topAligned-label' box='underlined'/>
       <LabeledInput type='text' label='Your Name' inputLabel='adaptive-label' box='outlined'/>


    </div>
  );
}

export default App;
