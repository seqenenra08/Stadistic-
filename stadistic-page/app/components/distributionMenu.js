"use client";
import Link from "next/link";

export default function Distribution() {
  return (
    <div className="h-full text-white flex flex-col justify-center items-center">
      <div className="mt-20 flex justify-center">
        <Link
          className=" bg-zinc-900 h-10 w-52 p-10 text-center flex justify-center items-center"
          href="/distributions/bernoulli-distribution"
        >
          Bernoulli Distribution
        </Link>
      </div>
      <div className="mt-20 flex justify-center">
        <Link
          className="bg-zinc-900 h-10 w-52 p-10 text-center flex justify-center items-center"
          href="/distributions/binomial-distribution"
        >
          Binomial distribution
        </Link>
        <Link
          className="ml-20 bg-zinc-900 h-10 w-52 p-10 text-center flex justify-center items-center"
          href="/distributions/hipergeometric-distribution"
        >
          Hypergeometric distribution
        </Link>
      </div>
      <div className="mt-20 flex justify-center">
        <Link
          className="bg-zinc-900 h-10 w-52 p-10 text-center flex justify-center items-center"
          href="/distributions/poisson-distribution"
        >
          Poisson distribution
        </Link>
        <Link
          className="ml-20 bg-zinc-900 h-10 w-52 p-10 text-center flex justify-center items-center"
          href="/distributions/multinomial-distribution"
        >
          Multinomial distribution
        </Link>
      </div>
      <div className="mt-20 flex justify-center">
        <Link
          className="bg-zinc-900 h-10 w-52 p-10 text-center flex justify-center items-center"
          href="/distributions/geometric-distribution"
        >
          Geometric distribution
        </Link>
        <Link
          className="ml-20 bg-zinc-900 h-10 w-52 p-10 text-center flex justify-center items-center"
          href="/distributions/pascal-distribution"
        >
          Pascal distribution
        </Link>
      </div>
    </div>
  );
}
