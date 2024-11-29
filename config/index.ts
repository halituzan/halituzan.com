import { WandSparkles, Undo2 } from "lucide-react";
export interface TimelineItem {
  id: number;
  date: string;
  title?: string;
  company?: string;
  description?: string;
  skills: string[];
  isLeft?: boolean;
}

export const personalInfo = {
  name: "Halit Uzan",
  title: "Software Developer",
  location: "İstanbul, Türkiye",
  email: "johndoe@example.com",
  image: "/images/profile.jpg",
  bio: `<div>
    <p class="mb-2">Merhaba! Ben Halit, yazılım geliştirme süreçlerinde kullanıcı deneyimini ön planda tutarak işlevsel ve modern çözümler üreten bir geliştiriciyim. Özellikle Next.js, Node.js ve MongoDB gibi teknolojilerle çalışıyorum ve veri yönetiminde geniş bir tecrübeye sahibim.</p>
    <p class="mb-2">
     Projelerimde hem frontend hem de backend tarafında dengeli ve güçlü yapılar kurmaya özen gösteriyorum. Fabric.js ve React ile kullanıcı dostu arayüzler geliştiriyor, özel taleplere uygun çözümler sunuyorum.
    </p>
    <p class="mb-2">
    Farklı projelerimde performansı optimize etmek, kullanıcı deneyimini en üst seviyeye taşımak için çalışıyorum.Yazılım dünyasında yeniliklere açık, öğrenmeyi seven biriyim. İletişime geçmekten çekinmeyin, birlikte daha fazlasını başarabiliriz!
    </p>
    </div>`,
  links: {
    github: "https://github.com/username",
    linkedin: "https://linkedin.com/in/username",
  },
};

export const experience = [
  {
    title: "Front-End Developer",
    company: "Codelisa Teknoloji",
    period: "2022 - 2024",
    description:
      "Modern web uygulamaları geliştirme, teknik liderlik, mimari kararlar alma.",
  },
];

export const education = [
  {
    degree: "İktisat",
    school: "Karadeniz Teknik Üniversitesi",
    period: "2010 - 2014",
  },
];

export const timelineData: TimelineItem[] = [
  {
    id: 0,
    date: "2024 ~",
    title: "Software Developer (Hiring)",
    description:
      "İş arayışımda olan bir yazılım geliştiriciyim. Hem ofisten hem uzaktan çalışmaya, aynı zamanda freelance projelere de açığım. Projelerde kullanıcı deneyimini ve performansı ön planda tutarak, yenilikçi çözümler sunmayı hedefliyorum. Şirketlerin ve projelerin ihtiyaçlarına değer katabileceğim bir pozisyon arıyorum.",
    skills: [],
    isLeft: true,
  },

  {
    id: 1,
    date: "2022 - 2024",
    title: "Frontend Developer",
    company: "Codelisa Technology",
    description:
      "Müşteri odaklı, modüler web siteleri ve mobil uygulamalar üzerinde çalıştım.",
    skills: [
      "Typescript",
      "Javascript",
      "HTML",
      "CSS",
      "TailwindCss",
      "ReactJs",
      "NextJs",
      "Material UI",
      "Mantine UI",
      "Micro-Frontend",
      "MongoDB",
      "Express",
      "NodeJs",
    ],
    isLeft: true,
  },
  {
    id: 2,
    date: "2021 - 2022",
    title: "Frontend Developer (Intern)",
    company: "ETurnsoft",
    description:
      "Yönetim paneli ile kullanıcı yönetim sistemleri üzerine çalıştım.",
    skills: [
      "Javascript",
      "HTML",
      "CSS",
      "Bootstrap",
      "React",
      "Next.js",
      "MongoDB",
      "Express",
    ],
    isLeft: true,
  },
  {
    id: 3,
    date: "2018 - 2022",
    title: "E-Ticaret",
    company: "Sincap Dükkan",
    description:
      "E-ticaret alanında güçlü bir geçmişe sahibim ve Trendyol, Hepsiburada gibi Türkiye’nin önde gelen e-ticaret platformlarında satış yaparak pazarlama ve müşteri ilişkileri konusunda değerli deneyimler kazandım. Aynı zamanda, OpenCart altyapısını kullanarak kendi e-ticaret sitemi yönetme sorumluluğunu üstlendim. Bu süreçte, ürün yönetimi, sipariş süreçleri, stok takibi ve müşteri memnuniyeti gibi konularda kapsamlı bilgi edinme fırsatım oldu.",
    skills: [],
    isLeft: true,
  },
];

export const toolkitItems = [
  {
    title: "Easing Wizard",
    description: "CSS ile harika animasyonlar yapmanıza olanak tanır.",
    url: "https://easingwizard.com/",
    icon: WandSparkles,
  },
  {
    title: "JSON to Typescript",
    description:
      "JSON modellerinizin typescript tiplerini kolaylıkla convert eder. ",
    url: "https://transform.tools/json-to-typescript",
    icon: Undo2,
  },
  {
    title: "Skeleton Generator",
    description: "Tailwindcss kodlarınızı hızlı bir şekilde skeleton loader a dönüştürür",
    url: "https://skeletongenerator.com/",
    icon: WandSparkles,
  },
];

export const projects = [
  {
    title: "Entegrenity",
    description:
      "Pazaryerleri API servislerini kullanarak e-ticaret işletmelerinin ürün yönetimini kolaylaştıran IMS sistemidir. Bu yazılımın amacı, eticaret işletmelerinin ürünlerini gruplayarak tek bir platformdan tüm ürünlerinin stok ve fiyat bilgilerini günvellemesidir.",
    image: "/projects/entegrenity.jpg",
    technologies: ["NextJs", "Tailwindcss", "Javascript", "MongoDb"],
    githubLink: "https://github.com/halituzan",
    liveLink: "https://entegrenity.com",
  },
  {
    title: "Budget App",
    description:
      "Gelir ve giderlerinizi kolaylıkla takip edebileceğiniz web application.",
    image: "/projects/budget-app.jpg",
    technologies: ["NextJs", "Tailwindcss", "Javascript"],
    githubLink: "https://github.com/halituzan/income-and-expense",
    liveLink: "https://income-and-expense.vercel.app/tr",
  },
  {
    title: "Trendyol Barcode Finder",
    description:
      "Trendyol'da listelenen ürünlerin barkodlarını bulmayı kolaylaştıran Google Chrome eklentisidir. Versiyon 2 olarak geliştirilmiş bir üst versiyonudur. Eski versiyonu için Trendyol Barcode eklentisi incelenebilir.",
    image: "/projects/barcode-finder.jpg",
    technologies: ["HTML", "Javascript", "Bootstrap"],
    githubLink: "https://github.com/halituzan",
    liveLink:
      "https://chromewebstore.google.com/detail/trendyol-barkod-finder/mlpdemjleelebmdmhhnklcmhooniclpd",
  },
  {
    title: "TDK All API Package",
    description:
      "Türk Dil Kurumu API larını kullanarak istenilen kelimenin anlamlarını JSON response olarak getiren bir npm paketi.",
    image: "/projects/tdk.jpg",
    technologies: ["NPM", "Javascript"],
    githubLink: "https://github.com/halituzan/tdk-all-api",
    liveLink: "https://www.npmjs.com/package/tdk-all-api",
  },
];
