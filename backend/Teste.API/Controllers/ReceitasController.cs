using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using Teste.Application.Dtos;
using Teste.Application.Interfaces;

namespace Teste.API.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class ReceitasController : ControllerBase
    {
        private readonly IApplicationServiceReceitas applicationServiceReceitas;

        public ReceitasController(IApplicationServiceReceitas applicationServiceReceitas)
        {
            this.applicationServiceReceitas = applicationServiceReceitas;
        }

        // GET api/values
        [HttpGet]
        public ActionResult<IEnumerable<string>> Get()
        {
            return Ok(applicationServiceReceitas.GetAll());
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult<string> Get(int id)
        {
            return Ok(applicationServiceReceitas.GetById(id));
        }

        // POST api/values
        [HttpPost]
        public ActionResult Post([FromBody] ReceitasDto receitasDto)
        {
            try
            {
                if (receitasDto == null)
                    return NotFound();

                applicationServiceReceitas.Add(receitasDto);
                return Ok("Receitas Cadastrada com sucesso!");
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        // PUT api/values/5
        [HttpPut]
        public ActionResult Put([FromBody] ReceitasDto receitasDto)
        {
            try
            {
                if (receitasDto == null)
                    return NotFound();

                applicationServiceReceitas.Update(receitasDto);
                return Ok("Receitas Atualizada com sucesso!");
            }
            catch (Exception)
            {
                throw;
            }
        }

        // DELETE api/values/5
        [HttpDelete()]
        public ActionResult Delete([FromBody] ReceitasDto receitasDto)
        {
            try
            {
                if (receitasDto == null)
                    return NotFound();

                applicationServiceReceitas.Remove(receitasDto);
                return Ok("Receitas Removida com sucesso!");
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}