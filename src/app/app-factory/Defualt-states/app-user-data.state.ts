import {LangState} from "../../app-translation/lang.state";
import {AppUserPreferences} from "../app-factory.interface";


//storage key name
export const AppUserPreferencesKey = {
  userName: 'userName',
  lang: 'lang',
  langId: 'langId',
  isLoggedIn: 'isLoggedIn'
  //currency: 'currency',
  //rate: 'rate',
  //country:'country'
  // doNotShowFingerModal:'doNotShowFingerModal',
};

//initial state
export const AppUserPreferencesInitialState: AppUserPreferences = {
  userName: null,
  isLoggedIn:false,
  lang: LangState.defaultLang().name,
  langId: LangState.defaultLang().id,
  //currency: 1,
  //rate: 1,
  //country:1
  // doNotShowFingerModal:false,
};
