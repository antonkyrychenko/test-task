using System;
using System.Collections.Generic;
using TestTask.Domain.Models;

namespace TestTask.Domain.Interfaces
{
    public interface INotesRepository
    {
        IEnumerable<Note> Get();

        Note GetById(Guid noteId);

        void Add(Note note);

        void Remove(Guid noteId);

        void Edit(Note note);
    }
}
