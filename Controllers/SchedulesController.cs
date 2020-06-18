using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using pinkskd.Models;
using pinkskd.Persistence.Interface;
using AutoMapper;
using pinkskd.Models.Resource;
using System;
using System.Collections.Generic;

namespace pinkskd.Controllers
{
    [Route("/api/schedules")]
    public class ScheduleController : Controller
    {
        private readonly IScheduleRepository repository;
        private readonly IUnitOfWork uow;
        private readonly IMapper  mapper;

        public ScheduleController(IScheduleRepository repository, IUnitOfWork uow, IMapper mapper)
        {
            this.repository = repository;
            this.uow = uow;
            this.mapper = mapper;
        }

        [HttpGet]
        public async Task<IActionResult> GetSchedules(DateTime? date)
        {
            var schedules = await repository.GetSchedules(date);

            var schedulesResource = mapper.Map<List<ScheduleResource>>(schedules);

            return Ok(schedulesResource);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetSchedule(int id)
        {
            var schedule = await repository.GetSchedule(id);

            if(schedule == null)
                return NotFound();

            var scheduleResource = mapper.Map<ScheduleResource>(schedule);

            return Ok(scheduleResource);
        }

        [HttpPost]
        public async Task<IActionResult> CreateSchedule([FromBody] ScheduleResource scheduleResource)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var schedule = mapper.Map<Schedule>(scheduleResource);
            schedule.lastUpdate = DateTime.Now;

            repository.Add(schedule);
            await uow.CompleteAsync();

            mapper.Map<Schedule, ScheduleResource>(schedule, scheduleResource);

            return Ok(scheduleResource);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateSchedule(int id, [FromBody] ScheduleResource scheduleResource)
        {
            var scheduleFromDb = await repository.GetSchedule(id);
            if(scheduleFromDb == null)
                return NotFound();

            mapper.Map<ScheduleResource, Schedule>(scheduleResource, scheduleFromDb);

            await uow.CompleteAsync();

            mapper.Map<Schedule, ScheduleResource>(scheduleFromDb, scheduleResource);

            return Ok(scheduleResource);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> RemoveSchedule(int id)
        {
            var schedule = await repository.GetSchedule(id);

            if(schedule == null)
                return NotFound(0);

            repository.Remove(schedule);

            await uow.CompleteAsync();

            return Ok();
        }
    }
}