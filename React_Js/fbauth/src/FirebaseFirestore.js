import React, { useEffect, useState } from "react";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { database } from "./config";

function FirebaseFirestore() {
  const [name, setName] = useState("");
  const [dept, setDpt] = useState("");
  const [position, setPosition] = useState("");
  const [id, setId] = useState("");
  const [show, setShow] = useState(false);

  const [val, setVal] = useState([]);

  const value = collection(database, "Employee Details");

  useEffect(() => {
    const getData = async () => {
      const dbVal = await getDocs(value);
      setVal(dbVal.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getData();
  });

  const handleCreate = async () => {
    await addDoc(value, {
      nametab: name,
      departmenttab: dept,
      positiontab: position,
    });
    setName("");
    setDpt("");
    setPosition("");
  };

  const handleEdit = async (id, nametab, departmenttab, positiontab) => {
    setName(nametab);
    setDpt(departmenttab);
    setPosition(positiontab);
    setId(id);
    setShow(true);
  };

  const handleDelete = async (id) => {
    const deleteVal = doc(database, "Employee Details", id);
    await deleteDoc(deleteVal);
  };

  const handleUpdate = async () => {
    const updateData = doc(database, "Employee Details", id);
    await updateDoc(updateData, {
      nametab: name,
      departmenttab: dept,
      positiontab: position,
    });
    setShow(false);
    setName("");
    setDpt("");
    setPosition("");
  };

  return (
    <>
      <h1>Crud Using FireBase</h1>
      <div className="container">
        <input
          value={name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          value={dept}
          placeholder="Department"
          onChange={(e) => setDpt(e.target.value)}
        />
        <input
          value={position}
          placeholder="Position"
          onChange={(e) => setPosition(e.target.value)}
        />
        <button onClick={show ? handleUpdate : handleCreate} className={`btn`}>
          {show ? "Update" : "Create"}
        </button>
        {val.map((values) => (
          <table>
            <tbody>
              <tr>
                <td className="data">{values.nametab}</td>
                <td className="data">{values.departmenttab}</td>
                <td className="data">{values.positiontab}</td>
                <button
                  className="btn btn-warning"
                  onClick={() =>
                    handleEdit(
                      values.id,
                      values.nametab,
                      values.departmenttab,
                      values.positiontab
                    )
                  }
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(values.id)}
                >
                  Delete
                </button>
              </tr>
            </tbody>
          </table>
        ))}
      </div>
    </>
  );
}

export default FirebaseFirestore;
