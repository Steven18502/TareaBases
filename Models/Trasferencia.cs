using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TecBank.Models
{
    public class Transferencia
    {
        [Key]
        public long TransferenciaId { get; set; }
        public int CuentaOrigen { get; set; }
        public int CuentaDestino { get; set; }
        public int Monto { get; set; }
        [Column(TypeName = "nvarchar(5)") ]
        public string Fecha { get; set; }
        public string Hora { get; set; }


    }
}