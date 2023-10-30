"use client";
import { useState } from "react";

export default function Home() {
  const [file, setFile] = useState();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return;

    try {
      const form = new FormData();
      form.set("file", file);

      const res = await fetch("./api/test", {
        method: "POST",
        body: form,
      });

      const data = await res.json();
      console.log(data);
      //window.location.href = "/main-page";
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex h-screen justify-center items-center flex-col">
      <form onSubmit={handleSubmit} className="bg-zinc-950 p-5">
        <h1 className="text-4xl text-center my-10 text-white">
          Upload a file .csv
        </h1>
        <input
          className="bg-zinc-900 text-zinc-100 p-2 rounded block mb-2"
          type="file"
          onChange={handleFileChange}
        />
        <button
          className="bg-green-900 text-zinc-100 p-2 rounded block w-full disabled:opacity-50"
          disabled={!file}
        >
          Upload
        </button>
      </form>
    </div>
  );
}
