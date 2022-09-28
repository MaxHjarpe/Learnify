using System;
using System.Linq.Expressions;

namespace Entity.Specifications
{
    public class CoursesWithCategoriesSpecification : BaseSpecification<Course>
    {
        public CoursesWithCategoriesSpecification(CourseParams courseParams) : base(x =>
            (string.IsNullOrEmpty(courseParams.Search) || x.Title.ToLower().Contains(courseParams.Search)) &&
            (!courseParams.CategoryId.HasValue || x.CategoryId == courseParams.CategoryId) && (x.Published == true)
            )
        {
            IncludeMethod(x => x.Category);
            IncludeMethod(c => c.Requirements);
            IncludeMethod(c => c.Learnings);
            ApplyPagination(courseParams.PageSize, courseParams.PageSize * (courseParams.PageIndex - 1));

            if (!string.IsNullOrEmpty(courseParams.Sort))
            {
                switch (courseParams.Sort)
                {
                    case "priceAscending":
                        SortMethod(c => c.Price);
                        break;
                    case "priceDescending":
                        SortByDescendingMethod(c => c.Price);
                        break;
                    default:
                        SortMethod(c => c.Title);
                        break;
                }
            }
        }

        public CoursesWithCategoriesSpecification(Guid id) : base(x => x.Id == id)
        {
            IncludeMethod(c => c.Requirements);
            IncludeMethod(c => c.Learnings);
            IncludeMethod(c => c.Category);
            SortMethod(x => x.Id);
        }
    }
}