import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./Skills.module.scss";
import Section from "../Section/Section";

const Skills: React.FC = () => {
  const { t } = useTranslation();
  const skillsMap = t("skills", { returnObjects: true }) as string[];

  return (
    <Section header={t("resume.skills.header")}>
      <ul className={styles.skillsList}>
        {skillsMap &&
          skillsMap.map((skill) => (
            <li key={skill} className={styles.skillsListItem}>
              {skill}
            </li>
          ))}
      </ul>
    </Section>
  );
};

export default Skills;
