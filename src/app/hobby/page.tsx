'use client';

import Link from 'next/link';
import { useRouter, useParams } from 'next/navigation';

export default function HobbyPage() {
  const router = useRouter();
  const data = Array.from({ length: 8 }, () => 'Badge');
  const hobbies = Array.from({ length: 8 }, (v, index) => `Hobby ${index + 1}`);
  console.log('router :>> ', useParams());
  /*----- HTML Class variable -----*/
  const BadgeListClass = 'grid grid-cols-4 gap-y-5 gap-x-3 mb-5';
  return (
    <div className="flex flex-col justify-center items-center gap-y-10 bg-white border p-3">
      <span className={`badge bg-primary`}>Badge</span>

      <div className="text-wrap text-center">
        You can enjoy watching movies in many ways. <br />
        Even if you don't necessarily go to the movie theater, <br />
        you can easily access it using OTT sites. <br />
        <br />
        If you like watching movies and watch them often, <br />
        it might be a good idea to expand your hobby beyond just watching movies. <br />
        <br />
        Maybe you can create your own home cinema using a beam projector, TV, speakers, etc., <br />
        or you can have fun preparing food to eat while watching a movie! <br />
      </div>
      <div className="w-full ">
        <h4>Similar Hobbies</h4>
        <div className={BadgeListClass}>
          {data.map((item, index: number) => {
            return (
              <Link href={`/hobby?${index}`} className={`badge bg-green-0`} key={`hobby-similar-${index}`} replace>
                {item}
              </Link>
            );
          })}
        </div>
        <h4>When You Want A New Challenge</h4>

        <div className={BadgeListClass}>
          {data.map((item, index: number) => {
            return (
              <Link href={`/hobby?${index}`} className={`badge bg-brown-1`} key={`hobby-new-${index}`} replace>
                {item}
              </Link>
            );
          })}
        </div>
      </div>
      <button className="button-empty" type="button" onClick={() => router.back()}>
        <img src="x.svg" alt="x"></img>
      </button>
    </div>
  );
}
