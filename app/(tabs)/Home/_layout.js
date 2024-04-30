
import {Stack} from "expo-router";
import { AuthProvider } from "../../(authenticate)/context/AuthContext";
export default function Layout(){
    return (
        <AuthProvider>
        <Stack screenOptions={{headerShown:false}}>
            <Stack.Screen name="index"/>
        </Stack>
        </AuthProvider>
    )
}
