import { apiTic } from "../api";
import { LoginRequest } from "./type";

const onLogin = async (data: LoginRequest): Promise<any> => {
    try {
      const { data: response } = await apiTic.post('/users/login', data);
      console.log(data);
  
      return response;
    } catch (err) {
      return err
    }
};

export { onLogin }
