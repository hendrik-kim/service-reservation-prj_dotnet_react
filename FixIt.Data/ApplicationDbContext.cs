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

        //protected override void OnModelCreating(ModelBuilder modelBuilder)
        //{
        //    modelBuilder.Entity<JobService>().HasKey(sc => new { sc.JobDataId, sc.ServiceId });
        //}

        public virtual DbSet<JobData> JobData { get; set; }
        public virtual DbSet<ServiceCategory> Services { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<JobService>()
                .HasKey(t => new { t.JobId, t.ServiceId });

            modelBuilder.Entity<JobService>()
                .HasOne(pt => pt.JobData)
                .WithMany(p => p.JobServices)
                .HasForeignKey(pt => pt.JobId);

            modelBuilder.Entity<JobService>()
                .HasOne(pt => pt.Service)
                .WithMany(t => t.JobServices)
                .HasForeignKey(pt => pt.ServiceId);
        }
    }
}

