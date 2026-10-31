/* =========================================================
   TOYA — script común para todas las páginas
   - Cabecera, footer, botón de contacto y lightbox se crean aquí,
     así solo se editan en un sitio.
   ========================================================= */

const A = "assets/";      // carpeta de tus archivos
const EMAIL = "toya.flav@gmail.com";
const INSTAGRAM = { label: "@toya.flav_", url: "https://www.instagram.com/toya.flav_/" };
const CV = A + encodeURI("redes/Ana Pérez CV.pdf");   // o teu CV em portfolio/assets/redes/
// Fotos de la carpeta fot que salen al final de cada página
const FOT_FINAL = ["lmk/lmk3.jpg","danca/danca2.jpg","epal/epal4.jpg","lmk/lmk6.jpg","danca/danca4.jpg","epal/epal5.jpg"].map(f => "img/" + f);

/* ---------------- Textos en 3 idiomas ---------------- */
const T = {
  pt: {
    "nav.home":"Início","nav.video":"Vídeo","nav.fotos":"Fotos","nav.hide":"Esconder menu","nav.show":"Mostrar menu",
    "contact":"Contacto","talk":"Vamos falar","copy":"Copiar","copied":"Email copiado",
    "snd.off":"Som: não","snd.on":"Som: sim","close":"Fechar","expand":"Ampliar",
    "ft.text":"Vídeo, fotografia, 3D ou design: conta-me o que tens em mente.","ft.from":"De","ft.avail":"Disponível para","ft.avail.v":"Projetos, colaborações e encomendas",
    "hero.role":"Vídeo · Fotografia · 3D · Design",
    "hero.lead":"Quatro coisas essenciais com que mostro a minha vida, o meu estilo e os meus pensamentos.",
    "hero.enter":"Entra no portfólio","hero.scroll":"Desliza",
    "idx.eye":"O portfólio","idx.title":"Explora o meu trabalho","idx.text":"Ideias que ganham forma. Escolhe uma porta: cada uma tem o seu ritmo.",
    "idx.video":"Vlogs, dança, reels e momentos do dia","idx.fotos":"Full Sun, Latte x Sanjo, Goddess, Rave, EPAL, LMK, Dança e Black Mamba","idx.3d":"Um projeto, de perto","idx.design":"Cartazes, folhetos e motion para o Museu da Água",
    "news.eye":"Mural","news.title":"Novidades","news.text":"O mais recente: vídeos, pósteres e fotos do dia a dia.",
    "k.video":"Vídeo","k.poster":"Póster","k.photo":"Dia a dia","k.gif":"Gif","k.reel":"Reel",
    "vid.eye":"01 · Vídeo","vid.sub":"Peças em movimento, vlogs, dança e narrativa visual. Toca num vídeo para o ampliar; o som é opcional.",
    "vid.reels":"Reels","vid.reels.t":"Formato vertical, para ver de seguida.",
    "fot.eye":"02 · Fotografia","fot.sub":"Uma viagem por diferentes mundos que fazem parte da minha essência, onde ganhei prémios e participei em grandes eventos.",
    "fot.world":"Leva-me para o teu próximo mundo","fot.n":"fotos",
    "d3.eye":"03 · 3D","d3.sub":"Modelação · Texturas · Render","d3.drag":"Arrasta para rodar","d3.video":"Vídeo do projeto","d3.name":"Nome do projeto",
    "des.eye":"Design · 意匠","des.sub":"Poucas coisas, bem colocadas. Papel, tinta e espaço para respirar.",
    "des.posters":"Cartazes","des.posters.p":"Cartaz Butterfly Effect e mockup urbano.",
    "des.motion":"Horários","des.motion.p":"Série animada de horários.",
    "des.fl":"Folhetos","des.fl.p":"Série de folhetos de visitas para o Museu da Água (EPAL). Toca para abrir o PDF.",
    "des.id":"Identidade","des.id.p":"A assinatura Toya, em papel e em tinta."
  },
  es: {
    "nav.home":"Inicio","nav.video":"Vídeo","nav.fotos":"Fotos","nav.hide":"Ocultar menú","nav.show":"Mostrar menú",
    "contact":"Contacto","talk":"Hablemos","copy":"Copiar","copied":"Email copiado",
    "snd.off":"Sonido: no","snd.on":"Sonido: sí","close":"Cerrar","expand":"Ampliar",
    "ft.text":"Vídeo, fotografía, 3D o diseño: cuéntame qué tienes en mente.","ft.from":"De","ft.avail":"Disponible para","ft.avail.v":"Proyectos, colaboraciones y encargos",
    "hero.role":"Vídeo · Fotografía · 3D · Design",
    "hero.lead":"Cuatro cosas esenciales con las que muestro mi vida, mi estilo y mis pensamientos.",
    "hero.enter":"Entra al portfolio","hero.scroll":"Desliza",
    "idx.eye":"El portfolio","idx.title":"Explora mi trabajo","idx.text":"Ideas que toman forma. Elige una puerta: cada una tiene su ritmo.",
    "idx.video":"Vlogs, danza, reels y momentos del día","idx.fotos":"Full Sun, Latte x Sanjo, Goddess, Rave, EPAL, LMK, Dança y Black Mamba","idx.3d":"Un proyecto, de cerca","idx.design":"Carteles, folletos y motion para el Museu da Água",
    "news.eye":"Mural","news.title":"Novedades","news.text":"Lo último: vídeos, pósters y fotos del día a día.",
    "k.video":"Vídeo","k.poster":"Póster","k.photo":"Día a día","k.gif":"Gif","k.reel":"Reel",
    "vid.eye":"01 · Vídeo","vid.sub":"Piezas en movimiento, vlogs, danza y narrativa visual. Toca un vídeo para ampliarlo; el sonido es opcional.",
    "vid.reels":"Reels","vid.reels.t":"Formato vertical, para ver uno tras otro.",
    "fot.eye":"02 · Fotografía","fot.sub":"Un viaje por distintos mundos que forman parte de mi esencia, donde gané premios y participé en grandes eventos.",
    "fot.world":"Llévame a tu próximo mundo","fot.n":"fotos",
    "d3.eye":"03 · 3D","d3.sub":"Modelado · Texturas · Render","d3.drag":"Arrastra para girar","d3.video":"Vídeo del proyecto","d3.name":"Nombre del proyecto",
    "des.eye":"Design · 意匠","des.sub":"Pocas cosas, bien puestas. Papel, tinta y espacio para respirar.",
    "des.posters":"Carteles","des.posters.p":"Cartel Butterfly Effect y mockup urbano.",
    "des.motion":"Horarios","des.motion.p":"Serie animada de horarios.",
    "des.fl":"Folletos","des.fl.p":"Serie de folletos de visitas para el Museu da Água (EPAL). Toca para abrir el PDF.",
    "des.id":"Identidad","des.id.p":"La firma Toya, en papel y en tinta."
  },
  en: {
    "nav.home":"Home","nav.video":"Video","nav.fotos":"Photos","nav.hide":"Hide menu","nav.show":"Show menu",
    "contact":"Contact","talk":"Let's talk","copy":"Copy","copied":"Email copied",
    "snd.off":"Sound: off","snd.on":"Sound: on","close":"Close","expand":"Enlarge",
    "ft.text":"Video, photography, 3D or design: tell me what you have in mind.","ft.from":"From","ft.avail":"Available for","ft.avail.v":"Projects, collaborations and commissions",
    "hero.role":"Video · Photography · 3D · Design",
    "hero.lead":"Four essential things through which I show my life, my style and my thoughts.",
    "hero.enter":"Enter the portfolio","hero.scroll":"Scroll",
    "idx.eye":"The portfolio","idx.title":"Explore my work","idx.text":"Ideas taking shape. Pick a door: each one has its own rhythm.",
    "idx.video":"Vlogs, dance, reels and everyday moments","idx.fotos":"Full Sun, Latte x Sanjo, Goddess, Rave, EPAL, LMK, Dança and Black Mamba","idx.3d":"One project, up close","idx.design":"Posters, leaflets and motion for Museu da Água",
    "news.eye":"Wall","news.title":"What's new","news.text":"The latest: videos, posters and everyday photos.",
    "k.video":"Video","k.poster":"Poster","k.photo":"Everyday","k.gif":"Gif","k.reel":"Reel",
    "vid.eye":"01 · Video","vid.sub":"Moving pieces, vlogs, dance and visual storytelling. Tap a video to enlarge it; sound is optional.",
    "vid.reels":"Reels","vid.reels.t":"Vertical format, to watch one after another.",
    "fot.eye":"02 · Photography","fot.sub":"A journey through different worlds that are part of who I am, where I won awards and took part in big events.",
    "fot.world":"Take me to your next world","fot.n":"photos",
    "d3.eye":"03 · 3D","d3.sub":"Modeling · Texturing · Render","d3.drag":"Drag to rotate","d3.video":"Project video","d3.name":"Project name",
    "des.eye":"Design · 意匠","des.sub":"Few things, well placed. Paper, ink and room to breathe.",
    "des.posters":"Posters","des.posters.p":"Butterfly Effect poster and an urban mockup.",
    "des.motion":"Timetables","des.motion.p":"An animated timetable series.",
    "des.fl":"Leaflets","des.fl.p":"A series of visit leaflets for Museu da Água (EPAL). Tap to open the PDF.",
    "des.id":"Identity","des.id.p":"The Toya signature, on paper and in ink."
  }
};

