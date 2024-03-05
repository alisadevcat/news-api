import App from './components/app/app';
import './global.css';
import './rs_school_js.svg';

const app = new App();
app.start();

const img = document.querySelector(".icon") as HTMLElement;
console.log(img);