"use client";
import { useState } from "react";

export default function Poisson() {
  const [probability, setProbability] = useState(0);
  const [median, setMedian] = useState(0);
  const [variance, setVariance] = useState(0);

  const [nprobabilitySuccess, setNprobabilitySuccess] = useState(0);
  const [lambda, setLambda] = useState(0);

  const fact = (num) => {
    if (num === 0 || num === 1) {
      return 1;
    } else {
      return num * fact(num - 1);
    }
  };

  const functionPoisson = () => {
    let probabilidad =
      (Math.exp(lambda * -1) * Math.pow(lambda, nprobabilitySuccess)) /
      fact(nprobabilitySuccess);
    let media = lambda;
    let varianza = lambda;

    setProbability(probabilidad * 1.0);
    setMedian(media * 1.0);
    setVariance(varianza * 1.0);
  };

  return (
    <div className="flex h-screen justify-center items-center flex-col">
      <h1 className="text-white text-6xl mb-10">Poisson Distribucion</h1>
      <form
        className="text-white flex flex-col justify-center items-center h-max bg-zinc-900 p-5"
        onSubmit={(e) => e.preventDefault()}
      >
        <label className="text-white">Average event rate (λ): </label>
        <input
          type="number"
          className="text-black pl-4"
          value={nprobabilitySuccess}
          onChange={(e) => setNprobabilitySuccess(e.target.value)}
        />

        <label className="text-white mt-4">Number of event: </label>
        <input
          type="number"
          className="text-black pl-4"
          step="any"
          value={lambda}
          onChange={(e) => setLambda(e.target.value)}
        />

        <label className="mt-4">Probability: {probability.toFixed(2)}</label>
        <label>Median: {median.toFixed(2)}</label>
        <label>Variance: {variance.toFixed(2)}</label>

        <button
          className="bg-zinc-950 pl-3 pr-3 mt-4"
          onClick={() => functionPoisson()}
        >
          Calcular
        </button>
      </form>
    </div>
  );
}
