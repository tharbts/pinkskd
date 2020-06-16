using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace pinkskd.Controllers
{
    public class Schedule : Controller
    {
      [HttpPost]
      public async Task<IActionResult> CreateSchedule([FromBody] Schedule schedule)
      {
        if(!ModelState.IsValid)
          return BadRequest(ModelState);


        return Ok();
      }
    }
}