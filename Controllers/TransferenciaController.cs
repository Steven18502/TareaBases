using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TecBank.Models;

namespace TecBank.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TransferenciaController : ControllerBase
    {
        private readonly TransferenciaContext _context;

        public TransferenciaController(TransferenciaContext context)
        {
            _context = context;
        }

        // GET: api/Transferencia
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Transferencia>>> GetTransferencias()
        {
            return await _context.Transferencias.ToListAsync();
        }

        // GET: api/Transferencia/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Transferencia>> GetTransferencia(long id)
        {
            var transferencia = await _context.Transferencias.FindAsync(id);

            if (transferencia == null)
            {
                return NotFound();
            }

            return transferencia;
        }

        // PUT: api/Transferencia/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTransferencia(long id, Transferencia transferencia)
        {
            if (id != transferencia.TransferenciaId)
            {
                return BadRequest();
            }

            _context.Entry(transferencia).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TransferenciaExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Transferencia
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Transferencia>> PostTransferencia(Transferencia transferencia)
        {
            _context.Transferencias.Add(transferencia);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTransferencia", new { id = transferencia.TransferenciaId }, transferencia);
        }

        // DELETE: api/Transferencia/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTransferencia(long id)
        {
            var transferencia = await _context.Transferencias.FindAsync(id);
            if (transferencia == null)
            {
                return NotFound();
            }

            _context.Transferencias.Remove(transferencia);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool TransferenciaExists(long id)
        {
            return _context.Transferencias.Any(e => e.TransferenciaId == id);
        }
    }
}
