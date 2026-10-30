import React from "react";
import {
  BsCalendar3,
  BsBuilding,
  BsCheck2Circle,
  BsChevronRight,
  BsClock,
  BsClockHistory,
  BsXCircle,
} from "react-icons/bs";

const statusConfig = {
  upcoming: {
    icon: BsClockHistory,
    badge: "bg-amber-100 text-amber-800",
    accent: "bg-amber-400",
    iconSurface: "bg-amber-50 text-amber-700",
  },
  completed: {
    icon: BsCheck2Circle,
    badge: "bg-emerald-100 text-emerald-800",
    accent: "bg-emerald-500",
    iconSurface: "bg-emerald-50 text-emerald-700",
  },
  cancelled: {
    icon: BsXCircle,
    badge: "bg-rose-100 text-rose-800",
    accent: "bg-rose-400",
    iconSurface: "bg-rose-50 text-rose-700",
  },
};

function CardQueueComponent({ booking }) {
  const status = statusConfig[booking.status];
  const StatusIcon = status.icon;

  return (
    <article className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-emerald-200 hover:shadow-md">
      <div className={`absolute inset-y-0 left-0 w-1.5 ${status.accent}`} />
      <div className="p-5 sm:p-6">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center">
          <div className="flex min-w-0 flex-1 items-start gap-4">
            <div className={`hidden rounded-2xl p-4 sm:block ${status.iconSurface}`}>
              <BsBuilding className="text-2xl" aria-hidden="true" />
            </div>
            <div className="min-w-0">
              <div className="mb-2 flex flex-wrap items-center gap-2">
                <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${status.badge}`}>
                  <StatusIcon aria-hidden="true" />
                  {booking.statusLabel}
                </span>
                <span className="text-xs text-slate-400">
                  จองเมื่อ {booking.bookedAt}
                </span>
              </div>
              <p className="truncate text-lg font-bold text-slate-900 sm:text-xl">
                {booking.hospital}
              </p>
              <p className="mt-1 text-sm text-slate-500">{booking.department}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:w-auto lg:min-w-max">
            <div className="rounded-xl bg-slate-50 px-4 py-3">
              <div className="mb-1 flex items-center gap-1.5 text-xs text-slate-500">
                <BsCalendar3 aria-hidden="true" />
                วันที่นัด
              </div>
              <p className="text-sm font-semibold text-slate-800">{booking.date}</p>
            </div>
            <div className="rounded-xl bg-slate-50 px-4 py-3">
              <div className="mb-1 flex items-center gap-1.5 text-xs text-slate-500">
                <BsClock aria-hidden="true" />
                เวลา
              </div>
              <p className="text-sm font-semibold text-slate-800">{booking.time}</p>
            </div>
            <div className="col-span-2 rounded-xl bg-uColor-green px-4 py-3 text-white sm:col-span-1">
              <p className="mb-1 text-xs text-emerald-100">หมายเลขคิว</p>
              <p className="text-lg font-bold tracking-wide">{booking.queue}</p>
            </div>
          </div>

          <div className="hidden text-slate-300 transition group-hover:translate-x-1 group-hover:text-emerald-700 lg:block">
            <BsChevronRight className="text-xl" aria-hidden="true" />
          </div>
        </div>
      </div>
    </article>
  );
}

export default CardQueueComponent;
