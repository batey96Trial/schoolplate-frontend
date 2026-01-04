import AuthUI from '@/components/auth/AuthUI';
import { Suspense } from 'react';
import { Metadata } from 'next';
import { Spinner } from 'flowbite-react';

export const metadata: Metadata = {
  title: 'Join',
  description: 'Join SchoolPlate by Login or creating a new account',
};
const Auth = () => {
  return (
    <div className="flex min-h-dvh items-center justify-center m-auto">
      <div className="flex-2 max-w-sm">
        <Suspense
          fallback={
            <div>
              <Spinner /> Please wait...
            </div>
          }
        >
          <AuthUI />
        </Suspense>
      </div>
    </div>
  );
};

export default Auth;
