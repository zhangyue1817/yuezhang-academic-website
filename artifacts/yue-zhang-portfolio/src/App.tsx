import { ArrowDownToLine, ArrowRight, ArrowUpRight, BookOpen, FileText, GraduationCap, Mail, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, Route, Switch, useLocation } from 'wouter';
import profilePhoto from './assets/profile-photo.jpg';
import featuredFigure from './assets/featured-figure.png';

const email = 'zhan1600@msu.edu';
const scholar = 'https://scholar.google.com/citations?user=BodxIHkAAAAJ&hl=en&oi=ao';
const linkedin = 'https://www.linkedin.com/in/yue-zhang-29432b1b9/';
const paper = 'https://doi.org/10.1145/3579505';
const cvPath = '/cv.pdf';

const navItems = [
  { href: '/', label: 'About' },
  { href: '/research', label: 'Research' },
  { href: '/teaching', label: 'Teaching' },
  { href: '/cv', label: 'CV' },
  { href: '/contact', label: 'Contact' },
];

const publications = [
  { authors: 'Holmstrom, A. J., Hu, J. M., Shebib, S. J., Lim, J. I., Zhang, Y., et al.', year: '2026', title: 'Theoretical distinctions between emotion and cognition content in supportive messages: Examining effects and mediating mechanisms.', journal: 'Communication Research. Advance online publication.', url: 'https://doi.org/10.1177/00936502261426538', tags: ['Supportive communication', 'Health'] },
  { authors: 'Edwards, A. L., Wolfe, B. H., Dorrance Hall, E., Kuch, L., Ma, M., Cui, X., & Zhang, Y.', year: '2026', title: 'Who matters and how: Parental communication in first-generation college graduates’ academic and career pathways.', journal: 'Journal of Family Communication, 26(3), 1–10.', url: 'https://doi.org/10.1080/15267431.2026.2687701', tags: ['Family communication'] },
  { authors: 'Dorrance Hall, E., Zhang, Y., Wolfe, B. H., Ma, M., Li, W., Kuch, L., Cui, X., & Edwards, A. L.', year: '2025', title: 'Different by definition: First generation college graduates’ perceptions of family marginalization, resilience, and flourishing.', journal: 'Journal of Social and Personal Relationships, 42(8), 1880–1902.', url: 'https://doi.org/10.1177/02654075251333239', tags: ['Family communication', 'Well-being'] },
  { authors: 'Dorrance Hall, E., Zhang, Y., Edwards, A. L., Wolfe, B. H., Morales, N., & Valdes, P.', year: '2025', title: 'STEM career interest development and persistence: What parents do, say, and should say.', journal: 'Annals of the International Communication Association, 49(4), 1–13.', url: 'https://doi.org/10.1093/anncom/wlaf018', tags: ['Family communication', 'STEM'] },
  { authors: 'Dorrance Hall, E., Watson, O., Zhang, Y., Kuhar, M., & Ma, M.', year: '2025', title: 'Linking Slovene women’s family-of-origin communication with perceptions of resilience, support availability and happiness in adulthood.', journal: 'Journal of Family Communication, 25(4), 336–355.', url: 'https://doi.org/10.1080/15267431.2025.2552220', tags: ['Family communication', 'Well-being'] },
  { authors: 'Dorrance Hall, E., Watson, O., Zhang, Y., Wolfe, B., Cui, X., Edwards, A. L., & Lawlor, D.', year: '2025', title: 'Parental support content and quality: Supporting girls’ and women’s interest and persistence in STEM.', journal: 'International Journal of Gender, Science and Technology, 17(1), 17–43.', url: 'https://genderandset.open.ac.uk/index.php/genderandset/article/view/1570', tags: ['Family communication', 'STEM'] },
  { authors: 'Wolfe, B. H., Ma, M., Kuch, L., Zhang, Y., Cui, X., Edwards, A. L., & Dorrance Hall, E.', year: '2025', title: 'Memorable messages from family members about pride for First Generation College Graduates.', journal: 'Journal of Family Communication, 25(2), 1–18.', url: 'https://doi.org/10.1080/15267431.2025.2451237', tags: ['Family communication'] },
  { authors: 'Hu, J., Zhu, R., & Zhang, Y.', year: '2024', title: 'Does online dating make relationships more successful? Replication and extension of Sharabi and Dorrance Hall.', journal: 'Cyberpsychology, Behavior, and Social Networking, 27(9), 635–640.', url: 'https://doi.org/10.1089/cyber.2024.0136', tags: ['Interpersonal communication'] },
  { authors: 'Dorrance Hall, E., Earle, K., Ma, M., Kuch, L., Zhang, Y., & Osika, K.', year: '2024', title: 'Women’s work-family balance in Slovenia: Associations with job stress, division of labor satisfaction, and relational wellbeing.', journal: 'International Journal of Communication, 18(1), 4770–4791.', url: 'https://ijoc.org/index.php/ijoc/article/view/21583/4822', tags: ['Family communication', 'Health'] },
  { authors: 'Holmstrom, A. J., Lim, J. I., Zhang, Y., & Shelle, G.', year: '2023', title: 'Factors influencing farmers’ use of adaptive and maladaptive coping strategies.', journal: 'Journal of Agromedicine, 28(4), 903–914.', url: 'https://doi.org/10.1080/1059924X.2023.2242835', tags: ['Health communication', 'Coping'] },
  { authors: 'Meng, J., Rheu, M., Zhang, Y., & Peng, W.', year: '2023', title: 'Mediated social support for distress reduction: AI chatbots vs. human.', journal: 'Proceedings of the ACM on Human-Computer Interaction, CSCW, 7(1), 1–25.', url: paper, tags: ['AI-mediated support', 'Health communication'] },
];

