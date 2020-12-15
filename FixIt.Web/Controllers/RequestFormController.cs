using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FixIt.Web.Controllers
{
    public class RequestFormController : ControllerBase
    {
        public readonly ILogger<RequestFormController> _logger;
        public RequestFormController(ILogger<RequestFormController> logger)
        {
            _logger = logger;
        }

        [HttpGet("/api/form")]
        public ActionResult GetApplications()
        {
            return Ok("Applications");
        }
    }
}
