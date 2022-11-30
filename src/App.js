import React, { useState } from "react";
import "./App.css";
import CustomButton from "./components/CustomButton";
import User from "./components/User";

const App = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "리액트 공부하기",
      age: "리액트 기초를 공부해봅시다.",
      isDone: false,
    },
  ]);

  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const addUserHandler = () => {
    const newUser = {
      id: users.length + 1,
      age: age,
      name: name,
      isDone: false,
    };

    setUsers([...users, newUser]);
  };

  const deleteUserHandler = (id) => {
    const newUserList = users.filter((user) => user.id !== id);
    setUsers(newUserList);
  };

  const editUserHandler = (id) => {
    const idx = users.findIndex((user) => user.id === id);

    const copy = [...users];
    copy[idx].isDone = !copy[idx].isDone;
    setUsers(copy);
  };

  return (
    <div>
      <div className="container">
        <span>My Todo List</span>
        <span>React</span>
      </div>

      <div className="add-form">
        <div className="add-form2">
          <span style={{ fontWeight: 700 }}>제목</span>
          <input
            style={{
              borderRadius: 12,
              height: 40,
              width: 240,
            }}
            value={name}
            placeholder=""
            // 인풋 이벤트로 들어온 입력 값을 name의 값으로 업데이트
            onChange={(e) => setName(e.target.value)}
          />
          <span style={{ fontWeight: 700 }}>내용</span>
          <input
            style={{ borderRadius: 12, height: 40, width: 240 }}
            value={age}
            placeholder=""
            // 인풋 이벤트로 들어온 입력 값을 age의 값으로 업데이트
            onChange={(e) => setAge(e.target.value)}
          />

          <div className="add-button">
            <CustomButton color="teal" onClick={addUserHandler}>
              추가하기
            </CustomButton>{" "}
          </div>
        </div>
      </div>

      <div>
        <h2 style={{ paddingLeft: 24 }}>Working.. 🔥</h2>
      </div>

      <div className="app-style">
        {users.map((user) =>
          user.isDone === false ? (
            <User
              handleDelete={deleteUserHandler}
              handleEdit={editUserHandler}
              user={user}
              key={user.id}
            ></User>
          ) : null
        )}
      </div>

      <div>
        <h2 style={{ paddingLeft: 24 }}>Done..! 🎉</h2>
        <div className="app-style">
          {users.map((user) =>
            user.isDone === true ? (
              <User
                handleDelete={deleteUserHandler}
                handleEdit={editUserHandler}
                user={user}
                key={user.id}
              ></User>
            ) : null
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
