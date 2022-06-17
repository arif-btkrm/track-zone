
import { useState } from 'react';
import './App.css';
import ClockWrapper from './components/ClockWrapper';
import EditForm from "./components/EditForm/EditForm";
import Header from './components/Header/Header';
import InputForm from './components/InputForm/InputForm';
import MyClock from './components/MyClock/MyClock';

function App() {

  // const init = {
  //   clockTitle: "",
  //   clockZone: "",
  //   clockNote: "",
  // };

  const [input,setInput] = useState({});
  const [clocks, setClocks] = useState([]);
  const [editForm, setEditForm] = useState(null);

  return (<div className ="container">
    <Header />
    <MyClock />
    <InputForm input = {input} setInput = {setInput} clocks = {clocks} setClocks = {setClocks}/>
    <EditForm  editForm = {editForm} setEditForm={setEditForm} input = {input} setInput = {setInput} clocks = {clocks} setClocks = {setClocks}/>
    
    <ClockWrapper editForm = {editForm} setEditForm = {setEditForm} clocks = {clocks} setClocks = {setClocks}/> 
  </div>
  );
}

export default App;
