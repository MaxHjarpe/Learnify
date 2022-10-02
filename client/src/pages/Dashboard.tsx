import {  Row } from "antd";
import { useEffect } from "react";
import Categories from "../components/Categories";
import ShowCourses from "../components/ShowCourses";
import { Course } from "../models/course";
import { addRole, fetchCurrentUser } from "../redux/slice/userSlice";
import { useAppDispatch, useAppSelector } from "../redux/store/configureStore";

const Dashboard = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  const becomeInstructor = async () => {
    await dispatch(addRole());
    dispatch(fetchCurrentUser());
  };

  const { userCourses, user } = useAppSelector((state) => state.user);

  return (
    <div>
      <Categories />
      <div className="course">
        <div className="dashboard">
          {/* <div className="dashboard__header"> */}
          <h1 className="dashboard__header__head">My Courses</h1>
          {!user?.roles?.includes("Instructor") && (
            <div
              className="dashboard__header__h2__button"
              onClick={becomeInstructor}
            >
              Become an Instructor
            </div>
          )}
          {/* </div> */}
          <div className="dashboard__courses">
            <Row gutter={[48, 32]}>
              {userCourses.length > 0 ? (
                userCourses.map((course: Course, index: number) => {
                  return <ShowCourses key={index} course={course} />;
                })
              ) : (
                <h3 className="dashboard__header__h2">
                  You have not bought any courses... yet
                </h3>
              )}
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
