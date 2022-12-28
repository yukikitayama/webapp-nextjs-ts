import { Fragment } from "react";
import Typography from "@mui/material/Typography";
import { teal } from "@mui/material/colors";

const Explanation = () => {
  return (
    <Fragment>
      <Typography variant="body1" gutterBottom>
        Hi, I&apos;m Yuki. Welcome to my webapp! I&apos;m using this to manage
        my expense, take notes in article, and check my fitness data. You might
        find something useful in article.
      </Typography>
      <Typography variant="body1" gutterBottom>
        The frontend of this app is made by Next.js and React in TypeScript, and
        in backend, API is coded in Python in AWS to interact with databases,
        running in a serverless microservices manner like below.
      </Typography>
    </Fragment>
  );
};

export default Explanation;
