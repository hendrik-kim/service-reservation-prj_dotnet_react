using FixIt.Data;
using FixIt.Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace FixIt.Services
{
    public class ServiceCategoryService : IServiceCategoryService
    {
        private readonly ApplicationDbContext _db;

        public ServiceCategoryService(ApplicationDbContext db)
        {
            _db = db;
        }

        public List<ServiceCategory> GetAllServices()
        {
            return _db.ServiceCategories.ToList();
        }

        public ServiceCategory GetServiceById(int serviceId)
        {
            return _db.ServiceCategories.Find(serviceId);
        }
    }
}
