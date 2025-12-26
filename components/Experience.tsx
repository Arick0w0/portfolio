"use client";

import { Timeline } from "./ui/timeline";

export default function Experience() {
  const data = [
    {
      period: "2022 – 2023",
      title: "Internship at Sokxay Group",
      content: (
        <ul className='list-disc list-inside space-y-2'>
          <li>Developed and maintained product sales system</li>
          <li>Developed and tested a barcode generator for production</li>
          <li>
            Developed and installed a meeting room reservation system and hosted
            on IIS
          </li>
        </ul>
      ),
    },
    {
      period: "2023 – 2024",
      title: "Final Project of Bachelor Degree",
      content: (
        <ul className='list-disc list-inside space-y-2'>
          <li>Designed and developed mobile application</li>
          <li>Developed mobile application user interface using Flutter</li>
        </ul>
      ),
    },
    {
      period: "2024 – Now",
      title: "Mobile App Developer – LAILAOLAP",
      content: (
        <div className='space-y-4'>
          <ul className='list-disc list-inside space-y-2'>
            <li>
              Develop and maintain mobile applications using Flutter with Clean
              Architecture and SOLID principles
            </li>
            <li>
              Manage application state using BLoC, GetX, and Riverpod to ensure
              smooth and responsive UI/UX
            </li>
            <li>
              Integrate REST APIs, third-party services, and Firebase for
              authentication, data storage, and notifications
            </li>
            <li>
              Collaborate with team members to troubleshoot issues, optimize
              code, and improve app performance
            </li>
          </ul>

          <div className='mt-6'>
            <h5 className='text-xl font-semibold text-white mb-3'>
              Key App Highlights:
            </h5>
            <ul className='space-y-3'>
              <li>
                <span className='font-semibold text-blue-400'>
                  Taxi Driver App
                </span>{" "}
                – Real-time navigation with trip tracking and in-app chat/call
                system
              </li>
              <li>
                <span className='font-semibold text-blue-400'>
                  Food Delivery App
                </span>{" "}
                – Order management, delivery tracking, customer notifications,
                and in-app chat/call system
              </li>
              <li>
                <span className='font-semibold text-blue-400'>Express App</span>{" "}
                – Parcel delivery tracking with real-time updates and in-app
                chat/call system
              </li>
              <li>
                <span className='font-semibold text-blue-400'>
                  Business & Government Service Apps
                </span>{" "}
                – Multi-service app allowing users to submit online forms to
                request import quotas and track application status in real-time
              </li>
              <li>
                <span className='font-semibold text-blue-400'>
                  Quota & Import Management App
                </span>{" "}
                – App for importers to request quotas with Dynamic Forms and
                monitor application steps in real-time
              </li>
              <li>
                <span className='font-semibold text-blue-400'>
                  EV Charging App
                </span>{" "}
                – Displays real-time EV charging station status
              </li>
            </ul>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id='experience'>
      <Timeline data={data} />
    </section>
  );
}
