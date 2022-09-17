using System;
using System.Linq.Expressions;

namespace Entity.Specifications
{
    public class CoursesWithCategoriesSpecification : BaseSpecification<Course>
    {
        public CoursesWithCategoriesSpecification(string sort, int? categoryId) : base(x =>
            !categoryId.HasValue || x.CategoryId == categoryId)
        {
            IncludeMethod(x => x.Category);

            if (!string.IsNullOrEmpty(sort))
            {
                switch (sort)
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
        }
    }
}