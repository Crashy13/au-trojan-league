import Head from "next/head";
import Image from "next/image";
import { members_info } from "../public/data/member-info";

export default function Home() {
  return (
    <div>
      <Head>
        <title>AU Trojan League</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <div className="flex justify-center">
          <h1 className="text-5xl my-10 font-extrabold">
            Home of the AU Trojan Fantasy Football League
          </h1>
        </div>
        <div>
          <h2 className="flex justify-center text-3xl font-bold mb-4">
            Meet The Crew
          </h2>

          <div className='mx-auto w-11/12 md:w-1/2 text-center grid gap-6'>
            {members_info.map((member) => {
              return (
                <>
                  <div>
                    <Image
                      src={member.image}
                      alt="photo of member"
                      width={200}
                      height={200}
                    ></Image>
                    <h3 className="text-2xl my-2">Name: {member.name}</h3>
                    <p className='my-2'>Championships: {member.championships}</p>
                    <p className='my-2'>Best Finish: {member.best}</p>
                    <p className='my-2'>Worst Finish: {member.worst}</p>
                    <p className='my-2'>{member.description}</p>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
