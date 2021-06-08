using System.Collections.Generic;
using Teste.Application.Dtos;
using Teste.Domain.Entities;

namespace Teste.Application.Interfaces.Mappers
{
    public interface IMapperReceitas
    {
        Receitas MapperDtoToEntity(ReceitasDto receitasDto);

        IEnumerable<ReceitasDto> MapperListReceitasDto(IEnumerable<Receitas> receitas);

        ReceitasDto MapperEntityToDto(Receitas receitas);
    }
}