/* Descripciones de cada proyecto (borradores: cámbialas por las tuyas) */
Object.assign(T.pt, {
  "cv":"Ver CV",
  "coll.eye":"Mural","coll.a":"Novidades","coll.b":"do dia a dia","coll.p":"Vídeos, pósteres e fotos recentes. Passa o rato por cima e toca para ampliar.",
  "st.new":"Novo","st.hot":"Acabado de sair",
  "v1":"Um momento calmo do meu dia no Museu da Água, filmado e montado como um pequeno diário.",
  "v2":"Vlog da viagem a Espanha: lugares, comida e o ritmo da estrada.",
  "v3":"Série de vlogs do meu estágio na EPAL, mostrando o dia a dia por trás das câmaras.",
  "v4":"Filme do espetáculo de dança Butterfly Effect, capítulo final, no Ateneu Vilafranquense.",
  "v5":"Registo de uma batalha de dança: energia, público e improviso.",
  "v6":"Peça curta de dança, montada ao ritmo da música.",
  "v7":"Competição de dança, filmada e editada por mim.",
  "v8":"Peça de vídeo para LM.",
  "reels.p":"Formato vertical. Cada reel tem o seu espaço.",
  "f1":"Retratos com luz forte de verão e cores quentes.",
  "f2":"Sessão Latte x Sanjo: moda, produto e tons de café.",
  "f3":"Retrato editorial com estética de deusa.",
  "f4":"Noite, luz e movimento numa rave.",
  "fot.gif":"O livro: onde tenho mais experiência.",
  "d3.desc":"Projeto 3D: modelação, texturas e render final. Aqui ficam o vídeo e algumas imagens do processo."
});
Object.assign(T.es, {
  "cv":"Ver CV",
  "coll.eye":"Mural","coll.a":"Novedades","coll.b":"del día a día","coll.p":"Vídeos, pósters y fotos recientes. Pasa el ratón por encima y toca para ampliar.",
  "st.new":"Nuevo","st.hot":"Recién salido",
  "v1":"Un momento tranquilo de mi día en el Museu da Água, filmado y montado como un pequeño diario.",
  "v2":"Vlog del viaje a España: lugares, comida y el ritmo de la carretera.",
  "v3":"Serie de vlogs de mis prácticas en EPAL, con el día a día detrás de cámaras.",
  "v4":"Film del espectáculo de danza Butterfly Effect, capítulo final, en el Ateneu Vilafranquense.",
  "v5":"Registro de una batalla de baile: energía, público e improvisación.",
  "v6":"Pieza corta de danza, montada al ritmo de la música.",
  "v7":"Competición de danza, filmada y editada por mí.",
  "v8":"Pieza de vídeo para LM.",
  "reels.p":"Formato vertical. Cada reel tiene su espacio.",
  "f1":"Retratos con luz dura de verano y colores cálidos.",
  "f2":"Sesión Latte x Sanjo: moda, producto y tonos café.",
  "f3":"Retrato editorial con estética de diosa.",
  "f4":"Noche, luz y movimiento en una rave.",
  "fot.gif":"El libro: donde tengo más experiencia.",
  "d3.desc":"Proyecto 3D: modelado, texturas y render final. Aquí van el vídeo y algunas imágenes del proceso."
});
Object.assign(T.en, {
  "cv":"View CV",
  "coll.eye":"Wall","coll.a":"What's new","coll.b":"day to day","coll.p":"Recent videos, posters and photos. Hover and tap to enlarge.",
  "st.new":"New","st.hot":"Just out",
  "v1":"A quiet moment of my day at Museu da Água, filmed and edited like a small diary.",
  "v2":"Vlog of a trip to Spain: places, food and the rhythm of the road.",
  "v3":"A vlog series from my internship at EPAL, showing the day to day behind the camera.",
  "v4":"Film of the dance show Butterfly Effect, final chapter, at Ateneu Vilafranquense.",
  "v5":"A dance battle on camera: energy, crowd and improvisation.",
  "v6":"A short dance piece, cut to the rhythm of the music.",
  "v7":"A dance competition, filmed and edited by me.",
  "v8":"A video piece for LM.",
  "reels.p":"Vertical format. Each reel gets its own space.",
  "f1":"Portraits in hard summer light and warm colours.",
  "f2":"Latte x Sanjo shoot: fashion, product and coffee tones.",
  "f3":"Editorial portraits with a goddess aesthetic.",
  "f4":"Night, light and movement at a rave.",
  "fot.gif":"The book: where I have the most experience.",
  "d3.desc":"3D project: modeling, texturing and final render. Here are the video and a few images of the process."
});

