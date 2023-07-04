import React from 'react';
import { GoogleLogin } from '@react-oauth/google';

function App() {
  console.log(process.env.REACT_APP_CLIENT_ID);
  return (
    <div className="App">
      <GoogleLogin
        onSuccess={credentialResponse => {
          console.log(credentialResponse);
        }}
        onError={() => {
          console.log('Login Failed');
        }}
      />
    </div>
  );
}

export default App;
