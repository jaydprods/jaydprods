// ─── CATEGORIAS ───────────────────────────────────────────────────────────────
export const categories = [
  { id: 'sports',      label: 'Desporto',      cover: '/covers/sports.jpg',       objectPosition: 'center'        },
  { id: 'commercial',  label: 'Comercial',  cover: '/covers/corporate.jpg',    objectPosition: 'center bottom' },
  { id: 'music',       label: 'Música',       cover: '/covers/music-videos.jpg', objectPosition: 'center'        },
  { id: 'wedding',     label: 'Casamentos',    cover: '/covers/wedding.jpg',      objectPosition: 'center'        },
  { id: 'events',      label: 'Eventos',      cover: '/covers/events.jpg',       objectPosition: 'center'        },
  { id: 'coming-soon', label: 'Em Breve', cover: '/covers/coming-soon.jpg',  objectPosition: 'center'        },
]

// ─── TIPOS ────────────────────────────────────────────────────────────────────
export type Video = {
  id: number
  title: string
  type: 'youtube' | 'vimeo' | 'gumlet' | 'local' | 'instagram'
  src: string
  portrait?: boolean  // true para vídeos 9:16 verticais
  thumb?: string      // capa personalizada (path em /public)
  coverPortrait?: boolean  // capa vertical 9:16 (vídeo em destaque)
}

export type Project = {
  id: string
  title: string
  description?: string
  photos?: string[]
  videos?: Video[]
  process?: string[]   // screenshots do processo (ex: Premiere)
}

export type Client = {
  id: string
  name: string
  projects?: Project[]
}

