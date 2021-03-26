import React,{createContext, useCallback, useContext, useState}  from 'react';
import api from '../services/api';

interface AuthState{
  token:string;
  user:object;
}

interface SignInCredentials{
  email:string,
  password:string
}

interface AuthContextData{
  user:object;
  signIn(credentials:SignInCredentials):Promise<void>;
  signOut():void;
}

export const  AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
);

export const AuthProvider:React.FC =({children}) =>{
  const [data, setData] = useState<AuthState>(()=>{
    const token = localStorage.getItem('@legged-angels:token');
    const user = localStorage.getItem('@legged-angels:user');

    if(token && user){
      return {token, user:JSON.parse(user)}
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async({email,password})=>{

    const response = await api.post('register',{
      email,
      password
    });

    const {token, user} = response.data;

    localStorage.setItem('@legged-angels:token',token);
    localStorage.setItem('@legged-angels:user',user);

    setData({token, user});

    console.log(response.data);
  },[]);

  const signOut = useCallback(()=>{
    localStorage.removeItem('@legged-angels:token');
    localStorage.removeItem('@legged-angels:user');

    setData({} as AuthState)
  },[]);


  return(
    <AuthContext.Provider value={{user:data.user,signIn,signOut}}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth():AuthContextData{
  const context = useContext(AuthContext);

  if(!context){
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export {useAuth};
