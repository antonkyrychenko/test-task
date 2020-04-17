using Microsoft.AspNetCore.Mvc;
using System;
using TestTask.Domain.Models;
using TestTask.Services.Interfaces;

namespace TestTask.WebApi.Controllers
{
    [ApiController]
    [Route("api/{controller}")]
    public class NotesController : ControllerBase
    {
        private readonly INotesService _notesService;

        public NotesController(INotesService notesService)
        {
            _notesService = notesService;
        }

        [HttpGet]
        public IActionResult GetNotes()
        {
            return Ok(_notesService.Get());
        }

        [HttpGet("{noteId}")]
        public IActionResult GetNote(Guid noteId)
        {
            return Ok(_notesService.GetById(noteId));
        }

        [HttpPut("{noteId}")]
        public IActionResult EditNote(Guid noteId, Note note)
        {
            if(noteId != note.NoteId)
            {
                return BadRequest();
            }

            _notesService.Edit(note);

            return Ok();
        }

        [HttpDelete("{noteId}")]
        public IActionResult DeleteNote(Guid noteId)
        {
            _notesService.Remove(noteId);

            return Ok();
        }

        [HttpPost]
        public IActionResult AddNote([FromHeader] string text)
        {
            _notesService.Add(text);

            return Ok();
        }
    }
}
