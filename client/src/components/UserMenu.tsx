import { Dropdown, Menu } from "antd";
import { Link, useHistory } from "react-router-dom";
import { removeBasket } from "../redux/slice/basketSlice";
import { signOut } from "../redux/slice/userSlice";
import { useAppDispatch } from "../redux/store/configureStore";

const UserMenu = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();
  
  const signout = () => {
    dispatch(signOut());
    dispatch(removeBasket());
    history.push("/");
  };


  const menu = (
    <Menu>
      <Menu.Item>
        <Link to="/profile">Profile</Link>
      </Menu.Item>
      <Menu.Item>
        <div onClick={signout} >Log out</div>
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu} placement="bottom">
      <div className="dropdown">Menu</div>
    </Dropdown>
  );
};

export default UserMenu;
