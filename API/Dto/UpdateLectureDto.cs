using System;

namespace API.Dto
{
    public class UpdateLectureDto
    {
        public int LectureId { get; set; }

        public Guid CourseId { get; set; }
    }
}