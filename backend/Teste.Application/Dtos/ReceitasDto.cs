using System;
using System.Collections.Generic;
using System.Text;

namespace Teste.Application.Dtos
{
    public class ReceitasDto
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public string? Descricao { get; set; }
        public string Ingredientes { get; set; }
        public bool Criado { get; set; }
        public string Tipo { get; set; }
    }
}
