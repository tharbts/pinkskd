using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using pinkskd.Models;

namespace pinkskd.Persistence.Interface
{
    public interface IScheduleRepository
    {
        void Add(Schedule schedule);
        Task<Schedule> GetSchedule(int id);

        Task<ICollection<Schedule>> GetSchedules(DateTime? date);

        void Remove(Schedule schedule);
    }
}