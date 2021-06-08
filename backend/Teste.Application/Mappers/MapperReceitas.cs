using System.Collections.Generic;
using System.Linq;
using Teste.Application.Dtos;
using Teste.Application.Interfaces.Mappers;
using Teste.Domain.Entities;

namespace Teste.Application.Mappers
{
    public class MapperReceitas : IMapperReceitas
    {
        public Receitas MapperDtoToEntity(ReceitasDto receitasDto)
        {
            var receita = new Receitas()
            {
                ID = receitasDto.Id,
                Nome = receitasDto.Nome,
                Descricao = receitasDto.Descricao,
                Ingredientes = receitasDto.Ingredientes,
                Criado = receitasDto.Criado,
                Tipo = receitasDto.Tipo
            };

            return receita;
        }

        public ReceitasDto MapperEntityToDto(Receitas receitas)
        {
            var receitasDto = new ReceitasDto()
            {
                Id = receitas.ID,
                Nome = receitas.Nome,
                Descricao = receitas.Descricao,
                Ingredientes = receitas.Ingredientes,
                Criado = receitas.Criado,
                Tipo = receitas.Tipo
            };

            return receitasDto;
        }

        public IEnumerable<ReceitasDto> MapperListReceitasDto(IEnumerable<Receitas> receitas)
        {
            var dto = receitas.Select(t => new ReceitasDto
            {
                Id = t.ID,
                Nome = t.Nome,
                Descricao = t.Descricao,
                Ingredientes = t.Ingredientes,
                Criado = t.Criado,
                Tipo = t.Tipo
            });

            return dto;

        }
    }
}
