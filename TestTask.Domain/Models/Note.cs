using System;

namespace TestTask.Domain.Models
{
    public class Note
    {
        public Note()
        {
        }

        public Note(Guid noteId)
        {
            this.NoteId = noteId;
        }

        public Note(Guid noteId, string text) : this(noteId)
        {
            this.Text = text;
        }

        public Guid NoteId { get; set; }

        public string Text { get; set; }
    }
}
