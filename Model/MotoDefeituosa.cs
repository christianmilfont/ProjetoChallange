using System.ComponentModel.DataAnnotations;
using MotoScript_Challange.Model;

namespace MotoScript_Challange.Model
{
    public class MotoDefeituosa
    {
        [Key]
        public long Id { get; set; }

        [Required]
        [MaxLength(100)]
        public string nomeMarca { get; set; }

        [Required]
        [MaxLength(200)]
        public string nomeMoto { get; set; }

        [Required]
        [MaxLength(200)]
        public string placa { get; set; }

        [Required]
        public string descricao { get; set; }

        [Required]
        public Enums.TipoDefeito TipoDefeituoso { get; set; }  // setter público

        public MotoDefeituosa()
        {
            Id = 0;
            nomeMarca = string.Empty;
            nomeMoto = string.Empty;
            placa = string.Empty;
            descricao = string.Empty;
        }
    }
}
