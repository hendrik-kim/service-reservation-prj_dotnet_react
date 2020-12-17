using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FixIt.Web.ViewModels
{
    public class NewServiceData
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public decimal InitHourRate { get; set; }
        public decimal AddHourRate { get; set; }
    }
}
