using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using pinkskd.Models;
using pinkskd.Persistence;
using pinkskd.Persistence.Interface;

namespace pinkskd.Persistence
{
	public class ScheduleRepository : IScheduleRepository
	{
        private readonly DatabaseContext context;

        public ScheduleRepository(DatabaseContext context)
        {
            this.context = context;
        }

        public async Task<ICollection<Schedule>> GetSchedules()
        {
            return await context.Schedules
                .Include(s => s.Times)
                .ToListAsync();
        }

        public async Task<Schedule> GetSchedule(int id)
        {
            return await context.Schedules
                .Include(s => s.Times)
                .SingleOrDefaultAsync(s => s.Id == id);
        }

		public void Add(Schedule schedule)
		{
            context.Schedules.Add(schedule);
		}

        public void Remove(Schedule schedule)
        {
            context.Schedules.Remove(schedule);
        }
	}
}