function ExternalLink({ href, children, className = '' }: { href: string; children: React.ReactNode; className?: string }) {
  return <a className={className} href={href} target="_blank" rel="noreferrer">{children}</a>;
}

function Header() {
  const [location] = useLocation();
  const [open, setOpen] = useState(false);
  return (
    <header className="topbar">
      <div className="container-wide flex min-h-[76px] items-center justify-between gap-5">
        <Link href="/" className="group flex items-center gap-3 no-underline" onClick={() => setOpen(false)}>
          <span className="grid h-10 w-10 place-items-center rounded-sm bg-[#0b2545] font-semibold tracking-tight text-white">YZ</span>
          <span className="leading-tight">
            <span className="display-font block text-[15px] font-extrabold text-[#0b2545]">Yue Zhang</span>
            <span className="mt-1 block text-[10px] tracking-[.13em] text-slate-500">COMMUNICATION SCHOLAR</span>
          </span>
        </Link>
        <nav aria-label="Main navigation" className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => <Link key={item.href} href={item.href} aria-current={location === item.href ? 'page' : undefined} className="nav-link py-2 text-[13px] font-semibold no-underline">{item.label}</Link>)}
        </nav>
        <button className="grid h-10 w-10 place-items-center text-[#0b2545] md:hidden" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>
      {open && <nav className="container-wide grid grid-cols-2 gap-2 pb-4 md:hidden" aria-label="Mobile navigation">
        {navItems.map((item) => <Link key={item.href} href={item.href} onClick={() => setOpen(false)} aria-current={location === item.href ? 'page' : undefined} className={`rounded px-3 py-2 text-sm font-semibold no-underline ${location === item.href ? 'bg-[#e3f4f2] text-[#08776f]' : 'text-slate-600 hover:bg-slate-100'}`}>{item.label}</Link>)}
      </nav>}
    </header>
  );
}

function Footer() {
  return <footer className="mt-24 border-t border-[#dce3e9] bg-[#f2f4f7]">
    <div className="container-wide flex flex-col justify-between gap-5 py-8 text-[12px] text-slate-600 sm:flex-row sm:items-center">
      <p className="m-0">© {new Date().getFullYear()} Yue Zhang · Personal academic portfolio</p>
      <div className="flex flex-wrap gap-5">
        <a className="hover:text-[#08776f]" href={`mailto:${email}`}>Email</a>
        <ExternalLink href={scholar} className="hover:text-[#08776f]">Google Scholar</ExternalLink>
        <ExternalLink href={linkedin} className="hover:text-[#08776f]">LinkedIn</ExternalLink>
      </div>
    </div>
  </footer>;
}

function PageFrame({ children }: { children: React.ReactNode }) {
  return <div className="portfolio"><Header />{children}<Footer /></div>;
}

