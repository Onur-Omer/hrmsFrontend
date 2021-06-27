import "./App.css";
import "semantic-ui-css/semantic.min.css";

import Advertisement from './pages/Advertisement';
import JobAdAdd from "./pages/JobAdAdd";
import Main from "./pages/Main";
import CvAdd from "./pages/CvAdd";
import LoginForEmployee from "./pages/LoginForEmployee";
import LoginForEmployer from "./pages/LoginForEmployer"
import LoginForPersonel from "./pages/LoginForPersonel"
import RegisterForEmployer from "./pages/RegisterForEmployer";
import RegisterForEmployee from "./pages/RegisterForEmployee";
import RegisterForPersonel from "./pages/RegisterForPersonel"
import CvShow from "./pages/CvShow"
import JobAdShowForEmployer from "./pages/JobAdShowForEmployer"
import EmployeeDetail from "./pages/EmployeeDetail";
import { Route } from 'react-router';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Main} />
      <Route exact path="/loginForEmployee" component={LoginForEmployee} />
      <Route exact path="/loginForEmployer" component={LoginForEmployer} />
      <Route exact path="/loginForPersonel" component={LoginForPersonel} />
      <Route exact path="/registerEmployee" component={RegisterForEmployee} />
      <Route exact path="/registerEmployer" component={RegisterForEmployer} />
      <Route exact path="/registerPersonel" component={RegisterForPersonel} />
      <Route exact path="/cvAdd:id" component={CvAdd} />
      <Route exact path="/cvShow:id" component={CvShow} />
      <Route exact path="/advertisement" component={Advertisement} />
      
      <Route exact path="/adsForEmployer:id" component={JobAdShowForEmployer} />
      <Route exact path="/jobAdAdd:id" component={JobAdAdd} />

       <Route exact path="/employee" component={EmployeeDetail} />
    {/* //<Route exact path="/employer:id" component={EmployerDetail} /> */}
      
    </div>
  );
}

export default App;
