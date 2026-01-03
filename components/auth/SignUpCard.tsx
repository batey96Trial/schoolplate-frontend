"use client";
import {Card, TextInput, HRText, Spinner} from "flowbite-react";
import {Button} from "../ui/button";
import {FaFacebook, FaUser, FaPhone, FaLock} from "react-icons/fa";
import Image from "next/image";
import { useState } from "react";

const SignUpCard = () => {
    const [isLoadingGS, setIsLoadingGS] = useState(false); //Google login state
    const [isLoadingFBS, setIsLoadingFBS] = useState(false); //Facebook login state
    const [isLoadingS, setIsLoadingS] = useState(false); //Manual signup state
    
    return (
        <div className="gap-4 flex-col flex">
            <Card className="bg-card">
                <h1 className="text-center text-2xl font-black">Create a New Account</h1>
                <Button variant="outline" onClick={() => setIsLoadingGS(true)} className="cursor-pointer shadow-soft">
                    {isLoadingGS && <Spinner color="google" aria-label="loading" />}
                    <Image src="/googleicon.svg" alt="google icon" width={20} height={20} />
                    Sign up with Google
                </Button>
                <Button onClick={() => setIsLoadingFBS(true)} className="cursor-pointer border-secondary bg-blue-500 hover:bg-blue-600">
                    {isLoadingFBS && <Spinner color="facebook" light aria-label="loading" />}
                    <FaFacebook />
                    Sign up with Facebook
                </Button>
                <HRText text="OR" />
                <form className="flex flex-col gap-4">
                    <div>
                        <TextInput id="name" type="text" placeholder="UserName" className=" ring-input" required shadow rightIcon={FaUser} />
                    </div>
                    <div>
                        <TextInput id="tel-signup" type="tel" placeholder="Telephone" className=" ring-input" required shadow rightIcon={FaPhone} />
                    </div>
                    <div>
                        <TextInput id="password" type="password" placeholder="password" required rightIcon={FaLock} />
                    </div>
                    <div>
                        <TextInput id="password-confirm" type="password" placeholder="Confirm password" required />
                    </div>
                    <Button variant="hero-gradient" onClick={() => setIsLoadingS(true)} className="cursor-pointer" >
                        {isLoadingS && <Spinner color="default" aria-label="loading" />}
                        Sign Up
                    </Button>
                </form>
            </Card>
        </div>
    );
}

export default SignUpCard;
