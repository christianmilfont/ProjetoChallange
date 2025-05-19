using MotoScript_Challange.Model;
using System.ComponentModel.DataAnnotations;
using System.Runtime.InteropServices;

namespace MotoScript_Challange.Model
{
    public class Moto
    {
        [Key]
        public long id { get; set; }
        [Required]
        [MaxLength(100)]
        public string nome { get; set; }
        [Required]
        [MaxLength(200)]
        public string descricao { get; set; }
        [Required]
        public bool prontaParaUso { get; set; }
        [Required]
        public bool semPlaca { get; set; }
        [Required]
        public string chassi { get; set; }
        [Required]
        public string motor { get; set; }

        public Moto()
        {
            id = 0;
            nome = string.Empty;
            descricao = string.Empty;
            prontaParaUso = false;
            semPlaca = false;
            chassi = string.Empty;
            motor = string.Empty;
        }
    }
}