import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Auth } from './pages/Auth';
import { ViewDocument } from './pages/ViewDocument';
import { CookiesProvider, useCookies } from 'react-cookie';
import { AuthContextProvider } from './contexts/AuthContext';
import { GlobalStyle } from './styles/global';
import { Documentos } from './pages/Documentos';
import { isAuthenticated as isAuth } from './services/auth';
import { SignDocument } from './pages/SignDocument';
import { useAuth } from './hooks/useAuth';


export function App() {
  const [cookies,] = useCookies(['byebnk@token']);
  const { isAuthenticated } = useAuth();

  const PrivateRoute = ({ component: Component, ...rest }: any) => {
    return (
      <Route
        {...rest}
        render={props => isAuth(cookies) ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        )}
      />
    )
  }

  return (
    <BrowserRouter>
      <CookiesProvider>
        <AuthContextProvider>
          <Switch>
            <Route exact path="/" render={() => (
              isAuthenticated ? (
                <Redirect to="/documentos" />
              ) : (
                <Auth />
              )
            )} />
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
