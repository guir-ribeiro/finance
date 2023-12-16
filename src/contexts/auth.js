import React, {createContext, useState} from "react";
import api from "../services/api";
import { useNavigation } from "@react-navigation/native";

export const AuthContext = createContext({});

export default function AuthProvider({children}){

    const navigation = useNavigation();

    const[user, setUser] = useState(null);
    const [loadingAuth, setLoadingAuth] = useState(false);

    async function signUp(nome,email, password){
        setLoadingAuth(true);
        try{
            const reponse = await api.post('/users', {
                name: nome,
                password: password,
                email: email
            });
            setLoadingAuth(false);
            navigation.goBack();
        }catch(erro){
            console.log('ERRO NO CADASTRO: ', erro );
            setLoadingAuth(false);
        }
    }


    return(
        <AuthContext.Provider value={{signed: !!user, user, signUp, loadingAuth}}>
            {children}
        </AuthContext.Provider>
    )
}
