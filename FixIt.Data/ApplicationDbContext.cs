using FixIt.Data.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace FixIt.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext() { }
        public ApplicationDbContext(DbContextOptions options ) : base(options)
        {
            public virtual DbSet<RequestForm> RequestForms { get; set; }
            public virtual DbSet<Service> Services { get; set; }
        }
    }
}
