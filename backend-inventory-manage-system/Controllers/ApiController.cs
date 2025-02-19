using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Linq;

namespace WebAPIApplication.Controllers
{
    // Controller for public endpoints.
    [Route("api/public")]
    [ApiController]
    public class PublicController : ControllerBase
    {
        [HttpGet]
        public IActionResult Get() => Ok(new { Message = "Public endpoint" });
    }

    // Controller for private endpoints.
    [Route("api/private")]
    [ApiController]
    public class PrivateController : ControllerBase
    {
        [HttpGet]
        [Authorize]
        public IActionResult Get() => Ok(new { Message = "Private endpoint" });
    }

    // Controller for endpoints requiring specific scopes.
    [Route("api/private-scoped")]
    [ApiController]
    public class ScopedController : ControllerBase
    {
        [HttpGet]
        [Authorize("read:messages")]
        public IActionResult Get() => Ok(new { Message = "Scoped endpoint" });
    }

    // Controller for claims or other helper endpoints.
    [Route("api/claims")]
    [ApiController]
    public class ClaimsController : ControllerBase
    {
        [HttpGet]
        public IActionResult Get() => Ok(User.Claims.Select(c => new { c.Type, c.Value }));
    }
}
