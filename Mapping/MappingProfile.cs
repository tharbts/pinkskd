using AutoMapper;
using System.Linq;
using pinkskd.Models;
using pinkskd.Models.Resource;

namespace pinkskd.Mapping
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            //Schedule
            CreateMap<ScheduleResource, Schedule>()
                .AfterMap((sr, s) => {
                    foreach (var t in s.Times)
                        t.ScheduleId = s.Id;
                });

            CreateMap<Schedule, ScheduleResource>();

            //Time
            CreateMap<TimeResource, Time>();
            CreateMap<Time, TimeResource>();

        }
    }
}