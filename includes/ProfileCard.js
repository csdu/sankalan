import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'

export default function ProfileCard(data) {
  const { name, position, github, linkedin, image } = data.data;

  return (
    <Card className="transition-transform transform hover:scale-105 duration-300 ease-in-out cursor-pointer lg:basis-1/4 mx-auto rounded-none border-white border-4 shadow-xl">
      <CardHeader floated={true} className="rounded-none border-white border-4 shadow-xl">
         <Image
            src={image || '/images/people/placeholder.jpg'}
            alt="profile-picture"
            className="object-cover w-auto"
            width={500}
            height={500}
            layout="responsive"
            priority
          />
      </CardHeader>
      <CardBody className="text-center mb-0">
        <Typography color="black" className="mb-2 font-medium font-[comicbook] text-lg mb-0">
          {name}
        </Typography>
        {position ? (
          <Typography color="gray" className="font-[comicbook] font-xs" textGradient variant="small" dangerouslySetInnerHTML={
            { __html: position }
          }>
          </Typography>
        ) : null}
        <div className="mt-4 flex justify-center items-center gap-5 text-black">
          {github != '#' ? <a target="_blank" href={github} className="hover:text-sankalan-blue transition duration-300 ease-in-out"><FontAwesomeIcon size="lg" icon={faGithub} /></a> : <FontAwesomeIcon size="lg" icon={faGithub} />}
          {linkedin != '#' ? <a target="_blank" href={linkedin} className="hover:text-sankalan-blue transition duration-300 ease-in-out"><FontAwesomeIcon size="lg"  icon={faLinkedinIn} /></a> : <FontAwesomeIcon size="lg"  icon={faLinkedinIn} />}
        </div>
      </CardBody>
    </Card>
  );
}
