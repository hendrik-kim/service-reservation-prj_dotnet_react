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
    public class JobDataController : ControllerBase
    {
        public readonly ILogger<JobDataController> _logger;
        public readonly IJobDataService _jobservice;

        public JobDataController(ILogger<JobDataController> logger, IJobDataService jobservice)
        {
            _logger = logger;
            _jobservice = jobservice;
        }

        [HttpGet("/api/jobs")]
        public ActionResult Getjobs()
        {
            var jobs = _jobservice.GetAllJobs();
            return Ok(jobs);
        }

        [HttpGet("/api/jobs/{id}")]
        public ActionResult GetFormById(int id)
        {
            var form = _jobservice.GetJobById(id);
            return Ok(form);
        }

        [HttpPost("/api/jobs")]
        public ActionResult CreateForm([FromBody] NewJobData job)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest("Model state not valid.");
            }

            //var now = DateTime.UtcNow;
            var jobData = new JobData()
            {
                //CreatedOn = DateTime.UtcNow,
                //UpdatedOn = DateTime.UtcNow,
                //IsActivated = true,
                Location = job.Location,
                Note = job.Note,
            };

            _jobservice.AddJobData(jobData);
            return Ok($"request created : {jobData.JobId}");
        }

        [HttpPut("/api/jobs/{id}")]
        public ActionResult DeactivateForm(int id)
        {
            var form = _jobservice.GetJobById(id);

            form.UpdatedOn = DateTime.UtcNow;
            form.IsActivated = false;

            _jobservice.DeactivateJobData(form);

            return Ok($"request updated : {form.JobId}");
        }
    }
}
