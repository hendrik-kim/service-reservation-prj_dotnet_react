using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace FixIt.Data.Models
{
    public class JobService
    {
        public int JobDataId { get; set; }
        public JobData JobData { get; set; }

        public int ServiceId { get; set; }
        public ServiceCategory Service { get; set; }
    }
}
