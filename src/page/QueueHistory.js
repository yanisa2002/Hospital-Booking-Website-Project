import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  BsCalendar3,
  BsCheck2Circle,
  BsClockHistory,
  BsXCircle,
} from "react-icons/bs";

import CardQueueComponent from "../component/History/CardQueueComponent";

const bookings = [
  {
    id: "123",
    hospital: "โรงพยาบาลสิรินธร",
    department: "แผนกอายุรกรรม",
    date: "28 พฤศจิกายน 2565",
    time: "09:30 น.",
    queue: "A-018",
    status: "upcoming",
    statusLabel: "กำลังจะมาถึง",
    bookedAt: "24 พ.ย. 2565, 10:30 น.",
  },
  {
    id: "124",
    hospital: "โรงพยาบาลลาดกระบัง",
    department: "แผนกทันตกรรม",
    date: "14 พฤศจิกายน 2565",
    time: "13:00 น.",
    queue: "D-042",
    status: "completed",
    statusLabel: "เสร็จสิ้น",
    bookedAt: "10 พ.ย. 2565, 16:45 น.",
  },
  {
    id: "125",
    hospital: "ศูนย์บริการสาธารณสุข 35 หัวหมาก",
    department: "แผนกเวชปฏิบัติทั่วไป",
    date: "2 พฤศจิกายน 2565",
    time: "10:15 น.",
    queue: "G-011",
    status: "completed",
    statusLabel: "เสร็จสิ้น",
    bookedAt: "30 ต.ค. 2565, 09:12 น.",
  },
  {
    id: "126",
    hospital: "ศูนย์บริการสาธารณสุข 46",
    department: "แผนกกายภาพบำบัด",
    date: "18 ตุลาคม 2565",
    time: "15:30 น.",
    queue: "P-007",
    status: "cancelled",
    statusLabel: "ยกเลิกแล้ว",
    bookedAt: "12 ต.ค. 2565, 14:20 น.",
  },
];

const filters = [
  { value: "all", label: "ทั้งหมด" },
  { value: "upcoming", label: "กำลังจะมาถึง" },
  { value: "completed", label: "เสร็จสิ้น" },
  { value: "cancelled", label: "ยกเลิกแล้ว" },
];

function QueueHistory() {
  const [searchParams] = useSearchParams();
  const requestedFilter = searchParams.get("status");
  const activeFilter = filters.some((filter) => filter.value === requestedFilter)
    ? requestedFilter
    : "all";

  const filteredBookings =
    activeFilter === "all"
      ? bookings
      : bookings.filter((booking) => booking.status === activeFilter);

  return (
    <main className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-emerald-50 font-jamjuree text-uColor-green">
      <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-800">
              <BsCalendar3 aria-hidden="true" />
              รายการนัดหมายของคุณ
            </div>
            <p className="text-3xl font-bold tracking-tight text-uColor-green sm:text-4xl">
              ประวัติการจองคิว
            </p>
            <p className="mt-2 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
              ตรวจสอบสถานะ รายละเอียด และหมายเลขคิวของการนัดหมายทั้งหมดได้ในที่เดียว
            </p>
          </div>
          <Link
            to="/"
            className="inline-flex w-fit items-center justify-center rounded-xl bg-uColor-green px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:ring-offset-2"
          >
            จองคิวใหม่
          </Link>
        </div>

        <div className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
          <div className="rounded-2xl border border-amber-200 bg-white p-4 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-amber-100 p-3 text-amber-700">
                <BsClockHistory className="text-xl" aria-hidden="true" />
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">1</p>
                <p className="text-sm text-slate-500">นัดหมายที่กำลังจะมาถึง</p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-emerald-200 bg-white p-4 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-emerald-100 p-3 text-emerald-700">
                <BsCheck2Circle className="text-xl" aria-hidden="true" />
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">2</p>
                <p className="text-sm text-slate-500">รายการที่เสร็จสิ้น</p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-rose-200 bg-white p-4 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-rose-100 p-3 text-rose-700">
                <BsXCircle className="text-xl" aria-hidden="true" />
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">1</p>
                <p className="text-sm text-slate-500">รายการที่ยกเลิก</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-5 flex gap-2 overflow-x-auto pb-2" aria-label="กรองประวัติการจอง">
          {filters.map((filter) => (
            <Link
              key={filter.value}
              to={
                filter.value === "all"
                  ? "/history"
                  : `/history?status=${filter.value}`
              }
              className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:ring-offset-2 ${
                activeFilter === filter.value
                  ? "bg-uColor-green text-white shadow-sm"
                  : "border border-slate-200 bg-white text-slate-600 hover:border-emerald-300 hover:text-uColor-green"
              }`}
            >
              {filter.label}
            </Link>
          ))}
        </div>

        <div className="space-y-4">
          {filteredBookings.map((booking) => (
            <Link
              key={booking.id}
              to={`/queue/${booking.id}`}
              className="block rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:ring-offset-2"
              aria-label={`ดูรายละเอียดคิว ${booking.queue} ที่ ${booking.hospital}`}
            >
              <CardQueueComponent booking={booking} />
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}

export default QueueHistory;