Object.assign(T.pt, { "talk.a":"Vamos","talk.b":"falar.","pl.label":"Playlist","pl.tracks":"faixas","pl.play":"Reproduzir","pl.shuffle":"Aleatório","pl.like":"Gosto","th.title":"Título","th.alb":"Álbum","u.vid":"vídeos","u.fot":"fotos","u.proj":"projeto","u.pcs":"peças" });
Object.assign(T.es, { "talk.a":"Hablemos","talk.b":"ya.","pl.label":"Playlist","pl.tracks":"canciones","pl.play":"Reproducir","pl.shuffle":"Aleatorio","pl.like":"Me gusta","th.title":"Título","th.alb":"Álbum","u.vid":"vídeos","u.fot":"fotos","u.proj":"proyecto","u.pcs":"piezas" });
Object.assign(T.en, { "talk.a":"Let's","talk.b":"talk.","pl.label":"Playlist","pl.tracks":"tracks","pl.play":"Play","pl.shuffle":"Shuffle","pl.like":"Like","th.title":"Title","th.alb":"Album","u.vid":"videos","u.fot":"photos","u.proj":"project","u.pcs":"pieces" });

Object.assign(T.pt, { "koi.eye":"Inspiração","koi.t":"Movimento lento, cor viva","koi.p":"As carpas koi resumem o que procuro no design: calma, contraste e uma cor que se nota no escuro." });
Object.assign(T.es, { "koi.eye":"Inspiración","koi.t":"Movimiento lento, color vivo","koi.p":"Las carpas koi resumen lo que busco en el diseño: calma, contraste y un color que se nota en la oscuridad." });
Object.assign(T.en, { "koi.eye":"Inspiration","koi.t":"Slow movement, bright colour","koi.p":"Koi sum up what I look for in design: calm, contrast and a colour that stands out in the dark." });

Object.assign(T.pt, { "f5":"Exposição no Museu da Água (EPAL): luz azul, água e formas que flutuam no escuro.","f6":"LMK em palco, do World of Dance aos campeonatos de hip hop: a equipa, os abraços e a festa.","f7":"Batalhas de hip hop no World of Dance: a final, o VS e o círculo à volta." });
Object.assign(T.es, { "f5":"Exposición en el Museu da Água (EPAL): luz azul, agua y formas que flotan en la oscuridad.","f6":"LMK en el escenario, del World of Dance a los campeonatos de hip hop: el equipo, los abrazos y la fiesta.","f7":"Batallas de hip hop en el World of Dance: la final, el VS y el círculo alrededor." });
Object.assign(T.en, { "f5":"Exhibition at Museu da Água (EPAL): blue light, water and shapes floating in the dark.","f6":"LMK on stage, from World of Dance to hip hop championships: the crew, the hugs and the celebration.","f7":"Hip hop battles at World of Dance: the final, the VS and the circle around it." });


Object.assign(T.pt, { "nav.otros":"Outros","ot.eye":"03 · Outros","ot.sub":"3D e design no mesmo sítio: uma casa japonesa modelada, cartazes, folhetos e motion.","idx.otros":"3D, cartazes, folhetos e motion" });
Object.assign(T.es, { "nav.otros":"Otros","ot.eye":"03 · Otros","ot.sub":"3D y diseño en un mismo lugar: una casa japonesa modelada, carteles, folletos y motion.","idx.otros":"3D, carteles, folletos y motion" });
Object.assign(T.en, { "nav.otros":"Other","ot.eye":"03 · Other","ot.sub":"3D and design in one place: a modeled Japanese house, posters, leaflets and motion.","idx.otros":"3D, posters, leaflets and motion" });

Object.assign(T.pt, { "d3.name":"Quarto Japonês","d3.desc":"Um quarto de estilo japonês modelado em 3D: tatami, bambu, um torii e luz quente ao fim do dia. Escolhe uma camada para ver cada render.","ot.sub":"3D e design no mesmo sítio: um quarto japonês modelado, cartazes, folhetos e motion." });
Object.assign(T.es, { "d3.name":"Habitación Japonesa","d3.desc":"Una habitación de estilo japonés modelada en 3D: tatami, bambú, un torii y luz cálida al atardecer. Elige una capa para ver cada render.","ot.sub":"3D y diseño en un mismo lugar: una habitación japonesa modelada, carteles, folletos y motion." });
Object.assign(T.en, { "d3.name":"Japanese Room","d3.desc":"A Japanese-style room modeled in 3D: tatami, bamboo, a torii gate and warm evening light. Pick a layer to see each render.","ot.sub":"3D and design in one place: a modeled Japanese room, posters, leaflets and motion." });

Object.assign(T.pt, { "f8":"The Black Mamba ao vivo: palco, luzes e o público na sombra.","ab.eye":"Sobre mim","ab.t":"Olá, sou a Toya","ab.p1":"Sou a Ana Pérez, entre Portugal e a Venezuela. A minha vida gira à volta das artes e da expressão: é nelas que mostro o meu lado criativo e o esforço que ponho em cada uma.","ab.p2":"Filmo, fotografo, modelo em 3D e desenho. A dança e o hip hop marcam o ritmo de quase tudo o que faço.","ab.dance":"Dança","ab.tools":"Ferramentas" });
Object.assign(T.es, { "f8":"The Black Mamba en directo: escenario, luces y el público en la sombra.","ab.eye":"Sobre mí","ab.t":"Hola, soy Toya","ab.p1":"Soy Ana Pérez, entre Portugal y Venezuela. Mi vida gira alrededor de las artes y la expresión: en ellas muestro mi lado creativo y el esfuerzo que pongo en cada una.","ab.p2":"Filmo, fotografío, modelo en 3D y diseño. La danza y el hip hop marcan el ritmo de casi todo lo que hago.","ab.dance":"Danza","ab.tools":"Herramientas" });
Object.assign(T.en, { "f8":"The Black Mamba live: stage, lights and the crowd in shadow.","ab.eye":"About me","ab.t":"Hi, I'm Toya","ab.p1":"I'm Ana Pérez, between Portugal and Venezuela. My life revolves around art and expression: that's where I show my creative side and the effort I put into each one.","ab.p2":"I film, photograph, model in 3D and design. Dance and hip hop set the rhythm for almost everything I do.","ab.dance":"Dance","ab.tools":"Tools" });

