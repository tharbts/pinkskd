using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace pinkskd.Models
{
    [Table("Times")]
    public class Time
    {
        public int Id { get; set; }

        [Required]
        [StringLength(5)]
        public string Start { get; set; }

        [StringLength(5)]
        public string End { get; set; }

        [StringLength(120)]
        public string Note { get; set; }

        [Required]
        public int ScheduleId { get; set; }

    }
}