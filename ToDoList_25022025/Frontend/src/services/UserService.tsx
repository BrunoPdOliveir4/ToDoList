import Api from "../config/Api";
import { RegisterFormType, LoginFormType } from "../types/FormType";

const UserService = {
  register: async (params: RegisterFormType) => {
    try {
      const response = await Api.post("/users/register", params);
      return response.data;
    } catch (error) {
      return error;
    }
  },

  login: async (params: LoginFormType) => {
    try {
      const response = await Api.post("/users/login", params);
      return response.data;
    } catch (error) {
      return error;
    }
  },

  logout: () => {
    localStorage.removeItem("token");
  }
};

export default UserService;