import { apiTic } from "../api";
import { LoginRequest } from "./type";

const onLogin = async (data: LoginRequest): Promise<void> => {
    try {
      const { data: response } = await apiTic.post('/login', data);
      console.log(data);
  
      return response;
    } catch (err) {
      
    }
};

export { onLogin }
