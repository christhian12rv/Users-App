import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import Table from './components/Table';
import Input from './components/Input';
import Button from './components/Button';

import './App.css';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [users, setUsers] = useState([]);
  const [inputSearch, setInputSearch] = useState('');
  const [inputRegister, setInputRegister] = useState('');

  useEffect(() => {
    getUsers();
  }, [inputSearch])

  const getUsers = async () => {
    const response = await fetch('/users/list?filter=' + inputSearch);
    const data = await response.json();
    setUsers(data.users);
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/users/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: inputRegister
      })
    });
    const data = await response.json();
    if (response.status == 200)
      toast.success(data.message, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    else
      toast.error('Houve um erro ao tentar registrar usuário', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
  }

  return (
    <div className="App">
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/" element={
            <div className="users-list-container">
              <Input inputState={inputSearch} setInput={setInputSearch} />
              <Table users={users} />
            </div>
          } />
          <Route path="/register" element={
            <div className="users-register-container">
              <form className='users-register-form' onSubmit={handleFormSubmit}>
                <Input inputState={inputRegister} setInput={setInputRegister} />
                <Button />
              </form>
            </div>
          } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
