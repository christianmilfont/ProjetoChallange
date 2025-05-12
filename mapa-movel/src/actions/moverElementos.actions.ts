interface PosicaoPayload {
  inicialX: number;
  inicialY: number;
  finalX: number;
  finalY: number;
}

export const atualizarPosicao = async (posicao: PosicaoPayload) => {
  try {
    const response = await fetch('http://localhost:8080/api/atualizar', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify([posicao]), // Envia o objeto dentro de um array
    });

    if (!response.ok) {
      throw new Error('Erro ao salvar posição no backend');
    }

    const data = await response.json();
    console.log('Posição salva no backend:', data);
    return data;
  } catch (error) {
    console.error('Erro ao salvar posição:', error);
    throw error;
  }
};





