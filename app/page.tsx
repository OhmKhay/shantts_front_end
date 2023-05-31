"use client";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import Link from "next/link";
import Image from "next/image";
import { Formik, Form } from "formik";
import { replaceWords } from "@/helper/replace";
import TransitionEffect from "@/components/TransitionEffect";
import { Layout } from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import ReportMe from "@/components/ReportMe";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { __checkData } from "@/helper/checkData";
import axios from "axios";

const formSchema = Yup.object({
  message: Yup.string()
    .required("တႅမ်ႈပၼ်လိၵ်ႈတႆးသေ ယႃႇႁႂ်ႈပူၼ်ႉ 800 တူဝ်ၶႃႈ ...")
    .max(800),
});

export default function Home() {
  const [audioUrl, setAudioUrl] = React.useState<string | null>(null);
  const [wavUrl, setWavUrl] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState(false);
  const [loadError, setLoadError]: any = React.useState({
    status: false,
    msg: null,
  });
  const [value, setValue] = useState("");
  const [isShan, setIsShan] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      // @ts-ignore
      let lang: any = new Som();

      if (
        lang.detect(String(value))?._label === "shan" ||
        value === "မႂ်ႇသုင်"
      ) {
        setIsShan(true);
      } else {
        setIsShan(false);
      }
    }, 2000);
  }, [value]);

  const handleAddToSheet = ({
    msg,
    fileName,
  }: {
    msg: string;
    fileName: string;
  }) => {
    let formData = new FormData();
    formData.append("msg", msg);
    formData.append("fileName", fileName);
    fetch(
      "https://script.google.com/macros/s/AKfycbwSfZfCYXAo2JHMRMOQEj3o-6voNWHTn8fBTkyRHErcr6HqhzkZbY9YQ7swTPP7TvnI/exec",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("response::", data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGenerate = async (message: string) => {
    setLoading(true);
    const __message: any = replaceWords(message);

    const __checkResponse: any = await __checkData(__message);

    if (__checkResponse?.audio) {
      setWavUrl(
        `https://shntts-api.haohaa.com/files/${__checkResponse?.audio}`
      );
    } else {
      try {
        setLoading(true);
        setLoadError({
          status: false,
          msg: null,
        });
        const { data }: any = await axios.get(
          `${process.env.NEXT_PUBLIC_API_ENDPOINT}/${__message}`
        );

        setAudioUrl(data?.audio);
        if (data?.audio) {
          handleAddToSheet({
            msg: value,
            fileName: data?.name,
          });
        }
      } catch (err: any) {
        if (err?.response?.status === 429) {
          setLoadError({
            status: true,
            msg: "Too Many Requests Error. Please try again after 5 minutes",
          });
        } else {
          setLoadError({
            status: true,
            msg: "Something wrong, please try again.",
          });
        }

        setLoading(false);
      }
    }
    setLoading(false);
  };

  return (
    <>
      <NavBar />
      <TransitionEffect />
      <main className="flex items-center w-full min-h-screen text-dark dark:text-light sm:items-start font-mont dark:bg-dark">
        <Layout className="pt-0 md:pt-16 sm:pt-16">
          <div className="flex justify-center w-full dark:text-light">
            <div className="dark:bg-black dark:text-white">
              <div className="flex flex-col items-center justify-between w-full sm:bg-red sm:p-2">
                <div className="z-10 items-center justify-between w-full font-mono text-sm dark:text-white sm:w-5xl lg:flex">
                  <AnimatedText
                    text="A Shan Text to Speech quick playground"
                    className="!text-2xl !text-left 
                xl:!text-2xl lg:!text-center lg:!text=6xl md:!text-3xl sm:!text-3xl
                "
                  />
                </div>

                <div className="z-10 flex flex-col items-center justify-between font-mono text-sm sm:w-full dark:bg-dark">
                  <Formik
                    initialValues={{ message: "" }}
                    validationSchema={formSchema}
                    onSubmit={async (values) => {}}
                  >
                    {({ values, handleChange, isValid, errors }: any) => {
                      return (
                        <Form className="w-[760px] sm:w-full">
                          <div className="w-full my-5">
                            <label className="self-start block mb-2 text-sm font-medium dark:bg-dark dark:text-white">
                              ထႅဝ်လိၵ်ႈ
                            </label>
                            <textarea
                              name="message"
                              onPaste={(e) => {
                                e.preventDefault();
                                return false;
                              }}
                              onCopy={(e) => {
                                e.preventDefault();
                                return false;
                              }}
                              onCut={(e) => {
                                e.preventDefault();
                                return false;
                              }}
                              id="message"
                              onChange={(e: any) => {
                                e.preventDefault();
                                setValue(e?.target?.value);
                                handleChange(e);
                              }}
                              required
                              rows={4}
                              className="block p-2.5 text-sm w-full text-gray-900  rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="မႂ်ႇသုင်ၶႃႈ ..."
                            ></textarea>
                            <p className="mt-2">
                              {values?.message?.length || 0} / 800
                            </p>
                          </div>
                          {errors?.message && (
                            <AnimatedText
                              text={errors?.message}
                              className="text-red-500 text-[14px]"
                            />
                          )}

                          {!loading ? (
                            <button
                              disabled={
                                values?.message &&
                                values?.message.length > 0 &&
                                isValid &&
                                isShan
                                  ? false
                                  : true
                              }
                              onClick={() => handleGenerate(values?.message)}
                              className="disabled:bg-gray-600 my-5 disabled:hover:bg-gray-600 disabled:cursor-not-allowed text-white bg-blue-700  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                              Generate
                            </button>
                          ) : (
                            <button
                              disabled
                              type="button"
                              className="disabled:bg-[#ddd] my-5 disabled:hover:bg-gray-600 disabled:cursor-not-allowed text-white bg-blue-700 mt-10 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                              <svg
                                aria-hidden="true"
                                role="status"
                                className="inline w-4 h-4 mr-3 text-gray-200 animate-spin dark:text-gray-600"
                                viewBox="0 0 100 101"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                  fill="currentColor"
                                />
                                <path
                                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                  fill="#1C64F2"
                                />
                              </svg>
                              Generating...
                            </button>
                          )}
                        </Form>
                      );
                    }}
                  </Formik>

                  <div className="block my-5">
                    {audioUrl && !loading && (
                      <audio controls>
                        <source
                          src={`data:audio/wav;base64,${audioUrl}`}
                          type="audio/wav"
                        />
                      </audio>
                    )}
                    {wavUrl && !audioUrl && (
                      <audio controls>
                        <source src={`${wavUrl}`} type="audio/wav" />
                      </audio>
                    )}
                    {!isShan && value?.length > 1 && (
                      <AnimatedText
                        text="တႅမ်ႈလူင်းပၼ် လိၵ်ႈတႆး သေၵမ်းၶႃႈ ...."
                        className="text-red-500 text-[14px]"
                      />
                    )}

                    {!loading && loadError?.status && (
                      <AnimatedText
                        text={loadError?.message}
                        className="text-red-500 text-[14px]"
                      />
                    )}
                  </div>
                </div>

                <div className="flex w-full mb-32 text-center place-content-center lg:mb-0 lg:grid-cols-4 lg:text-left">
                  <Link
                    className="flex flex-row items-center"
                    href="https://haohaa.com"
                    target="_blank"
                  >
                    <Image
                      className="p-1"
                      width={32}
                      height={32}
                      src="/favicon.ico"
                      alt="haohaaorg"
                    />{" "}
                    haohaa.com
                  </Link>
                </div>
              </div>
            </div>
            {/* <div className="flex flex-col items-center self-center w-1/2 lg:w-full lg:text-center">
              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link
                  href="/resume/index.html"
                  target={"_blank"}
                  className="flex items-center bg-dark text-light p-2.5 px-6
                  rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
                  border-2 border-solid border-transparent hover:border-dark
                  
                  dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light
                  hover:dark:border-light md:p-2 md:px-4 md:text-base
                  "
                >
                  Resume
                </Link>
              </div>
            </div> */}
          </div>
        </Layout>

        <ReportMe />
      </main>
      <Footer />
    </>
  );
}
