using System;
using System.Collections.Generic;
using System.Text;

namespace FixIt.Data.Models
{
    public class ApplicationUser
    {
        public int Id { get; set; }
        public int UserName { get; set; }
        public string Password { get; set; }
        public string Email { get; set; }
    }
}
