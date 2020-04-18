using System;
using System.Collections.Generic;
using TestTask.Domain.Interfaces;
using TestTask.Domain.Models;

namespace TestTask.Persistance.Repositories
{
    public class NotesRepository : INotesRepository
    {
        private Dictionary<Guid, Note> _notes;

        public NotesRepository()
        {
            this._notes = new Dictionary<Guid, Note>();
            AddSomeNotes(10);
        }

        public void Add(Note note)
        {
            try
            {
                this._notes.Add(note.NoteId, note);
            }
            catch (ArgumentException e)
            {
                throw new ArgumentException("Note with specific note id already exists", paramName: nameof(note), e);
            }
        }

        public void Edit(Note note)
        {
            try
            {
                if (this._notes.ContainsKey(note.NoteId))
                {
                    this._notes[note.NoteId] = note;
                    return;
                }

                throw new ArgumentException("Note with specific note id does not found", paramName: nameof(note));
            }
            catch (KeyNotFoundException e)
            {
                throw new ArgumentException("Note with specific note id does not found", paramName: nameof(note), e);
            }
        }

        public IEnumerable<Note> Get()
        {
            return this._notes.Values;
        }

        public Note GetById(Guid noteId)
        {
            try
            {
                return this._notes[noteId];
            }
            catch (KeyNotFoundException e)
            {
                throw new ArgumentException("Note with specific note id does not found", paramName: nameof(noteId), e);
            }
        }

        public void Remove(Guid noteId)
        {
            this._notes.Remove(noteId);
        }

        private void AddSomeNotes(short numberOfNotes)
        {
            for (int i = 0; i < numberOfNotes; i++)
            {
                var note = new Note()
                {
                    NoteId = Guid.NewGuid(),
                    Label = $"Note label {i}",
                    Text = $"Note text {i}",
                    CreatedTime = DateTime.UtcNow - TimeSpan.FromHours(i),
                    LastUpdatedTime = DateTime.UtcNow - TimeSpan.FromMinutes(10 * i)
                };

                this._notes[note.NoteId] = note;
            }
        }
    }
}
