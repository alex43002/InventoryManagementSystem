using System.Collections.Generic;
using System.Linq;
using WebAPIApplication.Models;
using LiteDB;

namespace WebAPIApplication.Services
{
    public class InventoryCrudService
    {
        private readonly ILiteDbContext _liteDbContext;

        // Inject the LiteDB context via DI
        public InventoryCrudService(ILiteDbContext liteDbContext)
        {
            _liteDbContext = liteDbContext;
        }

        // Shortcut to access the collection for InventoryCrud
        private ILiteCollection<InventoryCrud> Collection =>
            _liteDbContext.Database.GetCollection<InventoryCrud>("inventorycrud");

        /// <summary>
        /// Get all inventory items.
        /// </summary>
        public IEnumerable<InventoryCrud> GetAll()
        {
            return Collection.FindAll().ToList();
        }

        /// <summary>
        /// Get a single inventory item by its id.
        /// </summary>
        public InventoryCrud GetById(int id)
        {
            return Collection.FindById(id);
        }

        /// <summary>
        /// Create a new inventory item.
        /// </summary>
        public InventoryCrud Create(InventoryCrud item)
        {
            // If the id is 0, LiteDB will auto-generate an id.
            Collection.Insert(item);
            return item;
        }

        /// <summary>
        /// Update an existing inventory item.
        /// </summary>
        public bool Update(InventoryCrud item)
        {
            // Returns true if update was successful.
            return Collection.Update(item);
        }

        /// <summary>
        /// Delete an inventory item by its id.
        /// </summary>
        public bool Delete(int id)
        {
            // Returns true if deletion was successful.
            return Collection.Delete(id);
        }
    }
}
