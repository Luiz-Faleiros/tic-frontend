import { apiTic } from "../api";
import { CreateProduct, ListProduct } from "./type";


const createProduct = async (data: CreateProduct): Promise<number> => {
    try {
      const response = await apiTic.post('/products', data);
      
      return response.status;
    } catch (err) {
      throw new Error('Error')
    }
};

const listProduct = async (): Promise<ListProduct[]> => {
    try {
      const response = await apiTic.get<ListProduct[]>('/products');
      
      return response.data;
    } catch (err) {
      throw new Error('Error')
    }
};

const deleteProduct = async (hash: string): Promise<number> => {
  try {
    const response = await apiTic.delete(`/products/${hash}`);
    
    return response.status;
  } catch (err) {
    throw new Error('Error');
  }
};


export { createProduct, listProduct, deleteProduct }
