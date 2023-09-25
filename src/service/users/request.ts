import { apiTic } from "../api";
import { CreateUser, DeleteUser, ListUsers, LoginRequest } from "./type";

const onLogin = async (data: LoginRequest): Promise<number> => {
    try {
      const response = await apiTic.post('/users/login', data);
      
      return response.status;
    } catch (err) {
      throw new Error('Error')
    }
};

const changePassword = async (data: LoginRequest): Promise<number> => {
  try {
    const response = await apiTic.post('/users/password', data);
    
    return response.status;
  } catch (err) {
    throw new Error('Error')
  }
};

const createUser = async (data: CreateUser): Promise<number> => {
  try {
    const response = await apiTic.post('/users', data);
    
    return response.status;
  } catch (err) {
    throw new Error('Error')
  }
};

const listUsers = async (): Promise<ListUsers[]> => {
  try {
    const {data: response} = await apiTic.get<ListUsers[]>('/users');
    
    return response;
  } catch (err) {

    throw new Error('Error')
  }
}

const deleteUser = async (payload: DeleteUser): Promise<number> => {
  try {
    const response = await apiTic.delete('/users', {data: payload});
    
    return response.status;
  } catch (err) {
    throw new Error('Error')
  }
};

export { onLogin, changePassword, createUser, listUsers, deleteUser }
