import { BlackLogo } from '@/components/Logo';
import CounselingButton from '@/components/counseling/CounselingButton';

export default function Counseling() {
  return (
    <div className="flex flex-col justify-center items-center gap-y-10">
      <BlackLogo />
      <div className="text-wrap text-center">
        Do you enjoy being active like sports, car washing, or traveling? <br />
        Or do you enjoy more sedentary hobbies like watching movies, playing musical instruments, or building Lego?
      </div>
      <div className="w-full">
        <CounselingButton href={'/result'}>1. I feel better when I move my body and be active.</CounselingButton>
        <CounselingButton href={'/result'}>
          2. I feel better when I do static activities rather than vigorous movements.
        </CounselingButton>
        <CounselingButton href={'/result'}>3. I”m not sure what I like.</CounselingButton>
        <CounselingButton href={'/result'}>4. I like both! Enjoy any activity!!!</CounselingButton>
      </div>
    </div>
  );
}
