import React from "react";

const stats = [
  { id: 1, name: "STUDENTS", value: "850" + "+" },
  { id: 2, name: "", value: "ONE MEGA COMPETITION" },
  { id: 3, name: "Schools", value: "55" + "+" },
];

export default function About() {
  return (
    <div>
      <div className="bg-transparent py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="mx-auto flex max-w-xs flex-col gap-y-4"
              >
                <dt className="text-base leading-7 text-white">
                  {stat.name}
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-[#5029ff] sm:text-5xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
