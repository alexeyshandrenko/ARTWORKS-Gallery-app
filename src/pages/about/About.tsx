import { useRef, useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, EffectFade, Autoplay } from "swiper";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import Container from "../../components/container/Container";
import Description from "../../components/ui/description/Description";
import Title from "../../components/ui/title/Title";
import styles from "./styles/about.module.scss";

import { LocaleContext } from "../../components/wrapper/Wrapper";

const About = () => {
  const { locale } = useContext(LocaleContext);

  const swiperNavPrevRef = useRef(null);
  const swiperNavNextRef = useRef(null);

  return (
    <main className={styles.main}>
      <Container>
        <div className={styles.main__container}>
          <Swiper
            modules={[Navigation, EffectFade, Autoplay]}
            autoplay={{
              delay: 5000,
            }}
            speed={800}
            slidesPerView={1}
            effect={"fade"}
            loop
            className={styles.mySwiper}
          >
            <SwiperSlide className={styles.mySwiper__slide}>
              <img src="/images/nadezhda/nadezhda1.jpg" alt="nadezhda" />
            </SwiperSlide>
            <SwiperSlide className={styles.mySwiper__slide}>
              <img src="/images/nadezhda/nadezhda2.jpg" alt="nadezhda" />
            </SwiperSlide>
            {/* <div className={styles.swiperNavPrev} ref={swiperNavPrevRef}></div>
            <div className={styles.swiperNavNext} ref={swiperNavNextRef}></div> */}
          </Swiper>
          <img src="/images/nadezhda/nadezhda2.jpg" alt="picture1" />
          <ul className={styles.main__description}>
            <li>
              <Description>
                {locale === "ru"
                  ? "Надежда Ховаева создает произведения современного искусства, используя разные медиа, в том числе и в фиджитал формате. Как художника, Надежду интересуют мироощущение человека, его осознание себя и внутреннего, скрытого потенциала. Надежда исследует механизмы памяти, глубоко укоренившиеся убеждения, эмоции и воспоминания, которые хранятся в системе мозга и управляют жизнью людей на подсознательном уровне. Память выступает связующим звеном между прошлым человека, его настоящим и будущим."
                  : "Nadia Khovaeva creates works of contemporary art, using different media, including digital format. How an artist who is interested in a person's worldview, his awareness of oneself and inner, hidden potential. Hope explores memory mechanisms, deep-rooted beliefs, emotions and memories that are stored in the brain system and they control people's lives on a subconscious level. Memory acts as a link between a person's past and his present and the future."}
              </Description>
            </li>
            <li>
              <Description>
                {locale === "ru"
                  ? "Картина становится игровым экспериментом, позволяющим вскрыть традиционную оптику восприятия действительности и глубже исследовать внутреннее пространство, находящееся вне разума. Наш мир - сплошная геометрия, четко выверенная и охраняемая нашим рациональным разумом. Надежда позволяет внутренней реальности выйти наружу, быть ирреальной. Ей важно, чтобы зритель воспринимал искусство сердцем, интуицией, внутренним зрением. Чтобы это был портал к Сущности, как срез, обнажающий, что внутри. Чувства-мысли-действия- именно так происходит рождение картины. Осознавая мысль, можно осознать тонкие оттенки чувств, и тем самым раскрыть свою сущность. Творческий процесс художницы выглядит как импульс к воплощению ее внутренних видений и чувств. Зритель подсознательно улавливает эти вибрации, его ощущения и эмоции служат откликом. Таким образом происходит трансформация и движение энергии между художницей и зрителем."
                  : "The picture becomes a game experiment that allows you to open traditional optics of perception of reality and deeper explore the inner space that is outside the mind. Our world is a solid geometry, clearly verified and guarded by our a rational mind. Hope allows inner reality to go outside, to be unreal. It is important to her that the viewer he perceived art with his heart, intuition, and inner vision. So that it was a portal to the Essence, as a slice exposing that inside. Feelings-thoughts-actions - this is how birth happens paintings. By being aware of a thought, one can become aware of subtle shades of feelings, and thereby reveal your essence. The creative process of the artist it looks like an impulse to embody her inner visions and feelings. The viewer subconsciously catches these vibrations, his feelings and emotions serve as a response. Thus it happens transformation and movement of energy between the artist and the viewer."}
              </Description>
            </li>
            <li>
              <Description>
                {locale === "ru"
                  ? "Любимый медиум Надежды – акварель. Это тот медиум, который сам желает быть иррациональным, создавая нерукотворные эффекты. Надежда изображает образы, несущие в себе визуальную и/или смысловую инверсию, как результат импринтинга, так называемой “карты памяти”. Она рассматривает внутренний мир человека с разных сторон: как единство души и тела; как единство и борьбу противоположностей; как вселенную, в которой все цельно и совершенно. Сквозь призму памяти можно увидеть где и как нарушается баланс, гармония внутри человека. С точки зрения метафизики человек - энергия, которая несет в себе движение, трансформацию и непрерывность во времени. Надежда убеждена, что познавая внутренний мир, человек может совершить новый скачок в своем развитии. Самая мощная стихия та, которая внутри нас. Познать ее - значит обрести невероятную силу!"
                  : "Nadia's favorite medium is watercolor. This is the medium who himself he wants to be irrational, creating man-made effects. Hope depicts images that carry a visual and/or semantic inversion, as a result of imprinting, the so-called “memory cards“. She considers the inner world of a person with different sides: as the unity of soul and body; as unity and struggle opposites; as a universe in which everything is whole and completely. Through the prism of memory, you can see where and how the balance, harmony within a person is disturbed. From the point of view of metaphysics man is an energy that carries movement, transformation and continuity in time. Nadia is convinced that knowing the inner world, a person can make a new leap in its development. The most powerful element is the one that is inside us. To know it means to gain incredible power!"}
              </Description>
            </li>
          </ul>

          <div className={styles.main__subtitle}>
            <Title>{locale === "ru" ? "Био" : "Bio"}</Title>
          </div>

          <ul className={styles.main__description}>
            <li>
              <Description>
                {locale === "ru"
                  ? "Ховаева Надежда родилась в городе Волгограде 25 сентября 1976г. Получила высшее образование в Волгоградской архитектурно-строительной академии. В дальнейшем изучала современное искусство, философию и психологию. Надежда с детства была вовлечена в творчество, много рисовала. Большое влияние на мировосприятие оказало проведенное в Монголии детство. Именно тогда она поняла, насколько многообразен мир - другая природа, люди, культура. Буддийские храмы, маски, статуи-великаны, музыка, орнаменты поражали воображение. Все это обогатило внутренний мир и оказало большое влияние на развитие личности. Эти картины навсегда остались, как отпечатки,в памяти, которая стала предметом ее исследования в дальнейшем."
                  : "Nadia Khovaeva was born in Volgograd on September 25, 1976. She received higher education in Volgograd architectural and construction academy. In the future , I studied contemporary art, philosophy and psychology. Hope since childhood she was involved in creativity, painted a lot. Great influence on the perception of the world was influenced by the childhood spent in Mongolia. Exactly then she realized how diverse the world is - another nature, people, culture. Buddhist temples, masks, giant statues, the music and ornaments were amazing. All this has enriched inner peace and had a great impact on the development of personality. These paintings have remained forever, like prints, in the memory that became the subject of her research in the future."}
              </Description>
            </li>
            <li>
              <Description>
                {locale === "ru"
                  ? "Надежда участник и призер многих международных и российских конкурсов, ее работы находятся в частных коллекциях в России, Испании, Германии."
                  : "Nadia is a participant and prize-winner of many international and Russian competitions, her works are in private collections in Russia, Spain, Germany."}
              </Description>
            </li>
          </ul>

          <div className={styles.main__subtitle}>
            <Title>
              {locale === "ru"
                ? "Избранные коллективные выставки"
                : "Selected collective exhibitions"}
            </Title>
          </div>

          <ul className={styles.main__dates}>
            <li className={styles.main__date}>
              <Description>2023</Description>
              <Description>
                {locale === "ru"
                  ? "«Ангелы России» благотворительная выставка, Москва, Мануфактура 51"
                  : "“Angels of Russia“ charity exhibition, Moscow, Manufactory 51"}
              </Description>
            </li>
            <li>
              <Description>2022</Description>
              <Description>
                {locale === "ru"
                  ? "«Искусство и спорт» Москва, Omelchenko Gallery"
                  : "“Art and Sport“ Moscow, Omelchenko Gallery"}
              </Description>
            </li>
            <li>
              <Description>2022</Description>
              <Description>
                {locale === "ru"
                  ? "«Мир телу», Москва, YY Modern Artfond"
                  : "“The World of the body“, Moscow, YY Modern Artfond"}
              </Description>
            </li>
            <li>
              <Description>2022</Description>
              <Description>
                {locale === "ru"
                  ? "Волгоград, ВМИИ им.Машкова “Художник в городе”"
                  : "Volgograd, VMII im.Mashkova “Artist in the city”"}
              </Description>
            </li>
            <li>
              <Description>2022</Description>
              <Description>
                {locale === "ru"
                  ? "Конкурс в рамках юбилейного 25-го ПМЭФ «Создавая будущее 2050»"
                  : "Competition within the framework of the 25th anniversary SPIEF “Creating the future 2050“"}
              </Description>
            </li>
            <li>
              <Description>2022</Description>
              <Description>
                {locale === "ru"
                  ? "Москва, YY Modern Artfond, выставка современного искусства “Неосторожное движение как начало”"
                  : "Moscow, NN Modern Artfond, exhibition of contemporary art “Careless movement as a beginning”"}
              </Description>
            </li>
            <li>
              <Description>2022</Description>
              <Description>
                {locale === "ru"
                  ? "Крым, Алушта, 4-я Международная биеннале современной акварели"
                  : "Crimea, Alushta, 4th International Biennale of Modern Watercolors"}
              </Description>
            </li>
            <li>
              <Description>2022</Description>
              <Description>
                {locale === "ru"
                  ? "Москва, YY Modern Artfond, выставка современного искусства “Белый-свет”"
                  : "Moscow, NN Modern Artfond, exhibition of contemporary art “White-light”"}
              </Description>
            </li>
            <li>
              <Description>2021</Description>
              <Description>
                {locale === "ru"
                  ? "Волгоград, ВМИИ им.Машкова “Что нас объединяет”"
                  : " Volgograd, VMII im.Mashkova “What unites us”"}
              </Description>
            </li>
            <li>
              <Description>2021</Description>
              <Description>
                {locale === "ru"
                  ? "Ниигата, Япония, Международная выставка акварели"
                  : "Niigata, Japan, International Watercolor Exhibition"}
              </Description>
            </li>
            <li>
              <Description>2021</Description>
              <Description>
                {locale === "ru"
                  ? "Москва, IWS Sare Gallery, выставка современной акварели “Dreams come True”"
                  : "Moscow, IWS Sare Gallery, exhibition of modern watercolors “Dreams come True”"}
              </Description>
            </li>
            <li>
              <Description>2020</Description>
              <Description>
                {locale === "ru"
                  ? "Санкт-Петербург, Международная выставка-конкурс современного искусства «Санкт-Петербургская неделя искусств»"
                  : "St. Petersburg, International Exhibition and Competition of Modern Art “St. Petersburg Art Week”"}
              </Description>
            </li>
            <li>
              <Description>2020</Description>
              <Description>
                {locale === "ru"
                  ? "Волгоград, ВМИИ им.Машкова «Город: здесь и сейчас»"
                  : "Volgograd, VMII im.Mashkova “The City: here and now”"}
              </Description>
            </li>
            <li>
              <Description>2020</Description>
              <Description>
                {locale === "ru"
                  ? "Москва, IWS Globe Sare Gallery, международная конкурс-выставка современных акварелистов «Dreams come true»"
                  : "Moscow, IWC Globe Sabre Gallery, international competition and exhibition modern watercolorists “Dreams come true”"}
              </Description>
            </li>
          </ul>

          <div className={styles.main__subtitle}>
            <Title>
              {locale === "ru"
                ? "Достижения и награды"
                : "Achievements and awards"}
            </Title>
          </div>

          <ul className={styles.main__dates}>
            <li className={styles.main__date}>
              <Description>2022</Description>
              <Description>
                {locale === "ru"
                  ? "Серия «Шипы и розы» - финалист конурса «Искусство и спорт» Москва, Omelchenko Gallery"
                  : "Series “Thorns and Roses” - finalist of the competition “Art and Sport” Moscow, Omelchenko Gallery"}
              </Description>
            </li>
            <li>
              <Description>2022</Description>
              <Description>
                {locale === "ru"
                  ? "Работа “Новый монумент”- финалист конкурса “Создавая будущее 2050”"
                  : "work “New Monument” - finalist of the contest “Creating the Future 2050”"}
              </Description>
            </li>
            <li>
              <Description>2021</Description>
              <Description>
                {locale === "ru"
                  ? "Работа “Взгляд в будущее” - приз финалиста Международный фонд современного акварельного искусства &quot;Шаг за шагом&quot; Польша"
                  : "work “Looking into the Future” - finalist prize International Foundation for Contemporary watercolor art &quot;Step by step&quot; Poland"}
              </Description>
            </li>
            <li>
              <Description>2021</Description>
              <Description>
                {locale === "ru"
                  ? "Работа “Равновесие” - финалист Международного онлайн-конкурса IFAM Global Малайзия"
                  : "work “Equilibrium” - finalist of the International Online Competition IFAM Global Malaysia"}
              </Description>
            </li>
            <li>
              <Description>2021</Description>
              <Description>
                {locale === "ru"
                  ? "работа «Вдохновение» - 2 место в номинации «Символическая картина» на международном конкурсе акварельного искусства г.Москва"
                  : "work “Inspiration” - 2nd place in the nomination “Symbolic picture” international competition of watercolor art in Moscow"}
              </Description>
            </li>
          </ul>
        </div>
      </Container>
    </main>
  );
};

export default About;
