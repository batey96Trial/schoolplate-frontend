"use client";
import LoginCard from "@/components/auth/LoginCard";
import {createTheme, TabItem, Tabs, ThemeProvider} from "flowbite-react";
import SignUpCard from "@/components/auth/SignUpCard";
import {LogInIcon} from "lucide-react";
import {FaSignInAlt, FaRegistered} from "react-icons/fa";

const authTheme = createTheme({
	spinner: {
		color: {
			google: "text-white hover:text-white fill-primary",
			facebook: "text-blue-500 hover:text-blue-600 fill-amber",
			default: "text-primary/30 fill-amber"
		}
	}
})

const AuthUI = () => {
	return (
		<ThemeProvider theme={authTheme}>
			<Tabs variant='underline' className='flex justify-around'>
				<TabItem
					title='Login'
					className='text-3xl cursor-pointer'
					icon={FaSignInAlt}>
					<LoginCard />
				</TabItem>
				<TabItem title='Signup' icon={FaRegistered}>
					<SignUpCard />
				</TabItem>
			</Tabs>
		</ThemeProvider>
	);
};

export default AuthUI;
