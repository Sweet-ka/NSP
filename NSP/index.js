// (async () => {
//     let rev = await (fetch("./reviews.json"));
//     console.log(await rev.json());
// })()
import { footer } from './pages/footer/footer.js';
import { header } from './pages/header/header.js';
import { home_main } from './pages/home/home.js';

header.render();
home_main.render();
footer.render();


window.onpopstate = () => {
    console.log(location.hash, window.location)
}

