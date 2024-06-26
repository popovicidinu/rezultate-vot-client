import React from "react";
import { ReactComponent as ProjectLogo } from "../assets/logo.svg";
import classes from "./Logo.module.scss";

interface Props {
  className?: string;
  homeLink?: boolean;
}

export const Logo: React.FC<Props> = ({ className, homeLink }) => {
  return (
    <div className={[classes.logo, className].join(" ")}>
      <a className={classes.projectLogo} href={homeLink ? "/" : undefined}>
        <ProjectLogo />
      </a>
    </div>
  );
};
