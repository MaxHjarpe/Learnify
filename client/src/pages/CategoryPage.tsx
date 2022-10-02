import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import agent from "../actions/agent";
import ShowCourses from "../components/ShowCourses";
import { Category } from "../models/category";
import { Course } from "../models/course";
import { Empty, Row } from "antd";
import Categories from "../components/Categories";
import { useAppDispatch, useAppSelector } from "../redux/store/configureStore";
import { addRole, fetchCurrentUser } from "../redux/slice/userSlice";

const CategoryPage = () => {
  const [data, setData] = useState<Category>();
  const { id } = useParams<{ id: string }>();
  const { userCourses, user } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const history = useHistory();

  useEffect(() => {
    agent.Categories.getCategory(parseInt(id)).then((response) => {
      setData(response);
    });
  }, [id]);
  const becomeInstructor = async () => {
    await dispatch(addRole());
    dispatch(fetchCurrentUser());
  };

  const makeCourse = () => {
    history.push("/instructor/course");
  };

  return (
    <div>
      <Categories />
      <div className="course">
        <div className="course__header">
          <h1>{data?.name}</h1>
          {/* <h1>Pick a course from your favorite category</h1> */}
        </div>
        <Row gutter={[24, 32]}>
          {data?.courses?.length ? (
            data.courses.map((course: Course, index: number) => {
              return <ShowCourses key={index} course={course} />;
            })
          ) : (
            <div className="course">
              <Empty
                image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
                imageStyle={{
                  height: 60,
                }}
                description={
                  <h2>
                    There are no courses in this category... Be the first to
                    create one!
                  </h2>
                }
              >
                {!user?.roles?.includes("Instructor") && user !== null ? (
                  <div
                    role="button"
                    className="dashboard__header__h2__button"
                    onClick={becomeInstructor}
                  >
                    Become an Instructor
                  </div>
                ) : (
                  <div
                    role="button"
                    className="dashboard__header__h2__button"
                    onClick={makeCourse}
                  >
                    Create a Course
                  </div>
                )}
                {/* <Button type="primary">Create a Course!</Button> */}
              </Empty>
            </div>
          )}
        </Row>
      </div>
    </div>
  );
};

export default CategoryPage;