Object.assign(T.pt, { "des.iam.p":"Identidade visual para o IAM, Integração do Aluno Migrante: logótipo, sinalética, t-shirt, saco e papelaria. Uma linha contínua que liga o “i” ao “m”, como um caminho partilhado.","des.iam.c1":"Logótipo e sinalética","des.iam.c2":"T-shirt, saco e papelaria" });
Object.assign(T.es, { "des.iam.p":"Identidad visual para IAM, Integración del Alumno Migrante: logotipo, señalética, camiseta, bolsa y papelería. Una línea continua que une la “i” con la “m”, como un camino compartido.","des.iam.c1":"Logotipo y señalética","des.iam.c2":"Camiseta, bolsa y papelería" });
Object.assign(T.en, { "des.iam.p":"Visual identity for IAM, Migrant Student Integration: logo, signage, t-shirt, tote bag and stationery. One continuous line links the “i” to the “m”, like a shared path.","des.iam.c1":"Logo and signage","des.iam.c2":"T-shirt, tote bag and stationery" });

/* Textos tirados do PDF do portfólio (Portfolio_AnaPérez4) */
Object.assign(T.pt, {
  "ab.p1":"Sou a Ana Pérez, tenho 18 anos e sou estudante de Multimédia. Apaixonada por dança urbana, desenvolvi um estilo moderno, extravagante e expressivo, conhecido pelo apelido “Toya”.",
  "ab.p2":"Trabalho como freelancer em eventos, aceitando sempre novos desafios e oportunidades para aprender.",
  "ab.edu":"Educação","ab.edu.v":"Curso Profissional de Multimédia (12.º ano)","ab.skills":"Skills","ab.skills.v":"Criativa · Pensamento crítico · Fotografia · Sociável · Edição","ab.exp":"Experiência",
  "ab.e1":"Reportagem fotográfica","ab.e2":"Fotografia de evento","ab.e3":"Reportagem fotográfica pop-up, moda","ab.e4":"Fotografia de evento feminino","ab.e5":"Fotografia de evento techno",
  "f2":"Reportagem fotográfica de um pop-up de moda.",
  "f3":"Fotografia de evento feminino.",
  "f7":"O projeto da Via Urbana e fotografia de retrato foi criado a partir de uma sessão de fotos pensada na cultura urbana e no hip hop, dentro do mundo da dança.",
  "f8":"The Black Mamba, uma banda portuguesa que representou Portugal na Eurovision Song Contest 2021. Fotografei o concerto em 2025.",
  "d3.desc":"O Quarto 3D foi um projeto criado no âmbito escolar: criar um quarto criativo, ou que quisesses ter no futuro. Escolhi juntar a cultura japonesa com o moderno, ao pôr do sol."
});
Object.assign(T.es, {
  "ab.p1":"Soy Ana Pérez, tengo 18 años y estudio Multimedia. Apasionada por la danza urbana, desarrollé un estilo moderno, extravagante y expresivo, conocido por el apodo “Toya”.",
  "ab.p2":"Trabajo como freelance en eventos, aceptando siempre nuevos retos y oportunidades para aprender.",
  "ab.edu":"Educación","ab.edu.v":"Curso Profesional de Multimedia (12.º año)","ab.skills":"Habilidades","ab.skills.v":"Creativa · Pensamiento crítico · Fotografía · Sociable · Edición","ab.exp":"Experiencia",
  "ab.e1":"Reportaje fotográfico","ab.e2":"Fotografía de evento","ab.e3":"Reportaje fotográfico pop-up, moda","ab.e4":"Fotografía de evento femenino","ab.e5":"Fotografía de evento techno",
  "f2":"Reportaje fotográfico de un pop-up de moda.",
  "f3":"Fotografía de evento femenino.",
  "f7":"El proyecto de Via Urbana y fotografía de retrato nació de una sesión de fotos pensada en la cultura urbana y el hip hop, dentro del mundo de la danza.",
  "f8":"The Black Mamba, una banda portuguesa que representó a Portugal en Eurovisión 2021. Fotografié el concierto en 2025.",
  "d3.desc":"La Habitación 3D fue un proyecto escolar: crear una habitación creativa, o la que te gustaría tener en el futuro. Elegí mezclar la cultura japonesa con lo moderno, al atardecer."
});
Object.assign(T.en, {
  "ab.p1":"I'm Ana Pérez, I'm 18 and I study Multimedia. Passionate about urban dance, I've developed a modern, extravagant and expressive style, known by the nickname “Toya”.",
  "ab.p2":"I work as a freelancer at events, always taking on new challenges and chances to learn.",
  "ab.edu":"Education","ab.edu.v":"Vocational course in Multimedia (12th grade)","ab.skills":"Skills","ab.skills.v":"Creative · Critical thinking · Photography · Sociable · Editing","ab.exp":"Experience",
  "ab.e1":"Photo report","ab.e2":"Event photography","ab.e3":"Photo report, fashion pop-up","ab.e4":"Women's event photography","ab.e5":"Techno event photography",
  "f2":"Photo report of a fashion pop-up.",
  "f3":"Women's event photography.",
  "f7":"The Via Urbana and portrait project grew out of a photo session built around urban culture and hip hop, inside the world of dance.",
  "f8":"The Black Mamba, a Portuguese band that represented Portugal at Eurovision 2021. I photographed their concert in 2025.",
  "d3.desc":"The 3D Room was a school project: design a creative room, or the one you'd like to have in the future. I chose to mix Japanese culture with modern design, at sunset."
});

Object.assign(T.pt, { "f7":"World of Dance, batalhas de hip hop e competições: a energia do palco, a final, o VS e o círculo à volta." });
Object.assign(T.es, { "f7":"World of Dance, batallas de hip hop y competiciones: la energía del escenario, la final, el VS y el círculo alrededor." });
Object.assign(T.en, { "f7":"World of Dance, hip hop battles and competitions: the energy on stage, the final, the VS and the circle around it." });

