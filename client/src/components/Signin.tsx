import { Button, Card, Form, Input, Typography } from "antd";
import { Content } from "antd/lib/layout/layout";
import { ChangeEvent, SyntheticEvent, useState } from "react";
import agent from "../actions/agent";
import { Login } from "../models/user";

const { Text, Title } = Typography;

interface Props {
  toggleRegister: () => void;
}

const Signin = ({ toggleRegister }: Props) => {
  const [values, setValues] = useState<Login>({
    email: "",
    password: "",
  });

  const { email, password } = values;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const submitUser = async (e: SyntheticEvent) => {
    e.preventDefault();
    if (email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) && password.length >= 6) {
      const response = await agent.Users.login(values);
      setValues({ ...values, email: "", password: "" });
      console.log(response);
    }
  };

  return (
    <>
      <Card className="log-in-card">
        <div className="log-in-card__intro">
          <Typography>
            <Title level={2} className="log-in-card__intro-title">
              Log in to Learnify!
            </Title>
            <Text>Use your Email and Password to Login</Text>
          </Typography>
        </div>
        <Content className="log-in__form">
          <Form
            name="login"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            autoComplete="off"
            onSubmitCapture={submitUser}
          >
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please enter a valid email!",
                  pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                },
              ]}
            >
              <Input value={email} name="email" onChange={handleChange} />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please enter a valid password!",
                  min: 6,
                },
              ]}
            >
              <Input.Password
                name="password"
                value={password}
                onChange={handleChange}
              />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
              <Button onClick={submitUser} type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Content>
        <div onClick={toggleRegister} className="log-in-card__toggle">
          Not a user yet? Register here
        </div>
      </Card>
    </>
  );
};

export default Signin;
