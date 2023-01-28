import {apiVT} from "../helpers/api";

export const authLogin = async ( user ) => {
    try {
        const resp = await apiVT.post('/Login', user, {
            headers: {
                'content-type': 'application/json'
            }
        });

        return resp;

    
    } catch (error) {
        console.log(error.response.status);
        return error.response.status;    
    }


};