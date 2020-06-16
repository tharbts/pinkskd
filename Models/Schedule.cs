using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace pinkskd.Models
{
    [Table("Schedules")]
    public class Schedule
    {
        public int Id { get; set; }

        [StringLength(255)]
        public string Note { get; set; }

        [Required]
        public DateTime Date { get; set; }

        [Required]
        public ICollection<Time> Times { get; set; }

        public Schedule()
        {
            Times = new Collection<Time>();
        }
    }
}