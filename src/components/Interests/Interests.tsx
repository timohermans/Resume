import React from "react";
import styles from "./Interests.module.scss";
import Section from "../Section/Section";
import { useTranslation } from "react-i18next";

const Interests: React.FC = () => {
  const { t } = useTranslation();

  const interests = t("interests", { returnObjects: true }) as string[];

  return (
    <Section header={t("resume.interests.title")}>
      <ul className={styles.interestsList}>
        {interests &&
          interests.map((intereset) => (
            <li key={intereset} className={styles.interestsListItem}>
              {intereset}
            </li>
          ))}
      </ul>
    </Section>
  );
};

export default Interests;
