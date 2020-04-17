﻿using System;
using System.Collections.Generic;
using TestTask.Domain.Models;

namespace TestTask.Services.Interfaces
{
    public interface INotesService
    {
        IEnumerable<Note> Get();

        Note GetById(Guid noteId);

        void Add(string text);

        void Remove(Guid noteId);

        void Edit(Note note);
    }
}
