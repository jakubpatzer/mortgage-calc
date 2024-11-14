"use client";

import Image from "next/image";
import { useState } from "react";
import { FaPoundSign, FaCalculator } from "react-icons/fa";

export default function Home() {
  const [showResults, setShowResults] = useState(false);
  const [amount, setAmount] = useState(""); // Amount as a string to handle the input value
  const [term, setTerm] = useState(""); // Mortgage term
  const [interest, setInterest] = useState(""); // Interest rate
  const [mortgageType, setMortgageType] = useState("repayment"); // Mortgage type

  const handleSubmit = (e) => {
    e.preventDefault();
    const formValues = {
      amount,
      term,
      interest,
      mortgageType,
    };
    console.log("Form values:", formValues);
    setShowResults(true); // Show results after submission
  };

  const handleClearAll = () => {
    setAmount("");
    setTerm("");
    setInterest("");
    setMortgageType("repayment");
    setShowResults(false); // Hide results when clearing
  };

  return (
    <div className="min-h-screen font-[family-name:var(--font-plusJakarta-sans)]">
      <div className="px-6 py-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold mb-1">Mortgage Calculator</h1>
          <button
            type="button"
            onClick={handleClearAll}
            className="text-neutral-Slate-700 underline"
          >
            Clear All
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col mb-6">
            <label className="text-neutral-Slate-700 mb-2">Mortgage Amount</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center">
                <div className="bg-blue-500 h-full w-10 flex items-center justify-center text-white rounded-l">
                  <FaPoundSign className="text-black" />
                </div>
              </div>
              <input
                className="pl-12 pr-4 border border-neutral-Slate-500 rounded w-full py-2"
                type="number"
                placeholder="Enter amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col mb-6">
            <label className="text-neutral-Slate-700 mb-2">Mortgage Term</label>
            <div className="relative">
              <div className="absolute inset-y-0 right-0 flex items-center">
                <div className="bg-blue-500 h-full w-14 flex items-center justify-center rounded-l">
                  years
                </div>
              </div>
              <input
                className="pr-20 pl-4 border border-neutral-Slate-500 rounded w-full py-2"
                type="number"
                placeholder="Enter term"
                value={term}
                onChange={(e) => setTerm(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col mb-6">
            <label className="text-neutral-Slate-700 mb-2">Interest Rate</label>
            <div className="relative">
              <div className="absolute inset-y-0 right-0 flex items-center">
                <div className="bg-blue-500 h-full w-10 flex items-center justify-center rounded-l">
                  %
                </div>
              </div>
              <input
                className="pr-20 pl-4 border border-neutral-Slate-500 rounded w-full py-2"
                type="number"
                placeholder="Enter interest rate"
                value={interest}
                onChange={(e) => setInterest(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col mb-6">
            <label className="text-neutral-Slate-700 mb-2">Mortgage Type</label>
            <div className="relative">
              <div className="border border-neutral-Slate-500 rounded pl-2 py-2 mb-3">
                <input
                  className="mr-2"
                  type="radio"
                  name="mortgageType"
                  id="repayment"
                  value="repayment"
                  checked={mortgageType === "repayment"}
                  onChange={() => setMortgageType("repayment")}
                />
                Repayment
              </div>
              <div className="border border-neutral-Slate-500 rounded pl-2 py-2">
                <input
                  className="mr-2"
                  type="radio"
                  name="mortgageType"
                  id="interestOnly"
                  value="interestOnly"
                  checked={mortgageType === "interestOnly"}
                  onChange={() => setMortgageType("interestOnly")}
                />
                Interest Only
              </div>
            </div>
          </div>
          <button className="bg-primary-Lime flex items-center justify-center w-full rounded-3xl py-3" type="submit">
            <FaCalculator className="mr-2" />
            Calculate Repayments
          </button>
        </form>
      </div>
      {showResults ? (
        <div className="bg-neutral-Slate-900 px-6 py-8">
          <h1 className="text-2xl text-neutral-White mb-4">Your results</h1>
          <p className="text-neutral-Slate-500 mb-4">
            Your results are shown below based on the information you provided.
            To adjust the results, edit the form and click “calculate repayments” again.
          </p>
          <div className="bg-neutral-Slate-1000 rounded px-2 py-4 border-t-2 border-primary-Lime">
            <h3 className="text-neutral-Slate-500">Your monthly repayments</h3>
            <p className="text-primary-Lime flex items-center font-bold text-2xl border-b border-neutral-Slate-500 pb-4">
              <FaPoundSign className="text-primary-Lime" />
              {1000}
            </p>
            <h3 className="text-neutral-Slate-500 pt-4">
              Total you'll repay over the term
            </h3>
            <p className="text-white flex items-center font-bold text-lg">
              <FaPoundSign className="text-white" />
              {1000}
            </p>
          </div>
        </div>
      ) : (
        <div className="bg-neutral-Slate-900 flex flex-col justify-center items-center py-8">
          <Image
            src="/illustration-empty.svg"
            width={160}
            height={160}
            alt="image"
            className="mb-2"
          />
          <h1 className="text-2xl text-neutral-White mb-4">
            Results shown here
          </h1>
          <p className="text-neutral-Slate-500 text-center">
            Complete the form and click “calculate repayments” to see what your
            monthly repayments would be.
          </p>
        </div>
      )}
    </div>
  );
}
