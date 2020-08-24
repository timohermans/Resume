import React, { useState, useEffect, ComponentType } from 'react';
import NextI18Next from 'next-i18next';

type Props = {
    fileName: string;
    language: string;
};

const useTranslationFileImport = <T,>({ fileName, language }: Props): T => {
    const [translationMap, setTranslationMap] = useState<T>(null);

    const fetchJobs = async () => {
        const translations = await import(
            `../public/static/locales/${language}/${fileName}.json`
        );

        setTranslationMap(translations as T);
    };

    useEffect(() => {
        fetchJobs();
    });

    return translationMap;
};

export default useTranslationFileImport;
