using System.Collections.Generic;
using Teste.Application.Dtos;
using Teste.Application.Interfaces;
using Teste.Application.Interfaces.Mappers;
using Teste.Domain.Core.Interfaces.Services;

namespace Teste.Application
{
    public class ApplicationServiceReceitas : IApplicationServiceReceitas
    {
        private readonly IServiceReceitas serviceReceitas;
        private readonly IMapperReceitas mapperReceitas;

        public ApplicationServiceReceitas(IServiceReceitas serviceReceitas, IMapperReceitas mapperReceitas)
        {
            this.serviceReceitas = serviceReceitas;
            this.mapperReceitas = mapperReceitas;
        }

        public void Add(ReceitasDto receitasDto)
        {
            var receitas = mapperReceitas.MapperDtoToEntity(receitasDto);
            serviceReceitas.Add(receitas);
        }

        public IEnumerable<ReceitasDto> GetAll()
        {
            var receitas = serviceReceitas.GetAll();
            return mapperReceitas.MapperListReceitasDto(receitas);
        }

        public ReceitasDto GetById(int id)
        {
            var receitas = serviceReceitas.GetById(id);
            return mapperReceitas.MapperEntityToDto(receitas);
        }

        public void Remove(ReceitasDto receitasDto)
        {
            var receitas = mapperReceitas.MapperDtoToEntity(receitasDto);
            serviceReceitas.Remove(receitas);
        }

        public void Update(ReceitasDto receitasDto)
        {
            var receitas = mapperReceitas.MapperDtoToEntity(receitasDto);
            serviceReceitas.Update(receitas);
        }
    }
}