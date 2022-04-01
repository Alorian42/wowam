import ILangs, * as data from '../constants/langs';

const i18n = (key: string, lang = 'en') => {
	const errorString = `${lang}.${key}`;
	const langData = (data as ILangs)[lang];
	if (!langData) {
		return errorString;
	}

	const item = langData[key];

	return !item ? errorString : item;
};

export default i18n;