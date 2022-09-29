import { Dropdown, Menu } from "antd";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { removeBasket } from "../redux/slice/basketSlice";
import { signOut } from "../redux/slice/userSlice";
import { useAppSelector } from "../redux/store/configureStore";
import { DownOutlined, LogoutOutlined, UserOutlined } from '@ant-design/icons';


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
        <div onClick={signout}>Log out <LogoutOutlined /></div>
      </Menu.Item>
    </Menu>
  );
  return (
    <Dropdown.Button overlay={menu} placement="bottom" icon={<UserOutlined />}>
      Profile
    </Dropdown.Button>
  );
};

export default UserMenu;
