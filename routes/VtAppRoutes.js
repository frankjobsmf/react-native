import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../components/app/screens/HomeScreen";
import { MapaScreen } from "../components/app/screens/MapaScreen";
import { UsuariosScreen } from "../components/app/screens/UsuariosScreen";
import { LoginScreen } from "../components/auth/screens/LoginScreen";

const Stack = createNativeStackNavigator();

export const VtAppRoutes = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Usuarios" component={UsuariosScreen} />
            <Stack.Screen name="Mapa" component={MapaScreen} />
        </Stack.Navigator>
    )
}
