using Microsoft.AspNetCore.Mvc;
using System;
using TestTask.Domain.Models;
using TestTask.Services.Interfaces;
using TestTask.WebApi.ViewModels;

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
        public IActionResult EditNote(Guid noteId, [FromBody] EditNoteViewModel editNote)
        {
            var note = new Note()
            {
                NoteId = noteId,
                Label = editNote.Label,
                Text = editNote.Text,
                LastUpdatedTime = DateTime.UtcNow
            };

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
        public IActionResult AddNote([FromBody] AddNoteViewModel addNote)
        {
            var note = new Note()
            {
                NoteId = Guid.NewGuid(),
                Label = addNote.Label,
                Text = addNote.Text,
                CreatedTime = DateTime.UtcNow,
                LastUpdatedTime = DateTime.UtcNow
            };

            _notesService.Add(note);

            return Ok();
        }
    }
}
