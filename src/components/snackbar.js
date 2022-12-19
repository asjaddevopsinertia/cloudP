import React from 'react';

  import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  
  export const Snackbar = () => {

    return (
      <div>
        <ToastContainer position='bottom-right' theme='colored'/>
      </div>
    );
  }