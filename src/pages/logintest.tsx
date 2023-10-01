import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'


export default function Login() {



  return (
 
    <>
    
   <div className="text-center ">
    <img src="../images/bg1.png" alt="" className=" w-[700px] justify-center mx-auto"/>
    <h1 className=' text-[#049112] text-6xl'>จองคิวติดตั้งงาน</h1>
    <div className=' my-10'>
    
    <Link href={'/login'} className=' mx-5 text-[#049112] text-2xl'>
         เข้าสู่ระบบ
    </Link>

    <Link href={'/registers'} className=' mx-5 text-[#049112] text-2xl'>
    สมัครใช้งาน
    </Link>
  
    </div>
    </div>
    </>
  )
}
