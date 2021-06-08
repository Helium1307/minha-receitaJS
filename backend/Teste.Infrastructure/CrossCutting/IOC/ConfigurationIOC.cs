using Autofac;
using Teste.Application;
using Teste.Application.Interfaces;
using Teste.Application.Interfaces.Mappers;
using Teste.Application.Mappers;
using Teste.Domain.Core.Interfaces.Repositories;
using Teste.Domain.Core.Interfaces.Services;
using Teste.Domain.Services;
using Teste.Infrasctructure.Data.Repositories;

namespace Teste.Infrasctructure.CrossCutting.IOC
{
    public class ConfigurationIOC
    {
        public static void Load(ContainerBuilder builder)
        {
            #region IOC

            builder.RegisterType<ApplicationServiceReceitas>().As<IApplicationServiceReceitas>();
            builder.RegisterType<ServiceReceitas>().As<IServiceReceitas>();
            builder.RegisterType<RepositoryReceitas>().As<IRepositoryReceitas>();
            builder.RegisterType<MapperReceitas>().As<IMapperReceitas>();

            #endregion
        }
    }
}
