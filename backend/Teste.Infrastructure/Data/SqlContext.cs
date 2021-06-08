using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;
using Teste.Domain.Entities;

namespace Teste.Infrasctructure.Data
{
    public class SqlContext : DbContext
    {
        public SqlContext(){ }

        public SqlContext(DbContextOptions<SqlContext> options) : base(options){ }

        public DbSet<Receitas> Receitas { get; set; }

        public override int SaveChanges()
        {
            foreach(var entry in ChangeTracker.Entries().Where(entry => entry.Entity.GetType().GetProperty("DataCadastro") != null))
            {
                if (entry.State == EntityState.Added)
                {
                    entry.Property("DataCadastro").CurrentValue = DateTime.Now;
                }

                if (entry.State == EntityState.Modified)
                {
                    entry.Property("DataCadastro").IsModified = false;
                }

            }
            return base.SaveChanges();
        }
    }
}
