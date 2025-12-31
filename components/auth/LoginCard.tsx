"use client";

import {Card, Checkbox, Label, TextInput, HRText} from "flowbite-react";
import {Button} from "../ui/button";
import {FaGoogle, FaFacebook, FaPhone, FaLock} from "react-icons/fa";

import Link from "next/link";
import Image from "next/image";

const LoginCard = () => {
	return (
		<div className='gap-4 flex-col flex'>
			<Card className='bg-card'>
				<h1 className='text-center text-2xl font-black'>
					Login to your account
				</h1>
				<Button variant='outline' className='cursor-pointer shadow-soft'>
					<Image src='/googleicon.svg' alt='ic' width={20} height={20} />
					Continue with Google
				</Button>
				<Button className='cursor-pointer border-secondary bg-blue-500 hover:bg-blue-700'>
					<FaFacebook />
					Continue with Facebook
				</Button>
				<HRText text='OR' />
				<form className='flex flex-col gap-4'>
					<div>
						<TextInput
							id='tel'
							type='tel'
							placeholder='Telephone'
							className=' ring-input'
							required
							shadow
							rightIcon={FaPhone}
							inputMode='numeric'
							pattern='6[0-9]{8}'
						/>
					</div>
					<div>
						<TextInput
							id='password1'
							type='password'
							placeholder='password'
							required
							shadow
							rightIcon={FaLock}
						/>
					</div>
					<div className='flex items-center gap-2 justify-between'>
						<div className='flex items-center gap-1'>
							<Checkbox id='remember' className='focus:ring-0 text-primary' />
							<Label htmlFor='remember'>Remember me</Label>
						</div>
						<Link
							href='#'
							className='text-sm hover:text-amber-light transition'>
							Forgot Password?
						</Link>
					</div>
					<Button
						type='submit'
						variant='default'
						className=' bg-gradient-hero cursor-pointer'>
						Log in
					</Button>
				</form>
			</Card>
		</div>
	);
};

export default LoginCard;
