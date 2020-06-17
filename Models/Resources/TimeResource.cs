using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace pinkskd.Models.Resource
{
    public class TimeResource
    {
        public int Id { get; set; }

        public TimeSpan Start { get; set; }

        public TimeSpan End { get; set; }

        public string Note { get; set; }
    }
}