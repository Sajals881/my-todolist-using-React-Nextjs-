"use client";
import React, { useState } from "react";
import { render } from "react-dom";

const page = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [mainTask, setmainTask] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(title, desc);
    setmainTask([...mainTask, { title, desc }]);
    settitle("");
    setdesc("");
    console.log(mainTask);
  };
  const handleDelete = (index) => {
    let copyTask = [...mainTask];
    copyTask.splice(index, 1);
    setmainTask(copyTask);
  };
  let renderTask = <h2 className="text-black">No Task Available</h2>;
  if (mainTask.length > 0) {
    renderTask = mainTask.map((task, index) => {
      return (
        <li >
          <div className="flex mb-5 justify-between" key={index}>
            <h1 className="text-black text-2xl">{task.title}</h1>
            <p className="text-black text-xl">{task.desc}</p>
            <button
              onClick={() => {
                handleDelete(index);
              }}
              className="bg-red-400 text-white px-4 py-2 rounded font-bold"
            >
              delete
            </button>
          </div>
        </li>
      );
    });
  }

  return (
    <>
      <h1 className="text-zinc-800 bg-white text-5xl p-5 text-center font-bold">
        My-todoList
      </h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="text-2xl text-black border-zinc-800 border-4 m-8 px-4 py-2 rounded-md"
          placeholder="Add todo"
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
        />
        <input
          type="text"
          className="text-2xl text-black border-zinc-800 border-4 m-8 px-4 py-2 rounded-md"
          placeholder="Add description"
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value);
          }}
        />

        <button className="bg-zinc-400 text-white px-4 py-3 text-2xl font-bold rounded m-5">
          Add task
        </button>
      </form>
      <hr />
      <div className="p-8 bg-slate-300">
        <ul>{renderTask}</ul>
      </div>
    </>
  );
};

export default page;
