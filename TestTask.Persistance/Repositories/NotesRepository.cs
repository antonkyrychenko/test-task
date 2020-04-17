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

        public Note Get(Guid noteId)
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
    }
}
