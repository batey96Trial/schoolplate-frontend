'use client';

import { Card, HRText, FloatingLabel, Checkbox, Label, Spinner } from 'flowbite-react';
import {
  Select,
  SelectGroup,
  SelectContent,
  SelectLabel,
  SelectValue,
  SelectItem,
  SelectTrigger,
} from '@/components/ui/select';
import PasswordField from './PasswordField';
import { Button } from '../ui/button';
import { FaFacebook, FaUser, FaPhone, FaDonate, FaUserGraduate, FaUtensils } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

const SignUpCard = () => {
  const isActionGoing = true;

  return (
    <div>
      <Card className="bg-card">
        <h1 className="text-center text-2xl font-black">Create a New Account</h1>
        <Button variant="outline" className="cursor-pointer shadow-soft" disabled={isActionGoing}>
          <Image src="/googleicon.svg" alt="ic" width={20} height={20} />
          Sign up with Google
        </Button>
        <Button
          className="cursor-pointer border-secondary bg-blue-500 hover:bg-blue-500"
          disabled={isActionGoing}
        >
          <FaFacebook />
          Sign up with Facebook
        </Button>
        <HRText text="OR" />
        <form className="flex flex-col gap-4" aria-busy={isActionGoing}>
          <div className="relative">
            <FaUser className="absolute translate-y-full right-0 -translate-x-full pointer-events-none" />
            <FloatingLabel variant="outlined" label="First Name" />
          </div>
          <div className="relative">
            <FaUser className="absolute translate-y-full right-0 -translate-x-full pointer-events-none" />
            <FloatingLabel variant="outlined" label="Second Name" />
          </div>
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
          <PasswordField label="Confirm Password" />
          <Select>
            <SelectTrigger className=" text-sm">
              <SelectValue placeholder="Join schoolplate as" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Identity</SelectLabel>
                <SelectItem value="donor" className="focus:bg-secondary">
                  <FaDonate />
                  Donor
                </SelectItem>
                <SelectItem value="student">
                  <FaUserGraduate /> Student
                </SelectItem>
                <SelectItem value="restaurant">
                  <FaUtensils />
                  Restaurant
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <div className="flex gap-2 items-center">
            <Checkbox id="terms_conditions" className="focus:ring-0 text-primary" required />
            <Label htmlFor="terms_conditions" className="">
              I agree with the&nbsp;{' '}
              <Link href="#" className="text-secondary hover:underline">
                terms and conditions
              </Link>
            </Label>
          </div>
          <Button
            variant="default"
            className=" bg-gradient-hero cursor-pointer"
            disabled={isActionGoing}
          >
            {true ? (
              <>
                <Spinner /> Submitting...
              </>
            ) : (
              <>Signup</>
            )}
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default SignUpCard;