Object.assign(T.pt, { "v6":"Dança urbana filmada e montada por mim: hip hop, estilo e ritmo, com cada corte a cair na batida.","v7":"A LMK em competição: o palco, a coreografia e a energia da equipa, filmados e editados por mim.","v8":"Vídeo para a LMK, crew de dança urbana: treinos, palco e a equipa por trás de cada coreografia." });
Object.assign(T.es, { "v6":"Danza urbana filmada y montada por mí: hip hop, estilo y ritmo, con cada corte cayendo en el beat.","v7":"LMK en competición: el escenario, la coreografía y la energía del equipo, grabados y editados por mí.","v8":"Vídeo para LMK, crew de danza urbana: entrenos, escenario y el equipo detrás de cada coreografía." });
Object.assign(T.en, { "v6":"Urban dance filmed and edited by me: hip hop, style and rhythm, with every cut landing on the beat.","v7":"LMK in competition: the stage, the choreography and the crew's energy, filmed and edited by me.","v8":"A video for LMK, an urban dance crew: training, the stage and the team behind every routine." });

/* Texto "Sobre mim" escrito pela Ana */
Object.assign(T.pt, {
  "ab.p1":"Sou uma jovem de 18 anos, técnica de Multimédia. Já realizei pósteres, design web e websites para contratantes, participei no concurso Erasmus+ e trabalhei como fotógrafa em diferentes eventos.",
  "ab.p2":"Para além da minha “vida profissional”, tenho participado em vários projetos de voluntariado na área do desporto e da proteção ambiental com a Jovem Cascais e o seu programa de voluntariado, no qual estou envolvida desde os 12 anos.",
  "ab.p3":"Além de ser artista gráfica, pratico dança desde os 6 anos, explorando estilos urbanos e clássicos. Estou aqui em busca de experiência e de novas formas de ver o mundo."
});
Object.assign(T.es, {
  "ab.p1":"Soy una joven de 18 años, técnica en Multimedia. He realizado pósters, diseño web y sitios web para clientes, participé en el concurso Erasmus+ y trabajé como fotógrafa en distintos eventos.",
  "ab.p2":"Además de mi “vida profesional”, he participado en varios proyectos de voluntariado en el área del deporte y la protección del medio ambiente con Jovem Cascais y su programa de voluntariado, en el que estoy desde los 12 años.",
  "ab.p3":"Además de ser artista gráfica, bailo desde los 6 años, explorando estilos urbanos y clásicos. Estoy aquí en busca de experiencia y de nuevas formas de ver el mundo."
});
Object.assign(T.en, {
  "ab.p1":"I'm 18 and a Multimedia technician. I've made posters, web design and websites for clients, taken part in the Erasmus+ competition and worked as a photographer at different events.",
  "ab.p2":"Beyond my “professional life”, I've taken part in several volunteering projects in sport and environmental protection with Jovem Cascais and its volunteering programme, which I've been part of since I was 12.",
  "ab.p3":"Besides being a graphic artist, I've been dancing since I was 6, exploring urban and classical styles. I'm here looking for experience and new ways of seeing the world."
});

Object.assign(T.pt, { "des.lmk.p":"Identidade visual para a LMK Dance School: logótipo, cartaz, website, livro “Legacy · Mindset · Knowledge”, papelaria, cartões, autocolantes e garrafa. Preto, amarelo e uma órbita que dá movimento à marca." });
Object.assign(T.es, { "des.lmk.p":"Identidad visual para LMK Dance School: logotipo, cartel, web, libro “Legacy · Mindset · Knowledge”, papelería, tarjetas, pegatinas y botella. Negro, amarillo y una órbita que da movimiento a la marca." });
Object.assign(T.en, { "des.lmk.p":"Visual identity for LMK Dance School: logo, poster, website, the “Legacy · Mindset · Knowledge” book, stationery, business cards, stickers and a bottle. Black, yellow and an orbit that gives the brand movement." });

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const store = {
  get(k){ try { return localStorage.getItem(k); } catch(e){ return null; } },
  set(k,v){ try { localStorage.setItem(k,v); } catch(e){} },
  sget(k){ try { return sessionStorage.getItem(k); } catch(e){ return null; } },
  sset(k,v){ try { sessionStorage.setItem(k,v); } catch(e){} }
};
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
const fine = matchMedia("(hover:hover) and (pointer:fine)").matches;
const PAGE = document.body.dataset.page;
document.documentElement.classList.add("js");
if (fine) document.body.classList.add("fine");

let lang = T[store.get("toya-lang")] ? store.get("toya-lang") : "pt";
const t = k => (T[lang] && T[lang][k]) || T.pt[k] || k;
let soundOn = store.sget("toya-sound") === "1";

/* ---------------- Cabecera, footer y demás (comunes) ---------------- */
const kanji = { index:"入口", video:"映像", fotos:"写真", otros:"他", "3d":"立体", design:"意匠" };
const arrow = `<svg width="16" height="16" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M3 9h12M10 4l5 5-5 5"/></svg>`;
const expandIco = `<svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M2 6V2h4M14 6V2h-4M2 10v4h4M14 10v4h-4"/></svg>`;

document.body.insertAdjacentHTML("afterbegin", `
<header class="top" id="top">
  <a class="logo" href="index.html" aria-label="Toya — inicio"><img src="${A}logo.png" alt="Toya"></a>
  <nav class="nav glass" id="nav" aria-label="Secciones">
    <a href="video.html" data-p="video"><span data-i18n="nav.video">Vídeo</span><span class="jp">映像</span></a>
    <a href="fotos.html" data-p="fotos"><span data-i18n="nav.fotos">Fotos</span><span class="jp">写真</span></a>
    <a href="otros.html" data-p="otros"><span data-i18n="nav.otros">Outros</span><span class="jp">他</span></a>
  </nav>
  <div class="ctrl">
    <div class="lang glass" role="group" aria-label="Idioma">
      <button type="button" data-lang="es">ES</button><button type="button" data-lang="en">EN</button><button type="button" data-lang="pt">PT</button>
    </div>
    <button type="button" class="pill glass toggle" id="navToggle" aria-expanded="true" aria-controls="nav"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M10 3 5 8l5 5"/></svg></button>
  </div>
</header>
<div class="shoji" id="shoji" aria-hidden="true"><div class="p p1"></div><div class="p p2"></div><div class="p p3"><span class="k" id="shojiK"></span></div></div>`);

