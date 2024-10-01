/* empty css                                 */
import { c as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_DQxrpetD.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from '../chunks/MainLayout_Casa71nc.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_04wdIJuh.mjs';
export { renderers } from '../renderers.mjs';

const about = new Proxy({"src":"/_astro/about.C1FZ3Rbp.jpg","width":6000,"height":4000,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/jhhth/OneDrive/Desktop/astro-blog/src/images/about.jpg";
							}
							
							return target[name];
						}
					});

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="text-4xl font-bold mb-5"> About Forex For Beginners</h1> <div class="flex flex-col md:flex-row items-center justify-between gap-6"> <div class="w-full md:w-1/2 mb-8 md:mb-0"> ${renderComponent($$result2, "Image", $$Image, { "src": about, "alt": "Tech People Team", "class": "w-full h-auto rounded-lg shadow-lg" })} </div> <div class="w-full md:w-1/2"> <h2 class="text-3xl font-extrabold text-gray-900 mb-4">
Who We Are
</h2> <p class="text-gray-700 leading-relaxed mb-6">
At Forex for Beginners, we are passionate about empowering individuals to navigate the world of forex trading with confidence and knowledge. Whether you're just starting out or looking to sharpen your skills, our goal is to simplify complex forex concepts and provide clear, actionable guidance. We believe that anyone can learn to trade, and we’re here to support you every step of the way with educational content, practical tips, and the latest market insights. 
                Join us on your journey to mastering forex trading—one trade at a time.
</p> <p class="text-gray-700 leading-relaxed mb-6"> <b>Our mission</b> is to provide clear, actionable insights and guidance to help aspiring traders navigate the world of currency exchange with confidence. Whether you're just getting started or looking to sharpen your skills, our easy-to-follow tutorials, 
                expert tips, and real-world examples are designed to empower you every step of the way.
</p> </div> </div>  <div class="mt-10"></div> ` })}`;
}, "C:/Users/jhhth/OneDrive/Desktop/astro-blog/src/pages/about.astro", void 0);

const $$file = "C:/Users/jhhth/OneDrive/Desktop/astro-blog/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$About,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
