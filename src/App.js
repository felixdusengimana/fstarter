import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap';
import Button from './components/atoms/Button';

function App() {
  return (
    <div className="p-4">
      <Button theme={'success'}/>
    </div>
  );
}

export default App;
