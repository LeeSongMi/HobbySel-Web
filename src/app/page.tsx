import { BlackLogo } from '@/components/Logo';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center gap-y-10">
      <BlackLogo />
      <div className="text-center">
        For those who want healing in a boring life. <br />
        Do you want to solve stressful problems?
        <br />
        Do you want to find small joys in life? <br />
        Not sure what you like? <br />
        We recommend hobbies that suit you. <br />
        Go find happiness. I will support you.
        <br />
      </div>
      <Link href="/counseling">
        <button type="button">Find Hobby</button>
      </Link>
    </div>
  );
}
