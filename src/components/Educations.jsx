"use client";

import { Timeline } from "flowbite-react";

export function Educations() {
  return (
    <div className="max-w-screen-lg items-center justify-between mx-auto p-8 py-12">
      <h1 className="text-5xl font-bold mb-6">
        Educations
      </h1>
      <Timeline>
        <Timeline.Item>
          <Timeline.Point/>
          <Timeline.Content>
            <Timeline.Time className="text-lg font-bold">
              June 2021 - July 2023
            </Timeline.Time>
            <Timeline.Title className="text-[#aa76f8] text-xl">
              Bachelor of Information Technology (Honours) in Software Systems
              Development
            </Timeline.Title>
            <Timeline.Body className="text-lg font-bold">
              Tunku Abdul Rahman University Of Management And Technology (KL
              Branch)
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point/>
          <Timeline.Content>
            <Timeline.Time className="text-lg font-bold">
              May 2019 - May 2021
            </Timeline.Time>
            <Timeline.Title className="text-[#aa76f8] text-xl">
              Diploma in Information Technology
            </Timeline.Title>
            <Timeline.Body className="text-lg font-bold">
              Tunku Abdul Rahman University Of Management And Technology (KL
              Branch)
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point/>
          <Timeline.Content>
            <Timeline.Time className="text-lg font-bold">
              January 2014 - December 2018
            </Timeline.Time>
            <Timeline.Title className="text-[#aa76f8] text-xl">
              Sijil Pelajaran Malaysia (SPM)
            </Timeline.Title>
            <Timeline.Body className="text-lg font-bold">
              SMK Tengku Ampuan Rahimah (Klang, Selangor)
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
      </Timeline>
    </div>
  );
}
