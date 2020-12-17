using System;
using System.Collections.Generic;
using System.Text;

namespace FixIt.Data.Models
{
    public class JobService
    {
        public int JobId { get; set; }
        public JobData JobData { get; set; }

        public int ServiceId { get; set; }
        public ServiceCategory Service { get; set; }
    }
}
