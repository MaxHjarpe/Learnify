import React from "react";
import { Popconfirm, Table } from "antd";
import { CourseItem } from "../models/basket";
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/store/configureStore";
import { removeBasketItemAsync } from "../redux/slice/basketSlice";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { Image } from 'antd';
import Categories from "../components/Categories";

const BasketPage = () => {
  const { basket } = useAppSelector((state) => state.basket);
  const dispatch = useAppDispatch();
  const basketCount = basket?.items.length || 0;
  const total = basket?.items.reduce((sum, item) => sum + item.price, 0);

  const columns = [
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (url: string) => {
        return <Image width="100px" src={url} alt={url} />;
      },
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (price: number) => <div>$ {price}</div>,
    },
    {
      title: "Tutor",
      key: "instructor",
      dataIndex: "instructor",
    },
    {
      title: "Action",
      key: "action",
      render: (item: CourseItem) => (
        <Popconfirm
          title="Are you sure you want to return this course?"
          okText="Yes"
          cancelText="No"
          icon={<QuestionCircleOutlined style={{ color: 'red' }}/>}
          onConfirm={() =>
            dispatch(removeBasketItemAsync({ courseId: item.courseId }))
          }
        >
          <div className="action__remove">
            <FaIcons.FaTrashAlt className="action__remove__trash-icon" />
          </div>
        </Popconfirm>
      ),
    },
  ];

  return (
    <div>
      <Categories />
      <div className="basket-page">
        <h1 className="basket-page__header">Shopping Cart</h1>
        <h2 className="basket-page__sub-header">
          {`${basketCount} ${
            basketCount! > 1 ? "courses" : "course"
          } in the Cart`}
        </h2>
        <div className="basket-page__body">
          <div className="basket-page__body__table">
            <Table
              columns={columns}
              dataSource={basket?.items}
              rowKey="courseId"
            />
          </div>
          {total! > 0 && (
            <div className="basket-page__body__summary">
              <h2>Total:</h2>
              <div className="basket-page__body__summary__total">
                {" "}
                $ {total ? total : 0}{" "}
              </div>
              <Link to="/checkout">
                <button className="basket-page__body__summary__checkout">
                  {" "}
                  Checkout{" "}
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BasketPage;