document.body.insertAdjacentHTML("beforeend", `
<footer id="contacto" class="dark wrap" data-tone="dark">
  <div class="inner">
    <div class="fstrip rv">${FOT_FINAL.map((f,i) => `<div class="media" data-zoom style="--i:${i}"><img src="${f}" alt="" loading="lazy" style="height:100%;object-fit:cover"></div>`).join("")}</div>
    <span class="eyebrow" data-i18n="contact">Contacto</span>
    <p class="ft-beat rv" aria-label="">
      <span class="ft-l1" data-i18n="talk.a">Vamos</span>
      <span class="ft-l2"><span data-i18n="talk.b">falar.</span><i class="eq" aria-hidden="true"><b></b><b></b><b></b><b></b></i></span>
    </p>
    <p style="margin-top:22px;color:var(--silver);max-width:46ch" data-i18n="ft.text"></p>
    <div class="f-actions">
      <a class="cta cta-white" href="mailto:${EMAIL}"><span>Email</span>${arrow}</a>
      <a class="cv-btn" href="${CV}" target="_blank" rel="noopener"><span data-i18n="cv">Ver CV</span>${arrow}</a>
    </div>
    <div class="fgrid">
      <div><span class="eyebrow">Email</span><span class="val" id="mail">${EMAIL}</span><button type="button" class="copy" id="copyMail" data-i18n="copy">Copiar</button></div>
      <div><span class="eyebrow">Instagram</span><a href="${INSTAGRAM.url}" target="_blank" rel="noopener">${INSTAGRAM.label}</a></div>
      <div><span class="eyebrow" data-i18n="ft.from">De</span><span class="val">Portugal &amp; Venezuela</span></div>
      <div><span class="eyebrow" data-i18n="ft.avail">Disponível para</span><span class="val" data-i18n="ft.avail.v"></span></div>
    </div>
    <div class="fbottom">
      <a class="logo inv" href="index.html"><img src="${A}logo.png" alt="Toya"></a>
      <span>© 2026 Ana Pérez · Toya</span>
    </div>
  </div>
</footer>
<a class="fab glass-light" href="#contacto" id="fab"><img src="${A}logo.png" alt=""><span data-i18n="contact">Contacto</span></a>
<div class="lb" id="lb" role="dialog" aria-modal="true" aria-labelledby="lbT">
  <div class="box">
    <div class="stage" id="lbStage"></div>
    <div class="bar glass-panel"><h3 id="lbT"></h3><div class="acts">
      <button type="button" class="pill snd-toggle" id="lbSound" aria-pressed="false"></button>
      <button type="button" class="pill" id="lbClose" data-i18n="close">Fechar</button>
    </div></div>
  </div>
</div>
<div class="toast" id="toast"></div>`);

$$(".nav a").forEach(a => a.classList.toggle("on", a.dataset.p === PAGE));

/* ---------------- Texto animado tipo After Effects ---------------- */
function splitAE(){
  $$("[data-ae]").forEach(el => {
    const txt = el.textContent; let i = 0;
    el.setAttribute("aria-label", txt);
    el.innerHTML = txt.split(" ").map(w => `<span class="wd" aria-hidden="true">${[...w].map(c => `<span class="lt" style="--i:${i++}">${c}</span>`).join("")}</span>`).join(" ");
  });
}

/* ---------------- Idioma ---------------- */
function applyLang(){
  document.documentElement.lang = lang;
  $$("[data-i18n]").forEach(el => { el.textContent = t(el.dataset.i18n); });
  $$("[data-i18n-aria]").forEach(el => el.setAttribute("aria-label", t(el.dataset.i18nAria)));
  splitAE();
  $$("[data-lang]").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
  syncSound(); navLabel();
}
$$("[data-lang]").forEach(b => b.addEventListener("click", () => { lang = b.dataset.lang; store.set("toya-lang", lang); applyLang(); }));

/* ---------------- Ocultar menú ---------------- */
const tg = $("#navToggle");
function navLabel(){ tg.setAttribute("aria-label", t(tg.getAttribute("aria-expanded") === "true" ? "nav.hide" : "nav.show")); }
tg.addEventListener("click", () => {
  const open = tg.getAttribute("aria-expanded") === "true";
  tg.setAttribute("aria-expanded", String(!open));
  $("#nav").classList.toggle("hide", open);
  store.set("toya-nav", open ? "0" : "1"); navLabel();
});
if (store.get("toya-nav") === "0") { tg.setAttribute("aria-expanded","false"); $("#nav").classList.add("hide"); }

/* ---------------- Tono de cabecera (claro / oscuro) ---------------- */
const headerEl = $("#top");
function setTone(dark){ headerEl.classList.toggle("on-dark", dark); headerEl.classList.toggle("on-light", !dark); }
function toneAtTop(){
  const probe = document.elementsFromPoint(innerWidth/2, 70).find(el => el.closest && el.closest("[data-tone]"));
  const zone = probe && probe.closest("[data-tone]");
  setTone(zone ? zone.dataset.tone === "dark" : false);
}

