import { companyData } from "./cta.astro";

export const Products = (props) => {
return (
<div class="flex flex-col items-center justify-center h-full gap-28" ref={props.referencia}>
<h1 class="text-6xl font-bold text-white text-center">
¿Cómo trabajamos?
</h1>
<section id="company" class="scroll-mt-28 mb-28 sm:mb-40">
<Timeline align="left">
{companyData.map((item, index) => (
<TimelineItem key={index}>
<div class="flex items-center">
<div class="w-44 h-44 bg-white bg-opacity-15 rounded-2xl p-1">
<img src={item.icon} alt={item.title} class="w-full h-full object-cover" />
</div>
<div class="ml-4">
<h3 class="font-semibold capitalize text-white">{item.title}</h3>
<p class="!mt-1 font-normal text-gray-700 dark:text-white/75 tracking-wide">
{item.description}
</p>
</div>
</div>
</TimelineItem>
))}
</Timeline>
</section>
</div>
);
};
