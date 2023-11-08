import React from "react";
import Section from "../Section/Section";
import { Language as LanguageType, Language } from "./languageTypes";
import styles from "./Languages.module.scss";
import { useTranslation } from "react-i18next";

const Languages: React.FC = () => {
  const { t } = useTranslation();

  const languageMap = t("languages", { returnObjects: true }) as Language[];

  return (
    <Section header={t("resume.languages.title")}>
      <ul className={styles.languages}>
        {languageMap &&
          languageMap.map((language: LanguageType) => (
            <li key={language.language} className={styles.language}>
              <h3>{language.language}</h3>
              <p className={styles.proficiency}>{language.proficiency}</p>
            </li>
          ))}
      </ul>
    </Section>
  );
};

export default Languages;
