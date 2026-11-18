import { listedCourses } from "@/data/courses";

const courseImage = Object.fromEntries(
  listedCourses.map((course) => [course.id, course.imageUrl]),
) as Record<string, string | null>;

export const blackfridayCtaLabel = "Quero garantir a minha vaga";

export const blackfridayLogoPath = "/images/logos/logo.png";

export const blackfridayHero = {
  badge: "Ultra Black Friday",
  title:
    "A minha primeira black friday em mais de 20 anos de Jiu Jitsu, todos os meus cursos, com acesso para sempre.",
  subtitle:
    "Tudo que eu construí em mais de 3 mil alunos, reunidos em uma única oferta — para você iniciar 2027 dominando o Jiu-Jitsu.",
};

export const blackfridayAudience = {
  title: "A Ultra Black Friday vitalícia é para você que:",
  items: [
    {
      lead: "Começou agora",
      text: " no jiu-jitsu e quer evoluir mais rápido",
    },
    {
      lead: "Acabou de trocar de faixa",
      text: " e quer mudar o jeito de treinar",
    },
    {
      lead: "Já treina há anos",
      text: ", mas sente que estagnou e não consegue evoluir",
    },
    {
      lead: "Compete ou já competiu",
      text: ", mas sente que falta uma direção nas competições",
    },
  ],
};

export const blackfridayProof = {
  stat: "+ de 3 mil alunos em + de 15 anos ensinando",
  testimonialsTitle: "Atletas e praticantes que passaram pelos nossos cursos",
  testimonialImages: [
    {
      src: "/blackfriday/depoimento-ricardo.jpeg",
      alt: "Depoimento de Ricardo Sugiura Drills sobre o curso",
    },
    {
      src: "/blackfriday/depoimento-paulo.jpeg",
      alt: "Depoimento de Paulo Drills sobre o curso de meia guarda",
    },
    {
      src: "/blackfriday/depoimento-edu-araujo.jpeg",
      alt: "Depoimento de Edu Araujo sobre os cursos de meia guarda e guarda aberta",
    },
    {
      src: "/blackfriday/depoimento-michael.jpeg",
      alt: "Depoimento de Michael Drills recomendando o curso de meia guarda",
    },
    {
      src: "/blackfriday/depoimento-michael-escapes.jpeg",
      alt: "Depoimento de Michael Drills sobre saídas e escapadas",
    },
  ],
};

export const blackfridayCourses = {
  title: "Os 6 cursos, um por um.",
  subtitle: "Todos com acesso vitalício.",
  priceLabel: "Valor avulso",
  price: "R$ 89,90",
  items: [
    {
      id: "drills",
      name: "Curso de Drills de Sequência",
      promise: "A base para quem quer evoluir",
      imageUrl: courseImage.drills ?? null,
    },
    {
      id: "halfguard",
      name: "Curso de Meia Guarda",
      promise: "O que realmente muda para quem quer mudar o jogo",
      imageUrl: courseImage.halfguard ?? null,
    },
    {
      id: "openguard",
      name: "Curso de Guarda Aberta",
      promise: "Nunca fique sem saber o que fazer, independente da posição",
      imageUrl: courseImage.openguard ?? null,
    },
    {
      id: "guardpassing",
      name: "Curso de passagens de guarda",
      promise: "Saiba como nunca ser amassado no Jiu-Jitsu",
      imageUrl: courseImage.guardpassing ?? null,
    },
    {
      id: "nogi",
      name: "Curso de NO-GI",
      promise: "Domine as posições sem kimono",
      imageUrl: courseImage.nogi ?? null,
    },
    {
      id: "escapes",
      name: "Curso de saídas e escapadas",
      promise: "Saiba como nunca mais ser finalizado pelos seus adversários",
      imageUrl: "/images/courses/saidas-escapadas.webp",
    },
  ],
};

export const blackfridayCoursesClose = {
  label: "Só os cursos somados, comprando um por um:",
  price: "R$ 534,00",
  bridge: "E não é só isso.",
};

export const blackfridayBonusIntro =
  "Estratégias e técnicas sem a alimentação correta não servem de nada, por isso separei um bônus especial:";

export const blackfridayGifts = {
  title:
    "Quem comprar até às 23h:59min do dia 18/11, leva estes presentes:",
};

