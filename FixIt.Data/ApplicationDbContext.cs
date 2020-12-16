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
        public ApplicationDbContext(DbContextOptions options) : base(options)
        { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<JobService>().HasKey(sc => new { sc.JobDataId, sc.ServiceId });
        }

        public virtual DbSet<JobData> JobData { get; set; }
        public virtual DbSet<ServiceCategory> ServiceCategories { get; set; }
        public virtual DbSet<JobService> FormServices { get; set; }

        //protected override void OnConfiguring(DbContextOptionsBuilder options)
        //   => options.UseSqlite("Data Source=sample.db");
    }
}

