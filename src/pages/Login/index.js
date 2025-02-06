import { Button, Form, Input, message } from "antd";
import React, { use, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { antdvalidations } from "../../components/validation";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const navigate = useNavigate();
  const onFinish = async (values) => {
    try {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      if (userCredential.user) {
        navigate("/");
        localStorage.setItem("user", JSON.stringify(userCredential.user));
      }
    } catch (error) {
      message.error(error.message);
    }
  };
  useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate("/");
    }
  }, [navigate]);
  return (
    <div className="bg-primary flex h-screen w-screen items-center justify-center">
      <Form
        layout="vertical"
        className="bg-white lg:w-1/3 sm:w-1/2 shadow rounded p-5 gap-5 w-screen grid"
        onFinish={onFinish}
      >
        <h1 className="uppercase">
          <span className="text-primary">Login</span>
          <hr />
        </h1>

        <Form.Item label="Email" name={"email"} rules={antdvalidations()}>
          <Input type="email" />
        </Form.Item>

        <Form.Item label="Password" name={"password"} rules={antdvalidations()}>
          <Input type="password" />
        </Form.Item>

        <Button
          htmlType="submit"
          type="primary"
          className="rounded-none w-full h-10"
        >
          Login
        </Button>
        <Link
          to={"/signup"}
          className="text-center text-gray-700 underline hover:underline hover:text-gray-700"
        >
          Don&apos;t Have an Account? Register Now
        </Link>
      </Form>
    </div>
  );
};

export default Login;
