export interface Bilingual {
  en: string;
  es: string;
}

export type TextContent = string | Bilingual;

export function t(content: TextContent, lang: "en" | "es"): string {
  if (typeof content === "string") return content;
  return content[lang];
}

export const content = {
  nav: {
    links: [
      { label: { en: "Home", es: "Inicio" }, href: "#hero" },
      { label: { en: "About", es: "Sobre mí" }, href: "#about" },
      { label: { en: "Stack", es: "Stack" }, href: "#stack" },
      { label: { en: "Work", es: "Proyectos" }, href: "#work" },
      { label: { en: "Contact", es: "Contacto" }, href: "#contact" },
    ],
  },
  hero: {
    name: "Adrian David",
    valueProp: {
      en: "I turn complexity into clarity",
      es: "Convierto lo complejo en algo simple",
    },
    tagline: {
      en: "Clean code, thoughtful design, real impact.",
      es: "Código limpio, diseño consciente, impacto real.",
    },
    cta: { en: "View my work", es: "Ver mi trabajo" },
  },
  about: {
    title: { en: "About Me", es: "Sobre Mí" },
    bio1: {
      en: "I'm a software developer passionate about crafting clean, performant web experiences. I focus on building products that are both beautiful and functional, with careful attention to every detail.",
      es: "Soy un desarrollador de software apasionado por crear experiencias web limpias y eficientes. Me enfoco en construir productos que son tanto hermosos como funcionales, con atención cuidadosa a cada detalle.",
    },
    bio2: {
      en: "Currently exploring the intersection of design and engineering, always looking for new challenges that push the boundaries of what's possible on the web.",
      es: "Explorando la intersección entre diseño e ingeniería, siempre buscando nuevos desafíos que expandan los límites de lo posible en la web.",
    },
  },
  stack: {
    title: { en: "Stack", es: "Stack" },
    subtitle: {
      en: "Technologies I work with",
      es: "Tecnologías con las que trabajo",
    },
    items: [
      {
        name: "React",
        svg: '<svg viewBox="0 0 569 512" xmlns:xlink="http://www.w3.org/1999/xlink"><g fill="none" fill-rule="evenodd"><g fill="#087EA4" fill-rule="nonzero"><path d="M285.5,201 C255.400481,201 231,225.400481 231,255.5 C231,285.599519 255.400481,310 285.5,310 C315.599519,310 340,285.599519 340,255.5 C340,225.400481 315.599519,201 285.5,201" id="react_light__Path"/><path d="M568.959856,255.99437 C568.959856,213.207656 529.337802,175.68144 466.251623,150.985214 C467.094645,145.423543 467.85738,139.922107 468.399323,134.521063 C474.621631,73.0415145 459.808523,28.6686204 426.709856,9.5541429 C389.677085,-11.8291748 337.36955,3.69129898 284.479928,46.0162134 C231.590306,3.69129898 179.282771,-11.8291748 142.25,9.5541429 C109.151333,28.6686204 94.3382249,73.0415145 100.560533,134.521063 C101.102476,139.922107 101.845139,145.443621 102.708233,151.02537 C97.4493791,153.033193 92.2908847,155.161486 87.3331099,157.39017 C31.0111824,182.708821 0,217.765415 0,255.99437 C0,298.781084 39.6220545,336.307301 102.708233,361.003527 C101.845139,366.565197 101.102476,372.066633 100.560533,377.467678 C94.3382249,438.947226 109.151333,483.32012 142.25,502.434597 C153.629683,508.887578 166.52439,512.186771 179.603923,511.991836 C210.956328,511.991836 247.567589,495.487529 284.479928,465.972527 C321.372196,495.487529 358.003528,511.991836 389.396077,511.991836 C402.475265,512.183856 415.36922,508.884856 426.75,502.434597 C459.848667,483.32012 474.661775,438.947226 468.439467,377.467678 C467.897524,372.066633 467.134789,366.565197 466.291767,361.003527 C529.377946,336.347457 569,298.761006 569,255.99437 M389.155214,27.1025182 C397.565154,26.899606 405.877839,28.9368502 413.241569,33.0055186 C436.223966,46.2772304 446.540955,82.2775015 441.522965,131.770345 C441.181741,135.143488 440.780302,138.556788 440.298575,141.990165 C414.066922,134.08804 387.205771,128.452154 360.010724,125.144528 C343.525021,103.224055 325.192524,82.7564475 305.214266,63.9661533 C336.586743,39.7116483 366.032313,27.1025182 389.135142,27.1025182 M378.356498,310.205598 C368.204912,327.830733 357.150626,344.919965 345.237759,361.405091 C325.045049,363.479997 304.758818,364.51205 284.459856,364.497299 C264.167589,364.51136 243.888075,363.479308 223.702025,361.405091 C211.820914,344.919381 200.80007,327.83006 190.683646,310.205598 C180.532593,292.629285 171.306974,274.534187 163.044553,255.99437 C171.306974,237.454554 180.532593,219.359455 190.683646,201.783142 C200.784121,184.229367 211.770999,167.201087 223.601665,150.764353 C243.824636,148.63809 264.145559,147.579168 284.479928,147.591877 C304.772146,147.579725 325.051559,148.611772 345.237759,150.68404 C357.109048,167.14607 368.136094,184.201112 378.27621,201.783142 C388.419418,219.363718 397.644825,237.458403 405.915303,255.99437 C397.644825,274.530337 388.419418,292.625022 378.27621,310.205598 M419.724813,290.127366 C426.09516,307.503536 431.324985,325.277083 435.380944,343.334682 C417.779633,348.823635 399.836793,353.149774 381.668372,356.285142 C388.573127,345.871232 395.263781,335.035679 401.740334,323.778483 C408.143291,312.655143 414.144807,301.431411 419.805101,290.207679 M246.363271,390.377981 C258.848032,391.140954 271.593728,391.582675 284.5,391.582675 C297.406272,391.582675 310.232256,391.140954 322.737089,390.377981 C310.880643,404.583418 298.10766,417.997563 284.5,430.534446 C270.921643,417.999548 258.18192,404.585125 246.363271,390.377981 Z M187.311556,356.244986 C169.137286,353.123646 151.187726,348.810918 133.578912,343.334682 C137.618549,325.305649 142.828222,307.559058 149.174827,290.207679 C154.754833,301.431411 160.736278,312.655143 167.239594,323.778483 C173.74291,334.901824 180.467017,345.864539 187.311556,356.285142 M149.174827,221.760984 C142.850954,204.473938 137.654787,186.794745 133.619056,168.834762 C151.18418,163.352378 169.085653,159.013101 187.211197,155.844146 C180.346585,166.224592 173.622478,176.986525 167.139234,188.210257 C160.65599,199.433989 154.734761,210.517173 149.074467,221.760984 M322.616657,121.590681 C310.131896,120.827708 297.3862,120.385987 284.379568,120.385987 C271.479987,120.385987 258.767744,120.787552 246.242839,121.590681 C258.061488,107.383537 270.801211,93.9691137 284.379568,81.4342157 C297.99241,93.9658277 310.765727,107.380324 322.616657,121.590681 Z M401.70019,188.210257 C395.196875,176.939676 388.472767,166.09743 381.527868,155.68352 C399.744224,158.819049 417.734224,163.151949 435.380944,168.654058 C431.331963,186.680673 426.122466,204.426664 419.785029,221.781062 C414.205023,210.55733 408.203506,199.333598 401.720262,188.230335 M127.517179,131.790423 C122.438973,82.3176579 132.816178,46.2973086 155.778503,33.0255968 C163.144699,28.9632474 171.455651,26.9264282 179.864858,27.1225964 C202.967687,27.1225964 232.413257,39.7317265 263.785734,63.9862316 C243.794133,82.7898734 225.448298,103.270812 208.949132,125.204763 C181.761691,128.528025 154.90355,134.14313 128.661281,141.990165 C128.199626,138.556788 127.778115,135.163566 127.456963,131.790423 M98.4529773,182.106474 C101.54406,180.767925 104.695358,179.429376 107.906872,178.090828 C114.220532,204.735668 122.781793,230.7969 133.498624,255.99437 C122.761529,281.241316 114.193296,307.357063 107.8868,334.058539 C56.7434387,313.076786 27.0971497,284.003505 27.0971497,255.99437 C27.0971497,229.450947 53.1907013,202.526037 98.4529773,182.106474 Z M155.778503,478.963143 C132.816178,465.691432 122.438973,429.671082 127.517179,380.198317 C127.838331,376.825174 128.259842,373.431953 128.721497,369.978497 C154.953686,377.878517 181.814655,383.514365 209.009348,386.824134 C225.500295,408.752719 243.832321,429.233234 263.805806,448.042665 C220.069,481.834331 180.105722,492.97775 155.838719,478.963143 M441.502893,380.198317 C446.520883,429.691161 436.203894,465.691432 413.221497,478.963143 C388.974566,493.017906 348.991216,481.834331 305.274481,448.042665 C325.241364,429.232737 343.566681,408.752215 360.050868,386.824134 C387.245915,383.516508 414.107066,377.880622 440.338719,369.978497 C440.820446,373.431953 441.221885,376.825174 441.563109,380.198317 M461.193488,334.018382 C454.869166,307.332523 446.294494,281.231049 435.561592,255.99437 C446.289797,230.744081 454.857778,204.629101 461.173416,177.930202 C512.216417,198.911955 541.942994,227.985236 541.942994,255.99437 C541.942994,284.003505 512.296705,313.076786 461.153344,334.058539" id="react_light__Shape"/></g></g></svg>',
      },
      {
        name: "PostgreSQL",
        svg: '<svg xml:space="preserve" viewBox="0 0 432.071 445.383"><g style="fill-rule:nonzero;clip-rule:nonzero;fill:none;stroke:#fff;stroke-width:12.4651;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4"><path d="M323.205 324.227c2.833-23.601 1.984-27.062 19.563-23.239l4.463.392c13.517.615 31.199-2.174 41.587-7 22.362-10.376 35.622-27.7 13.572-23.148-50.297 10.376-53.755-6.655-53.755-6.655 53.111-78.803 75.313-178.836 56.149-203.322-52.27-66.789-142.748-35.206-144.262-34.386l-.482.089c-9.938-2.062-21.06-3.294-33.554-3.496-22.761-.374-40.032 5.967-53.133 15.904 0 0-161.408-66.498-153.899 83.628 1.597 31.936 45.777 241.655 98.47 178.31 19.259-23.163 37.871-42.748 37.871-42.748 9.242 6.14 20.307 9.272 31.912 8.147l.897-.765c-.281 2.876-.157 5.689.359 9.019-13.572 15.167-9.584 17.83-36.723 23.416-27.457 5.659-11.326 15.734-.797 18.367 12.768 3.193 42.305 7.716 62.268-20.224l-.795 3.188c5.325 4.26 4.965 30.619 5.72 49.452.756 18.834 2.017 36.409 5.856 46.771 3.839 10.36 8.369 37.05 44.036 29.406 29.809-6.388 52.6-15.582 54.677-101.107" style="fill:#000;stroke:#000;stroke-width:37.3953;stroke-linecap:butt;stroke-linejoin:miter"/><path d="M402.395 271.23c-50.302 10.376-53.76-6.655-53.76-6.655 53.111-78.808 75.313-178.843 56.153-203.326-52.27-66.785-142.752-35.2-144.262-34.38l-.486.087c-9.938-2.063-21.06-3.292-33.56-3.496-22.761-.373-40.026 5.967-53.127 15.902 0 0-161.411-66.495-153.904 83.63 1.597 31.938 45.776 241.657 98.471 178.312 19.26-23.163 37.869-42.748 37.869-42.748 9.243 6.14 20.308 9.272 31.908 8.147l.901-.765c-.28 2.876-.152 5.689.361 9.019-13.575 15.167-9.586 17.83-36.723 23.416-27.459 5.659-11.328 15.734-.796 18.367 12.768 3.193 42.307 7.716 62.266-20.224l-.796 3.188c5.319 4.26 9.054 27.711 8.428 48.969-.626 21.259-1.044 35.854 3.147 47.254 4.191 11.4 8.368 37.05 44.042 29.406 29.809-6.388 45.256-22.942 47.405-50.555 1.525-19.631 4.976-16.729 5.194-34.28l2.768-8.309c3.192-26.611.507-35.196 18.872-31.203l4.463.392c13.517.615 31.208-2.174 41.591-7 22.358-10.376 35.618-27.7 13.573-23.148z" style="fill:#336791;stroke:none" stroke="none"/><path d="M215.866 286.484c-1.385 49.516.348 99.377 5.193 111.495 4.848 12.118 15.223 35.688 50.9 28.045 29.806-6.39 40.651-18.756 45.357-46.051 3.466-20.082 10.148-75.854 11.005-87.281M173.104 38.256S11.583-27.76 19.092 122.365c1.597 31.938 45.779 241.664 98.473 178.316 19.256-23.166 36.671-41.335 36.671-41.335M260.349 26.207c-5.591 1.753 89.848-34.889 144.087 34.417 19.159 24.484-3.043 124.519-56.153 203.329"/><path d="M348.282 263.953s3.461 17.036 53.764 6.653c22.04-4.552 8.776 12.774-13.577 23.155-18.345 8.514-59.474 10.696-60.146-1.069-1.729-30.355 21.647-21.133 19.96-28.739-1.525-6.85-11.979-13.573-18.894-30.338-6.037-14.633-82.796-126.849 21.287-110.183 3.813-.789-27.146-99.002-124.553-100.599-97.385-1.597-94.19 119.762-94.19 119.762" style="stroke-linejoin:bevel"/><path d="M188.604 274.334c-13.577 15.166-9.584 17.829-36.723 23.417-27.459 5.66-11.326 15.733-.797 18.365 12.768 3.195 42.307 7.718 62.266-20.229 6.078-8.509-.036-22.086-8.385-25.547-4.034-1.671-9.428-3.765-16.361 3.994z"/><path d="M187.715 274.069c-1.368-8.917 2.93-19.528 7.536-31.942 6.922-18.626 22.893-37.255 10.117-96.339-9.523-44.029-73.396-9.163-73.436-3.193-.039 5.968 2.889 30.26-1.067 58.548-5.162 36.913 23.488 68.132 56.479 64.938"/><path d="M172.517 141.7c-.288 2.039 3.733 7.48 8.976 8.207 5.234.73 9.714-3.522 9.998-5.559.284-2.039-3.732-4.285-8.977-5.015-5.237-.731-9.719.333-9.996 2.367z" style="fill:#fff;stroke-width:4.155;stroke-linecap:butt;stroke-linejoin:miter"/><path d="M331.941 137.543c.284 2.039-3.732 7.48-8.976 8.207-5.238.73-9.718-3.522-10.005-5.559-.277-2.039 3.74-4.285 8.979-5.015 5.239-.73 9.718.333 10.002 2.368z" style="fill:#fff;stroke-width:2.0775;stroke-linecap:butt;stroke-linejoin:miter"/><path d="M350.676 123.432c.863 15.994-3.445 26.888-3.988 43.914-.804 24.748 11.799 53.074-7.191 81.435"/></g></svg>',
      },
      {
        name: "Vue.js",
        svg: '<svg viewBox="0 0 256 221" preserveAspectRatio="xMidYMid"><path d="M204.8 0H256L128 220.8 0 0h97.92L128 51.2 157.44 0h47.36Z" fill="#41B883"/><path d="m0 0 128 220.8L256 0h-51.2L128 132.48 50.56 0H0Z" fill="#41B883"/><path d="M50.56 0 128 133.12 204.8 0h-47.36L128 51.2 97.92 0H50.56Z" fill="#35495E"/></svg>',
      },
      {
        name: "Bun",
        svg: '<svg viewBox="0 0 80 70"><path d="M71.09 20.74c-.16-.17-.33-.34-.5-.5s-.33-.34-.5-.5-.33-.34-.5-.5-.33-.34-.5-.5-.33-.34-.5-.5-.33-.34-.5-.5A26.46 26.46 0 0 1 75.5 35.7c0 16.57-16.82 30.05-37.5 30.05-11.58 0-21.94-4.23-28.83-10.86l.5.5.5.5.5.5.5.5.5.5.5.5.5.5C19.55 65.3 30.14 69.75 42 69.75c20.68 0 37.5-13.48 37.5-30 0-7.06-3.04-13.75-8.41-19.01Z"/><path d="M73 35.7c0 15.21-15.67 27.54-35 27.54S3 50.91 3 35.7C3 26.27 9 17.94 18.22 13S33.18 3 38 3s8.94 4.13 19.78 10C67 17.94 73 26.27 73 35.7Z" style="fill:#fbf0df"/><path d="M73 35.7a21.67 21.67 0 0 0-.8-5.78c-2.73 33.3-43.35 34.9-59.32 24.94A40 40 0 0 0 38 63.24c19.3 0 35-12.35 35-27.54Z" style="fill:#f6dece"/><path d="M24.53 11.17C29 8.49 34.94 3.46 40.78 3.45A9.29 9.29 0 0 0 38 3c-2.42 0-5 1.25-8.25 3.13-1.13.66-2.3 1.39-3.54 2.15-2.33 1.44-5 3.07-8 4.7C8.69 18.13 3 26.62 3 35.7v1.19c6.06-21.41 17.07-23.04 21.53-25.72Z" style="fill:#fffefc"/><path d="M35.12 5.53A16.41 16.41 0 0 1 29.49 18c-.28.25-.06.73.3.59 3.37-1.31 7.92-5.23 6-13.14-.08-.45-.67-.33-.67.08Zm2.27 0A16.24 16.24 0 0 1 39 19c-.12.35.31.65.55.36 2.19-2.8 4.1-8.36-1.62-14.36-.29-.26-.74.14-.54.49Zm2.76-.17A16.42 16.42 0 0 1 47 17.12a.33.33 0 0 0 .65.11c.92-3.49.4-9.44-7.17-12.53-.4-.16-.66.38-.33.62Zm-18.46 10.4a16.94 16.94 0 0 0 10.47-9c.18-.36.75-.22.66.18-1.73 8-7.52 9.67-11.12 9.45-.38.01-.37-.52-.01-.63Z" style="fill:#ccbea7;fill-rule:evenodd"/><path d="M38 65.75C17.32 65.75.5 52.27.5 35.7c0-10 6.18-19.33 16.53-24.92 3-1.6 5.57-3.21 7.86-4.62 1.26-.78 2.45-1.51 3.6-2.19C32 1.89 35 .5 38 .5s5.62 1.2 8.9 3.14c1 .57 2 1.19 3.07 1.87 2.49 1.54 5.3 3.28 9 5.27C69.32 16.37 75.5 25.69 75.5 35.7c0 16.57-16.82 30.05-37.5 30.05ZM38 3c-2.42 0-5 1.25-8.25 3.13-1.13.66-2.3 1.39-3.54 2.15-2.33 1.44-5 3.07-8 4.7C8.69 18.13 3 26.62 3 35.7c0 15.19 15.7 27.55 35 27.55S73 50.89 73 35.7c0-9.08-5.69-17.57-15.22-22.7-3.78-2-6.73-3.88-9.12-5.36-1.09-.67-2.09-1.29-3-1.84C42.63 4 40.42 3 38 3Z"/><g><path d="M45.05 43a8.93 8.93 0 0 1-2.92 4.71 6.81 6.81 0 0 1-4 1.88A6.84 6.84 0 0 1 34 47.71 8.93 8.93 0 0 1 31.12 43a.72.72 0 0 1 .8-.81h12.34a.72.72 0 0 1 .79.81Z" style="fill:#b71422"/><path d="M34 47.79a6.91 6.91 0 0 0 4.12 1.9 6.91 6.91 0 0 0 4.11-1.9 10.63 10.63 0 0 0 1-1.07 6.83 6.83 0 0 0-4.9-2.31 6.15 6.15 0 0 0-5 2.78c.23.21.43.41.67.6Z" style="fill:#ff6164"/><path d="M34.16 47a5.36 5.36 0 0 1 4.19-2.08 6 6 0 0 1 4 1.69c.23-.25.45-.51.66-.77a7 7 0 0 0-4.71-1.93 6.36 6.36 0 0 0-4.89 2.36 9.53 9.53 0 0 0 .75.73Z"/><path d="M38.09 50.19a7.42 7.42 0 0 1-4.45-2 9.52 9.52 0 0 1-3.11-5.05 1.2 1.2 0 0 1 .26-1 1.41 1.41 0 0 1 1.13-.51h12.34a1.44 1.44 0 0 1 1.13.51 1.19 1.19 0 0 1 .25 1 9.52 9.52 0 0 1-3.11 5.05 7.42 7.42 0 0 1-4.44 2Zm-6.17-7.4c-.16 0-.2.07-.21.09a8.29 8.29 0 0 0 2.73 4.37A6.23 6.23 0 0 0 38.09 49a6.28 6.28 0 0 0 3.65-1.73 8.3 8.3 0 0 0 2.72-4.37.21.21 0 0 0-.2-.09Z"/></g><g><ellipse cx="53.22" cy="40.18" rx="5.85" ry="3.44" style="fill:#febbd0"/><ellipse cx="22.95" cy="40.18" rx="5.85" ry="3.44" style="fill:#febbd0"/><path d="M25.7 38.8a5.51 5.51 0 1 0-5.5-5.51 5.51 5.51 0 0 0 5.5 5.51Zm24.77 0A5.51 5.51 0 1 0 45 33.29a5.5 5.5 0 0 0 5.47 5.51Z" style="fill-rule:evenodd"/><path d="M24 33.64a2.07 2.07 0 1 0-2.06-2.07A2.07 2.07 0 0 0 24 33.64Zm24.77 0a2.07 2.07 0 1 0-2.06-2.07 2.07 2.07 0 0 0 2.04 2.07Z" style="fill:#fff;fill-rule:evenodd"/></g></svg>',
      },
      {
        name: "Next.js",
        svg: '<svg viewBox="0 0 180 180"><mask height="180" id="nextjs_icon_dark__:r8:mask0_408_134" maskUnits="userSpaceOnUse" width="180" x="0" y="0" style="mask-type:alpha"><circle cx="90" cy="90" fill="black" r="90"/></mask><g mask="url(#nextjs_icon_dark__:r8:mask0_408_134)"><circle cx="90" cy="90" data-circle="true" fill="black" r="90"/><path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="url(#nextjs_icon_dark__:r8:paint0_linear_408_134)"/><rect fill="url(#nextjs_icon_dark__:r8:paint1_linear_408_134)" height="72" width="12" x="115" y="54"/></g><defs><linearGradient gradientUnits="userSpaceOnUse" id="nextjs_icon_dark__:r8:paint0_linear_408_134" x1="109" x2="144.5" y1="116.5" y2="160.5"><stop stop-color="white"/><stop offset="1" stop-color="white" stop-opacity="0"/></linearGradient><linearGradient gradientUnits="userSpaceOnUse" id="nextjs_icon_dark__:r8:paint1_linear_408_134" x1="121" x2="120.799" y1="54" y2="106.875"><stop stop-color="white"/><stop offset="1" stop-color="white" stop-opacity="0"/></linearGradient></defs></svg>',
      },
      {
        name: "Supabase",
        svg: '<svg viewBox="0 0 109 113" fill="none"><path d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z" fill="url(#supabase__paint0_linear)"/><path d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z" fill="url(#supabase__paint1_linear)" fill-opacity="0.2"/><path d="M45.317 2.07103C48.1765 -1.53037 53.9745 0.442937 54.0434 5.041L54.4849 72.2922H9.83113C1.64038 72.2922 -2.92775 62.8321 2.1655 56.4175L45.317 2.07103Z" fill="#3ECF8E"/><defs><linearGradient id="supabase__paint0_linear" x1="53.9738" y1="54.974" x2="94.1635" y2="71.8295" gradientUnits="userSpaceOnUse"><stop stop-color="#249361"/><stop offset="1" stop-color="#3ECF8E"/></linearGradient><linearGradient id="supabase__paint1_linear" x1="36.1558" y1="30.578" x2="54.4844" y2="65.0806" gradientUnits="userSpaceOnUse"><stop/><stop offset="1" stop-opacity="0"/></linearGradient></defs></svg>',
      },
      {
        name: "Astro",
        svg: '<svg fill="none" viewBox="0 0 85 107"><path fill="#17191E" d="M27.59 91.136c-4.834-4.418-6.246-13.703-4.232-20.429 3.492 4.241 8.33 5.584 13.342 6.343 7.737 1.17 15.336.732 22.523-2.804.822-.405 1.582-.943 2.48-1.489.675 1.957.85 3.932.615 5.943-.573 4.896-3.01 8.678-6.885 11.545-1.55 1.147-3.19 2.172-4.79 3.253-4.917 3.323-6.247 7.22-4.4 12.888.044.139.084.277.183.614-2.51-1.124-4.344-2.76-5.742-4.911-1.475-2.27-2.177-4.78-2.214-7.498-.019-1.322-.019-2.656-.197-3.96-.434-3.178-1.926-4.601-4.737-4.683-2.884-.084-5.166 1.699-5.771 4.507-.046.216-.113.429-.18.68l.004.001ZM0 69.587s14.314-6.973 28.668-6.973L39.49 29.12c.405-1.62 1.588-2.72 2.924-2.72 1.335 0 2.518 1.1 2.924 2.72L56.16 62.614c17 0 28.668 6.973 28.668 6.973S60.514 3.352 60.467 3.219C59.769 1.261 58.591 0 57.003 0H27.827c-1.588 0-2.718 1.261-3.464 3.22C24.311 3.35 0 69.586 0 69.586Z"/></svg>',
      },
      {
        name: "TypeScript",
        svg: '<svg viewBox="0 0 256 256" preserveAspectRatio="xMidYMid"><path d="M20 0h216c11.046 0 20 8.954 20 20v216c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20V20C0 8.954 8.954 0 20 0Z" fill="#3178C6"/><path d="M150.518 200.475v27.62c4.492 2.302 9.805 4.028 15.938 5.179 6.133 1.151 12.597 1.726 19.393 1.726 6.622 0 12.914-.633 18.874-1.899 5.96-1.266 11.187-3.352 15.678-6.257 4.492-2.906 8.048-6.704 10.669-11.394 2.62-4.689 3.93-10.486 3.93-17.391 0-5.006-.749-9.394-2.246-13.163a30.748 30.748 0 0 0-6.479-10.055c-2.821-2.935-6.205-5.567-10.149-7.898-3.945-2.33-8.394-4.531-13.347-6.602-3.628-1.497-6.881-2.949-9.761-4.359-2.879-1.41-5.327-2.848-7.342-4.316-2.016-1.467-3.571-3.021-4.665-4.661-1.094-1.64-1.641-3.495-1.641-5.567 0-1.899.489-3.61 1.468-5.135s2.362-2.834 4.147-3.927c1.785-1.094 3.973-1.942 6.565-2.547 2.591-.604 5.471-.906 8.638-.906 2.304 0 4.737.173 7.299.518 2.563.345 5.14.877 7.732 1.597a53.669 53.669 0 0 1 7.558 2.719 41.7 41.7 0 0 1 6.781 3.797v-25.807c-4.204-1.611-8.797-2.805-13.778-3.582-4.981-.777-10.697-1.165-17.147-1.165-6.565 0-12.784.705-18.658 2.115-5.874 1.409-11.043 3.61-15.506 6.602-4.463 2.993-7.99 6.805-10.582 11.437-2.591 4.632-3.887 10.17-3.887 16.615 0 8.228 2.375 15.248 7.127 21.06 4.751 5.811 11.963 10.731 21.638 14.759a291.458 291.458 0 0 1 10.625 4.575c3.283 1.496 6.119 3.049 8.509 4.66 2.39 1.611 4.276 3.366 5.658 5.265 1.382 1.899 2.073 4.057 2.073 6.474a9.901 9.901 0 0 1-1.296 4.963c-.863 1.524-2.174 2.848-3.93 3.97-1.756 1.122-3.945 1.999-6.565 2.632-2.62.633-5.687.95-9.2.95-5.989 0-11.92-1.05-17.794-3.151-5.875-2.1-11.317-5.25-16.327-9.451Zm-46.036-68.733H140V109H41v22.742h35.345V233h28.137V131.742Z" fill="#FFF"/></svg>',
      },
      {
        name: "Tailwind",
        svg: '<svg fill="none" viewBox="0 0 54 33"><g clip-path="url(#tailwindcss__a)"><path fill="#38bdf8" fill-rule="evenodd" d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z" clip-rule="evenodd"/></g><defs><clipPath id="tailwindcss__a"><path fill="#fff" d="M0 0h54v32.4H0z"/></clipPath></defs></svg>',
      },
      {
        name: "Cloudflare",
        svg: '<svg viewBox="0 0 256 116" preserveAspectRatio="xMidYMid"><path fill="#FFF" d="m202.357 49.394-5.311-2.124C172.085 103.434 72.786 69.289 66.81 85.997c-.996 11.286 54.227 2.146 93.706 4.059 12.039.583 18.076 9.671 12.964 24.484l10.069.031c11.615-36.209 48.683-17.73 50.232-29.68-2.545-7.857-42.601 0-31.425-35.497Z"/><path fill="#F4811F" d="M176.332 108.348c1.593-5.31 1.062-10.622-1.593-13.809-2.656-3.187-6.374-5.31-11.154-5.842L71.17 87.634c-.531 0-1.062-.53-1.593-.53-.531-.532-.531-1.063 0-1.594.531-1.062 1.062-1.594 2.124-1.594l92.946-1.062c11.154-.53 22.839-9.56 27.087-20.182l5.312-13.809c0-.532.531-1.063 0-1.594C191.203 20.182 166.772 0 138.091 0 111.535 0 88.697 16.995 80.73 40.896c-5.311-3.718-11.684-5.843-19.12-5.31-12.747 1.061-22.838 11.683-24.432 24.43-.531 3.187 0 6.374.532 9.56C16.996 70.107 0 87.103 0 108.348c0 2.124 0 3.718.531 5.842 0 1.063 1.062 1.594 1.594 1.594h170.489c1.062 0 2.125-.53 2.125-1.594l1.593-5.842Z"/><path fill="#FAAD3F" d="M205.544 48.863h-2.656c-.531 0-1.062.53-1.593 1.062l-3.718 12.747c-1.593 5.31-1.062 10.623 1.594 13.809 2.655 3.187 6.373 5.31 11.153 5.843l19.652 1.062c.53 0 1.062.53 1.593.53.53.532.53 1.063 0 1.594-.531 1.063-1.062 1.594-2.125 1.594l-20.182 1.062c-11.154.53-22.838 9.56-27.087 20.182l-1.063 4.78c-.531.532 0 1.594 1.063 1.594h70.108c1.062 0 1.593-.531 1.593-1.593 1.062-4.25 2.124-9.03 2.124-13.81 0-27.618-22.838-50.456-50.456-50.456"/></svg>',
      },
      {
        name: "Nuxt",
        svg: '<svg viewBox="0 0 256 168" preserveAspectRatio="xMidYMid"><path fill="#00DC82" d="M143.618 167.029h95.166c3.023 0 5.992-.771 8.61-2.237a16.963 16.963 0 0 0 6.302-6.115 16.324 16.324 0 0 0 2.304-8.352c0-2.932-.799-5.811-2.312-8.35L189.778 34.6a16.966 16.966 0 0 0-6.301-6.113 17.626 17.626 0 0 0-8.608-2.238c-3.023 0-5.991.772-8.609 2.238a16.964 16.964 0 0 0-6.3 6.113l-16.342 27.473-31.95-53.724a16.973 16.973 0 0 0-6.304-6.112A17.638 17.638 0 0 0 96.754 0c-3.022 0-5.992.772-8.61 2.237a16.973 16.973 0 0 0-6.303 6.112L2.31 141.975A16.302 16.302 0 0 0 0 150.325c0 2.932.793 5.813 2.304 8.352a16.964 16.964 0 0 0 6.302 6.115 17.628 17.628 0 0 0 8.61 2.237h59.737c23.669 0 41.123-10.084 53.134-29.758l29.159-48.983 15.618-26.215 46.874 78.742h-62.492l-15.628 26.214Zm-67.64-26.24-41.688-.01L96.782 35.796l31.181 52.492-20.877 35.084c-7.976 12.765-17.037 17.416-31.107 17.416Z"/></svg>',
      },
      {
        name: "Better-Auth",
        svg: '<svg fill="none" viewBox="0 0 500 500"><path fill="#000" d="M0 0h500v500H0z"/><path fill="#fff" d="M69 121h86.988v259H69zM337.575 121H430v259h-92.425z"/><path fill="#fff" d="M427.282 121v83.456h-174.52V121zM430 296.544V380H252.762v-83.456z"/><path fill="#fff" d="M252.762 204.455v92.089h-96.774v-92.089z"/></svg>',
      },
    ],
  },
  work: {
    title: { en: "Work", es: "Proyectos" },
    subtitle: {
      en: "Selected projects",
      es: "Proyectos destacados",
    },
    viewProject: { en: "View Case Study", es: "Ver Caso de Estudio" },

    projects: [
      {
        slug: "receptia",
        title: "Receptia",
        image: "/receptia-shot.webp",
        description: {
          en: "A B2B educational management platform designed to support financial organization, student control, and institutional operations through a secure administrative environment.",
          es: "Una plataforma B2B de gestión educativa diseñada para fortalecer la organización financiera, el control estudiantil y las operaciones institucionales mediante un entorno administrativo seguro.",
        },
        technologies: [
          "React",
          "TypeScript",
          "Next.js",
          "Better Auth",
          "PostgreSQL",
        ],
        links: {
          live: "https://receptia-managment.vercel.app",
        },
        details: {
          en: `
    What started as an initiative around financial education for schools eventually evolved into a broader digital ecosystem designed to improve both learning accessibility and institutional operations. Receptia became the administrative backbone of that vision — a platform aimed at helping educational institutions organize student information, manage payments, and gain better operational visibility from a single environment.

    One of the biggest challenges many schools still face is the lack of integrated systems capable of handling financial tracking, student control, and administrative processes efficiently. Receptia addresses this by centralizing critical workflows into a secure and scalable platform while supporting the long-term goal of delivering educational resources and financial learning programs to teachers, parents, and students.

    Built with Next.js, PostgreSQL, and Better Auth, the platform focuses on maintainability, secure authentication, and structured data management. Particular attention was given to usability and workflow clarity, ensuring that administrative staff could navigate the system naturally without requiring technical expertise.

    Rather than functioning as a standalone dashboard, Receptia was conceived as part of a larger educational infrastructure strategy. The project reflects my ability to translate business vision and operational needs into scalable software products designed for real institutional environments.
          `,
          es: `
    Lo que comenzó como una iniciativa enfocada en educación financiera para colegios terminó evolucionando hacia un ecosistema digital más amplio orientado a mejorar tanto el acceso al aprendizaje como la operación interna de las instituciones. Receptia nació como la columna administrativa de esa visión: una plataforma diseñada para ayudar a colegios a organizar información estudiantil, gestionar pagos y obtener mayor visibilidad operativa desde un único entorno.

    Uno de los mayores problemas que todavía enfrentan muchas instituciones educativas es la falta de sistemas integrados capaces de manejar seguimiento financiero, control estudiantil y procesos administrativos de forma eficiente. Receptia responde a esta necesidad centralizando flujos críticos dentro de una plataforma segura y escalable, mientras acompaña el objetivo a largo plazo de ofrecer recursos educativos y programas de educación financiera dirigidos a profesores, padres de familia y alumnos.

    Construida con Next.js, PostgreSQL y Better Auth, la plataforma prioriza mantenibilidad, autenticación segura y gestión estructurada de datos. También se trabajó especialmente en la claridad de los flujos y la experiencia de uso para que el personal administrativo pudiera operar el sistema de forma intuitiva sin necesidad de conocimientos técnicos.

    Más que funcionar como un dashboard independiente, Receptia fue concebido como parte de una estrategia de infraestructura educativa a largo plazo. El proyecto refleja mi capacidad para convertir visión de negocio y necesidades operativas en productos de software escalables orientados a entornos institucionales reales.
          `,
        },
      },

      {
        slug: "amano-barbershop",
        title: "Amano Barbershop",
        image: "/amano shot.webp",
        description: {
          en: "A premium digital experience crafted for a modern barber brand, focused on visual identity, elegance, and high-end presentation.",
          es: "Una experiencia digital premium creada para una barbería moderna, enfocada en identidad visual, elegancia y una presentación de alto nivel.",
        },
        technologies: ["React", "TypeScript", "Tailwind"],
        links: {
          live: "https://amano-barbershop.vercel.app",
        },
        details: {
          en: `
    Amano Barbershop was approached as more than a traditional landing page project. The goal was to create a digital presence capable of translating the concept of “Corte de Autor” into an experience that communicated exclusivity, precision, and craftsmanship from the very first interaction.

    The project focused heavily on visual storytelling, typography, spacing, and motion to reinforce the premium identity of the brand. Every section was intentionally designed to feel minimal yet refined, avoiding unnecessary complexity while maintaining a strong visual character capable of elevating the perceived value of the business.

    Built with React and Tailwind CSS, the website prioritizes responsiveness, performance, and clean frontend architecture. Particular attention was placed on fluid layouts and device adaptability to ensure a consistent experience across desktop and mobile environments.

    Amano reflects my ability to combine frontend engineering with branding and product presentation, creating interfaces that not only function correctly but also communicate identity, positioning, and atmosphere through design.
          `,
          es: `
    Amano Barbershop fue abordado como algo más que una landing page tradicional. El objetivo era construir una presencia digital capaz de traducir el concepto de “Corte de Autor” en una experiencia que transmitiera exclusividad, precisión y artesanía desde la primera interacción.

    El proyecto se enfocó especialmente en storytelling visual, tipografía, espaciado y movimiento para reforzar la identidad premium de la marca. Cada sección fue diseñada intencionalmente para sentirse minimalista pero refinada, evitando complejidad innecesaria mientras mantenía una personalidad visual sólida capaz de elevar la percepción de valor del negocio.

    Construido con React y Tailwind CSS, el sitio prioriza responsividad, rendimiento y una arquitectura frontend limpia. También se trabajó cuidadosamente la adaptabilidad entre dispositivos y la fluidez visual para garantizar una experiencia consistente tanto en desktop como en móviles.

    Amano refleja mi capacidad para combinar ingeniería frontend con branding y presentación de producto, construyendo interfaces que no solo funcionan correctamente, sino que también comunican identidad, posicionamiento y atmósfera a través del diseño.
          `,
        },
      },

      {
        slug: "hextech-pass",
        title: "Hextech Pass",
        image: "/hextech-shot.webp",
        description: {
          en: "A secure League of Legends account manager featuring Riot API validation, AES-256 encryption, and scalable multi-user account organization.",
          es: "Un gestor seguro de cuentas de League of Legends con validación mediante Riot API, cifrado AES-256 y organización escalable multiusuario.",
        },
        technologies: [
          "React",
          "TypeScript",
          "TanStack Start",
          "Better Auth",
          "Cloudflare",
          "PostgreSQL",
        ],
        links: {
          live: "https://hextech-pass.vercel.app",
        },
        details: {
          en: `
    Hextech Pass emerged from a request made by a gaming community looking for a safer and more organized way to manage large collections of League of Legends accounts. Most existing alternatives lacked proper security, offered poor user experience, or relied on unreliable storage methods that exposed sensitive credentials.

    The platform was designed to centralize account management inside isolated private workspaces while prioritizing reliability and protection of user data. Integration with the Riot API allows real-time account validation before information is stored, reducing invalid entries and improving operational consistency for communities managing hundreds of accounts.

    Security became one of the core pillars of the project. Sensitive credentials are protected using AES-256 encryption, ensuring that stored information remains accessible only to its owner. To further improve scalability and usability, the application also supports bulk CSV and Excel imports, significantly reducing manual account management work.

    Built with TanStack Start, Better Auth, Cloudflare infrastructure, and PostgreSQL, Hextech Pass demonstrates strong full-stack engineering practices across authentication systems, encrypted data handling, API integration, and scalable backend architecture. The project reflects my ability to engineer specialized software around real operational problems while maintaining a strong focus on security and product usability.
          `,
          es: `
    Hextech Pass nació a partir de la necesidad de una comunidad gaming que buscaba una forma más segura y organizada de gestionar grandes colecciones de cuentas de League of Legends. Muchas de las alternativas existentes carecían de seguridad adecuada, ofrecían una experiencia deficiente o dependían de métodos poco confiables para almacenar credenciales sensibles.

    La plataforma fue diseñada para centralizar la gestión de cuentas dentro de espacios privados aislados, priorizando la confiabilidad y la protección de datos. La integración con la Riot API permite validar cuentas en tiempo real antes de almacenar la información, reduciendo registros inválidos y mejorando la consistencia operativa para comunidades que administran cientos de cuentas.

    La seguridad se convirtió en uno de los pilares principales del proyecto. Las credenciales sensibles se protegen mediante cifrado AES-256, garantizando que la información almacenada solo sea accesible por su propietario. Para mejorar escalabilidad y usabilidad, la aplicación también incorpora soporte para importaciones masivas mediante archivos CSV y Excel, reduciendo significativamente el trabajo manual de administración.

    Construido con TanStack Start, Better Auth, infraestructura Cloudflare y PostgreSQL, Hextech Pass demuestra prácticas sólidas de ingeniería full stack en sistemas de autenticación, manejo de datos cifrados, integración de APIs y arquitectura backend escalable. El proyecto refleja mi capacidad para construir software especializado alrededor de problemas operativos reales manteniendo un fuerte enfoque en seguridad y experiencia de producto.
          `,
        },
      },
    ],
  },
  contact: {
    title: { en: "Contact", es: "Contacto" },
    heading: {
      en: "Let's build something together?",
      es: "¿Listo para construir algo juntos?",
    },
    description: {
      en: "Get in touch — I'm always open to new opportunities and collaborations.",
      es: "Ponte en contacto — siempre estoy abierto a nuevas oportunidades y colaboraciones.",
    },
    email: "adbringas07@gmail.com",
  },
  footer: {
    copyright: {
      en: "© 2026 Adrian David. All rights reserved.",
      es: "© 2026 Adrian David. Todos los derechos reservados.",
    },
    builtWith: { en: "Built with Astro", es: "Construido con Astro" },
  },
  projects: {
    title: { en: "Case Study", es: "Caso de Estudio" },
    back: { en: "← Back to projects", es: "← Volver a proyectos" },
    tech: { en: "Technologies", es: "Tecnologías" },
    links: { en: "Links", es: "Enlaces" },
    overview: {
      en: "Overview",
      es: "Descripción General",
    },
  },
};

export type Project = (typeof content.work.projects)[0];
