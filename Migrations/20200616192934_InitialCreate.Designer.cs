﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using pinkskd.Persistence;

namespace pinkskd.Migrations
{
    [DbContext(typeof(PinkSkdDbContext))]
    [Migration("20200616192934_InitialCreate")]
    partial class InitialCreate
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.5");

            modelBuilder.Entity("pinkskd.Models.Schedule", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<DateTime>("Date")
                        .HasColumnType("TEXT");

                    b.Property<string>("Note")
                        .HasColumnType("TEXT")
                        .HasMaxLength(255);

                    b.HasKey("Id");

                    b.ToTable("Schedules");
                });

            modelBuilder.Entity("pinkskd.Models.Time", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<TimeSpan>("End")
                        .HasColumnType("TEXT");

                    b.Property<string>("Note")
                        .HasColumnType("TEXT")
                        .HasMaxLength(255);

                    b.Property<int?>("ScheduleId")
                        .HasColumnType("INTEGER");

                    b.Property<TimeSpan>("Start")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.HasIndex("ScheduleId");

                    b.ToTable("Times");
                });

            modelBuilder.Entity("pinkskd.Models.Time", b =>
                {
                    b.HasOne("pinkskd.Models.Schedule", null)
                        .WithMany("Times")
                        .HasForeignKey("ScheduleId");
                });
#pragma warning restore 612, 618
        }
    }
}
