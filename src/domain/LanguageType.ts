import {Language, LanguageUtils} from 'typesbcp47';

export type LanguageType = {
    code: string;
    language: string;
}

export function stringToLanguageType(langCode: string): LanguageType {
    let lang: LanguageType | undefined = languageType.find((lang: LanguageType) => lang.code === langCode);
    if (lang === undefined) lang = languageType[0];
    return lang;
}

export const languageType: LanguageType[] = initLanguages();

function initLanguages(): LanguageType[] {
    return LanguageUtils.getCommonLanguages().map((lang: Language) => {
        return {
            code: lang.getCode().normalize(),
            language: lang.getDescription(),
        };
    });
}
