"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState,useEffect } from "react";
import  {signin,signout,useSession,getProviders} from "next-auth/react";

const Nav = () => {
    const isLogged=false;
    return(<nav className="flex-between w-full mb-16 pt-3">
    <Link href="/" className="flex gap-2 flex-center">
        <Image src="/assets/images/logo.svg" alt="Promptshare logo" width={30} height={30} className="object-contain"/>
        <p className="Logo_text">Promptshare</p>
    </Link>
    <div className="sm:flex hidden">
    {
    isLogged?
    (
    <div  className="flex gap-3 md:gap-5"><Link href="/create-prompt" className="black_btn">Create post</Link>
    <button type="button" onClick={signout} className="outline_btn">Signout</button>
    <Link href='/profile'><Image src="/assets/images/logo.svg" width={37} height={37} className="rounded-full" alt="profile"></Image></Link>
    </div>
    )
    :
    (<div className="flex gap-3 md:gap-5"></div>)      
    }
    </div>
</nav>)}

export default Nav