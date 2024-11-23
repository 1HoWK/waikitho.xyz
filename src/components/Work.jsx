"use client";

import { Timeline } from "flowbite-react";

export function Work() {
  return (
    <div className="max-w-screen-lg items-center justify-between mx-auto p-8 py-12">
      <h1 className="text-5xl font-bold mb-6">Work Experiences</h1>
      <Timeline>
        <Timeline.Item>
          <Timeline.Point />
          <Timeline.Content>
            <Timeline.Time className="text-lg font-bold">
              November 2024 - Present
            </Timeline.Time>
            <Timeline.Title className="text-[#2ECC71] text-xl">
              Backend Technical API Specialist @ Azgo
            </Timeline.Title>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point />
          <Timeline.Content>
            <Timeline.Time className="text-lg font-bold">
              February 2023 - July 2024
            </Timeline.Time>
            <Timeline.Title className="text-[#2ECC71] text-xl">
              Software Engineer (API) @ Silverlake One Paradigm
            </Timeline.Title>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point />
          <Timeline.Content>
            <Timeline.Time className="text-lg font-bold">
              October 2020 - January 2021
            </Timeline.Time>
            <Timeline.Title className="text-[#2ECC71] text-xl">
              IT Solution Intern @ Esri Malaysia
            </Timeline.Title>
          </Timeline.Content>
        </Timeline.Item>
      </Timeline>
      
    </div>
  );
}
