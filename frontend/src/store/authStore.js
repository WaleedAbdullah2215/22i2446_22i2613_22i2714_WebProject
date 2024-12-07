import {create} from "zustand";
import axios from "axios";

const API_URL="http://localhost:3000/api/users"

axios.defaults.withCredentials=true;

export const useAuthStore=create((set)=>({
    user:null,
    isAuthenticated:false,
    error:null,
    isLoading:false,
    isCheckingAuth:true,

    signup: async(email,password,name) =>{
        set({isLoading:true,error:null})
        try{
            const response= await axios.post(`${API_URL}/register`,{email,password,name});
            set({user:response.data.userId,isAuthenticated:true,isLoading:false})
        } catch (error) 
        {
            set({error:error.response.data.message||"Error Signing Up",isLoading:false})
            throw error;
        }
    },

    login: async(email,password)=>{
        set({isLoading:true,error:null})
        try{
            const response=await axios.post(`${API_URL}/login`,{email,password});
            set({user:response.data.token,isAuthenticated:true,isLoading:false,error:null})
        } catch(error)
        {
            set({error:error.response.data.message||"Error Logging In",isLoading:false})
            throw error;
        }
    }
}))