function Home() {
  return <PageFrame>
    <main>
      <section className="container-wide grid gap-10 pb-20 pt-14 md:grid-cols-[1.12fr_.88fr] md:items-center md:gap-14 md:pb-28 md:pt-24">
        <div className="reveal">
          <p className="eyebrow mb-5">About · East Lansing, Michigan</p>
          <h1 className="display-font max-w-[660px] text-[clamp(2.8rem,6vw,5.3rem)] font-semibold leading-[1.02] text-[#0b2545]">How we support one another shapes how we thrive.</h1>
          <p className="mt-7 max-w-[580px] text-[17px] leading-8 text-[#526477]">I’m Yue Zhang, a Ph.D. candidate in Communication at Michigan State University. I study how people communicate through stress, support one another, and coordinate goals that matter for relationships, health, and well-being.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/research" className="btn btn-primary no-underline">Explore my research <ArrowRight size={16} /></Link>
            <a href={cvPath} download="Yue-Zhang-CV.pdf" className="btn btn-outline no-underline"><ArrowDownToLine size={16} /> Download CV</a>
          </div>
          <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-[#0b2545]">
            <ExternalLink href={scholar} className="inline-flex items-center gap-1.5 no-underline hover:text-[#08776f]">Google Scholar <ArrowUpRight size={14} /></ExternalLink>
            <ExternalLink href={linkedin} className="inline-flex items-center gap-1.5 no-underline hover:text-[#08776f]">LinkedIn <ArrowUpRight size={14} /></ExternalLink>
            <a href={`mailto:${email}`} className="inline-flex items-center gap-1.5 no-underline hover:text-[#08776f]">Email <ArrowUpRight size={14} /></a>
          </div>
        </div>
        <div className="reveal-delay relative mx-auto w-full max-w-[420px] md:ml-auto">
          <div className="absolute -bottom-4 -left-4 h-[55%] w-[58%] border-b-2 border-l-2 border-[#13a89e]" aria-hidden="true" />
          <img src={profilePhoto} alt="Yue Zhang, Ph.D. candidate in the Department of Communication at Michigan State University" className="relative aspect-[4/4.55] w-full object-cover object-center" />
          <div className="absolute -right-3 top-6 hidden bg-white px-4 py-3 shadow-sm sm:block">
            <span className="block text-[10px] font-bold tracking-[.15em] text-[#13a89e]">RESEARCH AREAS</span>
            <span className="mt-1 block text-xs text-[#0b2545]">Interpersonal · Family · Health</span>
          </div>
        </div>
      </section>
      <section className="bg-[#0b2545] py-14 text-white md:py-[4.5rem]">
        <div className="container-wide grid gap-8 md:grid-cols-[.65fr_1.35fr] md:items-start">
          <div><p className="eyebrow mb-3 !text-[#6bd1c8]">Research program</p><h2 className="display-font m-0 text-3xl font-semibold leading-tight md:text-4xl">Communication is how people cope together.</h2></div>
          <p className="m-0 max-w-[700px] text-[16px] leading-8 text-slate-200">My work brings interpersonal, family, and health communication into conversation. I ask how supportive communication and shared coping help people navigate stress, align around goals, and foster well-being—across close relationships and, increasingly, mediated interactions.</p>
        </div>
      </section>
      <section className="container-wide py-16 md:py-24">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div><p className="eyebrow mb-3">Areas of inquiry</p><h2 className="display-font m-0 text-3xl font-semibold text-[#0b2545] md:text-4xl">Questions that connect people</h2></div>
          <Link href="/research" className="inline-flex items-center gap-2 text-sm font-bold text-[#0b2545] no-underline hover:text-[#08776f]">Research overview <ArrowRight size={15} /></Link>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ['01', 'Interpersonal communication', 'How support is expressed, received, and understood in close relationships.'],
            ['02', 'Family communication', 'How family members coordinate goals, navigate support gaps, and shape pathways.'],
            ['03', 'Health communication', 'How communication helps people cope with stress and support health and well-being.'],
          ].map(([number, title, description]) => <article className="paper-card group p-6 transition-transform hover:-translate-y-1" key={number}>
            <span className="font-mono text-xs text-[#13a89e]">{number} / 03</span>
            <h3 className="display-font mt-7 text-xl font-bold text-[#0b2545]">{title}</h3>
            <p className="mt-3 mb-1 text-sm leading-6 text-[#526477]">{description}</p>
          </article>)}
        </div>
      </section>
      <section className="container-wide pb-10">
        <div className="section-rule grid gap-6 py-12 md:grid-cols-[.6fr_1.4fr]">
          <div><p className="eyebrow mb-2">Featured scholarship</p><p className="m-0 text-sm text-slate-500">2023 · CSCW</p></div>
          <div>
            <h2 className="display-font mt-0 mb-3 text-2xl font-semibold leading-snug text-[#0b2545]">Mediated Social Support for Distress Reduction: AI Chatbots vs. Human</h2>
            <p className="mt-0 max-w-2xl text-sm leading-7 text-[#526477]">A Wizard-of-Oz experiment exploring how perceived support-provider type and message contingency relate to psychological processes during supportive conversations.</p>
            <Link href="/research#featured-study" className="inline-flex items-center gap-2 text-sm font-bold text-[#08776f] no-underline">Read the study story <ArrowRight size={15} /></Link>
          </div>
        </div>
      </section>
      <section className="container-wide mb-16">
        <div className="flex flex-col items-start justify-between gap-6 border-l-[3px] border-[#13a89e] bg-[#eaf5f4] px-6 py-7 md:flex-row md:items-center md:px-9">
          <div><p className="eyebrow mb-2">For students & collaborators</p><h2 className="display-font m-0 text-2xl font-semibold text-[#0b2545]">Interested in working together?</h2><p className="mb-0 mt-2 text-sm text-[#526477]">I welcome thoughtful conversations about research, teaching, and collaboration.</p></div>
          <Link href="/contact" className="btn btn-primary shrink-0 no-underline">Get in touch <ArrowRight size={15} /></Link>
        </div>
      </section>
    </main>
  </PageFrame>;
}

