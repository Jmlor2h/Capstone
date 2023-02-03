import React, { useState } from "react";
import axios from "axios";

function MentalForm() {
  const [fullName, setfullName] = useState("");
  const [question1, setQuestion1] = useState("");
  const [question2, setQuestion2] = useState("");
  const [question3, setQuestion3] = useState("");
  const [question4, setQuestion4] = useState("");
  const [question5, setQuestion5] = useState("");
  const [question6, setQuestion6] = useState("");
  const [question7, setQuestion7] = useState("");
  const [question8, setQuestion8] = useState("");
  const [question9, setQuestion9] = useState("");

  const surveySubmit = () => {
    axios
      .post("/mentAlly/survey", {
        fullName: fullName,
        question1: question1,
        question2: question2,
        question3: question3,
        question4: question4,
        question5: question5,
        question6: question6,
        question7: question7,
        question8: question8,
        question9: question9,
      })
      .then((response) => console.log(response));
  };

  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className="mb-10 text-center md:mb-16 lg:mb-20">
        <button
          className=" bg-pink2 text-white active:bg-pink2 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:bg-purple outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          onClick={() => setShowModal(true)}
        >
          Take Assessment
        </button>
      </div>

      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-purple outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-3 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-2xl font-semibold">
                    Mental Health Assessment
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                      x
                    </span>
                  </button>
                </div>
                {/*body*/}

                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-full">
                  <label className="block text-black text-sm font-bold mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    className="shadow appearance-none border rounded w-full px-4 text-black"
                    onChange={(e) => {
                      setfullName(e.target.value);
                    }}
                    required
                  />
                  <div className="relative p-1 flex-auto">
                    <p className="my-4 text-black text-sm leading-relaxed">
                      Over the past 2 weeks, how often have you been bothered by
                      any of the following problems?
                    </p>
                  </div>
                  <div className="flex justify-evenly">
                    <p className="ml-1 text-sm font-medium  dark:text-gray-500">
                      Not at All—0
                    </p>
                    <p className="ml-1 text-sm font-medium  dark:text-gray-500">
                      Several Days—1
                    </p>
                    <p className="ml-1 text-sm font-medium  dark:text-gray-500">
                      More Than Half the Days—2
                    </p>
                    <p className="ml-1 text-sm font-medium  dark:text-gray-500">
                      Nearly Every Day—3
                    </p>
                  </div>
                  <br></br>
                  <p className="block text-black text-sm font-bold mb-1">
                    1. Little interest or pleasure in doing things
                  </p>
                  <div className="flex">
                    <div className="flex items-center mr-4">
                      <input
                        onChange={(e) => {
                          setQuestion1(e.target.value);
                        }}
                        id="inline-radio"
                        type="radio"
                        value="0"
                        name="question1"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        for="inline-radio"
                        className="ml-2 text-sm font-medium dark:text-gray-500"
                      >
                        0
                      </label>
                    </div>
                    <div class="flex items-center mr-4">
                      <input
                        onChange={(e) => {
                          setQuestion1(e.target.value);
                        }}
                        id="inline-2-radio"
                        type="radio"
                        value="1"
                        name="question1"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        for="inline-2-radio"
                        className="ml-2 text-sm font-medium dark:text-gray-500"
                      >
                        1
                      </label>
                    </div>
                    <div className="flex items-center mr-4">
                      <input
                        onChange={(e) => {
                          setQuestion1(e.target.value);
                        }}
                        id="inline-checked-radio"
                        type="radio"
                        value="2"
                        name="question1"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        for="inline-checked-radio"
                        className="ml-2 text-sm font-medium dark:text-gray-500"
                      >
                        2
                      </label>
                    </div>
                    <div className="flex items-center mr-4">
                      <input
                        onChange={(e) => {
                          setQuestion1(e.target.value);
                        }}
                        id="inline-checked-radio"
                        type="radio"
                        value="3"
                        name="question1"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        for="inline-checked-radio"
                        className="ml-2 text-sm font-medium dark:text-gray-500"
                      >
                        3
                      </label>
                    </div>
                  </div>

                  <p className="block text-black text-sm font-bold mb-1">
                    2. Feeling down, depressed or hopeless
                  </p>
                  <div className="flex">
                    <div className="flex items-center mr-4">
                      <input
                        onChange={(e) => {
                          setQuestion2(e.target.value);
                        }}
                        id="inline-radio"
                        type="radio"
                        value="0"
                        name="question2"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        for="inline-radio"
                        className="ml-2 text-sm font-medium dark:text-gray-500"
                      >
                        0
                      </label>
                    </div>
                    <div className="flex items-center mr-4">
                      <input
                        onChange={(e) => {
                          setQuestion2(e.target.value);
                        }}
                        id="inline-2-radio"
                        type="radio"
                        value="1"
                        name="question2"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        for="inline-2-radio"
                        className="ml-2 text-sm font-medium dark:text-gray-500"
                      >
                        1
                      </label>
                    </div>
                    <div className="flex items-center mr-4">
                      <input
                        onChange={(e) => {
                          setQuestion2(e.target.value);
                        }}
                        id="inline-checked-radio"
                        type="radio"
                        value="2"
                        name="question2"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        for="inline-checked-radio"
                        className="ml-2 text-sm font-medium dark:text-gray-500"
                      >
                        2
                      </label>
                    </div>
                    <div className="flex items-center mr-4">
                      <input
                        onChange={(e) => {
                          setQuestion2(e.target.value);
                        }}
                        id="inline-checked-radio"
                        type="radio"
                        value="3"
                        name="question2"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        for="inline-checked-radio"
                        className="ml-2 text-sm font-medium  dark:text-gray-500"
                      >
                        3
                      </label>
                    </div>
                  </div>
                  <p className="block text-black text-sm font-bold mb-1">
                    3. Trouble falling asleep, staying asleep, or sleeping too
                    much
                  </p>
                  <div className="flex">
                    <div className="flex items-center mr-4">
                      <input
                        onChange={(e) => {
                          setQuestion3(e.target.value);
                        }}
                        id="inline-radio"
                        type="radio"
                        value="0"
                        name="question3"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        for="inline-radio"
                        className="ml-2 text-sm font-medium dark:text-gray-500"
                      >
                        0
                      </label>
                    </div>
                    <div className="flex items-center mr-4">
                      <input
                        onChange={(e) => {
                          setQuestion3(e.target.value);
                        }}
                        id="inline-2-radio"
                        type="radio"
                        value="1"
                        name="question3"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        for="inline-2-radio"
                        className="ml-2 text-sm font-medium dark:text-gray-500"
                      >
                        1
                      </label>
                    </div>
                    <div className="flex items-center mr-4">
                      <input
                        onChange={(e) => {
                          setQuestion3(e.target.value);
                        }}
                        id="inline-checked-radio"
                        type="radio"
                        value="2"
                        name="question3"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        for="inline-checked-radio"
                        className="ml-2 text-sm font-medium dark:text-gray-500"
                      >
                        2
                      </label>
                    </div>
                    <div className="flex items-center mr-4">
                      <input
                        onChange={(e) => {
                          setQuestion3(e.target.value);
                        }}
                        id="inline-checked-radio"
                        type="radio"
                        value="3"
                        name="question3"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        for="inline-checked-radio"
                        className="ml-2 text-sm font-medium dark:text-gray-500"
                      >
                        3
                      </label>
                    </div>
                  </div>
                  <p className="block text-black text-sm font-bold mb-1">
                    4. Feeling tired or having little energy
                  </p>
                  <div className="flex">
                    <div className="flex items-center mr-4">
                      <input
                        onChange={(e) => {
                          setQuestion4(e.target.value);
                        }}
                        id="inline-radio"
                        type="radio"
                        value="0"
                        name="question4"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        for="inline-radio"
                        className="ml-2 text-sm font-medium  dark:text-gray-500"
                      >
                        0
                      </label>
                    </div>
                    <div className="flex items-center mr-4">
                      <input
                        onChange={(e) => {
                          setQuestion4(e.target.value);
                        }}
                        id="inline-2-radio"
                        type="radio"
                        value="1"
                        name="question4"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        for="inline-2-radio"
                        className="ml-2 text-sm font-medium  dark:text-gray-500"
                      >
                        1
                      </label>
                    </div>
                    <div className="flex items-center mr-4">
                      <input
                        onChange={(e) => {
                          setQuestion4(e.target.value);
                        }}
                        id="inline-checked-radio"
                        type="radio"
                        value="2"
                        name="question4"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        for="inline-checked-radio"
                        className="ml-2 text-sm font-medium  dark:text-gray-500"
                      >
                        2
                      </label>
                    </div>
                    <div className="flex items-center mr-4">
                      <input
                        onChange={(e) => {
                          setQuestion4(e.target.value);
                        }}
                        id="inline-checked-radio"
                        type="radio"
                        value="3"
                        name="question4"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        for="inline-checked-radio"
                        className="ml-2 text-sm font-medium dark:text-gray-500"
                      >
                        3
                      </label>
                    </div>
                  </div>
                  <p className="block text-black text-sm font-bold mb-1">
                    5. Poor appetite or overeating
                  </p>
                  <div className="flex">
                    <div className="flex items-center mr-4">
                      <input
                        onChange={(e) => {
                          setQuestion5(e.target.value);
                        }}
                        id="inline-radio"
                        type="radio"
                        value="0"
                        name="question5"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        for="inline-radio"
                        className="ml-2 text-sm font-medium  dark:text-gray-500"
                      >
                        0
                      </label>
                    </div>
                    <div className="flex items-center mr-4">
                      <input
                        onChange={(e) => {
                          setQuestion5(e.target.value);
                        }}
                        id="inline-2-radio"
                        type="radio"
                        value="1"
                        name="question5"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        for="inline-2-radio"
                        className="ml-2 text-sm font-medium  dark:text-gray-500"
                      >
                        1
                      </label>
                    </div>
                    <div className="flex items-center mr-4">
                      <input
                        onChange={(e) => {
                          setQuestion5(e.target.value);
                        }}
                        id="inline-checked-radio"
                        type="radio"
                        value="2"
                        name="question5"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        for="inline-checked-radio"
                        className="ml-2 text-sm font-medium  dark:text-gray-500"
                      >
                        2
                      </label>
                    </div>
                    <div className="flex items-center mr-4">
                      <input
                        onChange={(e) => {
                          setQuestion5(e.target.value);
                        }}
                        id="inline-checked-radio"
                        type="radio"
                        value="3"
                        name="question5"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        for="inline-checked-radio"
                        className="ml-2 text-sm font-medium  dark:text-gray-500"
                      >
                        3
                      </label>
                    </div>
                  </div>
                  <p className="block text-black text-sm font-bold mb-1">
                    6. Feeling bad about yourself - or that you're a failure or
                    have let yourself or your family down
                  </p>
                  <div className="flex">
                    <div className="flex items-center mr-4">
                      <input
                        onChange={(e) => {
                          setQuestion6(e.target.value);
                        }}
                        id="inline-radio"
                        type="radio"
                        value="0"
                        name="question6"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        for="inline-radio"
                        className="ml-2 text-sm font-medium  dark:text-gray-500"
                      >
                        0
                      </label>
                    </div>
                    <div className="flex items-center mr-4">
                      <input
                        onChange={(e) => {
                          setQuestion6(e.target.value);
                        }}
                        id="inline-2-radio"
                        type="radio"
                        value="1"
                        name="question6"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        for="inline-2-radio"
                        className="ml-2 text-sm font-medium  dark:text-gray-500"
                      >
                        1
                      </label>
                    </div>
                    <div className="flex items-center mr-4">
                      <input
                        onChange={(e) => {
                          setQuestion6(e.target.value);
                        }}
                        id="inline-checked-radio"
                        type="radio"
                        value="2"
                        name="question6"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        for="inline-checked-radio"
                        className="ml-2 text-sm font-medium  dark:text-gray-500"
                      >
                        2
                      </label>
                    </div>
                    <div className="flex items-center mr-4">
                      <input
                        onChange={(e) => {
                          setQuestion6(e.target.value);
                        }}
                        id="inline-checked-radio"
                        type="radio"
                        value="3"
                        name="question6"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        for="inline-checked-radio"
                        className="ml-2 text-sm font-medium  dark:text-gray-500"
                      >
                        3
                      </label>
                    </div>
                  </div>
                  <p className="block text-black text-sm font-bold mb-1">
                    7. Trouble concentrating on things, such as reading the
                    newspaper or watching television
                  </p>
                  <div className="flex">
                    <div className="flex items-center mr-4">
                      <input
                        onChange={(e) => {
                          setQuestion7(e.target.value);
                        }}
                        id="inline-radio"
                        type="radio"
                        value="0"
                        name="question7"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        for="inline-radio"
                        className="ml-2 text-sm font-medium  dark:text-gray-500"
                      >
                        0
                      </label>
                    </div>
                    <div className="flex items-center mr-4">
                      <input
                        onChange={(e) => {
                          setQuestion7(e.target.value);
                        }}
                        id="inline-2-radio"
                        type="radio"
                        value="1"
                        name="question7"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        for="inline-2-radio"
                        className="ml-2 text-sm font-medium  dark:text-gray-500"
                      >
                        1
                      </label>
                    </div>
                    <div className="flex items-center mr-4">
                      <input
                        onChange={(e) => {
                          setQuestion7(e.target.value);
                        }}
                        id="inline-checked-radio"
                        type="radio"
                        value="2"
                        name="question7"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        for="inline-checked-radio"
                        className="ml-2 text-sm font-medium  dark:text-gray-500"
                      >
                        2
                      </label>
                    </div>
                    <div className="flex items-center mr-4">
                      <input
                        onChange={(e) => {
                          setQuestion7(e.target.value);
                        }}
                        id="inline-checked-radio"
                        type="radio"
                        value="3"
                        name="question7"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        for="inline-checked-radio"
                        className="ml-2 text-sm font-medium  dark:text-gray-500"
                      >
                        3
                      </label>
                    </div>
                  </div>
                  <p className="block text-black text-sm font-bold mb-1">
                    8. Moving or speaking so slowly that other people could have
                    notice. Or the opposite- being so fidgety or restless that
                    you have been moving around a lot more than usual
                  </p>
                  <div className="flex">
                    <div className="flex items-center mr-4">
                      <input
                        onChange={(e) => {
                          setQuestion8(e.target.value);
                        }}
                        id="inline-radio"
                        type="radio"
                        value="0"
                        name="question8"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        for="inline-radio"
                        className="ml-2 text-sm font-medium  dark:text-gray-500"
                      >
                        0
                      </label>
                    </div>
                    <div className="flex items-center mr-4">
                      <input
                        onChange={(e) => {
                          setQuestion8(e.target.value);
                        }}
                        id="inline-2-radio"
                        type="radio"
                        value="1"
                        name="question8"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        for="inline-2-radio"
                        className="ml-2 text-sm font-medium  dark:text-gray-500"
                      >
                        1
                      </label>
                    </div>
                    <div className="flex items-center mr-4">
                      <input
                        onChange={(e) => {
                          setQuestion8(e.target.value);
                        }}
                        id="inline-checked-radio"
                        type="radio"
                        value="2"
                        name="question8"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        for="inline-checked-radio"
                        className="ml-2 text-sm font-medium  dark:text-gray-500"
                      >
                        2
                      </label>
                    </div>
                    <div className="flex items-center mr-4">
                      <input
                        onChange={(e) => {
                          setQuestion8(e.target.value);
                        }}
                        id="inline-checked-radio"
                        type="radio"
                        value="3"
                        name="question8"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        for="inline-checked-radio"
                        className="ml-2 text-sm font-medium  dark:text-gray-500"
                      >
                        3
                      </label>
                    </div>
                  </div>
                  <p className="block text-black text-sm font-bold mb-1">
                    9. Thoughts that you would be better off dead or of hurting
                    yourself in some way
                  </p>
                  <div className="flex">
                    <div className="flex items-center mr-4">
                      <input
                        onChange={(e) => {
                          setQuestion9(e.target.value);
                        }}
                        id="inline-radio"
                        type="radio"
                        value="0"
                        name="question9"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        for="inline-radio"
                        className="ml-2 text-sm font-medium  dark:text-gray-500"
                      >
                        0
                      </label>
                    </div>
                    <div className="flex items-center mr-4">
                      <input
                        onChange={(e) => {
                          setQuestion9(e.target.value);
                        }}
                        id="inline-2-radio"
                        type="radio"
                        value="1"
                        name="question9"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        for="inline-2-radio"
                        className="ml-2 text-sm font-medium  dark:text-gray-500"
                      >
                        1
                      </label>
                    </div>
                    <div className="flex items-center mr-4">
                      <input
                        onChange={(e) => {
                          setQuestion9(e.target.value);
                        }}
                        id="inline-checked-radio"
                        type="radio"
                        value="2"
                        name="question9"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        for="inline-checked-radio"
                        className="ml-2 text-sm font-medium  dark:text-gray-500"
                      >
                        2
                      </label>
                    </div>
                    <div className="flex items-center mr-4">
                      <input
                        onChange={(e) => {
                          setQuestion9(e.target.value);
                        }}
                        id="inline-checked-radio"
                        type="radio"
                        value="3"
                        name="question9"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        for="inline-checked-radio"
                        className="ml-2 text-sm font-medium  dark:text-gray-500"
                      >
                        3
                      </label>
                    </div>
                  </div>
                </form>
                {/*footer*/}
                <div className="flex items-center justify-end p-1 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-pink2 text-white active:bg-teal font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    // onClick={surveySubmit}
                    onClick={() => {
                      setShowModal(false);
                      surveySubmit();
                    }}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
export default MentalForm;
