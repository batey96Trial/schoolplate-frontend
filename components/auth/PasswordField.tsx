import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { FloatingLabel } from 'flowbite-react';

const PasswordField = ({ label }: { label: string }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="relative">
      <Button
        size="icon"
        className="absolute left-full -translate-x-full -translate-y-full top-full rounded-none h-full  cursor-pointer z-50 hover:bg-inherit "
        type="button"
        variant="ghost"
        onClick={() => setShow(!show)}
      >
        {show ? <FaEye /> : <FaEyeSlash />}
      </Button>
      <FloatingLabel variant="outlined" label={label} type={show ? 'text' : 'password'} />
    </div>
  );
};

export default PasswordField;
