"use client";

export default function Causal() {
  return (
    <div className="flex justify-center items-center">
      <form className="text-white" onSubmit={(e) => e.preventDefault()}>
        <input type="number" className="text-black" step="any" />
      </form>
    </div>
  );
}
