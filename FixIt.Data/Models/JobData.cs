using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace FixIt.Data.Models
{
    public class JobData
    {
        [Key]
        public int JobId { get; set; }
        public string ImageUrl { get; set; }
        public string Location { get; set; }
        public string Note { get; set; }
        public DateTime CreatedOn { get; set; }
        public DateTime UpdatedOn { get; set; }
        public bool IsActivated { get; set; }

        //public virtual IEnumerable<JobService> JobServices { get; set; }
        public virtual ApplicationUser User { get; set; }
        public virtual ICollection<JobService> JobServices { get; set; }
    }
}
