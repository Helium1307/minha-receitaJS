using System.Collections.Generic;
using Teste.Application.Dtos;

namespace Teste.Application.Interfaces
{
    public interface IApplicationServiceReceitas
    {
        void Add(ReceitasDto receitasDto);

        void Update(ReceitasDto receitasDto);

        void Remove(ReceitasDto receitasDto);

        IEnumerable<ReceitasDto> GetAll();

        ReceitasDto GetById(int id);
    }
}