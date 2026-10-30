import React from "react";
import { Link } from "react-router-dom";
import {
  BsArrowRight,
  BsBell,
  BsBuilding,
  BsCalendar2Check,
  BsCalendarCheck,
  BsCheckCircleFill,
  BsClipboardCheck,
  BsClockHistory,
  BsFileEarmarkText,
  BsGeoAlt,
  BsInfoCircle,
  BsPatchCheckFill,
  BsPersonCheck,
  BsShieldCheck,
  BsTelephone,
} from "react-icons/bs";

import CardBook from "../component/home/cardBook";

const bookingTypes = [
  {
    title: "มีใบนัดแพทย์",
    description: "สำหรับผู้ป่วยที่มีใบนัดจากโรงพยาบาลแล้ว",
    detail: "ยืนยันใบนัดและเลือกช่วงเวลาที่สะดวก",
    path: "/booking-ma",
    type: "appointment",
  },
  {
    title: "ยังไม่มีใบนัด",
    description: "สำหรับผู้ป่วยที่ต้องการนัดหมายแพทย์ใหม่",
    detail: "เลือกโรงพยาบาล แผนก และวันเข้ารับบริการ",
    path: "/booking-nma",
    type: "new",
  },
];

const steps = [
  {
    icon: BsGeoAlt,
    number: "01",
    title: "เลือกโรงพยาบาล",
    description: "ค้นหาโรงพยาบาลและแผนกที่ต้องการเข้ารับบริการ",
  },
  {
    icon: BsCalendar2Check,
    number: "02",
    title: "เลือกวันและเวลา",
    description: "ดูช่วงเวลาว่างและจองคิวที่เหมาะกับตารางของคุณ",
  },
  {
    icon: BsBell,
    number: "03",
    title: "รับการแจ้งเตือน",
    description: "ติดตามสถานะคิวและรับแจ้งเตือนก่อนถึงเวลานัด",
  },
];

const serviceHighlights = [
  {
    icon: BsBuilding,
    title: "เลือกสถานพยาบาลได้ง่าย",
    description: "ดูรายชื่อโรงพยาบาลและแผนกก่อนเลือกวันนัด",
  },
  {
    icon: BsCalendarCheck,
    title: "เห็นวันและเวลาชัดเจน",
    description: "ตรวจสอบรายละเอียดนัดหมายก่อนยืนยันทุกครั้ง",
  },
  {
    icon: BsClipboardCheck,
    title: "ติดตามคิวได้ในที่เดียว",
    description: "เปิดดูสถานะและประวัติการจองได้ตลอดเวลา",
  },
];

const preparationItems = [
  {
    icon: BsFileEarmarkText,
    title: "ข้อมูลใบนัด",
    description: "เตรียมใบนัดเดิม หากโรงพยาบาลออกให้คุณแล้ว",
  },
  {
    icon: BsPersonCheck,
    title: "ข้อมูลผู้ป่วย",
    description: "ตรวจสอบชื่อ วันเกิด และข้อมูลติดต่อให้ถูกต้อง",
  },
  {
    icon: BsTelephone,
    title: "หมายเลขโทรศัพท์",
    description: "ใช้หมายเลขที่ติดต่อได้เพื่อรับข้อมูลการนัดหมาย",
  },
];

