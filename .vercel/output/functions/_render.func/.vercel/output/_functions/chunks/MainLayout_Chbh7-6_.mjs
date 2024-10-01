import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as renderComponent, a as addAttribute, i as renderSlot, j as renderHead, d as createAstro } from './astro/server_DQxrpetD.mjs';
import 'kleur/colors';
import { $ as $$Image } from './_astro_assets_04wdIJuh.mjs';
import 'clsx';
import { g as getCollection } from './_astro_content_DlrBeQ10.mjs';

const logo = new Proxy({"src":"/_astro/ffb-white-b-bg-removebg.HThfkC4P.png","width":512,"height":164,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/jhhth/OneDrive/Desktop/astro-blog/src/images/ffb-white-b-bg-removebg.png";
							}
							
							return target[name];
						}
					});

const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<nav class="bg-indigo-700 text-white"> <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"> <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse"> ${renderComponent($$result, "Image", $$Image, { "src": logo, "class": "h-13", "alt": "TechPeople Logo", "padding-top": void 0, "width": 160, "height": 10 })} <span class="self-center text-2xl font-semibold whitespace-nowrap"> <span class="text-indigo-400"></span> </span> </a> <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false"> <span class="sr-only">Open main menu</span> <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"></path> </svg> </button> <div class="hidden w-full md:block md:w-auto" id="navbar-default"> <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 text-white rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 border-gray-700"> <li> <a href="/" class="block py-2 px-3 text-white rounded md:p-0 hover:text-indigo-400" aria-current="page">Home</a> </li> <li> <a href="/about" class="block py-2 px-3 text-white rounded md:p-0 hover:text-indigo-400">About</a> </li> <li> <a href="/articles" class="block py-2 px-3 text-white rounded md:p-0 hover:text-indigo-400">Articles</a> </li> </ul> </div> </div> </nav>`;
}, "C:/Users/jhhth/OneDrive/Desktop/astro-blog/src/components/Navbar.astro", void 0);

function formatDate(date) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(date).toLocaleDateString(void 0, options);
}
function capitalize(str) {
  if (typeof str !== "string" || str.length === 0) {
    return str;
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const allBlogArticles = await getCollection("blog");
  const tags = allBlogArticles.flatMap((article) => article.data.tags);
  const uniqueTags = [...new Set(tags)];
  console.log(uniqueTags);
  return renderTemplate`${maybeRenderHead()}<footer class="bg-indigo-700 text-white"> <div class="container mx-auto mt-10 max-w-screen-xl px-8"> <div class="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4"> <div class="mt-10"> <h3 class="text-xl font-semibold mb-4">About</h3> <p class="text-white text-sm">
At Forex for Beginners, we are passionate about empowering individuals to navigate the world of Forex, Cryptocurrency, and Indice's trading with confidence and knowledge.
</p> </div> <div class="mt-10"> <h3 class="text-xl font-semibold mb-4">Categories</h3> <ul class="text-white text-sm"> ${uniqueTags.map((tag) => renderTemplate`<li class="mb-2"> <a${addAttribute("/articles/tag/" + tag, "href")}>${capitalize(tag)}</a> </li>`)} </ul> </div> <div class="mt-10"> <h3 class="text-xl font-semibold mb-4">Contact</h3> <ul class="text-white text-sm"> <li class="mb-2"> <a href="#">Email</a> </li> <li class="mb-2"> <a href="#">Twitter</a> </li> <li class="mb-2"> <a href="#">Facebook</a> </li> <li class="mb-2"> <a href="#">Instagram</a> </li> </ul> </div></div></div></footer>`;
}, "C:/Users/jhhth/OneDrive/Desktop/astro-blog/src/components/Footer.astro", void 0);

const SITE_TITLE = "Forex For Beginners";
const SITE_DESCRIPTION = "Articles, Affiliate Content & eBooks for Health Conscious People";
const HOMEPAGE_ARTICLE_LIMIT = 6;
const ARTICLES_PER_PAGE = 6;

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$MainLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MainLayout;
  const { title = "Articles, Affiliate Content & eBooks for Health Conscious People" } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="description"', '><link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.15/dist/tailwind.min.css" rel="stylesheet"><script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.0/flowbite.js" integrity="sha512-BJ/5sR2hFxQTKin/55JQCcMTObShDBAmVjL/3NR/MVcrhyOazJjAgvROem03+HYyGw16SVdSfoWCFGr9syxAKA==" crossorigin="anonymous" referrerpolicy="no-referrer"><\/script><title>', " - ", "</title>", '</head> <body class=""> ', ' <section class="container mx-auto max-w-screen-xl mt-10 px-8"> ', " </section> ", " </body></html>"])), addAttribute(SITE_DESCRIPTION, "content"), SITE_TITLE, title, renderHead(), renderComponent($$result, "Navbar", $$Navbar, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}));
}, "C:/Users/jhhth/OneDrive/Desktop/astro-blog/src/layouts/MainLayout.astro", void 0);

export { $$MainLayout as $, ARTICLES_PER_PAGE as A, HOMEPAGE_ARTICLE_LIMIT as H, capitalize as c, formatDate as f };
