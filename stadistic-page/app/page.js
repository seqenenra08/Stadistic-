"use client";
import { useState, useContext } from "react";
import { useRouter } from "next/navigation";
import { contextData } from "./context/contextData";
import Link from "next/link";

export default function Home() {
  const router = useRouter();
  const [file, setFile] = useState();
  const { data, cambioData } = useContext(contextData);

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

      const dataRes = await res.json();
      let array = [];
      dataRes.response.map((e) => {
        array.push(e);
      });

      cambioData(array);
      router.push("/main-page");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex h-screen justify-center items-center flex-col">
      <Link className="text-white mb-20 bg-zinc-950 p-4 rounded" href="/distributions-page">
        Probability Distributions 
      </Link>
      <form onSubmit={handleSubmit} className="bg-zinc-950 p-5">
        <h1 className="text-4xl text-center my-10 text-zinc-100">
          Upload a file .json
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
