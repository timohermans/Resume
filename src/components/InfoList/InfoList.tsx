import React from "react";
import InfoListItem from "./InfoListItem";
import styles from "./InfoList.module.scss";
import EmailIcon from "../../assets/email.svg";
import PhoneIcon from "../../assets/phone.svg";
import LocationIcon from "../../assets/location.svg";
import LinkedinIcon from "../../assets/linkedin.svg";
import GithubIcon from "../../assets/github.svg";

const infoListFacets = [
  { text: "resume.email", icon: EmailIcon },
  { text: "resume.phoneNumber", icon: PhoneIcon },
  { text: "resume.location", icon: LocationIcon },
  { text: "resume.linkedin", icon: LinkedinIcon },
  { text: "resume.github", icon: GithubIcon },
];

const InfoList: React.FC = () => {
  return (
    <ul className={styles.infoList}>
      {infoListFacets.map((info, index) => (
        <InfoListItem key={index} {...info} />
      ))}
    </ul>
  );
};

export default InfoList;
