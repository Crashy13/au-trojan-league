import Head from "next/head";
import Image from "next/image";
import { members_info } from "../public/data/member-info";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

export default function Home() {
  return (
    <div>
      <Head>
        <title>AU Trojan League</title>
        <meta name="description" content="Home of the AU Trojan League" />
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <div className="flex-col text-center mb-20">
          <h1 className="text-5xl my-10 font-extrabold">
            Home of the AU Trojan Fantasy Football League
          </h1>
          <Image
            src="/images/Group.jpeg"
            alt="Group photo"
            width={700}
            height={600}
          ></Image>
        </div>

        <div className='text-center my-10'>
          <h1 className="text-4xl font-extrabold font-fira">Draft Date: August 26</h1>
          <h2>Time and Date still TBD</h2>
        </div>

        <div>
          <h2 className="flex justify-center text-3xl font-bold mb-4">
            Meet The Crew
          </h2>

          <div className="mx-auto w-11/12 md:w-1/2 text-center grid gap-6">
            {members_info.map((member) => {
              return (
                <div key={member.id}>
                  <Image
                    src={member.image}
                    alt="photo of member"
                    width={300}
                    height={300}
                  ></Image>
                  <h3 className="text-2xl my-2">Name: {member.name}</h3>
                  <p className="my-2">Championships: {member.championships}</p>
                  <p className="my-2">Best Finish: {member.best}</p>
                  <p className="my-2">Worst Finish: {member.worst}</p>
                  <p className="my-2">{member.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
