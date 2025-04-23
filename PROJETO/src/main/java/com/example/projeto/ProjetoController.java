@RestController
@RequestMapping("/api/mapa")
public class MapaController {

    @PostMapping("/atualizar")
    public ResponseEntity<?> atualizarPosicao(@RequestBody Ponto ponto) {
        // Aqui você poderia salvar a posição no banco de dados
        System.out.println("Posição recebida: x=" + ponto.getX() + ", y=" + ponto.getY());
        return ResponseEntity.ok().build();
    }
}
