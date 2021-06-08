using Teste.Domain.Core.Interfaces.Repositories;
using Teste.Domain.Entities;

namespace Teste.Infrasctructure.Data.Repositories
{
    public class RepositoryReceitas : RepositoryBase<Receitas>, IRepositoryReceitas
    {
        private readonly SqlContext sqlContext;

        public RepositoryReceitas(SqlContext sqlContext) : base(sqlContext)
        {
            this.sqlContext = sqlContext;
        }
    }
}
