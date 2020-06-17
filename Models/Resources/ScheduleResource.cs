using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;

namespace pinkskd.Models.Resource
{
    public class ScheduleResource
    {
        public int Id { get; set; }

        public DateTime Date { get; set; }

        public ICollection<TimeResource> Times { get; set; }

        public ScheduleResource()
        {
            Times = new Collection<TimeResource>();
        }
    }
}