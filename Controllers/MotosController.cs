using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MotoScript_Challange.Context;
using MotoScript_Challange.Model;

namespace MotoScript_Challange.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MotoController : ControllerBase
    {
        private readonly AppDbContext _context;

        public MotoController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/Moto
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Moto>>> GetMotos()
        {
            return await _context.Motos.ToListAsync();
        }

        // GET: api/Moto/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Moto>> GetMoto(long id)
        {
            var moto = await _context.Motos.FindAsync(id);

            if (moto == null)
                return NotFound();

            return moto;
        }

        // POST: api/Moto
        [HttpPost]
        public async Task<ActionResult<Moto>> PostMoto(Moto moto)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            _context.Motos.Add(moto);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetMoto), new { id = moto.id }, moto);
        }

        // PUT: api/Moto/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutMoto(long id, Moto moto)
        {
            if (id != moto.id)
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
                if (!MotoExists(id))
                    return NotFound();
                else
                    throw;
            }

            return NoContent();
        }

        // DELETE: api/Moto/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMoto(long id)
        {
            var moto = await _context.Motos.FindAsync(id);
            if (moto == null)
                return NotFound();

            _context.Motos.Remove(moto);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool MotoExists(long id)
        {
            return _context.Motos.Any(e => e.id == id);
        }
    }
}
