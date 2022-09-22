import React, { useEffect } from "react";
import { Row } from "antd";
import { Course } from "../models/course";
import ShowCourses from "../components/ShowCourses";
import { useAppDispatch, useAppSelector } from "../redux/store/configureStore";
import { coursesSelector, getCoursesAsync } from "../redux/slice/courseSlice";

const Homepage = () => {
  const courses = useAppSelector(coursesSelector.selectAll);
  const dispatch = useAppDispatch();
  const { coursesLoaded } = useAppSelector((state) => state.course);

  useEffect(() => {
    if (!coursesLoaded) dispatch(getCoursesAsync());
  }, [coursesLoaded, dispatch]);

  return (
    <div className="course">
      <div className="course__header">
        <h1>What to learn next?</h1>
        <h2>New courses picked just for you!</h2>
      </div>
      <Row gutter={[24, 32]}>
        {courses &&
          courses.map((course: Course, index: number) => {
            return <ShowCourses key={index} course={course} />;
          })}
      </Row>
    </div>
  );
};

export default Homepage;
