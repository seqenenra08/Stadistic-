"use client";
import { useState } from "react";

export default function Pascal() {
  const [probability, setProbability] = useState(0);
  const [median, setMedian] = useState(0);
  const [variance, setVariance] = useState(0);

  const [attempts, setAttempts] = useState(0);
  const [success, setSuccess] = useState(0);
  const [probabilitySuccess, setprobabilitySuccess] = useState(0);

  const fact = (num) => {
    if (num === 0 || num === 1) {
      return 1;
    } else {
      return num * fact(num - 1);
    }
  };

  function com(n, k) {
    let combinatoria = fact(n) / (fact(k) * fact(n - k));
    return combinatoria;
  }

  const functionPascal = () => {
    let probabilidad =
      com(attempts - 1, success - 1) *
      Math.pow(probabilitySuccess, success) *
      Math.pow(1 - probabilitySuccess, attempts - success);
    let media = success / probabilitySuccess;
    let varianza =
      (success * (1 - probabilitySuccess)) / Math.pow(probabilitySuccess, 2);

    setProbability(probabilidad * 1.0);
    setMedian(media * 1.0);
    setVariance(varianza * 1.0);
  };

  return (
    <div className="flex h-screen justify-center items-center flex-col">
      <h1 className="text-white text-6xl mb-10">Pascal Distribucion</h1>
      <form
        className="text-white flex flex-col justify-center items-center h-max bg-zinc-900 p-5"
        onSubmit={(e) => e.preventDefault()}
      >
        <label className="text-white">Number of attempts: </label>
        <input
          type="number"
          className="text-black pl-4"
          value={attempts}
          onChange={(e) => setAttempts(e.target.value)}
        />

        <label className="text-white mt-4">Number of successes: </label>
        <input
          type="number"
          className="text-black pl-4"
          value={success}
          onChange={(e) => setSuccess(e.target.value)}
        />

        <label className="text-white mt-4">Probability success: </label>
        <input
          type="number"
          className="text-black pl-4"
          step="any"
          value={probabilitySuccess}
          onChange={(e) => setprobabilitySuccess(e.target.value)}
        />

        <label className="mt-4">Probability: {probability.toFixed(2)}</label>
        <label>Median: {median.toFixed(2)}</label>
        <label>Variance: {variance.toFixed(2)}</label>

        <button
          className="bg-zinc-950 pl-3 pr-3 mt-4"
          onClick={() => functionPascal()}
        >
          Calcular
        </button>
      </form>
    </div>
  );
}
