import React,{createContext, useCallback, useContext, useState}  from 'react';
import api from '../services/api';
import {useHistory} from 'react-router-dom';

interface UserProps{
  idUser:number;
  photoProfile:string;
  name:string;
  lastName:string;
}

interface AuthState{
  token:string;
  user:UserProps;
}

interface SignInCredentials{
  email:string,
  password:string
}

interface AuthContextData{
  user:UserProps;
  signIn(credentials:SignInCredentials):Promise<void>;
  signOut():void;
  token:string;
}

export const  AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
);

export const AuthProvider:React.FC =({children}) =>{

  const history = useHistory();

  const [data, setData] = useState<AuthState>(()=>{
    const token = localStorage.getItem('@legged-angels:token');
    const user = localStorage.getItem('@legged-angels:user');

    if(token && user){
      return {token, user:JSON.parse(user)}
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async({email,password})=>{

    const response = await api.post('v1/login',{
      email,
      password
    });

    const {token, user} = response.data;

    if(token){
      history.push('/home')
    }

    localStorage.setItem('@legged-angels:token',token);
    localStorage.setItem('@legged-angels:user',JSON.stringify(user));

    setData({token, user});

    console.log(response.data);
  },[history]);

  const signOut = useCallback(()=>{
    localStorage.removeItem('@legged-angels:token');
    localStorage.removeItem('@legged-angels:user');

    setData({} as AuthState)
  },[]);


  return(
    <AuthContext.Provider value={{token:data.token,user:data.user,signIn,signOut}}>
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
