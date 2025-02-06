import { Button, Form, Input, message } from "antd";
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { antdvalidations } from "../../components/validation";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { db } from "../../firebase";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";

const Signup = () => {
  const navigate = useNavigate();
  const onFinish = async (values) => {
    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      updateProfile(auth.currentUser, {
        displayName: values.name,
      });
      const user = userCredential.user;
      const formDatacopy = { ...values };
      delete formDatacopy.password;
      formDatacopy.timestamp = serverTimestamp();
      await setDoc(doc(db, "users", user.uid), formDatacopy);
      navigate("/");
      localStorage.setItem("user", JSON.stringify(userCredential.user));
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
          <span className="text-primary">Signup</span>
          <hr />
        </h1>

        <Form.Item label="Name" name={"name"} rules={antdvalidations()}>
          <Input type="text" />
        </Form.Item>

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
          SignUp
        </Button>
        <Link
          to={"/login"}
          className="text-center text-gray-700 underline hover:underline hover:text-gray-700"
        >
          Already Have an Account? Login
        </Link>
      </Form>
    </div>
  );
};

export default Signup;
