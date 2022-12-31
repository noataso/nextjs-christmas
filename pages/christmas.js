import Image from "next/image";
import styles from "../styles/christmas.module.css";
import backImage from "../Images/christmas.jpg";
import { useState } from "react";

const christmas = () => {
    const [isShow,setIsShow]=useState(true)
    const createBlock=()=>{
        const list=[]
        for(let i=0;i<50;i++){
            const maxSize=20;
            const minSize=15;
            const block=
            <span key={i}
            class={styles.block}
            style={{width:`${Math.random()*(maxSize-minSize)+minSize+"px"}`,
            height:`${Math.random()*(maxSize-minSize)+minSize+"px"}`,
            top:`${Math.random()*100+"%"}`,
            left:`${Math.random()*100+"%"}`,
            backgroundColor:`rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`,
            animationDelay:`${Math.random()*1.5+"s"}`
        }}></span>
        list.push(block)
        // setTimeout(()=>{
        //     setIsShow(!isShow)
        // },100)
        }
        return list
    }
    createBlock()
    return (
        <div className={styles.container}>
            <Image src={backImage} className={styles.backImage}/>
            <div className={styles.title}>
                <h1 className={styles.h1}>Christmas Season</h1>
            </div>
            {isShow? createBlock():null}
        </div>
    );
}

export default christmas;