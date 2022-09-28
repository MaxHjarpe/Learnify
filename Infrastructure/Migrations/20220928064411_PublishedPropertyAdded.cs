using Microsoft.EntityFrameworkCore.Migrations;

namespace Infrastructure.Migrations
{
    public partial class PublishedPropertyAdded : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "2da4d865-7a46-4afc-8e38-882247e7b297");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "74091357-a53a-4d6e-b329-825ca754385c");

            migrationBuilder.AddColumn<bool>(
                name: "Published",
                table: "Courses",
                type: "INTEGER",
                nullable: false,
                defaultValue: false);

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "e662104c-b65e-4462-9c3e-7718ec0c8a0b", "f3223bf4-e68c-414d-91a4-2a512a3def8b", "Student", "STUDENT" });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "01db7689-0d03-4b08-8534-65de88787f1c", "ba1c80ec-1de1-4b5d-88a2-f434f535be6a", "Instructor", "INSTRUCTOR" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "01db7689-0d03-4b08-8534-65de88787f1c");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "e662104c-b65e-4462-9c3e-7718ec0c8a0b");

            migrationBuilder.DropColumn(
                name: "Published",
                table: "Courses");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "2da4d865-7a46-4afc-8e38-882247e7b297", "7c5bc4c3-d329-4af1-bb46-4a86f82b421d", "Student", "STUDENT" });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "74091357-a53a-4d6e-b329-825ca754385c", "77226f62-f591-47e6-ad1d-ae8f35c9a3d0", "Instructor", "INSTRUCTOR" });
        }
    }
}
