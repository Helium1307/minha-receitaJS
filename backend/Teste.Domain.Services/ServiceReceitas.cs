using Teste.Domain.Core.Interfaces.Repositories;
using Teste.Domain.Core.Interfaces.Services;
using Teste.Domain.Entities;

namespace Teste.Domain.Services
{
    public class ServiceReceitas : ServiceBase<Receitas>, IServiceReceitas
    {
        private readonly IRepositoryReceitas repositoryReceitas;

        public ServiceReceitas(IRepositoryReceitas repositoryReceitas) : base(repositoryReceitas)
        {
            this.repositoryReceitas = repositoryReceitas;
        }
    }
}