export const blackfridayBonuses = [
  {
    name: "Seminário de Guarda Fechada",
    description: "Tudo o que você precisa saber para dominar a posição.",
    price: "R$ 197,00",
  },
];

export const blackfridayMentorship = {
  eyebrow: "Condição exclusiva da Black",
  title: "60% de desconto na mentoria individual",
  description:
    "Adquirindo a oferta da Black, você garante 60% de desconto para a mentoria individual, com duração de 6 meses.",
  fullPrice: "R$ 2.497,00",
  priceLabel: "Já com 60% de desconto",
  price: "R$ 997,00",
};

export const blackfridayStack = {
  title: "Se você comprasse cada coisa separada…",
  items: [
    { label: "6 cursos completos vitalícios", price: "R$ 534,00" },
    { label: "1 encontro online em grupo com o Índio", price: "R$ 497,00" },
    { label: "1 seminário gravado", price: "R$ 197,00" },
    { label: "1 kimono oficial JA Jiu Jitsu", price: "R$ 549,90" },
  ],
  totalLabel: "Valor real",
  total: "R$ 1.777,90",
};

export const blackfridayExtras = {
  title: "O valor justo para a Ultra Black seria de no mínimo R$ 497,00.",
  subtitle:
    "Mas quem entra hoje, não paga isso — e não paga de novo nunca mais.",
  items: [
    {
      name: "Um encontro on-line em grupo",
      description:
        "Você envia posições do seu jogo e o Índio analisa ao vivo, com o grupo.",
    },
    {
      name: "Sorteio de um kimono oficial",
      note: "(Entre quem comprou até às 23h:59min do dia 18/11)",
      description: "Kimono oficial da JA Jiu Jitsu Índio.",
    },
  ],
};

export const blackfridayOffer = {
  title: "O que você leva, para sempre:",
  items: [
    "6 cursos completos de Jiu-Jitsu, vitalícios",
    "1 seminário de guarda fechada",
    "60% de desconto na mentoria individual de 6 meses",
    "Nunca mais renovar — acesso vitalício e sem mensalidade",
    "Acesso imediato no seu e-mail",
  ],
  asideLabel: "E do outro lado:",
  separatedLabel: "Se comprasse tudo separado",
  separatedPrice: "R$ 1.777,90",
  fairLabel: "Valor justo da Black",
  fairPrice: "R$ 997,00",
  todayLabel: "Você entra hoje por apenas:",
  cashPrice: "R$ 197,00",
  cashNote: "à vista",
  installments: "Ou em até 12x de R$ 20,37.",
  acquireLabel: "Adquirir agora",
};

export const blackfridayGuarantee =
  "7 dias de garantia incondicional. Entra, olha tudo por dentro. Se sentir que não é pra você, devolvemos 100% do valor. O risco é meu, não seu.";

export const blackfridayAccess = {
  lead: "Como funciona",
  emphasis: "o acesso.",
  steps: [
    { text: "Você finaliza a compra no cartão ou no Pix.", highlight: "" },
    {
      text: "Recebe o acesso na hora, no seu e-mail.",
      highlight: "na hora",
    },
    {
      text: "Começa a estudar no seu ritmo, pelo resto da vida.",
      highlight: "pelo resto da vida",
    },
  ],
};

export const blackfridayFaq = [
  {
    question: "Por quanto tempo terei acesso aos cursos?",
    answer: "Para sempre.",
  },
  {
    question: "Sou faixa branca, os cursos são para mim?",
    answer:
      "Sim. Os cursos podem ser estudados por atletas e praticantes da faixa branca até a preta.",
  },
  {
    question: "Como funciona a garantia? Tem risco?",
    answer:
      "O risco é zero. Você tem 7 dias para entrar, assistir às aulas e pedir o reembolso com um clique na plataforma. 100% do valor volta, sem burocracia.",
  },
  {
    question: "Como recebo os dados de acesso após a compra?",
    answer:
      "Imediatamente após a confirmação do pagamento, no Pix ou no cartão, chega um e-mail com o link da área de membros.",
  },
];

export const blackfridaySupport = {
  title: "Números oficiais",
  note: "Ficou alguma dúvida sobre a oferta, o pagamento ou o acesso? Fala com a gente por um desses números.",
  contacts: [
    { name: 'Fabiano "Índio"', phone: "53 98137-2378" },
    { name: "Samuel", phone: "53 98424-7032" },
    { name: "Suporte Índio", phone: "53 99175-4162" },
  ],
};
