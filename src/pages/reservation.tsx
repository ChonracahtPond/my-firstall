import React from "react";
import LayoutPages from '../components/layout';

export default function Home() {
    return (
        <>
            <LayoutPages>
                <div className=" container w-[80%] mx-auto">
                    <h1 className=" text-4xl text-[#ffffff] text-center mt-5 group relative h-12 w-48 overflow-hidden rounded-2xl bg-green-500  font-bold mx-auto">จองคิว</h1>

                    <div className=" flex flex-wrap  my-5">
                        <div className="w-full px-3 sm:w-1/2">
                            <div className="mb-5">
                                <label
                                    htmlFor="date"
                                    className="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                    วัน/เดือน/ปี ที่ติดตั้ง
                                </label>
                                <input
                                    type="date"
                                    name="date"
                                    id="date"
                                    className="bg-[#F0FFE7] w-full rounded-md border border-[#e0e0e0]  py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                        </div>
                        <div className="w-full px-3 sm:w-1/2">
                            <div className="mb-5">
                                <label
                                    htmlFor="time"
                                    className="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                    เวลา
                                </label>
                                <input
                                    type="time"
                                    name="time"
                                    id="time"
                                    className="bg-[#F0FFE7] w-full rounded-md border border-[#e0e0e0] py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                        </div>
                    </div>
                    <div className=" flex flex-wrap  my-5">
                        <div className=" sm:w-1/2 ">
                            <div className="mb-5">
                                <label
                                    htmlFor="fName"
                                    className="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                    ชื่องาน
                                </label>
                                <input
                                    type="text"
                                    name="fName"
                                    id="fName"
                                    placeholder="ชื่องาน"
                                    className="bg-[#F0FFE7] w-full rounded-md border border-[#e0e0e0] py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                        </div>
                        <div className=" px-3 sm:w-1/2 ">
                            <div className="mb-5">
                                <label
                                    htmlFor="fName"
                                    className="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                    สถานที่ติดตั้งงาน
                                </label>
                                <input
                                    type="text"
                                    name="fName"
                                    id="fName"
                                    placeholder="สถานที่ติดตั้งงาน"
                                    className="bg-[#F0FFE7] w-full rounded-md border border-[#e0e0e0] py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                        </div>
                    </div>
                    <div className=" flex flex-wrap  my-5">
                        <div className=" px-3 sm:w-1/2 ">
                            <div className="mb-5">
                                <label
                                    htmlFor="fName"
                                    className="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                    ชื่อลูกค้า
                                </label>
                                <input
                                    type="text"
                                    name="fName"
                                    id="fName"
                                    placeholder="ชื่อลูกค้า"
                                    className="bg-[#F0FFE7] w-full rounded-md border border-[#e0e0e0] py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                        </div>
                        <div className=" px-3 sm:w-1/2 ">
                            <div className="mb-5">
                                <label
                                    htmlFor="fName"
                                    className="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                    เบอร์ติดต่อ
                                </label>
                                <input
                                    type="text"
                                    name="fName"
                                    id="fName"
                                    placeholder="เบอร์ติดต่อ"
                                    className="bg-[#F0FFE7] w-full rounded-md border border-[#e0e0e0] py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                        </div>
                    </div>

                    <div className=" px-3 sm:w-1/2 ">
                        <div className="mb-5">
                            <label
                                htmlFor="fName"
                                className="mb-3 block text-base font-medium text-[#07074D]"
                            >
                                ชื่อ AE รับงาน
                            </label>
                            <input
                                type="text"
                                name="fName"
                                id="fName"
                                placeholder="ชื่อ AE รับงาน"
                                className="bg-[#F0FFE7] w-full rounded-md border border-[#e0e0e0] py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>
                    </div>
                    <div className="mb-5">
                        <label
                            htmlFor="message"
                            className="mb-3 block text-base font-medium text-[#07074D]"
                        >
                            รายละเอียดงาน
                        </label>
                        <textarea
                            name="message"
                            id="message"
                            placeholder="Type your message"
                            className="bg-[#F0FFE7] w-full resize-none rounded-md border border-[#e0e0e0]  py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        ></textarea>
                    </div>
                    <div className=" flex justify-between">
                        <button className="group relative h-12 w-48 overflow-hidden rounded-2xl bg-green-500 text-lg font-bold text-white">
                            ย้อนกลับ
                            <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
                        </button>
                        <button className="group relative h-12 w-48 overflow-hidden rounded-2xl bg-green-500 text-lg font-bold text-white">
                            ยืนยัน
                            <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
                        </button>
                    </div>

                </div>




            </LayoutPages>

        </>
    )
}