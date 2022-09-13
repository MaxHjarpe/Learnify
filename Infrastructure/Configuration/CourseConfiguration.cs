using Entity;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infrastructure.Configuration
{
    public class CourseConfiguration : IEntityTypeConfiguration<Course>
    {
        public void Configure(EntityTypeBuilder<Course> builder)
        {
            builder.Property(p => p.Id).IsRequired();
            builder.Property(p => p.Title).IsRequired().HasMaxLength(150);
            builder.Property(p => p.Subtitle).IsRequired();
            builder.Property(p => p.Language).IsRequired();
            builder.Property(p => p.Description).IsRequired();
            builder.Property(p => p.Instructor).IsRequired();
            builder.Property(p => p.Image).IsRequired();
            builder.Property(p => p.Level).IsRequired();
            builder.Property(p => p.Rating).HasColumnType("decimal(18,1)");
        }
    }
}