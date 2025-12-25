
import AuthUI from "@/components/auth/AuthUI";
import { Suspense } from "react";

const Auth = () => {
    return (
        <div className="flex min-h-dvh items-center justify-center m-auto">
            <div className="flex-2 max-w-sm">
                <Suspense fallback={<div>Loading...</div>}>
                    <AuthUI />
                </Suspense>
            </div>
        </div>
    );
}

export default Auth;