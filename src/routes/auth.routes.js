import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

const AuthStack = createNativeStackNavigator();

export default function AuthRoutes(){
    return(
        <AuthStack.Navigator>
            <AuthStack.Screen
                name="SignIn"
                component={SignIn}
                options={{
                    headerShown:false
                }}
            />
            <AuthStack.Screen
                name="SignUp"
                component={SignUp}
                options={{
                    headerTitle:"Voltar",
                    headerTintColor:"#fff",
                    headerBackTitleVisible: false,
                    headerStyle:{
                        backgroundColor:'#3b3bdf',
                        borderBottomWidth:1,
                        borderBottomColor:'#00b94a'
                    }
                }}
            />
        </AuthStack.Navigator>
    )
}