import react from 'react';
import './App.css';
import Header from "./Components/Header";
import UserManagement from './Components/UserManagement';


function App() {
  return (
    <div className='ui container'>
      <Header />
      <UserManagement />
    </div>
  );
}

export default App;