/* ---------------- Transición entre páginas ---------------- */
const shoji = $("#shoji");
if (store.sget("toya-trans") && !reduce) {
  $("#shojiK").textContent = kanji[PAGE] || "";
  shoji.classList.add("hold");
  store.sset("toya-trans", "");
  requestAnimationFrame(() => requestAnimationFrame(() => {
    shoji.classList.remove("hold"); shoji.classList.add("open");
    setTimeout(() => shoji.classList.remove("open"), 800);
  }));
}
document.addEventListener("click", e => {
  const a = e.target.closest("a[href]");
  if (!a || a.target === "_blank" || e.metaKey || e.ctrlKey || e.shiftKey) return;
  const href = a.getAttribute("href");
  if (href.startsWith("#")) {
    const el = document.getElementById(href.slice(1));
    if (el) { e.preventDefault(); el.scrollIntoView({ behavior: reduce ? "auto" : "smooth" }); }
    return;
  }
  if (!/\.html(#.*)?$/.test(href) || reduce) return;
  e.preventDefault();
  const dest = href.replace(/\.html.*/, "").split("/").pop();
  $("#shojiK").textContent = kanji[dest] || "";
  shoji.classList.remove("open"); shoji.classList.add("cover");
  store.sset("toya-trans", "1");
  setTimeout(() => { location.href = href; }, 700);
});
addEventListener("pageshow", e => { if (e.persisted) shoji.classList.remove("cover","hold","open"); });

/* Cursor: un cuadrado simple, definido en css/style.css */

/* ---------------- Archivos que faltan ---------------- */
function markMissing(el){
  const box = el.closest(".media, figure, .pg") || el.parentElement;
  if (!box) return;
  box.classList.add("missing", "media");
  box.dataset.missing = (el.getAttribute("src") || "").replace(A, "assets/");
  el.remove();
}
$$("img").forEach(img => { if (img.complete && img.naturalWidth === 0 && img.getAttribute("src")) markMissing(img); else img.addEventListener("error", () => markMissing(img), { once:true }); });
$$("video").forEach(v => v.addEventListener("error", () => markMissing(v), { once:true }));
$$("video source").forEach(s => s.addEventListener("error", () => markMissing(s.parentElement), { once:true }));

/* ---------------- Vídeos: se reproducen solo cuando se ven ---------------- */
const vio = "IntersectionObserver" in window ? new IntersectionObserver(es => es.forEach(e => {
  const v = e.target;
  if (e.isIntersecting) { v.muted = true; v.play().catch(()=>{}); } else v.pause();
}), { threshold:.2 }) : null;
$$("video[data-auto]").forEach(v => { v.muted = true; v.loop = true; v.playsInline = true; vio ? vio.observe(v) : v.play().catch(()=>{}); });

/* ---------------- Lightbox (ampliar) ---------------- */
const lb = $("#lb");
let lastFocus = null;
function openLB(src, title, isVideo){
  lastFocus = document.activeElement;
  $("#lbStage").innerHTML = isVideo
    ? `<video src="${src}" controls playsinline loop autoplay></video>`
    : `<img src="${src}" alt="${title || ""}">`;
  $("#lbT").textContent = title || "";
  $("#lbSound").hidden = !isVideo;
  const v = $("#lbStage video");
  if (v) { v.muted = !soundOn; v.play().catch(()=>{}); v.addEventListener("volumechange", () => { if (soundOn === v.muted) { soundOn = !v.muted; store.sset("toya-sound", soundOn ? "1" : "0"); syncSound(); } }); }
  lb.classList.add("on"); $("#lbClose").focus();
}
function closeLB(){ lb.classList.remove("on"); const v = $("#lbStage video"); if (v) v.pause(); setTimeout(() => { if (!lb.classList.contains("on")) $("#lbStage").innerHTML = ""; }, 400); lastFocus && lastFocus.focus(); }
$("#lbClose").addEventListener("click", closeLB);
lb.addEventListener("click", e => { if (e.target === lb || e.target.id === "lbStage") closeLB(); });
addEventListener("keydown", e => { if (e.key === "Escape" && lb.classList.contains("on")) closeLB(); });

function bindZoom(el){
  if (el.dataset.bound) return; el.dataset.bound = "1";
  el.classList.add("zoomable");
  if (!el.hasAttribute("tabindex")) el.tabIndex = 0;
  el.setAttribute("role", "button");
  if (el.classList.contains("media") && !el.querySelector(".expand")) el.insertAdjacentHTML("beforeend", `<span class="expand glass" aria-hidden="true">${expandIco}</span>`);
  const go = () => {
    if (el.classList.contains("missing")) return;
    const v = el.querySelector("video"), i = el.querySelector("img");
    const src = el.dataset.zoom || (v && (v.currentSrc || v.getAttribute("src"))) || (i && i.getAttribute("src"));
    if (src) openLB(src, el.dataset.title || "", !!v || /\.(mp4|webm|mov)$/i.test(src));
  };
  el.addEventListener("click", e => { if (e.target.closest(".snd")) return; go(); });
  el.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); go(); } });
}
$$("[data-zoom]").forEach(bindZoom);

/* ---------------- Sonido (siempre opcional, empieza apagado) ---------------- */
function syncSound(){
  $$(".snd-toggle").forEach(b => { b.setAttribute("aria-pressed", String(soundOn)); b.innerHTML = `<i class="eq${soundOn ? " on" : ""}" aria-hidden="true"><b></b><b></b><b></b><b></b></i>${t(soundOn ? "snd.on" : "snd.off")}`; });
}
$$(".snd-toggle").forEach(b => b.addEventListener("click", e => {
  e.stopPropagation();
  soundOn = !soundOn; store.sset("toya-sound", soundOn ? "1" : "0"); syncSound();
  const own = b.closest(".media, .stick");
  const v = own ? own.querySelector("video") : $("#lbStage video");
  if (v) { v.muted = !soundOn; if (soundOn) v.play().catch(()=>{}); }
  if (!soundOn) $$("video").forEach(x => x.muted = true);
}));

/* ---------------- Revelado al hacer scroll ---------------- */
const rio = "IntersectionObserver" in window ? new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); rio.unobserve(e.target); } }), { threshold:.1, rootMargin:"0px 0px -5% 0px" }) : null;
function observe(){ $$(".rv:not(.in), .ae:not(.in), .ae-track:not(.in), .ae-wipe:not(.in), .ae-zoom:not(.in), .ae-line:not(.in)").forEach(el => rio ? rio.observe(el) : el.classList.add("in")); }

/* ---------------- Contacto ---------------- */
function toast(m){ const el = $("#toast"); el.textContent = m; el.classList.add("on"); setTimeout(() => el.classList.remove("on"), 1800); }
$("#copyMail").addEventListener("click", () => {
  const sel = () => { const r = document.createRange(); r.selectNodeContents($("#mail")); const s = getSelection(); s.removeAllRanges(); s.addRange(r); };
  try { navigator.clipboard.writeText(EMAIL).then(() => toast(t("copied")), sel); } catch(e){ sel(); }
});

/* =========================================================
   INICIO
   ========================================================= */
