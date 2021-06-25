import { db } from "../firebase";
import { getToken } from "./tokenServices";

const Urls = () => db.collection("Urls");

let userUrlList = () => Urls().doc(getToken());

export { Urls, userUrlList };
