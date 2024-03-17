import Image from "next/image";
import Link from "next/link"
export default function Home() {
  return (
    <main className="containered bg-black text-white h-screen w-screen">
      <div className="h-screen w-screen">
        <section className="flex">
          <p className="absolute text-4xl font-extrabold text-gray-700 ml-[29%] mt-20 border-2 rounded-lg p-2 backdrop-blur-sm ">Your ultimate tool for your studies.</p>
          <div className=" ml-60 mt-32">
            <p className="text-3xl font-mono  p-20 px-0 w-[28rem] ">Choose tools based on Field</p>
            <div className="bg-sky-300 grid grid-cols-2 gap-4 h-[17rem] p-8 pb-8 rounded-3xl w-[27rem] ml-2" >
              <button className="button"><Link href='/maths'>Mathematics</Link></button>
              <button className="button"><Link href='/physics'>Physics</Link></button>
              <button className="button"><Link href='/electronics'>Electronics</Link></button>
              <button className="button"><Link href='/engineering'>Engineering</Link></button>
              <button className="button"><Link href='/paragraph'>Plagiarism</Link></button>
              <button className="button"><Link href='/chemistry'>Chemistry</Link></button>
            </div>
          </div>
          <div className="p-60 pr-0 ml-30 -mt-10">
            <input type="file" className="rounded-2xl border-4 outline-dashed bg-slate-500 ml-6"></input>
            <input placeholder="Solution will display here ..." type="text" className="bg-grey-200 border-2 rounded-2xl  px-4 pb-40 mt-20 -ml-16 h-[18rem] w-[30rem] "></input>
          </div>
        </section>
      </div>
    </main>
  );
}
