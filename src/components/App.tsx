import { Routes, Route } from "react-router-dom";
import SignUp from 'components/SignUp';
import SignIn from 'components/SignIn';
import Welcome from 'components/Welcome';
import Paths from 'constants/paths';

const App = () => {
  return(
    <Routes>
      <Route path={Paths.ROOT} element={<SignIn />} />
      <Route path={Paths.SIGN_UP} element={<SignUp />} />
      <Route path={Paths.WELCOME} element={<Welcome />} />
    </Routes>
  )
}

export default App;
