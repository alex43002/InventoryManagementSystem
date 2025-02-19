using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using WebAPIApplication.Models;
using WebAPIApplication.Services;

namespace WebAPIApplication.Controllers
{
    [Route("api/inventory")]
    [ApiController]
    [Authorize]
    public class InventoryController : ControllerBase
    {
        private readonly InventoryCrudService _inventoryService;

        public InventoryController(InventoryCrudService inventoryService)
        {
            _inventoryService = inventoryService;
        }

        // GET: api/inventory
        [HttpGet]
        public IActionResult GetAll()
        {
            var items = _inventoryService.GetAll();
            return Ok(items);
        }

        // GET: api/inventory/{id}
        [HttpGet("{id:int}")]
        public IActionResult GetById(int id)
        {
            var item = _inventoryService.GetById(id);
            if (item == null)
            {
                return NotFound();
            }
            return Ok(item);
        }

        // POST: api/inventory
        [HttpPost]
        public IActionResult Create([FromBody] InventoryCrud item)
        {
            if (item == null)
            {
                return BadRequest();
            }
            var createdItem = _inventoryService.Create(item);
            // Return a 201 Created response with a location header.
            return CreatedAtAction(nameof(GetById), new { id = createdItem.Id }, createdItem);
        }

        // PUT: api/inventory/{id}
        [HttpPut("{id:int}")]
        public IActionResult Update(int id, [FromBody] InventoryCrud item)
        {
            if (item == null || item.Id != id)
            {
                return BadRequest();
            }

            // Check if the item exists first.
            var existingItem = _inventoryService.GetById(id);
            if (existingItem == null)
            {
                return NotFound();
            }

            bool updated = _inventoryService.Update(item);
            if (!updated)
            {
                // If something went wrong, you might want to return a 500 error.
                return StatusCode(500, "A problem occurred while updating the inventory item.");
            }

            return NoContent();
        }

        // DELETE: api/inventory/{id}
        [HttpDelete("{id:int}")]
        public IActionResult Delete(int id)
        {
            var existingItem = _inventoryService.GetById(id);
            if (existingItem == null)
            {
                return NotFound();
            }

            bool deleted = _inventoryService.Delete(id);
            if (!deleted)
            {
                return StatusCode(500, "A problem occurred while deleting the inventory item.");
            }

            return NoContent();
        }
    }
}
