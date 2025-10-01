// Api.js
import axios from "axios";

// se for emulador Android use "http://10.0.2.2:8080"
// se for dispositivo físico use o IP da máquina na rede local, ex: "http://192.168.0.10:8080"
const API_BASE = "http://10.0.2.2:8080/api/motos";

// Listar motos
export async function getMotos() {
  try {
    const response = await axios.get(API_BASE);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar motos:", error);
    return [];
  }
};

// Salvar moto
export async function saveMoto(moto) {
  try {
    const response = await axios.post(API_BASE, moto);
    return response.data;
  } catch (error) {
    console.error("Erro ao salvar moto:", error);
    throw error;
  }
};

// Atualizar moto
export async function updateMoto(id, moto) {
  try {
    const response = await axios.put(`${API_BASE}/${id}`, moto);
    return response.data;
  } catch (error) {
    console.error("Erro ao atualizar moto:", error);
    throw error;
  }
};
// Deletar moto
export async function deleteMoto(id) {
  try {
    console.log(`Iniciando requisição DELETE para excluir moto com id: ${id}`);
    
    // Exibe URL completa da requisição DELETE
    console.log(`URL para exclusão: ${API_BASE}/${id}`);
    
    const response = await axios.delete(`${API_BASE}/${id}`);
    
    // Log de resposta, caso haja sucesso
    console.log("Resposta da exclusão:", response);
    
    return response.data;
  } catch (error) {
    // Mostra detalhes do erro caso a exclusão falhe
    console.error("Erro ao excluir moto:", error);
    if (error.response) {
      // Caso a resposta do erro contenha dados
      console.error("Detalhes da resposta de erro:", error.response);
    } else {
      console.error("Erro sem resposta:", error.message);
    }
    throw error;
  }
};
// Login
export const login = async (email, nome, endereco, telefone) => {
  try {
    const response = await axios.post("http://10.0.2.2:5093/api/Login", { 
      email, 
      nome,
      endereco,
      telefone
    });
    return response.data;
  } catch (error) {
    console.error("Erro ao tentar fazer login:", error.response ? error.response.data : error.message);
    throw new Error('Erro ao tentar fazer login');
  }
};