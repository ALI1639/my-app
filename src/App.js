import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() =>
      setAlert(null),
      2000);
  };
  // const removeBodyClasses =()=>{
  //   document.body.classList.remove('bg-light')
  //   document.body.classList.remove('bg-dark')
  //   document.body.classList.remove('bg-success')
  //   document.body.classList.remove('bg-danger')
  //   document.body.classList.remove('bg-warning')
  //   document.body.classList.remove('bg-secondary')
  // }

  const toggleMode = () => {
    // console.log(cls)
    //  removeBodyClasses();
    // document.body.classList.add('bg-'+cls)
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#0b304b';
      showAlert("Dark mode has been Enabled", "success");
      document.title = 'Textutils - Dark Mode';
      // setInterval(() => {
      //   document.title = 'Textutils is Amzaing Mode';
      // }, 2000);
      //  setInterval(() => {
      //   document.title = 'Install Textutils Now';
      // }, 1500);
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been Enabled", "success");
      document.title = 'Textutils - Light Mode';
    }
  };

  return (
    <>

      <Navbar title="Textutils" about="About Us" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm heading="Textutils - word counter,character counter,remove extra spaces" showAlert={showAlert} mode={mode} />
      </div>


    </>
  );
}
export default App;