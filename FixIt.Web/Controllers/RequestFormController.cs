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
    public class RequestFormController : ControllerBase
    {
        public readonly ILogger<RequestFormController> _logger;
        public readonly IRequestFormService _formService;

        public RequestFormController(ILogger<RequestFormController> logger, IRequestFormService formService)
        {
            _logger = logger;
            _formService = formService;
        }

        [HttpGet("/api/forms")]
        public ActionResult GetForms()
        {
            var forms = _formService.GetAllForms();
            return Ok(forms);
        }

        [HttpGet("/api/forms/{id}")]
        public ActionResult GetFormById(int id)
        {
            var form = _formService.GetFormById(id);
            return Ok(form);
        }

        [HttpPost("/api/forms")]
        public ActionResult CreateForm([FromBody] NewFormRequest requestForm)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest("Model state not valid.");
            }

            //var now = DateTime.UtcNow;
            var form = new RequestForm()
            {
                //CreatedOn = DateTime.UtcNow,
                //UpdatedOn = DateTime.UtcNow,
                //IsActivated = true,
                Location = requestForm.Location,
                Note = requestForm.Note,
            };

            _formService.AddRequest(form);
            return Ok($"request created : {form.Id}");
        }

        [HttpPut("/api/forms/{id}")]
        public ActionResult DeactivateForm(int id)
        {
            var form = _formService.GetFormById(id);

            form.UpdatedOn = DateTime.UtcNow;
            form.IsActivated = false;

            _formService.DeactivateRequest(form);

            return Ok($"request updated : {form.Id}");
        }
    }
}
