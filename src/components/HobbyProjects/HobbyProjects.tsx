import React from "react";
import Section from "../Section/Section";
import HobbyProject from "./HobbyProject";
import styles from "./HobbyProjects.module.scss";
import { useTranslation } from "react-i18next";
import { HobbyProjectMap } from "./hobbyTypes";

const HobbyProjects: React.FC = () => {
  const { t } = useTranslation();

  const hobbyProjectMap = t("hobbyProjects", {
    returnObjects: true,
  }) as HobbyProjectMap;

  return (
    <Section header={t("resume.hobbyProjects.title")}>
      <ul className={styles.hobbyProjectsContainer}>
        {hobbyProjectMap &&
          Object.keys(hobbyProjectMap).map((projectName: string) => (
            <HobbyProject
              key={projectName}
              project={hobbyProjectMap[projectName]}
            />
          ))}
      </ul>
    </Section>
  );
};

export default HobbyProjects;
