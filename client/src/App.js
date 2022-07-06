import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap';
// import Button from './components/atoms/Button';
import Table from './components/molecules/Table';
import Input from './components/atoms/Input';

function App() {
  const handleClick = (headerName)=>{
    alert(headerName)
  }

  return (
    <div className="p-4">
      <Table 
      headers={[
        {id: 1, name: "Title", icon: "help", action: handleClick},
        {id: 2, name: "Title", icon: "sort", action: ()=>{}},
        {id: 3, name: "Title", icon: "", action: ()=>{}},
        {id: 4, name: "Title", icon: "", action: ()=>{}},
        {id: 5, name: "Title", icon: "", action: ()=>{}},
        {id: 6, name: "Title", icon: "", action: ()=>{}},
        {id: 7, name: "Title", icon: "", action: ()=>{}},
        {id: 8, name: "Title", icon: "", action: ()=>{}},
        {id: 9, name: "Title", icon: "", action: ()=>{}}
      ]}
      datas={[
        {value1: "felix", value2: "dusengimana", value3: "wazekwa", value4: "afex", value5: "fff"},
        {value: "felix"},
      ]}
      withIndex/>
      
      <Input 
      theme={{
        background: "#E9E8FC",
        color: "#242533",
        borderColor: "#FF218C"
      }}/>
    </div>
  );
}

export default App;
