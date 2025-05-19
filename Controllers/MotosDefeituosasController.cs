using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MotoScript_Challange.Context;
using MotoScript_Challange.Model;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Linq;

namespace MotoScript_Challange.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MotoDefeituosaController : ControllerBase
    {
        private readonly AppDbContext _context;

        public MotoDefeituosaController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/MotoDefeituosa
        [HttpGet]
        public async Task<ActionResult<IEnumerable<MotoDefeituosa>>> GetMotosDefeituosas()
        {
            return await _context.Defeituosas.ToListAsync();
        }

        // GET: api/MotoDefeituosa/5
        [HttpGet("{id}")]
        public async Task<ActionResult<MotoDefeituosa>> GetMotoDefeituosa(long id)
        {
            var moto = await _context.Defeituosas.FindAsync(id);

            if (moto == null)
                return NotFound();

            return moto;
        }

        // POST: api/MotoDefeituosa
        [HttpPost]
        public async Task<ActionResult<MotoDefeituosa>> PostMotoDefeituosa(MotoDefeituosa moto)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            _context.Defeituosas.Add(moto);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetMotoDefeituosa), new { id = moto.Id }, moto);
        }

        // PUT: api/MotoDefeituosa/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutMotoDefeituosa(long id, MotoDefeituosa moto)
        {
            if (id != moto.Id)
                return BadRequest("ID da URL não corresponde ao corpo da requisição.");

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            _context.Entry(moto).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MotoDefeituosaExists(id))
                    return NotFound();
                else
                    throw;
            }

            return NoContent();
        }

        // DELETE: api/MotoDefeituosa/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMotoDefeituosa(long id)
        {
            var moto = await _context.Defeituosas.FindAsync(id);
            if (moto == null)
                return NotFound();

            _context.Defeituosas.Remove(moto);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool MotoDefeituosaExists(long id)
        {
            return _context.Defeituosas.Any(e => e.Id == id);
        }
    }
}
