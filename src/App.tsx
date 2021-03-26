import {BrowserRouter } from 'react-router-dom';

import {AuthProvider}  from './hooks/AuthContext';
import Routes from './routes';

import GlobalStyle from './styles/global';

const App:React.FC = () =>(
  <BrowserRouter>
    <AuthProvider>
      <Routes/>
    </AuthProvider>

    <GlobalStyle/>
  </BrowserRouter>
)

export default App;
