using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace FixIt.Data.Models
{
    public class ServiceCategory
    {
        [Key]
        public int ServiceId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public decimal InitHourRate { get; set; }
        public decimal AddHourRate { get; set; }

        public virtual ICollection<JobService> JobServices { get; set; }

    }
}
