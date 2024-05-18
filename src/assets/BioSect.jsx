import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

const name = "Josh Hampton";
const linkedin = "https://www.linkedin.com/in/josh-hampton-37849b33/";
const github = "https://github.com/JoshuaHampton";

function BioSect() {
  return (
    <Typography >
      {'Created by: '}
      {name + ' - '}
      <Link href={linkedin}>
        LinkedIn
      </Link>
      {', '}
      <Link href={github}>
        GitHub
      </Link>
      {' ©'}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default BioSect;