if (PAGE === "index") {
  // Mural tipo collage: cada pegatina se mueve a su velocidad al hacer scroll
  const chips = $$(".chip[data-speed]");
  const collage = $(".collage");
  const para = () => {
    if (!collage || innerWidth < 760 || reduce) return;
    const r = collage.getBoundingClientRect();
    const c = (r.top + r.height/2 - innerHeight/2);
    chips.forEach(ch => ch.style.setProperty("--py", (c * parseFloat(ch.dataset.speed)).toFixed(1) + "px"));
  };
  addEventListener("scroll", para, { passive:true }); para();

  // Playlist: la miniatura de vídeo suena (sin audio) al pasar por encima; aleatorio y "me gusta"
  $$(".pl-row[href]").forEach(r => {
    const v = r.querySelector("video[data-hoverplay]");
    if (!v) return;
    r.addEventListener("mouseenter", () => v.play().catch(()=>{}));
    r.addEventListener("mouseleave", () => v.pause());
  });
  const shuffle = $("#plShuffle");
  if (shuffle) shuffle.addEventListener("click", () => {
    const rows = $$(".pl-row[href]");
    rows[(Math.random() * rows.length) | 0].click();
  });
  const like = $("#plLike");
  if (like) {
    if (store.get("toya-like") === "1") like.setAttribute("aria-pressed","true");
    like.addEventListener("click", () => { const on = like.getAttribute("aria-pressed") !== "true"; like.setAttribute("aria-pressed", String(on)); store.set("toya-like", on ? "1" : "0"); });
  }

  // Vídeo de presentación: se encoge en un marco al hacer scroll
  const hero = $("#hero"), hv = $("#heroVideo");
  if (hv) { hv.muted = true; hv.play().catch(()=>{}); }
  const heroScroll = () => {
    const max = hero.offsetHeight - innerHeight;
    hero.style.setProperty("--p", Math.min(1, Math.max(0, scrollY / max)).toFixed(3));
  };
  addEventListener("scroll", heroScroll, { passive:true }); heroScroll();

  // Vista previa al pasar por las secciones
  const peek = $("#peek");
  if (fine && peek) $$(".rows a").forEach(a => {
    a.addEventListener("mouseenter", () => {
      const s = a.dataset.peek;
      peek.innerHTML = /\.(mp4|webm|mov)$/i.test(s) ? `<video src="${s}" muted loop playsinline autoplay></video>` : `<img src="${s}" alt="" style="width:100%;height:100%;object-fit:cover">`;
      peek.classList.add("on");
    });
    a.addEventListener("mouseleave", () => { peek.classList.remove("on"); });
    a.addEventListener("mousemove", e => { peek.style.left = (e.clientX + 30) + "px"; peek.style.top = (e.clientY - 140) + "px"; });
  });
}

/* =========================================================
   FOTOS
   ========================================================= */
if (PAGE === "fotos") {
  // Cada galería se duplica para que el desfile no tenga cortes
  $$(".track").forEach((tr, n) => {
    const figs = $$("figure", tr);
    tr.style.setProperty("--dur", (figs.length * 9) + "s");
    figs.forEach(f => tr.appendChild(f.cloneNode(true)));
    $$("figure", tr).forEach((f, k) => {
      const img = f.querySelector("img");
      if (k >= figs.length) { f.setAttribute("aria-hidden","true"); f.tabIndex = -1; }
      if (img) img.addEventListener("error", () => markMissing(img), { once:true });
      f.dataset.title = tr.closest(".loc").querySelector(".title").textContent;
      bindZoom(f);
    });
  });
  // Mural final con fotos de todas las galerías
  const srcs = [...new Set($$(".track img").map(i => i.getAttribute("src")))];
  const wall = $("#wall");
  if (wall && srcs.length) {
    const pick = Array.from({length:24}, (_, k) => srcs[(k*7) % srcs.length]);
    wall.innerHTML = pick.map((s, k) => `<div class="media" data-zoom="${s}" style="--i:${k % 8}"><img src="${s}" alt="" loading="lazy" style="height:100%;object-fit:cover"></div>`).join("");
    $$("img", wall).forEach(img => img.addEventListener("error", () => markMissing(img), { once:true }));
    $$("[data-zoom]", wall).forEach(bindZoom);
  }
}

/* =========================================================
   VÍDEO / 3D — cada proyecto entra abriéndose y el siguiente lo tapa
   ========================================================= */
const vprojs = $$(".vproj");
if (vprojs.length) {
  const vstep = () => {
    const h = innerHeight;
    vprojs.forEach((p, k) => {
      const r = p.getBoundingClientRect();
      const e = Math.min(1, Math.max(0, (h - r.top) / (h * .7)));
      p.style.setProperty("--e", reduce ? 1 : e.toFixed(3));
      const next = vprojs[k + 1];
      let d = 0;
      if (next) { const nr = next.getBoundingClientRect(); d = Math.min(1, Math.max(0, 1 - nr.top / h)); }
      p.style.setProperty("--d", reduce ? 0 : (d * .85).toFixed(3));
    });
  };
  addEventListener("scroll", vstep, { passive:true }); addEventListener("resize", vstep); vstep();
}

/* =========================================================
   3D — interfaz tipo Blender: elegir objeto en el Outliner o en la tira
   ========================================================= */
if ($("#blView")) {
  const view = $("#blView"), items = $$("[data-obj]");
  const name = $("#blObjName"), stat = $("#blStat");
  const select = key => {
    const src = items.find(x => x.dataset.obj === key);
    if (!src) return;
    items.forEach(x => x.classList.toggle("sel", x.dataset.obj === key));
    const isVid = /\.mp4$/i.test(src.dataset.src);
    view.innerHTML = isVid
      ? `<video src="${src.dataset.src}" muted loop playsinline autoplay></video>`
      : `<img src="${src.dataset.src}" alt="${src.dataset.label}">`;
    view.dataset.zoom = src.dataset.src; view.dataset.title = src.dataset.label;
    const m = view.firstElementChild;
    m.addEventListener("error", () => markMissing(m), { once:true });
    if (name) name.textContent = src.dataset.label;
    if (stat) stat.textContent = `${src.dataset.label} | ${items.findIndex(x => x === src) + 1}/${new Set(items.map(x => x.dataset.obj)).size}`;
  };
  items.forEach(x => {
    x.addEventListener("click", () => select(x.dataset.obj));
    x.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); select(x.dataset.obj); } });
  });
  bindZoom($("#blFrame"));
  select("3d6");
  // Línea de tiempo: el cursor azul sigue al vídeo
  const head = $("#blHead"), fr = $("#blFrameNo");
  if (head) (function tl(){
    const v = view.querySelector("video");
    const p = v && v.duration ? v.currentTime / v.duration : 0;
    if (head) head.style.left = (p * 100) + "%";
    if (fr) fr.textContent = Math.round(1 + p * 249);
    requestAnimationFrame(tl);
  })();
}

/* Design: el mockup a pantalla completa se acerca un poco al bajar */
const fm = $("#fullMockImg");
if (fm && !reduce) {
  const fmStep = () => {
    const r = fm.parentElement.getBoundingClientRect();
    const p = Math.min(1, Math.max(0, (innerHeight - r.top) / (innerHeight + r.height)));
    fm.style.setProperty("--fs", (1.14 - p * .14).toFixed(3));
  };
  addEventListener("scroll", fmStep, { passive:true }); fmStep();
}

/* ---------------- Scroll común ---------------- */
function onScroll(){
  toneAtTop();
  const f = $("#contacto").getBoundingClientRect().top < innerHeight * .85;
  $("#fab").classList.toggle("gone", f);
}
addEventListener("scroll", onScroll, { passive:true });
addEventListener("resize", onScroll);

applyLang(); observe(); onScroll();
