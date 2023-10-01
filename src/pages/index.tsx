import LayoutPages from "@/components/layout";
import Link from 'next/link';

export default function Index() {
    return (
        <>
            <LayoutPages>
                <div className=" ">
                    <img src="images/bg-2.png" alt="" className=" mx-auto my-5" />
                    <div className="text-center text-2xl flex flex-col items-center justify-center">
                        <hr className="border-[#049112] border-2 w-[70%] rounded-md" />

                        <p>INSTALLATION QUEUE BOOKING SYSTEM</p>
                        <p>F I R S T N E W S</p>

                        <hr className="border-[#049112] border-2 w-[50%] rounded-md" />
                    </div>
                    <p className="text-center my-10 text-5xl">MENU</p>
                    <div className=" flex my-5 mx-5 justify-center">
                        <Link href={'/calendar'} className=" text-xl w-[150px] h-[150px] flex items-center justify-center mx-5 border border-black" >
                            ปฏิทินงาน
                        </Link>
                        <Link href={'/reservation'} className="text-xl w-[150px] h-[150px] flex items-center justify-center mx-5 border border-black">
                            จองคิวงาน
                        </Link>
                        <Link href={'#'} className="text-xl w-[150px] h-[150px] bg-black flex items-center justify-center text-white mx-5">
                            ตั้งค่า
                        </Link>
                    </div>

                </div>
            </LayoutPages>
        </>
    )
}