function PageHeading({ label, title, intro }: { label: string; title: string; intro: string }) {
  return <div className="container-wide pb-10 pt-14 md:pb-14 md:pt-20">
    <p className="eyebrow mb-4">{label}</p><h1 className="display-font m-0 max-w-4xl text-4xl font-semibold leading-tight text-[#0b2545] md:text-6xl">{title}</h1>
    <p className="mb-0 mt-5 max-w-3xl text-[16px] leading-8 text-[#526477]">{intro}</p>
  </div>;
}

function Research() {
  return <PageFrame><main>
    <PageHeading label="Research" title="Relationships, support, and the work of coping." intro="My research examines how interpersonal, family, and health communication—including human and AI-mediated support—helps people manage stress, coordinate goals, and promote well-being." />
    <section className="container-wide pb-14">
      <div className="grid gap-4 md:grid-cols-3">
        {[
          ['Support & coping', 'How support is offered, wanted, and experienced—and how people cope together under stress.'],
          ['Family goals & pathways', 'How family communication shapes goal coordination, STEM interests, and life transitions.'],
          ['Mediated support', 'How people interpret supportive conversations across human and technology-mediated contexts.'],
        ].map(([title, desc]) => <div className="paper-card p-5" key={title}><span className="mb-4 block h-1 w-8 bg-[#13a89e]" /><h2 className="display-font mb-2 text-lg font-bold text-[#0b2545]">{title}</h2><p className="m-0 text-sm leading-6 text-[#526477]">{desc}</p></div>)}
      </div>
    </section>
    <section id="featured-study" className="bg-[#f2f4f7] py-14 md:py-20">
      <div className="container-wide">
        <div className="mb-9 flex flex-wrap items-end justify-between gap-4">
          <div><p className="eyebrow mb-3">Featured study · 2023</p><h2 className="display-font m-0 max-w-3xl text-3xl font-semibold leading-tight text-[#0b2545] md:text-4xl">Mediated Social Support for Distress Reduction: AI Chatbots vs. Human</h2><p className="mb-0 mt-3 text-sm text-slate-600">Meng, Rheu, Zhang, & Peng · Proceedings of the ACM on Human-Computer Interaction, CSCW</p></div>
          <ExternalLink href={paper} className="btn btn-outline shrink-0 no-underline">View paper <ArrowUpRight size={15} /></ExternalLink>
        </div>
        <div className="grid gap-8 lg:grid-cols-[.82fr_1.18fr]">
          <div className="space-y-6">
            <div className="paper-card p-6">
              <p className="eyebrow mb-2">The question</p><h3 className="display-font mb-2 mt-0 text-xl font-bold text-[#0b2545]">What changes when support is mediated?</h3>
              <p className="m-0 text-sm leading-7 text-[#526477]">The study examined how the perceived source of emotional support—human or chatbot—and chatbot response contingency related to distress-relevant psychological processes.</p>
            </div>
            <div className="paper-card p-6">
              <p className="eyebrow mb-2">Study design</p><h3 className="display-font mb-2 mt-0 text-xl font-bold text-[#0b2545]">A controlled, three-condition conversation</h3>
              <p className="m-0 text-sm leading-7 text-[#526477]">This was a between-subjects Wizard-of-Oz experiment conducted over Zoom during the pandemic. A human experimenter ran every conversation. Participants were told they were speaking with either a human, a high-contingency chatbot, or a low-contingency chatbot; the simulated chatbots were not autonomous systems.</p>
              <div className="mt-5 grid grid-cols-3 gap-2">
                {[['Human', '22'], ['High-contingency', '23'], ['Low-contingency', '30']].map(([name, count]) => <div key={name} className="rounded bg-[#f2f4f7] px-3 py-3"><span className="block text-[10px] font-bold uppercase leading-4 tracking-wide text-slate-500">{name}</span><span className="display-font mt-1 block text-2xl font-bold text-[#0b2545]">{count}</span><span className="text-[10px] text-slate-500">condition count</span></div>)}
              </div>
              <p className="mb-0 mt-4 border-l-2 border-[#d99b44] pl-3 text-xs leading-5 text-slate-600"><strong className="text-[#0b2545]">Sample accounting note.</strong> The Methods section reports 75 recruited (22/23/30 by condition). A later paragraph says 76 participated and one was excluded. The paper’s counts are inconsistent; this summary does not reconcile them.</p>
            </div>
            <div className="paper-card p-6">
              <p className="eyebrow mb-2">What the results support</p><h3 className="display-font mb-3 mt-0 text-xl font-bold text-[#0b2545]">Perceptions matter in the support process</h3>
              <ul className="m-0 space-y-3 pl-5 text-sm leading-6 text-[#526477]">
                <li>The reported condition-level tests found differences in cognitive reappraisal and emotional validation (Table 1).</li>
                <li>Direct comparisons between the high- and low-contingency chatbot conditions were not significant.</li>
                <li>Mediation findings depend on perceived competence and warmth, and on cognitive reappraisal; they should not be read as a simple chatbot-contingency advantage.</li>
              </ul>
              <p className="mb-0 mt-4 text-sm leading-6 text-[#526477]">The study highlights the importance of how a support provider is perceived and how an interaction may support reappraisal—not merely whether support is labeled human or chatbot.</p>
            </div>
          </div>
          <figure className="paper-card m-0 h-fit overflow-hidden p-3 md:p-5">
            <img src={featuredFigure} alt="Original Table 1 and Figure 2 from the article. Table 1 reports condition means for cognitive reappraisal and emotional validation. Figure 2 compares novice low-contingency chatbot, expert high-contingency chatbot, and human support conditions." className="block h-auto w-full" />
            <figcaption className="px-2 pb-2 pt-4">
              <p className="mb-2 mt-0 text-sm leading-6 text-[#526477]"><strong className="text-[#0b2545]">In plain language:</strong> The bars compare average cognitive reappraisal and emotional validation across the three support-provider conditions. The figure marks selected statistical comparisons; the direct high- versus low-contingency chatbot comparisons were not significant.</p>
              <span className="sr-only">Table 1. The effect of the Support Provider Type on Cognitive Appraisal and Emotional Validation</span>
              <span className="sr-only">Fig. 2. The Effects of Support Sources on Psychological Processes. Expert means the high-contingent chatbot and novice means the low-contingent chatbot.</span>
            </figcaption>
          </figure>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="border-t border-[#cdd7df] pt-5"><p className="eyebrow mb-2">Why it matters</p><p className="m-0 text-sm leading-7 text-[#526477]">Supportive technologies are often discussed as if the interface alone determines outcomes. This experiment foregrounds social perception: a support exchange is experienced through judgments about who is responding and whether that response feels capable and warm.</p></div>
          <div className="border-t border-[#cdd7df] pt-5"><p className="eyebrow mb-2">Takeaway</p><p className="m-0 text-sm leading-7 text-[#526477]">When studying mediated emotional support, account for participants’ perceptions and the cognitive processes through which support may be experienced. And be precise about what a Wizard-of-Oz setup does—and does not—test.</p></div>
        </div>
      </div>
    </section>
    <section className="container-wide py-16 md:py-20">
      <div className="mb-9"><p className="eyebrow mb-3">Selected publications</p><h2 className="display-font m-0 text-3xl font-semibold text-[#0b2545] md:text-4xl">Work across connected fields</h2><p className="mb-0 mt-3 max-w-2xl text-sm leading-6 text-[#526477]">A selection of peer-reviewed journal articles listed in my CV. Topic labels are guides to the work’s subject areas.</p></div>
      <div className="divide-y divide-[#dce3e9] border-y border-[#dce3e9]">
        {publications.map((pub) => <article className="grid gap-3 py-6 md:grid-cols-[72px_1fr] md:gap-7" key={pub.title}>
          <div className="display-font text-lg font-semibold text-[#13a89e]">{pub.year}</div>
          <div>
            <div className="mb-2 flex flex-wrap gap-2">{pub.tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}</div>
            <p className="mb-1 mt-0 text-xs leading-5 text-slate-500">{pub.authors}</p>
            <h3 className="display-font mb-1 mt-0 text-lg font-bold leading-6 text-[#0b2545]">{pub.title}</h3>
            <p className="mb-2 mt-0 text-sm leading-6 text-[#526477]">{pub.journal}</p>
            <ExternalLink href={pub.url} className="inline-flex items-center gap-1 text-xs font-bold text-[#08776f] no-underline hover:underline">Publication link <ArrowUpRight size={12} /></ExternalLink>
          </div>
        </article>)}
      </div>
    </section>
  </main></PageFrame>;
}

