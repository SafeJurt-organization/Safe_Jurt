import RoleChoice from '../pages/role_choice/RoleChoice';
import CreateAccount from '../pages/create_account/CreateAccount';
import CodeFamily from '../pages/code_family/CodeFamily';
import ConnectionFamily from '../pages/сonnection_family/ConnectionFamily';
import Login from '../pages/login/Login';
import ForgotPassword from '../pages/forgot-password/ForgotPassword';
import './app.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
        <RoleChoice/>
        <CreateAccount/>
        <CodeFamily/> 
        <ConnectionFamily/>
        <Login/>
        <ForgotPassword/>
    </div>
  );
}

export default App;
