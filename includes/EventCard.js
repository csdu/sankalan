import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import defaultEventBackground from "@/public/images/event-bg.jpg";
 
export default function EventCard({name, event, cardImage, ...rest}) {
  return (
    <Link href={'/events/' + event} className="lg:basis-1/2 w-full" >
      <Card
        shadow={true}
        className="relative grid h-[15rem] w-full max-w-[28rem] items-center justify-center overflow-hidden text-center mx-auto cursor-pointer transition-transform transform hover:scale-105 duration-300 ease-in-out rounded-none border-white border-4 shadow-xl"
      >
        <CardHeader
          floated={false}
          shadow={true}
          color="transparent"
          className="absolute inset-0 m-0 h-full w-full rounded bg-cover bg-center"
        >
          <Image src={defaultEventBackground} alt="event" className="absolute inset-0 h-full w-full object-cover" 
            placeholder="blur"
          />
        </CardHeader>
        <CardBody className="relative py-14 px-6 md:px-12">
            <h2 className="glitch event-title" dangerouslySetInnerHTML={{
                __html: name
              }}>
            </h2>
        </CardBody>
      </Card>
    </Link>
  );
}