function Home() {
  return (
    <main className="overflow-hidden bg-white font-jamjuree text-uColor-green">
      <section className="relative bg-gradient-to-br from-amber-50 via-white to-emerald-50">
        <div className="absolute -right-24 top-16 h-72 w-72 rounded-full bg-amber-200 opacity-30 blur-3xl" />
        <div className="absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-emerald-200 opacity-30 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-16">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm font-semibold text-emerald-800 shadow-sm">
              <BsPatchCheckFill className="text-emerald-600" aria-hidden="true" />
              จองง่าย ติดตามได้ ไม่ต้องรอนาน
            </div>

            <p className="text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              เวลาของคุณมีค่า
              <span className="mt-2 block text-uColor-green">
                จองคิวโรงพยาบาลล่วงหน้า
              </span>
            </p>
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
              เลือกโรงพยาบาล นัดหมายแพทย์ และติดตามสถานะคิวได้จากทุกที่
              ให้วันพบแพทย์ของคุณสะดวกและวางแผนได้มากกว่าเดิม
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/booking-nma"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-uColor-green px-6 py-3.5 font-semibold text-white shadow-lg shadow-emerald-900/10 transition hover:-translate-y-0.5 hover:bg-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:ring-offset-2"
              >
                เริ่มจองคิว
                <BsArrowRight aria-hidden="true" />
              </Link>
              <Link
                to="/history"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 font-semibold text-slate-700 shadow-sm transition hover:border-emerald-300 hover:text-uColor-green focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:ring-offset-2"
              >
                <BsClockHistory aria-hidden="true" />
                ดูประวัติการจอง
              </Link>
            </div>

            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <BsCheckCircleFill className="text-emerald-600" aria-hidden="true" />
                ไม่มีค่าธรรมเนียม
              </div>
              <div className="flex items-center gap-2">
                <BsCheckCircleFill className="text-emerald-600" aria-hidden="true" />
                ใช้งานได้ตลอด 24 ชั่วโมง
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl lg:mx-0 lg:ml-auto">
            <div className="relative overflow-hidden rounded-3xl border-8 border-white bg-slate-100 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1200"
                alt="แพทย์กำลังพูดคุยและให้คำปรึกษาผู้ป่วยในคลินิก"
                className="h-96 w-full object-cover object-center sm:h-auto"
              />
              <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-900/60 to-transparent" />
            </div>

            <div className="absolute -bottom-6 left-3 right-3 rounded-2xl border border-white/70 bg-white/95 p-4 shadow-xl backdrop-blur sm:-left-8 sm:right-auto sm:w-72">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-emerald-100 p-3 text-emerald-700">
                  <BsCalendar2Check className="text-2xl" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-bold text-slate-900">นัดหมายสำเร็จ</p>
                  <p className="mt-0.5 text-sm text-slate-500">
                    พร้อมแจ้งเตือนก่อนถึงคิว
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -right-4 top-8 hidden rounded-2xl border border-amber-100 bg-white p-4 shadow-xl sm:block">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-amber-100 p-2 text-amber-700">
                  <BsInfoCircle aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs text-slate-500">รายละเอียดครบถ้วน</p>
                  <p className="font-bold text-slate-900">ตรวจสอบก่อนยืนยันได้</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="booking-options" className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-emerald-700">
              เลือกให้ตรงกับคุณ
            </p>
            <p className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              เริ่มต้นการนัดหมาย
            </p>
            <p className="mt-4 text-base leading-7 text-slate-600">
              ไม่ว่าคุณจะมีใบนัดอยู่แล้ว หรือต้องการเริ่มนัดหมายใหม่
              เราพาคุณไปยังขั้นตอนที่ถูกต้อง
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-4xl gap-5 md:grid-cols-2">
            {bookingTypes.map((bookingType) => (
              <CardBook key={bookingType.type} {...bookingType} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-100 bg-white">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 py-8 sm:px-6 md:grid-cols-3 lg:px-8">
          {serviceHighlights.map((highlight) => {
            const HighlightIcon = highlight.icon;
            return (
              <article
                key={highlight.title}
                className="flex items-start gap-4 rounded-2xl p-4"
              >
                <div className="flex-none rounded-xl bg-emerald-100 p-3 text-emerald-700">
                  <HighlightIcon className="text-xl" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-bold text-slate-900">{highlight.title}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    {highlight.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="mb-4 inline-flex rounded-xl bg-amber-100 p-3 text-amber-700">
                <BsShieldCheck className="text-2xl" aria-hidden="true" />
              </div>
              <p className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                จองคิวได้ใน 3 ขั้นตอน
              </p>
              <p className="mt-4 max-w-md text-base leading-7 text-slate-600">
                ลดขั้นตอนที่ยุ่งยาก ให้คุณใช้เวลากับการดูแลสุขภาพได้มากขึ้น
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {steps.map((step) => {
                const StepIcon = step.icon;
                return (
                  <article
                    key={step.number}
                    className="relative rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                  >
                    <p className="absolute right-4 top-3 text-3xl font-bold text-slate-100">
                      {step.number}
                    </p>
                    <div className="mb-5 inline-flex rounded-xl bg-emerald-100 p-3 text-emerald-700">
                      <StepIcon className="text-xl" aria-hidden="true" />
                    </div>
                    <p className="font-bold text-slate-900">{step.title}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {step.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-amber-50 py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="rounded-3xl border border-amber-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-amber-100 p-3 text-amber-700">
                <BsFileEarmarkText className="text-xl" aria-hidden="true" />
              </div>
              <div>
                <p className="text-sm font-semibold text-amber-700">ก่อนเริ่มจอง</p>
                <p className="text-2xl font-bold text-slate-900">ข้อมูลที่ควรเตรียม</p>
              </div>
            </div>

            <div className="mt-7 space-y-5">
              {preparationItems.map((item) => {
                const ItemIcon = item.icon;
                return (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="mt-1 rounded-lg bg-slate-100 p-2 text-slate-600">
                      <ItemIcon aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">{item.title}</p>
                      <p className="mt-1 text-sm leading-6 text-slate-500">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-3xl bg-uColor-green p-6 text-white shadow-sm sm:p-8">
            <div>
              <div className="inline-flex rounded-xl bg-white/10 p-3 text-emerald-100">
                <BsCalendar2Check className="text-2xl" aria-hidden="true" />
              </div>
              <p className="mt-6 text-2xl font-bold">หลังยืนยันการจอง</p>
              <p className="mt-3 leading-7 text-emerald-100">
                คุณจะเห็นโรงพยาบาล แผนก วัน เวลา และหมายเลขคิวอย่างชัดเจน
                สามารถกลับมาตรวจสอบรายละเอียดได้จากหน้าประวัติการจอง
              </p>
            </div>
            <Link
              to="/history"
              className="mt-8 inline-flex w-fit items-center gap-2 rounded-xl bg-white px-5 py-3 font-bold text-uColor-green transition hover:bg-amber-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-emerald-900"
            >
              ดูตัวอย่างประวัติการจอง
              <BsArrowRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-uColor-green">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 py-12 sm:px-6 md:flex-row md:items-center lg:px-8">
          <div>
            <div className="flex items-center gap-2 text-emerald-200">
              <BsPersonCheck aria-hidden="true" />
              พร้อมเริ่มต้นแล้วหรือยัง?
            </div>
            <p className="mt-2 text-2xl font-bold text-white sm:text-3xl">
              นัดหมายครั้งถัดไปให้เป็นเรื่องง่าย
            </p>
          </div>
          <Link
            to="/booking-nma"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-bold text-uColor-green shadow-lg transition hover:-translate-y-0.5 hover:bg-amber-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-emerald-900"
          >
            จองคิวตอนนี้
            <BsArrowRight aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Home;
