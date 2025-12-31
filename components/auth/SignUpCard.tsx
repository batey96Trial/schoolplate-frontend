"use client";
import {Card, TextInput, HRText} from "flowbite-react";
import {Button} from "../ui/button";
import {FaFacebook, FaGoogle, FaUser, FaPhone, FaLock} from "react-icons/fa";
import Image from "next/image";

const SignUpCard = () => {
	return (
		<div className='gap-4 flex-col flex'>
			<Card className='bg-card'>
				<h1 className='text-center text-2xl font-black'>
					Create a New Account
				</h1>
				<Button variant='outline' className='cursor-pointer shadow-soft'>
					<Image src='/googleicon.svg' alt='ic' width={20} height={20} />
					Sign up with Google
				</Button>
				<Button className='cursor-pointer border-secondary bg-blue-500 hover:bg-blue-700'>
					<FaFacebook />
					Sign up with Facebook
				</Button>
				<HRText text='OR' />
				<form className='flex flex-col gap-4'>
					<div>
						<TextInput
							id='name'
							type='text'
							placeholder='UserName'
							className=' ring-input'
							pattern='[A-Za-z]'
							required
							shadow
							rightIcon={FaUser}
						/>
					</div>
					<div>
						<TextInput
							id='tel'
							type='tel'
							placeholder='Telephone'
							className=' ring-input'
							pattern='6[0-9]{8}'
							required
							shadow
							rightIcon={FaPhone}
						/>
					</div>
					<div>
						<TextInput
							id='password'
							type='password'
							placeholder='password'
							required
							rightIcon={FaLock}
						/>
					</div>
					<div>
						<TextInput
							id='password-confirm'
							type='password'
							placeholder='Confirm password'
							required
						/>
					</div>
					<Button
						variant='default'
						className=' bg-gradient-hero cursor-pointer'>
						Sign Up
					</Button>
				</form>
			</Card>
		</div>
	);
};

export default SignUpCard;
