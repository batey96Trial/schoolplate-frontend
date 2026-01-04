'use client';

import { Card, Checkbox, FloatingLabel, Label, HRText, Spinner } from 'flowbite-react';
import { Button } from '../ui/button';
import { FaFacebook, FaPhone } from 'react-icons/fa';
import PasswordField from './PasswordField';
import Link from 'next/link';
import Image from 'next/image';

const LoginCard = () => {
  const isActionGoing = true;
  return (
    <div className="gap-4 flex-col flex">
      <Card className="bg-card">
        <h1 className="text-center text-2xl font-black">Login to your account</h1>
        <Button variant="outline" className="cursor-pointer shadow-soft" disabled={isActionGoing}>
          <Image src="/googleicon.svg" alt="ic" width={20} height={20} />
          Login with Google
        </Button>
        <Button
          className="cursor-pointer border-secondary bg-blue-500 hover:bg-blue-500"
          disabled={isActionGoing}
        >
          <FaFacebook />
          Login with Facebook
        </Button>
        <HRText text="OR" />
        <form className="flex flex-col gap-4" aria-busy={isActionGoing}>
          <div className="relative">
            <FaPhone className="absolute translate-y-full right-0 -translate-x-full pointer-events-none" />
            <FloatingLabel
              variant="outlined"
              label="Phone Number"
              type="tel"
              maxLength={9}
              minLength={9}
              inputMode="numeric"
              pattern="[0-9]*"
              required
            />
          </div>

          <PasswordField label="Password" />

          <div className="flex items-center gap-2 justify-between">
            <div className="flex items-center gap-2">
              <Checkbox id="remember" className="focus:ring-0 text-primary" />
              <Label htmlFor="remember">Remember me</Label>
            </div>
            <Link href="#" className="text-sm text-secondary hover:underline">
              Forgot Password?
            </Link>
          </div>
          <Button
            variant="default"
            className=" bg-gradient-hero cursor-pointer"
            disabled={isActionGoing}
          >
            {true ? (
              <>
                <Spinner /> Connecting...
              </>
            ) : (
              <>Login</>
            )}
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default LoginCard;
