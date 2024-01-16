'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function ResultPage() {
  const router = useRouter();
  /*----- Data Example -----*/
  const badgeListExample = {
    recommend: [
      ' bg-primary',
      ' bg-primary',
      ' bg-primary',
      ' bg-primary',
      ' bg-primary',
      ' bg-primary',
      ' bg-primary',
    ],
    normal: [' bg-secondary', ' bg-secondary', ' bg-secondary', ' bg-secondary', ' bg-secondary'],
    opposite: [' bg-green-0', ' bg-green-0', ' bg-green-0', ' bg-green-0', ' bg-green-0'],
  };
  /*----- HTML Class variable -----*/
  const BadgeListClass = 'grid grid-cols-5 gap-y-5 gap-x-3 mb-5';
  return (
    <div className="flex flex-col justify-center items-center gap-y-10">
      <h1 className="text-black">Tendency Type</h1>
      <div className="text-wrap text-center">
        How about trying a static hobby? <br />
        When it comes to hobbies, <br />
        you tend to value experiences more than actual material things. <br />
        A solution for those who want to develop their artistic sense! <br />
        Start your favorite hobby among the hobbies below!
      </div>
      <div className="w-full shadow-md border-secondary rounded-3xl bg-white px-5 py-10">
        <div className={BadgeListClass}>
          {badgeListExample.recommend.map((item, index: number) => {
            return (
              <Link href={'/hobby'} className={`badge ${item}`} key={`hobby-recommend-${index}`}>
                Badge
              </Link>
            );
          })}
        </div>
        <div className={BadgeListClass}>
          {badgeListExample.normal.map((item, index: number) => {
            return (
              <Link href={'/hobby'} className={`badge ${item}`} key={`hobby-normal-${index}`}>
                Badge
              </Link>
            );
          })}
        </div>
        <div className={BadgeListClass}>
          {badgeListExample.opposite.map((item, index: number) => {
            return (
              <Link href={'/hobby'} className={`badge ${item}`} key={`hobby-opposite-${index}`}>
                Badge
              </Link>
            );
          })}
        </div>
      </div>
      <div className="w-full flex justify-between">
        <button className="button-secondary" type="button" onClick={() => router.push('/')}>
          Retry
        </button>
        <button type="button">Share</button>
      </div>
    </div>
  );
}
