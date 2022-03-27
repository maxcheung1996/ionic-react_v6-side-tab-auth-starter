import React from "react";

// Class object for authInfo(user login data info)
type UserDataInterface = { initialized: boolean; loggedIn: boolean; user: any };

// Interface for AuthContext Method eg. login()
type MyContextInterface = {
  authInfo: UserDataInterface;
  initialize: () => Promise<boolean>;
  logOut: () => Promise<boolean>;
  logIn: (email: string, password: string) => Promise<boolean>;
};

// create the context
export const AuthContext = React.createContext<MyContextInterface | undefined>(
  undefined
);

// create the context provider, we are using use state to ensure that
// we get reactive values from the context...
type Props = {
  children: React.ReactNode;
};
export const AuthProvider: React.FC = (props: any) => {
  // the reactive values
  const [authInfo, setAuthInfo] = React.useState<UserDataInterface>();

  const logOut = () => {
    return new Promise((resolve) => {
      window.localStorage.removeItem("AUTH");
      setAuthInfo({ initialized: true, loggedIn: false, user: null });
      setTimeout(() => {
        return resolve(true);
      }, 1000);
    });
  };

  const logIn = (email: string, password: string) => {
    let userLoginAuth: Boolean = false;
    userLoginAuth = email === '1234' && password == '1234' ? true : false
    if (userLoginAuth) {
      return new Promise((resolve) => {
        let v = {
          initialized: true,
          loggedIn: true,
          user: { email, id: new Date().getTime() + "" },
        };
        setAuthInfo(v);
        window.localStorage.setItem("AUTH", JSON.stringify(v.user));
        setTimeout(() => {
          return resolve(true);
        }, 1000);
      });
    } else {
      return new Promise((resolve) => {
        setAuthInfo({ initialized: true, loggedIn: false, user: null });
        setTimeout(() => {
          return resolve(false);
        }, 1000);
      });
    }
  };

  const initialize = () => {
    let response = window.localStorage.getItem("AUTH") || null;
    if (response !== null) {
      setAuthInfo({
        initialized: true,
        loggedIn: true,
        user: JSON.parse(response),
      });
    } else {
      setAuthInfo({
        initialized: true,
        loggedIn: false,
        user: null,
      });
    }
  };

  let v = {
    authInfo,
    logOut: logOut,
    logIn: logIn,
    initialize,
  };

  return <AuthContext.Provider value={v} {...props} />;
};

export const useAuth = () => React.useContext(AuthContext);
