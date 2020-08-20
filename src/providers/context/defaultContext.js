import {getFromStorage} from "../../helpers/sessionStorage";
import {LOCALES} from '../../i18n/locales';

export default {
	siteLang: getFromStorage('siteLang') || LOCALES.ENGLISH,
};