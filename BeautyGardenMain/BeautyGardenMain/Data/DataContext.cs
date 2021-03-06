﻿using BeautyGardenMain.Entity.UserContacts;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BeautyGardenMain.Data
{
    public class DataContext : DbContext
    {

        public DataContext()
        {

        }
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {

        }
        public DbSet<UserContact> UserContact { get; set; }
        //DbSet go here--------

    }
}