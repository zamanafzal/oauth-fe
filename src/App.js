import logo from './logo.svg';
import './App.css';
import { googleAuth } from './hooks'
import { GoogleLogin } from '@react-oauth/google';

function App() {
  const onGoogleAuthLoginSuccess = async (res) => {
    await googleAuth(res.credential);
  };

  const onGoogleAuthLoginFailure = (res) => {
    console.log('Login Failed:', res);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <GoogleLogin onSuccess={onGoogleAuthLoginSuccess} onError={onGoogleAuthLoginFailure} />
      </header>
    </div>
  );
}

export default App;
