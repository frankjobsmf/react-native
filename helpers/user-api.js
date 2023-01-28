import AsyncStorage from "@react-native-async-storage/async-storage";
import { apiVT } from "./api";

export const getAllUsers = async () => {
    
    try {
        const token = await AsyncStorage.getItem('token');

        if(token){
            const resp = await apiVT.get("/Usuario",{
                'headers': {
                    'Authorization': `Bearer ${token}`
                }
            });
            
            return resp;
        }
    } catch (error) {
        return error;
    }

}   