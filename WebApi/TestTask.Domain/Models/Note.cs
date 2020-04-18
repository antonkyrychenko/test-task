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

        public Note(Guid noteId, string label, string text, DateTime createdTime, DateTime lastUpdatedTime) : this(noteId)
        {
            this.Label = label;
            this.Text = text;
            this.CreatedTime = createdTime;
            this.LastUpdatedTime = lastUpdatedTime;
        }

        public Guid NoteId { get; set; }

        public string Label { get; set; }

        public string Text { get; set; }

        public DateTime CreatedTime { get; set; }

        public DateTime LastUpdatedTime { get; set; }
    }
}
