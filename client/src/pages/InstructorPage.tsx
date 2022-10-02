import { Card, Empty } from "antd";
import Meta from "antd/lib/card/Meta";
import { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import Categories from "../components/Categories";
import { Course } from "../models/course";
import { getUnpublishedCourses } from "../redux/slice/userSlice";
import { useAppDispatch, useAppSelector } from "../redux/store/configureStore";

const InstructorPage = () => {
  const history = useHistory();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUnpublishedCourses());
  }, [dispatch]);

  const { unpublishedCourses } = useAppSelector((state) => state.user);

  const makeCourse = () => {
    history.push("/instructor/course");
  };

  return (
    <div>
      <Categories />
      <div className="instructor">
        <div className="instructor__left">
          <div className="instructor__left__header">
            {unpublishedCourses.length > 0
              ? "My Unpublished Courses"
              : "Create a new Course"}
          </div>
          <div className="instructor__left__courses">
            {unpublishedCourses.map((course: Course, index: number) => {
              return (
                <Link to={`${course.id}/lectures`} key={index}>
                  <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt={course.title} src={course.image} />}
                  >
                    <Meta title={course.title} description={course.subTitle} />
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
        <div className="empty__course">
          {unpublishedCourses.length < 0 ?
          (
          <Empty
            image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
            imageStyle={{
              height: 60,
            }}
            description={<h2>You have no unpublished Courses</h2>}
          >
            <div
              role="button"
              className="dashboard__header__h2__button"
              onClick={makeCourse}
            >
              Create a Course
            </div>

            {/* <Button type="primary">Create a Course!</Button> */}
          </Empty>
          )
          :
          (
            <div
              role="button"
              className="dashboard__header__h2__button"
              onClick={makeCourse}
            >
              Create a Course
            </div>
          )
          }
        </div>
        {/* <div  className="instructor__right">
        <Button onClick={makeCourse} type="primary"> New Course</Button>
      </div> */}
      </div>
    </div>
  );
};

export default InstructorPage;
