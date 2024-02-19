import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'

export default function ProfileCard(data) {
  const { name, position, github, linkedin, image } = data.data;
  console.log(data);
  return (
    <Card className="transition-transform transform hover:scale-105 duration-300 ease-in-out">
      <CardHeader floated={true}>
        <img src={image || "https://docs.material-tailwind.com/img/team-3.jpg"} alt="profile-picture" style={
          {
            fill: 'cover',
            width: '100%',
          }
        } />
      </CardHeader>
      <CardBody className="text-center mb-0">
        <Typography color="black" className="mb-2 font-medium font-[spacemono]">
          {name}
        </Typography>
        {position ? (
          <Typography color="gray" className="font-[monospace] font-xs" textGradient variant="small">
            {position}
          </Typography>
        ) : null}
        <div className="mt-4 flex justify-center items-center gap-5 text-black">
          <FontAwesomeIcon size="lg" icon={faGithub} />
          <FontAwesomeIcon icon={faLinkedinIn} />
        </div>
      </CardBody>
    </Card>
  );
}
