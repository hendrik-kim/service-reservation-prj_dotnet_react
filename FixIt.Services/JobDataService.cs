using FixIt.Data;
using FixIt.Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace FixIt.Services
{
    public class JobDataService : IJobDataService
    {
        private readonly ApplicationDbContext _db;

        public JobDataService(ApplicationDbContext db)
        {
            _db = db;
        }

        public void AddJobData(JobData requestForm)
        {
            _db.JobData.Add(requestForm);
            _db.SaveChanges();
        }

        public void DeactivateJobData(JobData jobData)
        {
            // it my changed 'deactivated' not delete
            var formToDeactivate = _db.JobData.Find(jobData.JobId);
            if (formToDeactivate != null)
            {
                _db.Update(formToDeactivate);
                _db.SaveChanges();
            }
        }

        public List<JobData> GetAllJobs()
        {
            return _db.JobData.ToList();
        }

        public JobData GetJobById(int formId)
        {
            return _db.JobData.Find(formId);
        }
    }
}
