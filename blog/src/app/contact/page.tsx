"use client";

import { useForm, ValidationError } from "@formspree/react";
import React from "react";

export default function ContactPage() {
  const [state, handleSubmit] = useForm("mldeodzv");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <div className="h-[100%] rounded-md flex flex-col justify-around items-center">
      <div className="w-[100%] h-[5%] flex flex-col justify-center items-center">
        <p className="w-[20%] text-center">Contact us</p>
      </div>
        <form
          onSubmit={handleSubmit}
          className="space-y-4 bg-white p-6 rounded-lg shadow-md w-[60%]"
        >
          <div>
            <label
              htmlFor="nome"
              className="block text-sm font-medium text-gray-700"
            >
              Nome
            </label>
            <input
              id="nome"
              type="nome"
              name="nome"
              className="mt-1 mb-4 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Enter your nome"
              required
            />
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
              className="text-sm text-red-500 mt-1"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Write your message here"
              required
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
              className="text-sm text-red-500 mt-1"
            />
          </div>
          <div>
            <button
              type="submit"
              disabled={state.submitting}
              className={`w-full py-2 px-4 rounded-md text-white ${
                state.submitting
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700"
              } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
            >
              {state.submitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
    </div>
  );
}
