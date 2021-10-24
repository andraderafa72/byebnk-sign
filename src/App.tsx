import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Auth } from './pages/Auth';
import { ViewDocument } from './pages/ViewDocument';
import { CookiesProvider, useCookies } from 'react-cookie';
import { AuthContextProvider } from './contexts/AuthContext';
import { GlobalStyle } from './styles/global';
import { Documentos } from './pages/Documentos';
import { isAuthenticated } from './services/auth';
import { SignDocument } from './pages/SignDocument';


export function App() {
  const [cookies,] = useCookies(['byebnk@token']);

  const PrivateRoute = ({ component: Component, ...rest }: any) => {
    return (
      <Route
        {...rest}
        render={props => isAuthenticated(cookies) ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        )}
      />
    )
  }

  const AuthRoute = ({ component: Component, ...rest }: any) => {
    return (
      <Route
        {...rest}
        render={props => isAuthenticated(cookies) ? (
          <Redirect to={{ pathname: '/documentos', state: { from: props.location } }} />
        ) : (
          <Component {...props} />
        )}
      />
    );
  }

  return (
    <BrowserRouter>
      <CookiesProvider>
        <AuthContextProvider>
          <Switch>
            <AuthRoute path="/" exact component={Auth} />
            <PrivateRoute path="/documentos" exact component={Documentos} />
            <PrivateRoute path="/documento/visualizar/:id" exact component={ViewDocument} />
            <PrivateRoute path="/documento/assinar/:id" exact component={SignDocument} />
          </Switch>
          <GlobalStyle />
        </AuthContextProvider>
      </CookiesProvider>
    </BrowserRouter>
  );
}

export default App;
