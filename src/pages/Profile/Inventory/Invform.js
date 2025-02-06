import { Form, Input, message, Modal, Select} from "antd";
import React from "react";
import { antdvalidations } from "../../../components/validation";
import TextArea from "antd/es/input/TextArea";
import { db } from "../../../firebase";
import { doc, setDoc } from "firebase/firestore";

const Invform = ({ open, setOpen, EditData }) => {
  const [form] = Form.useForm();
  const onFinish = async (values) => {
    await setDoc(doc(db, "students", values.regno), values);
    message.success("Data Added Successfully");
    setOpen(false);
  };
  return (
    <div>
      <Modal
        title={EditData ? "Edit Student" : "Add Student" }
        open={open}
        onOk={() => form.submit()}
        onCancel={() => setOpen(false)}
        centered
      >
        <Form layout="vertical" form={form} onFinish={onFinish}>
          <div className="flex gap-5">
            {!EditData && (
              <Form.Item rules={antdvalidations()} label="Name" name={"name"}>
                <Input type="text" />
              </Form.Item>
            )}
            {EditData && (
              <Form.Item
                rules={antdvalidations()}
                initialValue={EditData.name}
                label="Name"
                name={"name"}
              >
                <Input type="text" />
              </Form.Item>
            )}
            {!EditData && (
              <Form.Item rules={antdvalidations()} label="Class" name={"class"}>
                <Select>
                  <Select.Option value="Nursery">Nursery</Select.Option>
                  <Select.Option value="LKG">LKG</Select.Option>
                  <Select.Option value="UKG">UKG</Select.Option>
                  <Select.Option value="1">1</Select.Option>
                  <Select.Option value="2">2</Select.Option>
                  <Select.Option value="3">3</Select.Option>
                  <Select.Option value="4">4</Select.Option>
                  <Select.Option value="5">5</Select.Option>
                  <Select.Option value="6">6</Select.Option>
                  <Select.Option value="7">7</Select.Option>
                  <Select.Option value="8">8</Select.Option>
                  <Select.Option value="9">9</Select.Option>
                  <Select.Option value="10">10</Select.Option>
                  <Select.Option value="11">11</Select.Option>
                  <Select.Option value="12">12</Select.Option>
                </Select>
              </Form.Item>
            )}
            {EditData && (
              <Form.Item
                rules={antdvalidations()}
                initialValue={EditData.class}
                label="Class"
                name={"class"}
              >
                <Select>
                  <Select.Option value="Nursery">Nursery</Select.Option>
                  <Select.Option value="LKG">LKG</Select.Option>
                  <Select.Option value="UKG">UKG</Select.Option>
                  <Select.Option value="1">1</Select.Option>
                  <Select.Option value="2">2</Select.Option>
                  <Select.Option value="3">3</Select.Option>
                  <Select.Option value="4">4</Select.Option>
                  <Select.Option value="5">5</Select.Option>
                  <Select.Option value="6">6</Select.Option>
                  <Select.Option value="7">7</Select.Option>
                  <Select.Option value="8">8</Select.Option>
                  <Select.Option value="9">9</Select.Option>
                  <Select.Option value="10">10</Select.Option>
                  <Select.Option value="11">11</Select.Option>
                  <Select.Option value="12">12</Select.Option>
                </Select>
              </Form.Item>
            )}
          </div>
          <div className="flex gap-5">
            {!EditData && (
              <Form.Item
                rules={antdvalidations()}
                label="Section"
                name={"section"}
              >
                <Select>
                  <Select.Option value="A">A</Select.Option>
                  <Select.Option value="B">B</Select.Option>
                  <Select.Option value="C">C</Select.Option>
                  <Select.Option value="D">D</Select.Option>
                </Select>
              </Form.Item>
            )}
            {EditData && (
              <Form.Item
                rules={antdvalidations()}
                initialValue={EditData.section}
                label="Section"
                name={"section"}
              >
                <Select>
                  <Select.Option value="A">A</Select.Option>
                  <Select.Option value="B">B</Select.Option>
                  <Select.Option value="C">C</Select.Option>
                  <Select.Option value="D">D</Select.Option>
                </Select>
              </Form.Item>
            )}
            {!EditData && (
              <Form.Item
                rules={antdvalidations()}
                label="Roll no"
                name={"rollno"}
              >
                <Input type="text" />
              </Form.Item>
            )}
            {EditData && (
              <Form.Item
                rules={antdvalidations()}
                initialValue={EditData.rollno}
                label="Roll no"
                name={"rollno"}
              >
                <Input type="text" />
              </Form.Item>
            )}
          </div>
          <div className="flex gap-5">
            {!EditData && (
              <Form.Item
                rules={antdvalidations()}
                label="Blood Group"
                name={"bloodgrp"}
              >
                <Select>
                  <Select.Option value="A+">A+</Select.Option>
                  <Select.Option value="A-">A-</Select.Option>
                  <Select.Option value="B+">B+</Select.Option>
                  <Select.Option value="B-">B-</Select.Option>
                  <Select.Option value="AB+">AB+</Select.Option>
                  <Select.Option value="AB-">AB-</Select.Option>
                  <Select.Option value="O+">O+</Select.Option>
                  <Select.Option value="O-">O-</Select.Option>
                </Select>
              </Form.Item>
            )}
            {EditData && (
              <Form.Item
                rules={antdvalidations()}
                initialValue={EditData.bloodgrp}
                label="Blood Group"
                name={"bloodgrp"}
              >
                <Select>
                  <Select.Option value="A+">A+</Select.Option>
                  <Select.Option value="A-">A-</Select.Option>
                  <Select.Option value="B+">B+</Select.Option>
                  <Select.Option value="B-">B-</Select.Option>
                  <Select.Option value="AB+">AB+</Select.Option>
                  <Select.Option value="AB-">AB-</Select.Option>
                  <Select.Option value="O+">O+</Select.Option>
                  <Select.Option value="O-">O-</Select.Option>
                </Select>
              </Form.Item>
            )}
            {!EditData && (
              <Form.Item
                rules={antdvalidations()}
                label="Father"
                name={"father"}
              >
                <Input type="text" />
              </Form.Item>
            )}
            {EditData && (
              <Form.Item
                rules={antdvalidations()}
                initialValue={EditData.father}
                label="Father"
                name={"father"}
              >
                <Input type="text" />
              </Form.Item>
            )}
          </div>
          <div className="flex gap-5">
            {!EditData && (
              <Form.Item
                rules={antdvalidations()}
                label="Father's Occupation"
                name={"foccu"}
              >
                <Input type="text" />
              </Form.Item>
            )}
            {EditData && (
              <Form.Item
                rules={antdvalidations()}
                initialValue={EditData.foccu}
                label="Father's Occupation"
                name={"foccu"}
              >
                <Input type="text" />
              </Form.Item>
            )}
            {!EditData && (
              <Form.Item
                rules={antdvalidations()}
                label="Mother's Occupation"
                name={"moccu"}
              >
                <Input type="text" />
              </Form.Item>
            )}
            {EditData && (
              <Form.Item
                rules={antdvalidations()}
                initialValue={EditData.moccu}
                label="Mother's Occupation"
                name={"moccu"}
              >
                <Input type="text" />
              </Form.Item>
            )}
          </div>
          <div className="flex gap-5">
            {!EditData && (
              <Form.Item
                rules={antdvalidations()}
                label="Mother"
                name={"mother"}
              >
                <Input type="text" />
              </Form.Item>
            )}
            {EditData && (
              <Form.Item
                rules={antdvalidations()}
                initialValue={EditData.mother}
                label="Mother"
                name={"mother"}
              >
                <Input type="text" />
              </Form.Item>
            )}
            {!EditData && (
              <Form.Item rules={antdvalidations()} label="Phone" name={"phone"}>
                <Input type="text" />
              </Form.Item>
            )}
            {EditData && (
              <Form.Item
                rules={antdvalidations()}
                initialValue={EditData.phone}
                label="Phone"
                name={"phone"}
              >
                <Input type="text" />
              </Form.Item>
            )}
          </div>
          {!EditData && (
            <Form.Item
              rules={antdvalidations()}
              label="Registration No."
              name={"regno"}
            >
              <Input type="text" />
            </Form.Item>
          )}
          {EditData && (
            <Form.Item
              rules={antdvalidations()}
              initialValue={EditData.regno}
              label="Registration No."
              name={"regno"}
            >
              <Input type="text" disabled />
            </Form.Item>
          )}

          {!EditData && (
            <Form.Item
              rules={antdvalidations()}
              label="Address"
              name={"address"}
            >
              <TextArea type="text" />
            </Form.Item>
          )}
          {EditData && (
            <Form.Item
              rules={antdvalidations()}
              initialValue={EditData.address}
              label="Address"
              name={"address"}
            >
              <TextArea type="text" />
            </Form.Item>
          )}
        </Form>
      </Modal>
    </div>
  );
};

export default Invform;
