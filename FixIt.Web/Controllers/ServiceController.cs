using FixIt.Data.Models;
using FixIt.Services;
using FixIt.Web.ViewModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FixIt.Web.Controllers
{
    [ApiController]
    public class ServiceController : ControllerBase
    {
        public readonly ILogger<ServiceController> _logger;
        public readonly IServiceCategoryService _service;
            
        public ServiceController(ILogger<ServiceController> logger, IServiceCategoryService service)
        {
            _logger = logger;
            _service = service;
        }

        [HttpGet("/api/service")]
        public ActionResult GetServices()
        {
            try
            {
                var services = _service.GetAllServices();

                return Ok(services);
            }
            catch (NullReferenceException)
            {
                return NotFound();
            }
        }

        [HttpGet("/api/service/{id}")]
        public ActionResult GetServiceById(int id)
        {
            var service = _service.GetServiceById(id);
            return Ok(service);
        }

        //[HttpPost("/api/services")]
        //public ActionResult CreateForm([FromBody] NewServiceData job)
        //{
        //    if (!ModelState.IsValid)
        //    {
        //        return BadRequest("Model state not valid.");
        //    }

        //    //var now = DateTime.UtcNow;
        //    var jobData = new ServiceCategory()
        //    {
        //        InitHourRate =  job.InitHourRate,
        //        AddHourRate = job.AddHourRate,
        //        Description = job.Description,
        //        Name = job.Name
        //    };

        //    _service.AddJobData(jobData);
        //    return Ok($"request created : {jobData.ServiceId}");
        //}
    }
}
