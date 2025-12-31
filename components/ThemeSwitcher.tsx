"use client";
import {Switch} from "@/components/switch";
import {useTheme} from "next-themes";
import {useState, useEffect} from "react";

const ThemeSwitcher = () => {
	const {theme, setTheme, resolvedTheme} = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		// avoid hydration mismatch
		return null;
	}

	return (
		<div className=' flex items-center md:px-6 py-2 px-2 w-fit rounded-full space-x-3 bg-card shadow-xl '>
			<Switch
				className=' cursor-pointer  p-0 m-0 bg-red-500'
				checked={resolvedTheme == "dark"}
				onCheckedChange={() =>
					setTheme(resolvedTheme == "light" ? "dark" : "light")
				}
				id='switch'
			/>
			<label htmlFor='switch' className='cursor-pointer'>
				Dark Mode
			</label>
		</div>
	);
};

export default ThemeSwitcher;
