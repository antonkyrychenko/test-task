using System.ComponentModel.DataAnnotations;

namespace TestTask.WebApi.ViewModels
{
    public class AddNoteViewModel
    {
        [Required]
        [MaxLength(50)]
        public string Label { get; set; }

        [Required]
        [MaxLength(200)]
        public string Text { get; set; }
    }
}
