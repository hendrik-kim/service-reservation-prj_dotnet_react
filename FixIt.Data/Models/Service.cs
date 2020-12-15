using System;
using System.Collections.Generic;
using System.Text;

namespace FixIt.Data.Models
{
    public class Service
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public decimal InitHourRate { get; set; }
        public decimal AddHourRate { get; set; }
    }
}
