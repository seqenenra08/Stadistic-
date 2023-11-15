"use client";
import { useState } from "react";

export default function Multinomial() {
  const [probability, setProbability] = useState(0);
  const [median, setMedian] = useState(0);
  const [variance, setVariance] = useState(0);

  const [N, setN] = useState(0);
  const [events, setEvents] = useState(0);
  const [test, setTest] = useState(0);
  const [arrayTest, setArrayTest] = useState([]);
  const [arrayProbability, setArrayProbability] = useState([]);

  const [valueTest, setValueTest] = useState(0);
  const [valueProbability, setValueProbability] = useState(0);

  const fact = (num) => {
    if (num === 0 || num === 1) {
      return 1;
    } else {
      return num * fact(num - 1);
    }
  };

  const functionMultinomial = () => {
    let numerador = fact(N);
    let denominador = arrayTest.reduce((acc, x) => acc * fact(x), 1);
    let resultado = numerador / denominador;
    for (let i = 0; i < events; i++) {
      resultado = resultado * Math.pow(arrayProbability[i], arrayTest[i]);
    }

    setProbability(resultado * 1.0);

  };

  const funtionUpload = () => {
    arrayTest.push(parseFloat(valueTest));
    arrayProbability.push(parseFloat(valueProbability));

    setValueProbability(0);
    setValueTest(0);
    setTest(test + 1);
  };

  return (
    <div className="flex h-screen justify-center items-center flex-col">
      <h1 className="text-white text-6xl mb-10">Multinomial Distribucion</h1>
      <form
        className="text-white flex flex-col justify-center items-center h-max bg-zinc-900 p-5"
        onSubmit={(e) => e.preventDefault()}
      >
        <label className="text-white">N: </label>
        <input
          type="number"
          className="text-black pl-4"
          value={N}
          onChange={(e) => setN(e.target.value)}
        />

        <label className="text-white mt-4">events: </label>
        <input
          type="number"
          className="text-black pl-4"
          step="any"
          value={events}
          onChange={(e) => setEvents(e.target.value)}
        />

        <label className="text-white mt-4">Test {test + 1}: </label>
        <input
          disabled={N == 0 || events == 0 || test == events}
          type="number"
          className="text-black pl-4"
          value={valueTest}
          onChange={(e) => setValueTest(e.target.value)}
        />

        <label className="text-white mt-4">Probability {test + 1}: </label>
        <input
          disabled={N == 0 || events == 0 || test == events}
          type="number"
          className="text-black pl-4"
          step="any"
          value={valueProbability}
          onChange={(e) => setValueProbability(e.target.value)}
        />

        <button
          className="bg-zinc-950 pl-3 pr-3 mt-4"
          onClick={() => funtionUpload()}
        >
          Upload
        </button>

        <label className="mt-4">Probability: {probability.toFixed(2)}</label>

        <button
          className="bg-zinc-950 pl-3 pr-3 mt-4"
          onClick={() => functionMultinomial()}
        >
          Calcular
        </button>
      </form>
    </div>
  );
}
