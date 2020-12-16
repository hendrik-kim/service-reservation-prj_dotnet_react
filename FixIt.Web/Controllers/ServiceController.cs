using FixIt.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FixIt.Web.Controllers
{
    [ApiController]
    public class ServiceController : Controller
    {
        public readonly ILogger<ServiceController> _logger;
        public readonly IServiceCategoryService _service;

        [HttpGet("/api/services")]
        public ActionResult GetServices()
        {
            var services = _service.GetAllServices();
            return Ok(services);
        }

        [HttpGet("/api/services/{id}")]
        public ActionResult GetServiceById(int id)
        {
            var service = _service.GetServiceById(id);
            return Ok(service);
        }
    }
}
