import React, { useState } from "react";
import { Button, Table} from "antd";
import Invform from "./Invform";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { db } from "../../../firebase";

const Inventory = () => {
  const [data, setData] = useState([]);
  const [editData, setEditData] = useState(null);
  const deleteDocument = async (documentId) => {
    const docRef = doc(db, "students", documentId);
    try {
      await deleteDoc(docRef);
      console.log(`Document with ID ${documentId} deleted`);
    } catch (error) {
      console.error("Error deleting document: ", error);
    }
  };
  const columns = [
    {
      title: "Student ID",
      dataIndex: "regno",
      render: (text) => text.toUpperCase(),
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Class",
      dataIndex: "class",
      render: (text) => text.toUpperCase(),
    },
    {
      title: "Section",
      dataIndex: "section",
      render: (text) => text.toUpperCase(),
    },
    {
      title: "Roll No.",
      dataIndex: "rollno",
    },
    {
      title: "Action",
      render: (text, record) => (
        <div>
          <Button
            type="primary"
            onClick={() => {
              setOpen(true);
              setEditData(record);
            }}
            style={{ marginRight: 8 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M15.748 2.947a2 2 0 0 1 2.828 0l2.475 2.475a2 2 0 0 1 0 2.829L9.158 20.144l-6.38 1.076l1.077-6.38zm-.229 3.057l2.475 2.475l1.643-1.643l-2.475-2.474zm1.06 3.89l-2.474-2.475l-8.384 8.384l-.503 2.977l2.977-.502z"
              />
            </svg>
          </Button>
          <Button type="primary" danger onClick={() => deleteDocument(record.id)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M18 19a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V7H4V4h4.5l1-1h4l1 1H19v3h-1zM6 7v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V7zm12-1V5h-4l-1-1h-3L9 5H5v1zM8 9h1v10H8zm6 0h1v10h-1z"
              />
            </svg>
          </Button>
        </div>
      ),
    },
  ];
  const [open, setOpen] = useState(false);
  const getData = async () => {
    const usersCollection = collection(db, "students");
    const querySnapshot = await getDocs(usersCollection);
    setData(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

    // querySnapshot.forEach((doc) => {
    //   console.log(doc.id, " => ", doc.data());
    // });
  };
  React.useEffect(() => {
    getData();
  }, []);
  return (
    <div className="w-screen">
      <div className="flex justify-end">
        <Button type="default" onClick={() => setOpen(true)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 612 612"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
              d="M376 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96"
            />
            <path
              fill="none"
              stroke="currentColor"
              strokeMiterlimit="10"
              strokeWidth="32"
              d="M288 304c-87 0-175.3 48-191.64 138.6c-2 10.92 4.21 21.4 15.65 21.4H464c11.44 0 17.62-10.48 15.65-21.4C463.3 352 375 304 288 304Z"
            />
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
              d="M88 176v112m56-56H32"
            />
          </svg>
        </Button>
      </div>
      <Table columns={columns} dataSource={data} />
      {open && <Invform open={open} setOpen={setOpen} EditData={editData} />}
    </div>
  );
};

export default Inventory;
