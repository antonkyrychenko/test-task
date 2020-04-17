using System;
using System.Collections.Generic;
using TestTask.Domain.Interfaces;
using TestTask.Domain.Models;
using TestTask.Services.Interfaces;

namespace TestTask.Services.Services
{
    public class NotesService : INotesService
    {
        private readonly INotesRepository _notesRepository;

        public NotesService(INotesRepository notesRepository)
        {
            _notesRepository = notesRepository;
        }

        public void Add(string text)
        {
            var note = new Note(Guid.NewGuid(), text);

            _notesRepository.Add(note);
        }

        public void Edit(Note note)
        {
            _notesRepository.Edit(note);
        }

        public IEnumerable<Note> Get()
        {
            return _notesRepository.Get();
        }

        public Note GetById(Guid noteId)
        {
            return _notesRepository.Get(noteId);
        }

        public void Remove(Guid noteId)
        {
            _notesRepository.Remove(noteId);
        }
    }
}
