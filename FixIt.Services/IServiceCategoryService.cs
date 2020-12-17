using FixIt.Data.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace FixIt.Services
{
    public interface IServiceCategoryService
    {
        public List<ServiceCategory> GetAllServices();
        public ServiceCategory GetServiceById(int serviceId);
        public void AddJobData(ServiceCategory jobData);

    }
}
