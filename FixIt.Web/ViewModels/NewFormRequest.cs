using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FixIt.Web.ViewModels
{
    public class NewFormRequest
    {
        public int Id { get; set; }
        //public string ImageUrl { get; set; }
        public string Location { get; set; }
        public string Note { get; set; }
        public DateTime CreatedOn { get; set; }
        public DateTime UpdatedOn { get; set; }
        public bool IsActivated { get; set; }

        //public virtual IEnumerable<Service> Services { get; set; }
        //public virtual ApplicationUser User { get; set; }
    }
}
