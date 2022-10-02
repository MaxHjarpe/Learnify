import { Dropdown, Menu, Space, Typography } from "antd";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { removeBasket } from "../redux/slice/basketSlice";
import { signOut } from "../redux/slice/userSlice";
import { useAppSelector } from "../redux/store/configureStore";
import { DownOutlined  } from '@ant-design/icons';
import {TbLogout} from "react-icons/tb";


const UserMenu = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { user } = useAppSelector((state) => state.user);

  const signout = () => {
    dispatch(signOut());
    dispatch(removeBasket());
    history.push("/");
  };


  const menu = (
    <Menu>
      <Menu.Item key={1}>
        <Link to="/profile">My Learning</Link>
      </Menu.Item>
      {user?.roles?.includes("Instructor") && (
        <Menu.Item key={2}>
          <Link to="/instructor">Instructor page</Link>
        </Menu.Item>
      )}
      <Menu.Item key={3}>
        <div onClick={signout}>Log out <Space> <TbLogout/></Space> </div>
      </Menu.Item>
    </Menu>
  );
  return (
    <Dropdown overlay={menu}>

      <Space>
        Menu
        <DownOutlined />
      </Space>

  </Dropdown>
  );
};

export default UserMenu;
