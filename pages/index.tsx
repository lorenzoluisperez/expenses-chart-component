import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Fragment, useEffect, useState } from "react";

const Home: NextPage = () => {
  const [highest, setHighest] = useState<number>(0);

  const data = [
    {
      day: "mon",
      amount: 17.45,
    },
    {
      day: "tue",
      amount: 34.91,
    },
    {
      day: "wed",
      amount: 52.36,
    },
    {
      day: "thu",
      amount: 31.07,
    },
    {
      day: "fri",
      amount: 23.39,
    },
    {
      day: "sat",
      amount: 43.28,
    },
    {
      day: "sun",
      amount: 25.48,
    },
  ];

  useEffect(() => {
    //set highest amount
    const sorted = data.sort((a, b) => b.amount - a.amount);
    setHighest(sorted[0].amount);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Fragment>
      <Head>
        <title>Frontend Mentor - Expenses Chart Component</title>
        <meta name="description" content="Frontend Mentor Challenge" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className="bg-[#F7E9DC] h-screen w-full min-w-screen min-h-screen p-4">
        <div className="flex flex-col h-full items-center justify-center">
          <div className="flex flex-row justify-between items-center w-full bg-soft-red p-5 rounded-xl my-2">
            <div className="text-very-pale-orange">
              <div className="text-lg my-1">My balance</div>
              <div className="font-bold text-3xl my-1">$921.48</div>
            </div>
            <div className="">
              <Image src={"/logo.svg"} alt="logo" width={72} height={48} />
            </div>
          </div>
          <div className="bg-very-pale-orange h-4/6 rounded-xl  w-full p-5 my-2">
            <div className="text-2xl font-bold text-dark-brown">
              Spending - Last 7 days
            </div>
            <div className="flex h-3/6 flex-row mt-10 justify-between">
              {data.map((item, index) => {
                let color = "bg-soft-red";
                let percentage =
                  ((item.amount / (highest + 20)) * 100).toFixed(2) + "%";
                if (item.amount === highest) color = "bg-cyan";

                return (
                  <div
                    key={index}
                    className="flex flex-col w-full items-center justify-end"
                  >
                    <div
                      style={{ height: percentage }}
                      className={`${color} w-9/12 rounded-md`}
                    ></div>
                    <div className="my-3 text-medium-brown">{item.day}</div>
                  </div>
                );
              })}
            </div>
            <div className="w-full h-0.5 mt-3 bg-[#F7E9DC]"></div>
            <div className="flex flex-row  mt-6 items-end justify-between w-full">
              <div>
                <div className="text-medium-brown text-lg">
                  Total this month
                </div>
                <div className="mt-1 font-bold text-4xl text-dark-brown">
                  $478.33
                </div>
              </div>
              <div className="flex flex-col font-bold text-md items-end">
                <div className=" text-dark-brown">+2.4%</div>
                <div className="text-medium-brown">from last month</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default Home;