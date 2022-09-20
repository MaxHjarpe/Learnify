import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import agent from "../actions/agent";
import { Course } from "../models/course";

const DescriptionPage = () => {
  const [course, setCourse] = useState<Course>();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    agent.Courses.getById(id).then((response) => {
      setCourse(response);
    });
  }, [id]);

  const getParsedDate = (strDate: any) => {
    let strSplitDate = String(strDate).split(" ");
    let date: any = new Date(strSplitDate[0]);
    // alert(date);
    let dd: any = date.getDate();
    let mm: any = date.getMonth() + 1; //January is 0!

    let yyyy = date.getFullYear();
    if (dd < 10) {
      dd = "0" + dd;
    }
    if (mm < 10) {
      mm = "0" + mm;
    }
    date = dd + "/" + mm + "/" + yyyy;
    return date.toString();
  };

  return (
    <>
      <div className="description-page">
        <div className="description-page__body">
          <div className="description-page__header">
            <div className="description-page__header__title">
              {course?.title}
            </div>
            <div className="description-page__header__details">
              <div className="description-page__header__details__author">
                Created By
                <span className="description-page__header__details__author--name">
                  {course?.instructor}
                </span>
              </div>
              <div className="description-page__header__details__language">
                Language
                <span className="description-page__header__details__author--name">
                  {course?.language}
                </span>
              </div>
              <div className="description-page__header__details__updated">
                Last Updated
                <span className="description-page__header__details__author--date">
                  {getParsedDate(course?.lastUpdated)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DescriptionPage;
