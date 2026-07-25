"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail, MapPin } from "lucide-react";


export default function Footer() {

return (

<footer
className="
bg-white
dark:bg-slate-950
text-gray-900
dark:text-white
border-t
border-gray-200
dark:border-slate-800
transition-colors
duration-300
"
>


<div className="max-w-6xl mx-auto px-6 py-12">


<div className="grid md:grid-cols-3 gap-8">


<div>

<h2 className="text-3xl font-bold">

Hasina
<span className="text-cyan-500">
.
</span>

</h2>


<p className="
mt-4
text-gray-600
dark:text-gray-400
">

Jr. Full Stack Developer passionate about
building modern and responsive web applications.

</p>


</div>





<div>

<h3 className="text-xl font-semibold mb-4">
Quick Links
</h3>


<ul className="
space-y-3
text-gray-600
dark:text-gray-400
">


<li>
<a href="#home" className="hover:text-cyan-500">
Home
</a>
</li>


<li>
<a href="#about" className="hover:text-cyan-500">
About
</a>
</li>


<li>
<a href="#skills" className="hover:text-cyan-500">
Skills
</a>
</li>


<li>
<a href="#projects" className="hover:text-cyan-500">
Projects
</a>
</li>


<li>
<a href="#contact" className="hover:text-cyan-500">
Contact
</a>
</li>


</ul>


</div>





<div>

<h3 className="text-xl font-semibold mb-4">
Contact
</h3>


<p className="flex gap-3 items-center text-gray-600 dark:text-gray-400">

<Mail className="text-cyan-500"/>

Email

</p>



<p className="flex gap-3 items-center mt-4 text-gray-600 dark:text-gray-400">

<MapPin className="text-cyan-500"/>

Noakhali, Bangladesh

</p>



<div className="flex gap-4 mt-6">


<a
href="https://github.com/hasina-code"
className="
p-3
rounded-full
bg-gray-100
dark:bg-slate-900
hover:bg-cyan-500
hover:text-white
transition
"
>

<FaGithub/>

</a>



<a
href="https://www.linkedin.com/in/hasina-akter-dev/"
className="
p-3
rounded-full
bg-gray-100
dark:bg-slate-900
hover:bg-cyan-500
hover:text-white
transition
"
>

<FaLinkedin/>

</a>


</div>


</div>


</div>




<div className="
mt-10
pt-6
border-t
border-gray-200
dark:border-slate-800
text-center
text-gray-500
">


© {new Date().getFullYear()} Hasina Akter. All rights reserved.


</div>



</div>


</footer>


);

}