function Teaching() {
  return <PageFrame><main>
    <PageHeading label="Teaching" title="Helping students connect ideas to everyday life." intro="I teach communication as a practical, evidence-informed way to understand relationships, make sense of messages, and engage with the people around us." />
    <section className="container-wide pb-16">
      <div className="mb-8 grid gap-5 md:grid-cols-[1fr_1fr]">
        <div className="bg-[#0b2545] p-7 text-white md:p-9">
          <GraduationCap size={23} className="mb-5 text-[#69d0c7]" />
          <p className="eyebrow mb-2 !text-[#69d0c7]">Teaching approach</p>
          <h2 className="display-font mt-0 text-2xl font-semibold">Clear structure. Active thinking. Useful feedback.</h2>
          <p className="mb-0 text-sm leading-7 text-slate-200">My experience includes online and in-person teaching, asynchronous course delivery, discussion-based recitations, and detailed feedback on speeches, writing, and applied research assignments.</p>
        </div>
        <div className="flex flex-col justify-center bg-[#eaf5f4] p-7 md:p-9">
          <span className="eyebrow mb-3">Courses prepared to teach</span>
          <p className="m-0 text-[15px] leading-8 text-[#0b2545]">Interpersonal Communication · Family Communication · Communication in Close Relationships · Health Communication · Persuasion · Communication and Technology · Communication Theory · Quantitative and Qualitative Research Methods</p>
        </div>
      </div>
      <div className="mb-5 flex items-center gap-3"><BookOpen size={18} className="text-[#13a89e]" /><h2 className="display-font m-0 text-2xl font-semibold text-[#0b2545]">Teaching experience</h2></div>
      <div className="space-y-4">
        <article className="paper-card grid gap-3 p-6 md:grid-cols-[1fr_auto] md:items-start">
          <div><div className="flex flex-wrap items-center gap-2"><span className="tag">Instructor of record</span><span className="text-xs text-slate-500">Summer 2026</span></div><h3 className="display-font mb-1 mt-4 text-xl font-bold text-[#0b2545]">COM 425 · Communication in Close Relationships</h3><p className="m-0 text-sm leading-6 text-[#526477]">Online, asynchronous · 30 students. Independently managed course delivery, assessment, and student communication. Evaluated theory-driven relationship podcasts and written assignments and provided detailed feedback.</p></div>
          <span className="text-xs font-semibold text-slate-500">Michigan State University</span>
        </article>
        <article className="paper-card grid gap-3 p-6 md:grid-cols-[1fr_auto] md:items-start">
          <div><div className="flex flex-wrap items-center gap-2"><span className="tag">Instructor of record</span><span className="text-xs text-slate-500">2022–2023</span></div><h3 className="display-font mb-1 mt-4 text-xl font-bold text-[#0b2545]">COM 100 · Human Communication</h3><p className="m-0 text-sm leading-6 text-[#526477]">Online, asynchronous · 3 sections, approximately 60 students. Managed course delivery, assessment, and student communication; evaluated speeches and written assignments and provided detailed written feedback.</p></div>
          <span className="text-xs font-semibold text-slate-500">Michigan State University</span>
        </article>
        <article className="paper-card grid gap-3 p-6 md:grid-cols-[1fr_auto] md:items-start">
          <div><div className="flex flex-wrap items-center gap-2"><span className="tag">Teaching assistant / recitation instructor</span><span className="text-xs text-slate-500">2025–2026</span></div><h3 className="display-font mb-1 mt-4 text-xl font-bold text-[#0b2545]">COM 225 · Introduction to Interpersonal Communication</h3><p className="m-0 text-sm leading-6 text-[#526477]">In person · Large lecture course, approximately 250 students. Evaluated approximately 200 applied research assignments per week, responded to student questions, and supported course administration.</p></div>
          <span className="text-xs font-semibold text-slate-500">Michigan State University</span>
        </article>
        <article className="paper-card grid gap-3 p-6 md:grid-cols-[1fr_auto] md:items-start">
          <div><div className="flex flex-wrap items-center gap-2"><span className="tag">Teaching assistant / recitation instructor</span><span className="text-xs text-slate-500">2022–2023</span></div><h3 className="display-font mb-1 mt-4 text-xl font-bold text-[#0b2545]">COM 100 · Human Communication</h3><p className="m-0 text-sm leading-6 text-[#526477]">In person and Zoom · 3 recitation sections, approximately 60 students. Independently led weekly recitations and discussion-based instruction, evaluated speeches and coursework, and provided individualized formative feedback.</p></div>
          <span className="text-xs font-semibold text-slate-500">Michigan State University</span>
        </article>
      </div>
      <div className="mt-9 grid gap-5 md:grid-cols-2">
        <div className="border-l-2 border-[#13a89e] bg-[#f2f4f7] p-6">
          <p className="eyebrow mb-3">Guest lectures</p>
          <p className="m-0 text-sm leading-7 text-[#526477]"><strong className="text-[#0b2545]">Communication in Friendships</strong><br />COM 225 · Spring 2026</p>
          <p className="mb-0 mt-4 text-sm leading-7 text-[#526477]"><strong className="text-[#0b2545]">Social Support and Advice</strong><br />COM 225 · Fall 2023</p>
        </div>
        <div className="border-l-2 border-[#13a89e] bg-[#f2f4f7] p-6">
          <p className="eyebrow mb-3">Mentoring</p>
          <p className="m-0 text-sm leading-7 text-[#526477]">Research mentoring with M.A. and undergraduate students, including manuscript collaboration, qualitative coding, and research-team development on an NSF CAREER project.</p>
        </div>
      </div>
      <div className="mt-10 text-center"><Link href="/contact" className="btn btn-primary no-underline">Connect about teaching <ArrowRight size={15} /></Link></div>
    </section>
  </main></PageFrame>;
}

