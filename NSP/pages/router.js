import { home_main } from "./home/home.js";
import { notFound } from "./notFound.js";
import { personal } from "./personal/personal.js";

export const router = {
    getUrl() {
      return window.location.hash.slice(1);
    },
};

export const routes = [
    { path: 'home', component: home_main },
    { path: 'personal', component: personal },
    { path: '**', component: notFound }
];
  