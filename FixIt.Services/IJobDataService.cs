using FixIt.Data.Models;
using System.Collections.Generic;


namespace FixIt.Services
{
    public interface IJobDataService
    {
        public List<JobData> GetAllJobs();
        public JobData GetJobById(int jobId);
        public void AddJobData(JobData jobData);
        public void DeactivateJobData(JobData jobData);
    }
}