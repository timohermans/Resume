import styles from "../styles/Resume.module.scss";
import Header from "../components/Header/Header";
import Intro from "../components/Intro/Intro";
import Skills from "../components/Skills/Skills";
import Jobs from "../components/Jobs/Jobs";
import HobbyProjects from "../components/HobbyProjects/HobbyProjects";
import Languages from "../components/Languages/Languages";
import Education from "../components/Education/Education";
import Interests from "../components/Interests/Interests";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

type Props = {
  language?: string;
};

const Resume = ({ language }: Props) => {
  const params = useParams();
  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(params["language"] ?? language ?? "en");
  }, [i18n, params, language]);

  return (
    <article className={styles.page}>
      <Header />
      <Intro />
      <Skills />
      <Jobs />
      <HobbyProjects />
      <Languages />
      <Education />
      <Interests />
    </article>
  );
};

export default Resume;
