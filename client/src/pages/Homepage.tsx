import React, { useEffect } from "react";
import { Pagination } from "antd";
import Select, { SingleValue } from "react-select";
import { Course } from "../models/course";
import ShowCourses from "../components/ShowCourses";
import { useAppDispatch, useAppSelector } from "../redux/store/configureStore";
import {
  coursesSelector,
  getCoursesAsync,
  setCourseParams,
  setPageNumber,
} from "../redux/slice/courseSlice";
import { categoriesSelector } from "../redux/slice/categorySlice";
import { Category } from "../models/category";


const sortOptions = [
  { value: "title", label: "Alphabetical" },
  { value: "priceDescending", label: "Price - High to Low" },
  { value: "priceAscending", label: "Price - Low to High" },
];

const Homepage = () => {
  const courses = useAppSelector(coursesSelector.selectAll);
  const dispatch = useAppDispatch();
  const { coursesLoaded, courseParams, pagination } = useAppSelector(
    (state) => state.course
  );

  useEffect(() => {
    if (!coursesLoaded) dispatch(getCoursesAsync());
  }, [coursesLoaded, dispatch]);

  function onChange(pageNumber: number) {
    dispatch(setPageNumber({ pageIndex: pageNumber }));
  }

  const categories = useAppSelector(categoriesSelector.selectAll);

  const getCategories = () => {
    const catArray: any[] = [];
    categories.forEach((category: Category) => {
      catArray.push({ value: category.id, label: category.name });
    });
    return catArray;
  };

  return (
    <div className="course">
      <div className="course__header">
        <h1>What to learn next?</h1>

        {/* <h2>We have courses picked just for you!</h2> */}
      </div>
      <div className="course__header__filters">
        <Select
          className="course__header__filters__options"
          placeholder="Sort"
          isSearchable
          options={sortOptions}
          onChange={(selected: SingleValue<{ value: string; label: string }>) =>
            dispatch(setCourseParams({ sort: selected!.value }))
          }
        />
        <Select
          className="course__header__filters__options"
          placeholder="Filter by category"
          isSearchable
          options={getCategories()}
          onChange={(selected: SingleValue<{ value: string; label: string }>) =>
            dispatch(setCourseParams({ category: selected!.value }))
          }
        />
      </div>
      {/* 
      <Row gutter={[24, 32]}>
        <Col span={20}>*/}
      {/* <Row gutter={[24, 32]}>
        <Col span={20}> */}
      <div className="all__course__cards">
        <div className="course__header__card">
          {courses &&
            courses.map((course: Course, index: number) => {
              return <ShowCourses key={index} course={course} />;
            })}
        </div>
      </div>
      {/* </Col>
      </Row> */}
      {/*  </Col>
      </Row> */}
      <div className="course__pagination">
        {pagination && (
          <Pagination
            defaultCurrent={pagination?.pageIndex}
            total={pagination?.totalCount}
            pageSize={pagination?.pageSize}
            onChange={onChange}
          />
        )}
      </div>
    </div>
  );
};

export default Homepage;

// {data?.courses?.length ? (
//   data.courses.map((course: Course, index: number) => {
//     return <ShowCourses key={index} course={course} />;
//   })
// ) : (
//   <div></div>
// )}
