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
        public TimeSpan Start { get; set; }

        public TimeSpan End { get; set; }

        [StringLength(255)]
        public string Note { get; set; }
    }
}