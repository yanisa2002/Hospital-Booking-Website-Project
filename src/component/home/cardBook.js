import React from "react";
import { Link } from "react-router-dom";
import {
  BsArrowRight,
  BsCalendar2Check,
  BsCheckCircleFill,
  BsFileEarmarkMedical,
} from "react-icons/bs";

function CardBook({ title, description, detail, path, type }) {
  const hasAppointment = type === "appointment";
  const CardIcon = hasAppointment
    ? BsFileEarmarkMedical
    : BsCalendar2Check;

  return (
    <Link
      to={path}
      className="group block rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:ring-offset-2"
      aria-label={`${title}: ${description}`}
    >
      <article className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-200 group-hover:-translate-y-1 group-hover:border-emerald-300 group-hover:shadow-lg sm:p-7">
        <div className="flex items-start justify-between gap-4">
          <div
            className={`inline-flex rounded-2xl p-4 ${
              hasAppointment
                ? "bg-amber-100 text-amber-700"
                : "bg-emerald-100 text-emerald-700"
            }`}
          >
            <CardIcon className="text-2xl" aria-hidden="true" />
          </div>
          {!hasAppointment && (
            <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">
              เริ่มนัดหมายใหม่
            </span>
          )}
        </div>

        <p className="mt-6 text-xl font-bold text-slate-900">{title}</p>
        <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>

        <div className="mt-5 flex items-start gap-2 rounded-xl bg-slate-50 p-3 text-sm text-slate-600">
          <BsCheckCircleFill
            className="mt-0.5 flex-none text-emerald-600"
            aria-hidden="true"
          />
          {detail}
        </div>

        <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
          <span className="font-bold text-uColor-green">เลือกการจองนี้</span>
          <span className="rounded-full bg-uColor-green p-2.5 text-white transition group-hover:translate-x-1 group-hover:bg-emerald-800">
            <BsArrowRight aria-hidden="true" />
          </span>
        </div>
      </article>
    </Link>
  );
}

export default CardBook;
