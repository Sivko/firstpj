"use client"
import { inView } from "motion"

export default function ViewTest(){


    return (
    <div className="">
            <section className="h-[80dvh] bg-red-400 w-full"><pre className="text-center">Первая секция</pre></section> 
            <section className="h-[80dvh] bg-purple-400 w-full"><pre className="text-center">Вторая секция</pre></section> 
            <section className="h-[80dvh] bg-yellow-400 w-full"><pre className="text-center">Третья секция</pre></section> 
            <section className="h-[80dvh] bg-green-400 w-full"><pre className="text-center">Четвертая секция</pre></section> 
            <section className="h-[80dvh] bg-gray-400 w-full"><pre className="text-center">Пятая секция</pre></section> 
    </div>)
}




<div className="example">
    <section className="scroll-section"><pre>Scroll</pre></section>
    <section className="scroll-section"><pre>to</pre></section>
    <section className="scroll-section"><pre>trigger</pre></section>
    <section className="scroll-section"><pre>animations!</pre></section>
</div>



{/* <style>
    body {
        overflow-x: hidden;
        overflow-y: scroll;
    }

    .example {
        display: flex;
        flex-direction: column;
    }

    .scroll-section {
        box-sizing: border-box;
        width: 100svw;
        height: 100vh;
        display: flex;
        justify-content: flex-start;
        overflow: hidden;
        padding: 50px;
        background: var(--hue-1-transparent);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .scroll-section:nth-child(2) {
        background: var(--hue-2-transparent);
    }

    .scroll-section:nth-child(3) {
        background: var(--hue-3-transparent);
    }

    .scroll-section:nth-child(4) {
        background: var(--hue-4-transparent);
    }

    .scroll-section pre {
        font-size: 48px;
        color: #ff0088;
        display: block;
        transform: translateX(-100px);
        opacity: 0;
    }

    .scroll-section:nth-child(2) pre {
        color: #dd00ee;
    }

    .scroll-section:nth-child(3) pre {
        color: #9911ff;
    }

    .scroll-section:nth-child(4) pre {
        color: #0d63f8;
    }
</style> */}