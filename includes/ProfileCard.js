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
    <Card className="transition-transform transform hover:scale-105 duration-300 ease-in-out cursor-pointer lg:basis-1/4 mx-auto">
      <CardHeader floated={true}>
         <Image
            src={image || '/images/people/placeholder.jpg'}
            alt="profile-picture"
            className="object-cover h-50"
            width={500}
            height={500}
            priority
          />
      </CardHeader>
      <CardBody className="text-center mb-0">
        <Typography color="black" className="mb-2 font-medium font-[comicbook] text-lg mb-0">
          {name}
        </Typography>
        {position ? (
          <Typography color="gray" className="font-[comicbook] font-xs" textGradient variant="small">
            {position}
          </Typography>
        ) : null}
        <div className="mt-4 flex justify-center items-center gap-5 text-black">
          <a target="_blank" href={github}><FontAwesomeIcon size="lg" icon={faGithub} /></a>
          <a target="_blank" href={linkedin}><FontAwesomeIcon icon={faLinkedinIn} /></a>
        </div>
      </CardBody>
    </Card>
  );
}
