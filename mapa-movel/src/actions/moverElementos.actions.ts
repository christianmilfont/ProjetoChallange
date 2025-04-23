
  // api.js
export const atualizarPosicao = async (id, novoX, novoY) => {
    try {
      const response = await fetch('/api/mapa/atualizar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id, x: novoX, y: novoY }),
      });
  
      if (!response.ok) {
        throw new Error('Erro ao salvar posição no backend');
      }
  
      const data = await response.json();
      console.log('Posição salva no backend:', data);
      return data; // Retorna o resultado caso precise utilizar mais tarde
    } catch (error) {
      console.error('Erro ao salvar posição:', error);
      throw error; // Lança o erro para o App.js lidar com ele, se necessário
    }
  };
  