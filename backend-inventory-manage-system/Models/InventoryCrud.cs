using LiteDB;
using System;

namespace WebAPIApplication.Models
{
    public class InventoryCrud
    {
        [BsonId] // Marks the property as the primary key in LiteDB
        public int Id { get; set; }
        
        public string Sku { get; set; }
        
        public string Name { get; set; }
        
        public int Quantity { get; set; }
        
        // Optional properties, matching the frontend model.
        public string CreatedBy { get; set; }
        
        public DateTime? CreatedDate { get; set; }
        
        public string UpdatedBy { get; set; }
        
        public DateTime? UpdatedDate { get; set; }
    }
}
