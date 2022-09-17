using System;
using System.Linq.Expressions;

namespace Entity.Specifications
{
    public class CoursesFilterCountSpecification : BaseSpecification<Course>
    {
        public CoursesFilterCountSpecification(CourseParams courseParams) : base(x =>
            (string.IsNullOrEmpty(courseParams.Search) || x.Title.ToLower().Contains(courseParams.Search)) &&
            (!courseParams.CategoryId.HasValue || x.CategoryId == courseParams.CategoryId)
            )
        {
        }
    }
}