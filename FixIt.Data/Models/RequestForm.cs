using System;
using System.Collections.Generic;
using System.Text;

namespace FixIt.Data.Models
{
    public class RequestForm
    {
        public int Id { get; set; }
        public string ImageUrl { get; set; }
        public string Location { get; set; }
        public string Note { get; set; }
        public DateTime CreatedOn { get; set; }
        public DateTime UpdatedOn { get; set; }

        public virtual IEnumerable<Service> Services { get; set; }
        public virtual ApplicationUser User { get; set; }
    }
}