// ─── CLIENTES POR CATEGORIA ───────────────────────────────────────────────────
export const clients: Record<string, Client[]> = {
  'sports': [
    {
      id: 'crossfit-gleis10',
      name: 'CrossFit Gleis 10 — Switzerland\'s largest CrossFit box',
      projects: [
        {
          id: 'cfg10-main',
          title: 'CrossFit Gleis 10',
          description: 'An ongoing content partnership with CrossFit Gleis 10 — Switzerland\'s largest CrossFit box. A series of vertical films spotlighting athletes, coaches and events, produced to grow the brand across social.',
          videos: [
            { id: 1, title: 'Was ist Hyrox', type: 'local', src: '/clients/crossfit-gleis10/hyrox.mp4', portrait: true, coverPortrait: true, thumb: '/clients/crossfit-gleis10/hyrox-thumb.jpg' },
            { id: 2, title: 'Competition Reel', type: 'local', src: '/clients/crossfit-gleis10/reel.mp4', portrait: true, coverPortrait: true, thumb: '/clients/crossfit-gleis10/reel-thumb.jpg' },
            { id: 3, title: 'Leandra — Meet the Coach', type: 'local', src: '/clients/crossfit-gleis10/leandra.mp4', portrait: true, coverPortrait: true, thumb: '/clients/crossfit-gleis10/leandra-thumb.jpg' },
            { id: 4, title: 'Seraina — Meet the Coach', type: 'local', src: '/clients/crossfit-gleis10/seraina.mp4', portrait: true, coverPortrait: true, thumb: '/clients/crossfit-gleis10/seraina-thumb.jpg' },
            { id: 5, title: 'Nico — Sportphysio', type: 'local', src: '/clients/crossfit-gleis10/nico.mp4', portrait: true, coverPortrait: true, thumb: '/clients/crossfit-gleis10/nico-thumb.jpg' },
            { id: 6, title: 'Lia — Nutritionist', type: 'local', src: '/clients/crossfit-gleis10/lia.mp4', portrait: true, coverPortrait: true, thumb: '/clients/crossfit-gleis10/lia-thumb.jpg' },
            { id: 7, title: 'Alessandro', type: 'local', src: '/clients/crossfit-gleis10/alessandro.mp4', portrait: true, coverPortrait: true, thumb: '/clients/crossfit-gleis10/alessandro-thumb.jpg' },
            { id: 8, title: 'Marc', type: 'local', src: '/clients/crossfit-gleis10/marc.mp4', portrait: true, coverPortrait: true, thumb: '/clients/crossfit-gleis10/marc-thumb.jpg' },
            { id: 9, title: 'Holiday', type: 'local', src: '/clients/crossfit-gleis10/holiday.mp4', portrait: true, coverPortrait: true, thumb: '/clients/crossfit-gleis10/holiday-thumb.jpg' },
          ],
        },
      ],
    },
    {
      id: 'tiago-santos',
      name: 'Tiago Santos — Kickboxing World Champion',
      projects: [
        {
          id: 'fight-teaser',
          title: 'Fight Teaser',
          description: 'Behind every champion, there is a story worth telling. For the World Fighting League, we worked alongside Tiago to craft a production where light, composition and movement serve one purpose — to build anticipation for what\'s coming to the Netherlands.',
          videos: [
            { id: 1, title: 'Fight Teaser', type: 'vimeo', src: '1184939583', portrait: true, thumb: '/clients/tiago-santos/MH7A7867.jpg' },
          ],
          photos: [
            '/clients/tiago-santos/MH7A7505.jpg',
            '/clients/tiago-santos/MH7A7514.jpg',
            '/clients/tiago-santos/MH7A7521.jpg',
            '/clients/tiago-santos/MH7A7535.jpg',
            '/clients/tiago-santos/MH7A7550.jpg',
            '/clients/tiago-santos/MH7A7576.jpg',
            '/clients/tiago-santos/MH7A7581.jpg',
            '/clients/tiago-santos/MH7A7584.jpg',
            '/clients/tiago-santos/MH7A7653.jpg',
            '/clients/tiago-santos/MH7A7736.jpg',
            '/clients/tiago-santos/MH7A7804.jpg',
            '/clients/tiago-santos/MH7A7855.jpg',
            '/clients/tiago-santos/MH7A7924.jpg',
            '/clients/tiago-santos/MH7A7938.jpg',
            '/clients/tiago-santos/MH7A8045.jpg',
            '/clients/tiago-santos/MH7A8228.jpg',
          ],
          process: [
            '/clients/tiago-santos/premiere.png',
          ],
        },
      ],
    },
    {
      id: 'ramalho',
      name: 'João Ramalho — Personal Trainer & Creator',
      projects: [
        {
          id: 'ramalho-main',
          title: 'Trying New Sports',
          description: 'An ongoing series with Ramalho — personal trainer and content creator — stepping out of his comfort zone to try a new sport in each episode. Vertical, high-energy lifestyle content made for social.',
          videos: [
            { id: 1, title: 'Skate', type: 'local', src: '/clients/ramalho/skate.mp4', portrait: true, coverPortrait: true, thumb: '/clients/ramalho/skate-thumb.jpg' },
            { id: 2, title: 'Wakeboard', type: 'local', src: '/clients/ramalho/wakeboard.mp4', portrait: true, thumb: '/clients/ramalho/wakeboard-thumb.jpg' },
            { id: 3, title: 'Nutrition', type: 'local', src: '/clients/ramalho/nutri.mp4', portrait: true, thumb: '/clients/ramalho/nutri-thumb.jpg' },
          ],
        },
      ],
    },
    {
      id: 'all-in-home-studio',
      name: 'All-In — Home Studio',
      projects: [
        {
          id: 'all-in-main',
          title: 'All In',
          description: 'Monthly content creation for All In Studio, focused on photography and video. The work captures the energy, environment, and identity of the space through a clean and consistent visual approach, strengthening the brand\'s presence across digital platforms.',
          videos: [
            { id: 1, title: 'All In', type: 'vimeo', src: '1184996757', portrait: true, thumb: '/clients/all-in/DSC09585.jpg' },
          ],
          photos: [
            '/clients/all-in/DSC09585.jpg',
            '/clients/all-in/DSC09591-2.jpg',
            '/clients/all-in/DSC09605.jpg',
            '/clients/all-in/DSC09629-2.jpg',
            '/clients/all-in/DSC09641.jpg',
            '/clients/all-in/DSC09674.jpg',
            '/clients/all-in/DSC09678-3.jpg',
          ],
        },
      ],
    },
    {
      id: 'hybrid-day',
      name: 'Hybrid Day — Aveiro 2026',
      projects: [
        {
          id: 'hybrid-day-main',
          title: 'Hybrid Day',
          description: 'Hybrid Day is a high-energy fitness event that brings together performance, community, and competition. I was brought in by the international brand Endure to produce a video for the event. The final result captured the intensity and atmosphere perfectly, delivering a strong and impactful visual piece.',
          videos: [
            { id: 1, title: 'Hybrid Day', type: 'vimeo', src: '1185007283', portrait: false, thumb: '/clients/hybrid-day/DSC08950-2.jpg' },
          ],
          photos: [
            '/clients/hybrid-day/DSC08715.jpg',
            '/clients/hybrid-day/DSC08793-2.jpg',
            '/clients/hybrid-day/DSC08842.jpg',
            '/clients/hybrid-day/DSC08850-2.jpg',
            '/clients/hybrid-day/DSC08855.jpg',
            '/clients/hybrid-day/DSC08881.jpg',
            '/clients/hybrid-day/DSC08895.jpg',
            '/clients/hybrid-day/DSC08918-3.jpg',
            '/clients/hybrid-day/DSC08926.jpg',
            '/clients/hybrid-day/DSC08950-2.jpg',
            '/clients/hybrid-day/DSC08950.jpg',
            '/clients/hybrid-day/DSC08969.jpg',
            '/clients/hybrid-day/DSC08981.jpg',
            '/clients/hybrid-day/DSC09002 - cópia.jpg',
            '/clients/hybrid-day/atleta.jpg',
            '/clients/hybrid-day/start.jpg',
          ],
        },
      ],
    },
  ],
  'commercial': [
    {
      id: 'umpercento',
      name: 'Umpercento — Clothing Brand',
      projects: [
        {
          id: 'umpercento-main',
          title: 'Umpercento',
          description: 'UMPERCENTO was born in the need to represent the journey. We guide those who have a dream, and inspire them to make it a goal. For those who aspire to stand out, the 1% is also a challenge.',
          videos: [
            { id: 1, title: 'Umpercento', type: 'vimeo', src: '1067124685', portrait: true, thumb: '/clients/umpercento/DSC00807.jpg' },
          ],
          photos: [
            '/clients/umpercento/DSC00807.jpg',
            '/clients/umpercento/DSC01620-Enhanced-NR-2.jpg',
            '/clients/umpercento/IMG_11.JPEG',
            '/clients/umpercento/IMG_15.JPEG',
            '/clients/umpercento/IMG_7950.jpeg',
            '/clients/umpercento/mask-2.jpg',
            '/clients/umpercento/parede-frontal.jpg',
            '/clients/umpercento/parede-lado-2.jpg',
            '/clients/umpercento/produto-12.jpg',
            '/clients/umpercento/produto-8.jpg',
          ],
        },
      ],
    },
    {
      id: 'acushla',
      name: 'Acushla — Natural Olive Oil',
      projects: [
        {
          id: 'acushla-main',
          title: 'Acushla',
          description: 'Producing one of the world\'s finest olive oils in full respect for nature and the environment, contributing to a better and healthier planet.',
          videos: [
            { id: 1, title: 'Acushla', type: 'vimeo', src: '1185161489', portrait: false, thumb: '/clients/acushla/capavideo.jpg' },
          ],
          photos: [
            '/clients/acushla/DSC06137.jpg',
            '/clients/acushla/DSC06189.jpg',
            '/clients/acushla/DSC06207.jpg',
            '/clients/acushla/DSC06218-3.jpg',
            '/clients/acushla/DSC06227-2.jpg',
            '/clients/acushla/DSC06234.jpg',
            '/clients/acushla/DSC06244.jpg',
            '/clients/acushla/DSC06275-2.jpg',
            '/clients/acushla/DSC06277.jpg',
            '/clients/acushla/DSC06143.jpg',
            '/clients/acushla/DSC06303.jpg',
          ],
        },
      ],
    },
    {
      id: 'ana-moreira-clinic',
      name: 'Ana Moreira Clinic — Health Center',
      projects: [
        {
          id: 'ana-moreira-main',
          title: 'Ana Moreira Clinic',
          description: 'Based in Porto, the clinic led by Dr. Ana Moreira focuses on integrative medicine, combining scientific knowledge with a holistic approach to health. The work centers on understanding the individual as a whole, emphasizing prevention, balance, and long-term well-being through personalized care.',
          videos: [
            { id: 1, title: 'Ana Moreira Clinic', type: 'gumlet', src: '69e787b34fc3fe661c9775c0', portrait: false, thumb: '/clients/ana-moreira/DSC04695.jpg' },
            { id: 2, title: 'Ana Moreira Clinic', type: 'gumlet', src: '69e7882fed3ab5a35434b08a', portrait: false, thumb: 'https://video.gumlet.io/69e77de44fc3fe661c966462/69e7882fed3ab5a35434b08a/thumbnail-1-0.png' },
            { id: 3, title: 'Ana Moreira Clinic', type: 'gumlet', src: '69e78897ed3ab5a35434bd09', portrait: false, thumb: 'https://video.gumlet.io/69e77de44fc3fe661c966462/69e78897ed3ab5a35434bd09/thumbnail-1-0.png' },
            { id: 4, title: 'Ana Moreira Clinic', type: 'gumlet', src: '69e78c2b4fc3fe661c97f8aa', portrait: false, thumb: 'https://video.gumlet.io/69e77de44fc3fe661c966462/69e78c2b4fc3fe661c97f8aa/thumbnail-1-0.png' },
          ],
          photos: [
            '/clients/ana-moreira/DSC04695.jpg',
            '/clients/ana-moreira/DSC00566.jpg',
            '/clients/ana-moreira/DSC04614.jpg',
            '/clients/ana-moreira/DSC04629-2.jpg',
            '/clients/ana-moreira/DSC04635.jpg',
            '/clients/ana-moreira/DSC04650.jpg',
            '/clients/ana-moreira/DSC04652.jpg',
            '/clients/ana-moreira/DSC04656.jpg',
            '/clients/ana-moreira/DSC04668.jpg',
            '/clients/ana-moreira/DSC04689.jpg',
          ],
        },
      ],
    },
  ],
  'events': [
    {
      id: 'vagos-sensation-gourmet',
      name: 'Vagos Sensation Gourmet 26 — Praia da Vagueira',
      projects: [
        {
          id: 'vagos-main',
          title: '',
          description: 'Conteúdo para redes sociais do Vagos Sensation Gourmet, o festival gastronómico na Praia da Vagueira. Reels verticais que captam o ambiente, a energia e os sabores do evento.',
          videos: [
            { id: 1, title: '', type: 'local', src: '/clients/vagos-sensation-gourmet/video1.mp4', portrait: true, coverPortrait: true, thumb: '/clients/vagos-sensation-gourmet/reel1-thumb.jpg' },
            { id: 2, title: 'Dia 1', type: 'local', src: '/clients/vagos-sensation-gourmet/video2.mp4', portrait: true, coverPortrait: true, thumb: '/clients/vagos-sensation-gourmet/reel2-thumb.jpg' },
            { id: 3, title: 'Dia 2', type: 'local', src: '/clients/vagos-sensation-gourmet/video3.mp4', portrait: true, coverPortrait: true, thumb: '/clients/vagos-sensation-gourmet/reel3-thumb.jpg' },
            { id: 4, title: 'Dia 3', type: 'local', src: '/clients/vagos-sensation-gourmet/video4.mp4', portrait: true, coverPortrait: true, thumb: '/clients/vagos-sensation-gourmet/reel4-thumb.jpg' },
            { id: 5, title: 'Dia 4', type: 'local', src: '/clients/vagos-sensation-gourmet/video5.mp4', portrait: true, coverPortrait: true, thumb: '/clients/vagos-sensation-gourmet/reel5-thumb.jpg' },
            { id: 6, title: 'Dia 5', type: 'local', src: '/clients/vagos-sensation-gourmet/video6.mp4', portrait: true, coverPortrait: true, thumb: '/clients/vagos-sensation-gourmet/reel6-thumb.jpg' },
          ],
        },
      ],
    },
    {
      id: 'festa-historia-braganca',
      name: 'Feira Medieval Bragança — Festa da História',
      projects: [
        {
          id: 'festa-2026',
          title: '2026',
          description: 'A edição de 2026 da Festa da História de Bragança — três dias a captar a cidade medieval a ganhar vida, do aftermovie oficial à feira histórica.',
          videos: [
            { id: 1, title: 'Dia 14 — Oficial',  type: 'local', src: '/clients/festa-da-historia/2026/dia14.mp4', portrait: false, thumb: '/clients/festa-da-historia/2026/dia14-thumb.jpg' },
            { id: 2, title: 'Dia 15',            type: 'local', src: '/clients/festa-da-historia/2026/dia15.mp4', portrait: false, thumb: '/clients/festa-da-historia/2026/dia15-thumb.jpg' },
            { id: 3, title: 'Dia 16',            type: 'local', src: '/clients/festa-da-historia/2026/dia16.mp4', portrait: false, thumb: '/clients/festa-da-historia/2026/dia16-thumb.jpg' },
            { id: 4, title: 'Dia 17 — Feira',    type: 'local', src: '/clients/festa-da-historia/2026/dia17.mp4', portrait: false, thumb: '/clients/festa-da-historia/2026/dia17-thumb.jpg' },
          ],
        },
        {
          id: 'festa-2025',
          title: '2025',
          description: 'Cobertura da edição de 2025 da Festa da História de Bragança.',
          videos: [
            { id: 1, title: '', type: 'gumlet', src: '69e79232ed3ab5a35435d318', portrait: false, thumb: 'https://video.gumlet.io/69e77de44fc3fe661c966462/69e79232ed3ab5a35435d318/thumbnail-1-0.png' },
            { id: 2, title: '', type: 'gumlet', src: '69e79212aed638b82a99d299', portrait: false, thumb: 'https://video.gumlet.io/69e77de44fc3fe661c966462/69e79212aed638b82a99d299/thumbnail-1-0.png' },
            { id: 3, title: '', type: 'gumlet', src: '69e792024fc3fe661c989f87', portrait: false, thumb: 'https://video.gumlet.io/69e77de44fc3fe661c966462/69e792024fc3fe661c989f87/thumbnail-1-0.png' },
          ],
        },
        {
          id: 'festa-2024',
          title: '2024',
          description: 'Cobertura da edição de 2024 da Festa da História de Bragança.',
          videos: [
            { id: 1, title: '', type: 'gumlet', src: '69e792484fc3fe661c98a819', portrait: false, thumb: 'https://video.gumlet.io/69e77de44fc3fe661c966462/69e792484fc3fe661c98a819/thumbnail-1-0.png' },
            { id: 2, title: '', type: 'gumlet', src: '69e7925d4fc3fe661c98ab2a', portrait: false, thumb: 'https://video.gumlet.io/69e77de44fc3fe661c966462/69e7925d4fc3fe661c98ab2a/thumbnail-1-0.png' },
            { id: 3, title: '', type: 'gumlet', src: '69e792724fc3fe661c98adf4', portrait: false, thumb: 'https://video.gumlet.io/69e77de44fc3fe661c966462/69e792724fc3fe661c98adf4/thumbnail-1-0.png' },
          ],
          photos: [
            '/clients/festa-da-historia/DSC04714.jpg',
            '/clients/festa-da-historia/DSC04756.jpg',
            '/clients/festa-da-historia/DSC04781.jpg',
            '/clients/festa-da-historia/DSC04785.jpg',
            '/clients/festa-da-historia/DSC04792.jpg',
            '/clients/festa-da-historia/DSC04796.jpg',
            '/clients/festa-da-historia/DSC04805.jpg',
            '/clients/festa-da-historia/DSC04821-2.jpg',
          ],
        },
      ],
    },
    {
      id: 'cmi',
      name: 'ICIM — International Congress of Integrative Medicine',
      projects: [
        {
          id: 'cmi-main',
          title: '',
          description: 'O International Congress of Integrative Medicine (ICIM) é um dos principais eventos na área da saúde integrativa na Europa, realizado anualmente no Porto. Reúne especialistas, profissionais de saúde e líderes do setor para debater novas abordagens que combinam a medicina convencional com terapias complementares, sempre com base em evidência científica.',
          videos: [
            { id: 1, title: '', type: 'gumlet', src: '69e78f9faed638b82a998a27', portrait: false, thumb: '/clients/cmi/capavideo.jpg' },
          ],
          photos: [
            '/clients/cmi/DSC06324.jpg',
            '/clients/cmi/DSC06345.jpg',
            '/clients/cmi/DSC06462.jpg',
            '/clients/cmi/DSC06469.jpg',
            '/clients/cmi/DSC06484.jpg',
            '/clients/cmi/DSC06526.jpg',
            '/clients/cmi/DSC06681.jpg',
            '/clients/cmi/DSC07003.jpg',
            '/clients/cmi/DSC07018-2.jpg',
            '/clients/cmi/DSC07052.jpg',
            '/clients/cmi/DSC07072.jpg',
            '/clients/cmi/DSC07129.jpg',
            '/clients/cmi/DSC07144.jpg',
            '/clients/cmi/DSC07310.jpg',
            '/clients/cmi/DSC07321.jpg',
            '/clients/cmi/DSC07388.jpg',
            '/clients/cmi/DSC07409.jpg',
            '/clients/cmi/DSC07465.jpg',
            '/clients/cmi/DSC07468.jpg',
            '/clients/cmi/DSC07523.jpg',
            '/clients/cmi/DSC07552.jpg',
            '/clients/cmi/DSC07561.jpg',
            '/clients/cmi/DSC07597.jpg',
            '/clients/cmi/DSC07684.jpg',
          ],
        },
      ],
    },
  ],
  'music': [
    {
      id: 'sould-il',
      name: 'Sould Il',
      projects: [
        {
          id: 'sould-il-1',
          title: 'Sould Il — Video I',
          description: 'A warm and romantic music video set in a summer-like atmosphere, reflecting themes of love, desire, and emotional freedom. The visuals enhance the song\'s sensual and effortless vibe, creating a timeless piece that can be felt anywhere, at any moment.',
          videos: [
            { id: 1, title: 'Sould Il', type: 'youtube', src: 'Uos6x_5sArU', portrait: false },
          ],
          photos: [
            '/clients/sould-il/project1/DSC04542.jpg',
            '/clients/sould-il/project1/DSC04548.jpg',
            '/clients/sould-il/project1/DSC04550.jpg',
            '/clients/sould-il/project1/DSC04552.jpg',
            '/clients/sould-il/project1/DSC04555.jpg',
            '/clients/sould-il/project1/DSC04561.jpg',
            '/clients/sould-il/project1/DSC04562.jpg',
            '/clients/sould-il/project1/DSC04572-2.jpg',
          ],
        },
        {
          id: 'sould-il-2',
          title: 'Sould Il — Video II',
          description: 'A powerful and intense live performance video, filmed on stage in front of an audience. With cold undertones and raw energy, the trio—joined by a guitarist—delivers an explosive performance driven by voice, emotion, and presence, capturing a sense of chaos and artistic freedom.',
          videos: [
            { id: 1, title: 'Sould Il', type: 'youtube', src: 'OF15np9nHjs', portrait: false },
          ],
          photos: [
            '/clients/sould-il/project2/DSC05021.jpg',
            '/clients/sould-il/project2/DSC05031.jpg',
            '/clients/sould-il/project2/DSC05034-3.jpg',
            '/clients/sould-il/project2/DSC05045.jpg',
            '/clients/sould-il/project2/DSC05058.jpg',
            '/clients/sould-il/project2/DSC05062.jpg',
            '/clients/sould-il/project2/DSC05065-2.jpg',
            '/clients/sould-il/project2/DSC05088-3.jpg',
            '/clients/sould-il/project2/DSC05101-2.jpg',
            '/clients/sould-il/project2/DSC05128.jpg',
            '/clients/sould-il/project2/DSC05065.jpg',
            '/clients/sould-il/project2/DSC05140-2.jpg',
            '/clients/sould-il/project2/DSC05147-2.jpg',
            '/clients/sould-il/project2/DSC05151.jpg',
            '/clients/sould-il/project2/DSC05156.jpg',
            '/clients/sould-il/project2/DSC05161.jpg',
          ],
        },
      ],
    },
    {
      id: 'pisco',
      name: 'Pisco',
      projects: [
        {
          id: 'pisco-1',
          title: 'Pisco — Quantas Vezes',
          description: 'A reflective rap piece that explores the necessity of failure and mistakes as part of personal growth. Pisco blends raw everyday realities with introspective storytelling, never losing sight of love and emotion. A young romantic at heart, he balances honesty and vulnerability, turning life lessons into a grounded and meaningful narrative.',
          videos: [
            { id: 1, title: 'Pisco — Quantas Vezes', type: 'youtube', src: 'fpxr4L52zBA', portrait: false },
          ],
          photos: [
            '/clients/pisco/project1/DSC00597.jpg',
            '/clients/pisco/project1/DSC00599.jpg',
            '/clients/pisco/project1/DSC00614.jpg',
            '/clients/pisco/project1/DSC00617.jpg',
            '/clients/pisco/project1/DSC00647-2.jpg',
            '/clients/pisco/project1/DSC00653.jpg',
            '/clients/pisco/project1/DSC00654-Enhanced-NR.jpg',
            '/clients/pisco/project1/DSC00657-Enhanced-NR.jpg',
            '/clients/pisco/project1/DSC00662-Enhanced-NR.jpg',
            '/clients/pisco/project1/DSC00664-Enhanced-NR.jpg',
          ],
        },
        {
          id: 'pisco-2',
          title: 'Pisco — Sessão de Jazz',
          description: 'A live studio performance where Pisco reflects on his musical journey through smooth jazz-inspired rhythms and laid-back beats. In an intimate setting, he performs with raw honesty, using writing as a form of release and self-expression. Trusting the process and embracing destiny, he shares that music is not an obligation, but a natural path—his only goal is to keep writing.',
          videos: [
            { id: 1, title: 'Pisco — Sessão de Jazz', type: 'youtube', src: 'B2U0WKRhazo', portrait: false },
          ],
          photos: [],
        },
      ],
    },
    { id: 'phartuna', name: 'Phartuna — Tuna de Farmácia Coimbra',        projects: [] },
  ],
  'wedding': [
    {
      id: 'iara-joao',
      name: 'Iara & João',
      projects: [
        {
          id: 'iara-joao-main',
          title: 'Iara & João',
          videos: [
            { id: 1, title: 'Iara & João', type: 'gumlet', src: '69e8df6883b315dbcb42b97a', portrait: false, thumb: '/clients/iara-joao/fotocapa.jpg' },
          ],
          photos: [
            '/clients/iara-joao/DSC03336.jpg',
            '/clients/iara-joao/DSC03407.jpg',
            '/clients/iara-joao/DSC03589.jpg',
            '/clients/iara-joao/DSC03658.jpg',
            '/clients/iara-joao/DSC03806.jpg',
            '/clients/iara-joao/DSC03911.jpg',
            '/clients/iara-joao/DSC04051.jpg',
            '/clients/iara-joao/DSC04085.jpg',
            '/clients/iara-joao/DSC04121.jpg',
            '/clients/iara-joao/DSC04792.jpg',
            '/clients/iara-joao/DSC05023.jpg',
            '/clients/iara-joao/DSC05151.jpg',
            '/clients/iara-joao/DSC05236.jpg',
            '/clients/iara-joao/DSC05572.jpg',
            '/clients/iara-joao/DSC05689.jpg',
            '/clients/iara-joao/DSC05719.jpg',
            '/clients/iara-joao/DSC06680.jpg',
          ],
        },
      ],
    },
    {
      id: 'baptizado-alexandra',
      name: 'Alexandra — Baptism & 25 Years',
      projects: [
        {
          id: 'baptizado-main',
          title: 'Baptism & 25 Years',
          description: 'A family celebration film — the baptism and 25th anniversary of Alexandra, filmed with the same cinematic care as a wedding day.',
          videos: [
            { id: 1, title: 'Baptism & 25 Years', type: 'local', src: '/clients/baptizado-alexandra/video.mp4', portrait: false, thumb: '/clients/baptizado-alexandra/thumb.jpg' },
          ],
        },
      ],
    },
  ],
  'coming-soon': [],
}
