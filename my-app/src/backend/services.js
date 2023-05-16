import axios from './axios';

class ServicosUsuarios {
  baseURL = 'http://localhost:3001'; // URL base do servidor JSON

  async obterUsuarios() {
    try {
      const response = await axios.get(`/usuarios`);
      return response.data;
    } catch (error) {
      console.error('Erro ao obter usuários:', error);
      throw error;
    }
  }

  async cadastrarUsuario(usuario) {
    try {
      const response = await axios.post(`/usuarios`, usuario);
      return response.data;
    } catch (error) {
      console.error('Erro ao cadastrar usuário:', error);
      throw error;
    }
  }
}

export default ServicosUsuarios;
