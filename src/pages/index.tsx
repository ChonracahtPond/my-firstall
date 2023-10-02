import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';


export default function Login() {
    const [data, setData] = useState<{ user: { name: string, password: string } } | null>(null);
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [loginSuccess, setLoginSuccess] = useState(false);
    const [loginMessage, setLoginMessage] = useState("");
    const router = useRouter();

    const handleLogin = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            const response = await fetch("/api/user");
            const data = await response.json();
            const match = data?.user?.find((user: { name: string, password: string, id: string }) => {
                return user.name === name && user.password === password;
            });

            if (match) {
                setLoginSuccess(true);
                localStorage.setItem("isLoggedIn", "true"); // Set the logged-in state
                router.push(`/manage`);
            } else {
                setLoginSuccess(false);
                setLoginMessage("อีเมลหรือรหัสผ่านไม่ถูกต้อง");
            }
        } catch (error) {
            console.error("An error occurred:", error);
        }
    };

    useEffect(() => {
        fetch("/api/user")
            .then((response) => response.json())
            .then((data) => {
                setData(data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);
    return (
        <>

            <div className=" mx-auto">
                <img src="../images/bg1.png" alt="" className=" w-[700px] justify-center mx-auto" />
                <h1 className='text-center text-[#049112] text-6xl'>เข้าสู่ระบบ</h1>



                <form action="" className="w-[800px] mx-auto">
                    <div id="input" className="flex flex-col w-full my-5 ">
                        <label htmlFor="name" className=" mb-2"
                        >ชื่อ</label>
                        <input
                            type="text"
                            value={name} onChange={(e) => setName(e.target.value)}
                            id="name"
                            placeholder="ชื่อ"
                            className="appearance-none border-2 border-gray-500 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2  focus:shadow-lg  "
                        />
                    </div>
                    <div id="input" className="flex flex-col w-full my-5">
                        <label htmlFor="password" className=" mb-2"
                        >รหัสผ่าน</label>
                        <input
                            type="password"
                            value={password} onChange={(e) => setPassword(e.target.value)}
                            id="password"
                            placeholder="รหัสผ่าน"
                            className="appearance-none border-2 border-gray-500 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2  focus:shadow-lg "
                        />
                    </div>
                    <div id="button" className="flex flex-col w-full my-5">

                        <div className="flex">
                            <button onClick={handleLogin} className="group relative h-12 w-full overflow-hidden rounded-2xl bg-[#049112]  text-1xl font-bold text-white" type="submit" >
                                เข้าสู่ระบบ
                                <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
                            </button>
                        </div>
                        {loginMessage && <p className={`text-${loginSuccess ? "success" : "danger"}`}>{loginMessage} </p>}
                        {/* {loginMessage && <p className={`text-${loginSuccess ? "success" : "danger"}`}>{loginMessage} </p>} */}


                    </div>



                    <div className=" text-white text-center my-6 ">
                        <Link href="../registers">
                            <p>ยังไม่มีบัญชีผู้ใช้?</p>
                            <span className="text-[#18BCEB]">สมัครสมาชิกใหม่</span>
                        </Link>
                    </div>
                </form>
            </div>
        </>
    )
}