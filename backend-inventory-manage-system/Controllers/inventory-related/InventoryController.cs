using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Linq;

namespace WebAPIApplication.Controllers
{
    // Controller for public endpoints.
    [Route("api/inventory")]
    [ApiController]
    public class InventoryController : ControllerBase
    {
        [HttpGet]
        public IActionResult Get() => Ok(new { Message = "Public inventory" });
    }
}
