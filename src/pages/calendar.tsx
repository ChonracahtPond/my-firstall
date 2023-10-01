import LayoutPages from "@/components/layout";
import MyCalendar from "./test/MyCalendar";

export default function Home() {
    return (
        <>
            <LayoutPages>
                <div className=" my-10">
                    <MyCalendar/>
                </div>
            </LayoutPages>
        </>
    )
}