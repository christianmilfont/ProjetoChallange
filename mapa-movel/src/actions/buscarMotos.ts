const buscarModelos = async () => {
try {
  const response = await fetch('http://localhost:8080/historico', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }); 
  if (!response.ok) {
    throw new Error('Erro ao buscar modelos no backend');
  }
  const data = await response.json();
  console.log('Modelos buscados do backend:', data);
  return data;
} catch (error) {
  console.error('Erro ao buscar modelos:', error);
  throw error;
}
};

export default buscarModelos;
