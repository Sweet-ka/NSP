import { app } from "./app.js";
import { footer } from "./footer/footer.js";
import { header } from "./header/header.js";
import { home_main } from "./home/home.js";
import { notFound } from "./notFound.js";
import { personal } from "./personal/personal.js";

export const wfm = {
    isUndefined(d) {
      return typeof d === 'undefined';
    },
};

export const components = [
    header,
    app,
    footer
];

export const pages = [
    home_main,
    personal,
    notFound
]