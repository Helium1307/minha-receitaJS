using System;

namespace Teste.Domain.Entities
{
    public class Receitas : Base
    {
        public string Nome { get; set; }
        public string Descricao { get; set; }
        public string Ingredientes { get; set; }
        public bool Criado { get; set; }
        public DateTime DataCadastro { get; set; }
        public string Tipo { get; set; } 
    }
}
