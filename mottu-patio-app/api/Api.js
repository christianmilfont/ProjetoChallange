// Api.js
import axios from "axios";

// se for emulador Android use "http://10.0.2.2:8080"
// se for dispositivo físico use o IP da máquina na rede local, ex: "http://192.168.0.10:8080"
const API_BASE = "http://localhost:8080/api/motos";

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
    const response = await axios.delete(`${API_BASE}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao excluir moto:", error);
    throw error;
  }
}
