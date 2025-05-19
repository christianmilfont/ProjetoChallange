import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, Grid, Button } from '@mui/material';
import buscarModelos from '../actions/buscarMotos.ts';

const ModelosCard = () => {
  const [modelos, setModelos] = useState([]);
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState('');

  const carregarModelos = async () => {
    setCarregando(true);
    setErro('');
    try {
      const resultado = await buscarModelos();
      setModelos(resultado);
    } catch (e) {
      setErro('Erro ao buscar historico de verificação das motos');
    } finally {
      setCarregando(false);
    }
  };

  useEffect(() => {
    carregarModelos();
  }, []);

  return (
    <div style={{ padding: '1rem' }}>
      <Button
        variant="contained"
        color="primary"
        onClick={carregarModelos}
        style={{ marginBottom: '1rem' }}
      >
        Atualizar Modelos
      </Button>

      {carregando && <Typography>Carregando...</Typography>}
      {erro && <Typography color="error">{erro}</Typography>}

      <Grid container spacing={2}>
        {modelos.map((modelo, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  {modelo.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {modelo.descricao}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {modelo.nomeDoFiscal}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {modelo.idDaMoto}
                </Typography>

                "
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ModelosCard;