function CV() {
  return <PageFrame><main>
    <PageHeading label="Curriculum vitae" title="A fuller record of my work." intro="My CV includes education, research, publications, funding, teaching, mentoring, awards, and conference presentations. The embedded document below is the supplied PDF." />
    <section className="container-wide pb-16">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4 border-y border-[#dce3e9] py-5">
        <div className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center bg-[#e3f4f2] text-[#08776f]"><FileText size={19} /></span><div><p className="m-0 text-sm font-bold text-[#0b2545]">Yue Zhang · Curriculum Vitae</p><p className="m-0 mt-1 text-xs text-slate-500">PDF · 9 pages</p></div></div>
        <div className="flex flex-wrap gap-2">
          <a href={cvPath} download="Yue-Zhang-CV.pdf" className="btn btn-primary no-underline"><ArrowDownToLine size={15} /> Download CV</a>
          <a href={cvPath} target="_blank" rel="noreferrer" className="btn btn-outline no-underline">Open in new tab <ArrowUpRight size={15} /></a>
        </div>
      </div>
      <div className="overflow-hidden border border-[#dce3e9] bg-[#e8edf1] p-2 md:p-4">
        <iframe title="Yue Zhang curriculum vitae PDF viewer" src={`${cvPath}#view=FitH`} className="h-[78vh] min-h-[560px] w-full border-0 bg-white" />
      </div>
      <p className="mt-4 text-sm text-slate-600">If the document viewer is unavailable in your browser, <a className="font-semibold text-[#08776f] underline" href={cvPath} target="_blank" rel="noreferrer">open the CV PDF in a new tab</a> or use the download button above.</p>
    </section>
  </main></PageFrame>;
}

function Contact() {
  return <PageFrame><main>
    <PageHeading label="Contact" title="Let’s start a conversation." intro="For research questions, teaching conversations, or potential collaborations, email is the best way to reach me." />
    <section className="container-wide grid gap-10 pb-16 md:grid-cols-[.8fr_1.2fr] md:gap-16">
      <div className="bg-[#0b2545] p-7 text-white md:p-9">
        <p className="eyebrow mb-4 !text-[#6bd1c8]">Write to me</p>
        <h2 className="display-font mb-6 mt-0 text-2xl font-semibold">A good place to begin.</h2>
        <a className="inline-flex items-center gap-3 break-all text-lg font-semibold text-white no-underline hover:text-[#6bd1c8]" href={`mailto:${email}`}><Mail size={19} className="shrink-0 text-[#6bd1c8]" />{email}</a>
        <p className="mb-0 mt-7 text-sm leading-7 text-slate-200">Department of Communication<br />Michigan State University<br />East Lansing, Michigan</p>
        <a href={`mailto:${email}`} className="btn mt-7 bg-[#13a89e] text-white no-underline hover:bg-[#0d8e85]">Send an email <ArrowRight size={15} /></a>
      </div>
      <div>
        <p className="eyebrow mb-3">Professional profiles</p>
        <div className="divide-y divide-[#dce3e9] border-y border-[#dce3e9]">
          <ExternalLink href={scholar} className="group flex items-center justify-between gap-4 py-6 no-underline">
            <span><span className="block text-[11px] font-bold uppercase tracking-[.12em] text-slate-500">Scholarship</span><span className="display-font mt-1 block text-xl font-semibold text-[#0b2545] group-hover:text-[#08776f]">Google Scholar</span></span>
            <ArrowUpRight size={18} className="text-[#13a89e]" />
          </ExternalLink>
          <ExternalLink href={linkedin} className="group flex items-center justify-between gap-4 py-6 no-underline">
            <span><span className="block text-[11px] font-bold uppercase tracking-[.12em] text-slate-500">Professional network</span><span className="display-font mt-1 block text-xl font-semibold text-[#0b2545] group-hover:text-[#08776f]">LinkedIn</span></span>
            <ArrowUpRight size={18} className="text-[#13a89e]" />
          </ExternalLink>
        </div>
        <p className="mt-5 text-xs leading-5 text-slate-500">This is a personal academic portfolio and is not an official Michigan State University website.</p>
      </div>
    </section>
  </main></PageFrame>;
}

function NotFound() {
  return <PageFrame><main className="container-wide py-24"><p className="eyebrow">Page not found</p><h1 className="display-font text-4xl font-semibold text-[#0b2545]">This page isn’t here.</h1><Link href="/" className="btn btn-primary mt-4 no-underline">Return to About <ArrowRight size={15} /></Link></main></PageFrame>;
}

function App() {
  return <Switch>
    <Route path="/" component={Home} />
    <Route path="/research" component={Research} />
    <Route path="/teaching" component={Teaching} />
    <Route path="/cv" component={CV} />
    <Route path="/contact" component={Contact} />
    <Route component={NotFound} />
  </Switch>;
}

export default App;
