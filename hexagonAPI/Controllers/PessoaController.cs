using HexagonAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

[Route("api/[controller]")]
[ApiController]
public class PessoaController : ControllerBase
{
    private readonly AppDbContext _context;

    public PessoaController(AppDbContext context)
    {
        _context = context;
    }

    // GET: api/pessoa
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Pessoa>>> GetPessoas()
    {
        return await _context.Pessoas.ToListAsync();
    }

    // GET: api/pessoa/{id}
    [HttpGet("{id}")]
    public async Task<ActionResult<Pessoa>> GetPessoa(int id)
    {
        var pessoa = await _context.Pessoas.FindAsync(id);
        if (pessoa == null)
            return NotFound();
        return pessoa;
    }

    // POST: api/pessoa
    [HttpPost]
    public async Task<ActionResult<Pessoa>> PostPessoa(Pessoa pessoa)
    {
        _context.Pessoas.Add(pessoa);
        await _context.SaveChangesAsync();
        return CreatedAtAction(nameof(GetPessoa), new { id = pessoa.Id }, pessoa);
    }

    // PUT: api/pessoa/{id}
    [HttpPut("{id}")]
    public async Task<IActionResult> PutPessoa(int id, Pessoa pessoa)
    {
        if (id != pessoa.Id)
            return NotFound(new { mensagem = "Pessoa não encontrada." });


        _context.Entry(pessoa).State = EntityState.Modified;
        await _context.SaveChangesAsync();

            return Ok(new { mensagem = "Pessoa atualizada com sucesso!" });
    }

    // DELETE: api/pessoa/{id}
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeletePessoa(int id)
    {
        var pessoa = await _context.Pessoas.FindAsync(id);
        if (pessoa == null)
            return NotFound();

        _context.Pessoas.Remove(pessoa);
        await _context.SaveChangesAsync();

        return NoContent();
    }
}
