import { WorkSection } from './components/WorkSection'
import { scrollToSection, scrollToTop } from './lib/scroll'

const imgVector = "https://www.figma.com/api/mcp/asset/850768f8-efbe-43bd-8d00-db17b148a05f";
const imgVector1 = "https://www.figma.com/api/mcp/asset/e8f4eb75-d28b-4c59-b280-e78b365c5287";
const imgVector2 = "https://www.figma.com/api/mcp/asset/3003ef76-8374-4a50-83c7-c7284f6e77a9";
const imgVector3 = "https://www.figma.com/api/mcp/asset/b949f3ef-5492-4054-ac3e-242df7451693";
const imgVector4 = "https://www.figma.com/api/mcp/asset/9fc49d3f-ece7-466e-a5e3-d209cdf8d374";
const imgVector5 = "https://www.figma.com/api/mcp/asset/c2767336-7455-471d-b02a-6973a78f1035";
const imgVector6 = "https://www.figma.com/api/mcp/asset/18aac5f5-9b78-44da-b615-b33132a09ae6";
const imgPic = "https://www.figma.com/api/mcp/asset/037a9544-2d69-4a88-8473-179c99c00fd3";
const imgImage3 = "https://www.figma.com/api/mcp/asset/ff027bc8-0208-4201-90c5-12031e00da23";
const imgImage5 = "https://www.figma.com/api/mcp/asset/258bcab4-566a-41f7-bc7e-f070679e8a40";
const imgImage1 = "https://www.figma.com/api/mcp/asset/2170e50e-0bc1-4ad6-bb84-cd1f4bdfc39b";
const imgImage2 = "https://www.figma.com/api/mcp/asset/6bcd00c5-1b8e-4173-b52a-bba63760291e";
const imgImage4 = "https://www.figma.com/api/mcp/asset/0e298383-5a05-4796-8cdb-b1f872036799";
const imgImage6 = "https://www.figma.com/api/mcp/asset/0e020868-6241-4038-86fb-3a40fc92fe2c";
const imgImage = "https://www.figma.com/api/mcp/asset/ab7857bd-2aac-4fd9-8f22-6a4c39f3aab4";
const imgImage7 = "https://www.figma.com/api/mcp/asset/0b8c5620-20e7-42d2-b7a2-5fd052b39f83";
const imgGroup = "https://www.figma.com/api/mcp/asset/6710c41a-db97-48ef-bec4-7ad745df0130";
const imgIconFigma = "https://www.figma.com/api/mcp/asset/7a4ff148-6ff0-4d74-9cb0-e599dc529454";
const imgIconGit = "https://www.figma.com/api/mcp/asset/de97fbab-119e-41f9-abfc-2ed10c6219ba";
const imgIconJavscript = "https://www.figma.com/api/mcp/asset/10906b06-ae52-430f-8a2a-bd6cbcff29be";
const imgIconTypescript = "https://www.figma.com/api/mcp/asset/3228ba83-a2d5-4154-b89a-0dec94b73b19";
const imgIconReact = "https://www.figma.com/api/mcp/asset/dd11af4b-2db6-4182-b7e8-6724e4871dd4";
const imgVector7 = "https://www.figma.com/api/mcp/asset/bb5e2471-4cdf-4ae1-ba6b-92750eacb8ff";
const imgVector8 = "https://www.figma.com/api/mcp/asset/bbdcd43d-2077-4230-ad0e-00cd5cc841b3";
const imgVector9 = "https://www.figma.com/api/mcp/asset/36286fa4-8235-4110-aaa7-25e99220769c";
const imgVector10 = "https://www.figma.com/api/mcp/asset/13874a86-92a0-4764-b820-87c5dc05293c";
const imgVector11 = "https://www.figma.com/api/mcp/asset/beed69cf-e5f0-40c4-a3b9-6be543693972";

type IconProps = {
  className?: string;
  name?: "icon-github" | "icon-inbox" | "icon-phone" | "icon-location";
  size?: "24" | "32";
  themeMode?: "Light";
};

function Icon({ className, name = "icon-github", size = "24", themeMode = "Light" }: IconProps) {
  const isIconInboxAnd32AndLight = name === "icon-inbox" && size === "32" && themeMode === "Light";
  const isIconLocationAnd24AndLight = name === "icon-location" && size === "24" && themeMode === "Light";
  const isIconPhoneAnd32AndLight = name === "icon-phone" && size === "32" && themeMode === "Light";
  return (
    <div className={className || `overflow-clip relative ${size === "32" && themeMode === "Light" && ["icon-inbox", "icon-phone"].includes(name) ? "size-[32px]" : "size-[24px]"}`} id={isIconPhoneAnd32AndLight ? "node-1_104" : isIconInboxAnd32AndLight ? "node-1_98" : isIconLocationAnd24AndLight ? "node-1_80" : "node-1_37"}>
      <div className={`absolute ${isIconPhoneAnd32AndLight ? "inset-[8.33%_8.33%_8.63%_8.8%]" : isIconInboxAnd32AndLight ? "inset-[16.67%_8.33%]" : isIconLocationAnd24AndLight ? "inset-[8.33%_16.67%]" : "inset-[8.33%_16.62%]"}`} id={isIconPhoneAnd32AndLight ? "node-1_105" : isIconInboxAnd32AndLight ? "node-1_99" : isIconLocationAnd24AndLight ? "node-1_81" : "node-1_38"} data-name="Vector">
        <div className={`absolute ${isIconPhoneAnd32AndLight ? "inset-[-3.76%_-3.77%]" : isIconInboxAnd32AndLight ? "inset-[-4.69%_-3.75%]" : isIconLocationAnd24AndLight ? "inset-[-5%_-6.25%]" : "inset-[-5%_-6.24%]"}`}>
          <img alt="" className="block max-w-none size-full" src={isIconPhoneAnd32AndLight ? imgVector6 : isIconInboxAnd32AndLight ? imgVector4 : isIconLocationAnd24AndLight ? imgVector2 : imgVector} />
        </div>
      </div>
      {themeMode === "Light" && ((name === "icon-github" && size === "24") || (name === "icon-location" && size === "24") || (name === "icon-inbox" && size === "32")) && (
        <div className={`absolute ${isIconInboxAnd32AndLight ? "inset-[29.17%_8.33%_45.85%_8.33%]" : isIconLocationAnd24AndLight ? "inset-[29.17%_37.5%_45.83%_37.5%]" : "inset-[66.67%_62.5%_22.67%_8.33%]"}`} id={isIconInboxAnd32AndLight ? "node-1_100" : isIconLocationAnd24AndLight ? "node-1_82" : "node-1_39"} data-name="Vector">
          <div className={`absolute ${isIconInboxAnd32AndLight ? "inset-[-12.51%_-3.75%]" : isIconLocationAnd24AndLight ? "inset-[-16.67%]" : "inset-[-39.06%_-14.29%]"}`}>
            <img alt="" className="block max-w-none size-full" src={isIconInboxAnd32AndLight ? imgVector5 : isIconLocationAnd24AndLight ? imgVector3 : imgVector1} />
          </div>
        </div>
      )}
    </div>
  );
}

type IconButtonProps = {
  className?: string;
  size?: "md";
  state?: "Default";
  themeMode?: "Light";
};

function IconButton({ className }: IconButtonProps) {
  return (
    <div className={className || "content-stretch flex items-center justify-center p-[6px] relative rounded-[8px]"} data-node-id="1:243">
      <Icon className="overflow-clip relative shrink-0 size-[24px]" />
    </div>
  );
}

export default function LandingPage() {
  return (
    <div className="content-stretch flex items-start relative size-full" data-node-id="1:410" data-name="Portfolio">
      <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full max-w-[1440px] mx-auto" data-node-id="1:411" data-name="Home / Desktop / Light">
        <div className="bg-[var(--gray-default)] border-[rgba(255,255,255,0)] border-b border-solid content-stretch flex items-center justify-center overflow-clip pb-[16px] pt-6 md:pt-[32px] px-4 sm:px-8 md:px-[72px] relative shrink-0 w-full" data-node-id="1:412" data-name="Header">
          <div className="content-stretch flex flex-[1_0_0] flex-col sm:flex-row gap-4 sm:gap-0 items-center sm:items-center justify-between min-w-px px-0 md:px-[32px] relative w-full" data-node-id="I1:412;1:2671" data-name="Container">
            <div className="[word-break:break-word] flex flex-col font-bold justify-center leading-[0] not-italic relative shrink-0 text-[24px] md:text-[30px] text-[color:var(--gray-900)] text-center tracking-[-0.6px]" data-node-id="I1:412;1:2672">
              <p className="leading-[36px]">NN ⑈︎</p>
            </div>
            <div className="content-stretch flex flex-wrap gap-x-4 gap-y-2 sm:gap-[24px] items-center justify-center sm:justify-end relative shrink-0 w-full sm:w-auto" data-node-id="I1:412;1:2673" data-name="Navigation">
              <button type="button" className="content-stretch cursor-pointer flex items-center justify-center relative shrink-0" data-node-id="I1:412;1:2674" data-name="Link" onClick={() => scrollToSection("about")}>
                <p className="[word-break:break-word] font-medium leading-[24px] not-italic relative shrink-0 text-[16px] text-[color:var(--gray-600)] text-left whitespace-nowrap" data-node-id="I1:412;1:2674;1:2568">
                  About
                </p>
              </button>
              <button type="button" className="content-stretch cursor-pointer flex items-center justify-center relative shrink-0" data-node-id="I1:412;1:2675" data-name="Link" onClick={() => scrollToSection("work")}>
                <p className="[word-break:break-word] font-medium leading-[24px] not-italic relative shrink-0 text-[16px] text-[color:var(--gray-600)] text-left whitespace-nowrap" data-node-id="I1:412;1:2675;1:2568">
                  Work
                </p>
              </button>
              <button type="button" className="content-stretch cursor-pointer flex items-center justify-center relative shrink-0" data-node-id="I1:412;1:2676" data-name="Link" onClick={() => scrollToSection("testimonials")}>
                <p className="[word-break:break-word] font-medium leading-[24px] not-italic relative shrink-0 text-[16px] text-[color:var(--gray-600)] text-left whitespace-nowrap" data-node-id="I1:412;1:2676;1:2568">
                  Testimonials
                </p>
              </button>
              <button type="button" className="content-stretch cursor-pointer flex items-center justify-center relative shrink-0" data-node-id="I1:412;1:2677" data-name="Link" onClick={() => scrollToSection("contact")}>
                <p className="[word-break:break-word] font-medium leading-[24px] not-italic relative shrink-0 text-[16px] text-[color:var(--gray-600)] text-left whitespace-nowrap" data-node-id="I1:412;1:2677;1:2568">
                  Contact
                </p>
              </button>
            </div>
          </div>
        </div>
        <div className="bg-[var(--lavender-100)] content-stretch flex items-start justify-center overflow-clip px-4 sm:px-8 md:px-[72px] py-12 md:py-[96px] relative shrink-0 w-full" data-node-id="1:413" data-name="Hero">
          <div className="content-start flex flex-[1_0_0] flex-wrap gap-[48px] h-auto items-start min-w-px px-0 md:px-[32px] relative w-full" data-node-id="1:414" data-name="Container">
            <div className="content-stretch flex flex-col gap-[32px] items-start justify-center max-w-[768px] overflow-clip relative shrink-0 w-full" data-node-id="1:415" data-name="Column">
              <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start justify-center not-italic relative shrink-0 w-full" data-node-id="1:416" data-name="Content">
                <p className=" font-bold leading-[44px] md:leading-[72px] relative shrink-0 text-[36px] md:text-[60px] text-[color:var(--gray-900)] tracking-[-1.2px]" data-node-id="1:417">
                  Hi, I’m Noora 👋
                </p>
                <p className=" font-normal leading-[24px] relative shrink-0 text-[16px] text-[color:var(--gray-600)] w-full max-w-[768px]" data-node-id="1:418">{`I'm an multi-talented designer with a keen focus on creating exceptional digital experiences. I am a design system enthusiast and a strong advocate for human-centric design thinking as a starting point for all projects across different industries and business landscapes.`}</p>
              </div>
              <div className="content-stretch flex flex-wrap gap-4 items-center overflow-clip relative shrink-0 w-full max-w-[588px]" data-node-id="1:428" data-name="Links">
                <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[124px]" data-node-id="37:247" data-name="social link">
                  <div className="overflow-clip relative shrink-0 size-[36px]" data-node-id="37:240" data-name="linkedin-big-logo 1">
                    <div className="absolute inset-[11.11%_19.42%_25.07%_16.67%]" data-node-id="37:241" data-name="Group">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup} />
                    </div>
                  </div>
                  <a className="[word-break:break-word] flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[color:var(--gray-600)] w-[117px]" href="https://www.linkedin.com/in/noora-nenonen/" data-node-id="37:246" target="_blank">
                    <p className="[text-underline-position:from-font] cursor-pointer decoration-from-font decoration-solid leading-[normal] underline">LinkedIn</p>
                  </a>
                </div>
                <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[112px]" data-node-id="37:253" data-name="social link">
                  <IconButton className="content-stretch flex items-center justify-center p-[6px] relative rounded-[8px] shrink-0" />
                  <a className="[word-break:break-word] flex flex-[1_0_0] flex-col font-medium h-[27px] justify-center leading-[0] min-w-px not-italic relative text-[16px] text-[color:var(--gray-600)]" href="https://github.com/Nooranen" data-node-id="37:251" target="_blank">
                    <p className="[text-underline-position:from-font] cursor-pointer decoration-from-font decoration-solid leading-[normal] underline">GitHub</p>
                  </a>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full" data-node-id="1:419" data-name="Group">
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-node-id="1:420" data-name="Location">
                  <Icon className="overflow-clip relative shrink-0 size-[24px]" name="icon-location" />
                  <p className="[word-break:break-word] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-[color:var(--gray-600)] whitespace-nowrap" data-node-id="1:422">
                    Tampere, Finland
                  </p>
                </div>
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="1:423" data-name="Hire">
                  <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[24px]" data-node-id="1:424" data-name="Icon">
                    <div className="bg-[#10b981] relative rounded-[20px] shrink-0 size-[8px]" data-node-id="1:425" data-name="icon-dot-emerald-500" />
                  </div>
                  <p className="[word-break:break-word] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-[color:var(--gray-600)]" data-node-id="1:426">
                    Available for new opportunities (hybrid and remote)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="about" className="bg-[var(--gray-50)] content-stretch flex items-start justify-center overflow-clip px-4 sm:px-8 md:px-[72px] py-12 md:py-[96px] relative shrink-0 w-full scroll-mt-24" data-node-id="1:436" data-name="About">
          <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-w-px overflow-clip px-0 md:px-[32px] relative" data-node-id="1:437" data-name="Container">
            <div className="content-stretch flex flex-wrap gap-[48px] h-auto items-start overflow-clip relative shrink-0 w-full" data-node-id="1:441" data-name="Row">
              <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-w-0 md:min-w-[444px] overflow-clip relative w-full md:w-auto" data-node-id="1:442" data-name="Column">
                <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 max-w-full" data-node-id="1:443" data-name="Pic Container">
                  <div className="bg-[var(--gray-200)] border-8 border-[var(--gray-50)] border-solid col-1 h-[280px] sm:h-[360px] md:h-[480px] ml-0 mt-4 md:mt-[40px] relative row-1 w-[min(100%,280px)] sm:w-[320px] md:w-[400px]" data-node-id="1:444" data-name="Background" />
                  <div className="border-8 border-[var(--gray-50)] border-solid col-1 h-[280px] sm:h-[360px] md:h-[480px] ml-4 md:ml-[40px] mt-0 relative row-1 w-[min(100%,280px)] sm:w-[320px] md:w-[400px]" data-node-id="1:445" data-name="Pic">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPic} />
                  </div>
                </div>
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[24px] h-full items-start min-w-0 md:min-w-[444px] not-italic overflow-clip relative w-full" data-node-id="1:446" data-name="Column">
                <p className=" font-semibold leading-[36px] relative shrink-0 text-[24px] md:text-[30px] text-[color:var(--gray-900)] tracking-[-0.6px]" data-node-id="1:447">
                  About me
                </p>
                <div className="content-stretch flex flex-col font-normal gap-[16px] items-start relative shrink-0 text-[color:var(--gray-600)] w-full" data-node-id="1:448" data-name="Content">
                  <div className="leading-[0] min-w-full relative shrink-0 text-[0px] w-[min-content] whitespace-pre-wrap" data-node-id="1:450">
                    <p className="leading-[24px] mb-0 text-[16px]">{`Ever since I began my journey as a designer, I've continued to grow and evolve as a professional, taking on new challenges and learning the latest technologies and methods along the way. `}</p>
                    <p className="leading-[24px] mb-0 text-[16px]">​</p>
                    <p className="leading-[24px] mb-0 text-[16px]">{`I am a philomath -- I thrive on variety, love a good problem or a challenge, and pride myself on being a fast learner. I shine in the parts of projects where I get to materialise my ideas, but I do enjoy being involved in the whole life cycle of a digital product, all the way from discovery phase to end delivery, and offering support beyond that. `}</p>
                    <p className="leading-[24px] mb-0 text-[16px]">​</p>
                    <p className="text-[16px]">
                      <span className="leading-[24px]">{`Highlight of my career was our Helsinki Design System-team winning the Best Design System award in `}</span>
                      <a className="[text-underline-position:from-font] [word-break:break-word] cursor-pointer decoration-from-font decoration-solid font-normal leading-[24px] not-italic underline" href="https://2023.grandone.fi/kilpailutyot/?palkinto=voittajat" target="_blank">
                        <span className="[text-underline-position:from-font] decoration-from-font decoration-solid underline">
                          Grand One 2023
                        </span>
                      </a>
                      <span className="leading-[24px]">{`. Through that inspiring achievement, I found my current niche in `}</span>
                      <span className="[word-break:break-word] font-bold leading-[24px] not-italic">design systems</span>
                      <span className="leading-[24px]">{` and `}</span>
                      <span className="[word-break:break-word] font-bold leading-[24px] not-italic">agile leadership,</span>
                      <span className="leading-[24px]">{` which combine a lot the things that inspire me e.g. `}</span>
                      <span className="[word-break:break-word] font-bold leading-[24px] not-italic">{`streamlining processes, systems-thinking `}</span>
                      <span className="leading-[24px]">and</span>
                      <span className="[word-break:break-word] font-bold leading-[24px] not-italic">{` strategic design. `}</span>
                    </p>
                  </div>
                  <p className="leading-[24px] min-w-full relative shrink-0 text-[16px] w-[min-content]" data-node-id="1:452">{`When I'm not in full-on designer mode, I’m growing my competence in front-end technologies and AI-assistive tools.`}</p>
                  <p className="leading-[24px] relative shrink-0 text-[16px] whitespace-nowrap" data-node-id="1:453">
                    Finally, some quick bits about me.
                  </p>
                  <div className="content-stretch flex gap-[10px] items-start leading-[0] relative shrink-0 text-[16px] w-full" data-node-id="1:454" data-name="Checklist">
                    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-w-px relative" data-node-id="1:455" data-name="Column">
                      <ul className="block relative shrink-0 w-full" data-node-id="1:456">
                        <li className="list-disc ms-[24px]">
                          <span className="leading-[24px]">{`B.E. in Culture & Arts, Interactive design`}</span>
                        </li>
                      </ul>
                      <ul className="block relative shrink-0 w-full" data-node-id="1:457">
                        <li className="list-disc ms-[24px]">
                          <span className="leading-[24px]">Experienced consultant</span>
                        </li>
                      </ul>
                    </div>
                    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-w-px relative self-stretch" data-node-id="1:458" data-name="Column">
                      <ul className="block relative shrink-0 w-full" data-node-id="1:459">
                        <li className="list-disc ms-[24px]">
                          <span className="leading-[24px]">{` a TTRPG player and a DM`}</span>
                        </li>
                      </ul>
                      <ul className="block relative shrink-0 w-full" data-node-id="1:460">
                        <li className="list-disc ms-[24px]">
                          <span className="leading-[24px]">Aspiring full-stack professional, maybe?</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[var(--gray-default)] content-stretch flex flex-col items-center justify-center px-4 sm:px-8 md:px-[71px] py-12 md:py-[96px] relative shrink-0 w-full" data-node-id="1:462" data-name="Skills">
          <div className="content-stretch flex flex-col gap-[48px] items-start overflow-clip px-0 md:px-[32px] relative shrink-0 w-full" data-node-id="1:463" data-name="Container">
            <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="1:464" data-name="Row">
              <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-node-id="1:465" data-name="Row">
                <p className="[word-break:break-word] font-[family-name:var(--font-display)] font-normal leading-[var(--display-line-height)] relative shrink-0 text-[color:var(--gray-600)] text-[length:var(--display-size)] text-center tracking-[var(--display-tracking)] w-full" data-node-id="6:619">
                  Competence
                </p>
              </div>
              <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-node-id="1:467" data-name="Row">
                <p className="[word-break:break-word] font-normal leading-[28px] max-w-[576px] not-italic relative shrink-0 text-[20px] text-[color:var(--gray-600)] text-center w-full" data-node-id="1:468">
                  The skills, tools, frameworks and technologies I consider my main expertise:
                </p>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="1:3886" data-name="Checklist">
              <div className="content-stretch flex flex-col md:flex-row gap-[16px] items-start relative shrink-0 w-full" data-node-id="1:3896" data-name="Row">
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[30px] items-start min-w-px pr-[8px] relative" data-node-id="1:3887" data-name="Column">
                  <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="28:5096" data-name="Content">
                    <div className="content-stretch flex items-center justify-center pl-[16px] relative shrink-0 w-full" data-node-id="28:5097" data-name="Title">
                      <p className="[word-break:break-word] flex-[1_0_0] font-bold leading-[24px] min-w-px not-italic relative text-[24px] text-[color:var(--gray-600)]" data-node-id="28:5098">
                        UI Design
                      </p>
                    </div>
                    <ul className="[word-break:break-word] block font-normal leading-[0] not-italic relative shrink-0 text-[16px] text-[color:var(--gray-600)] w-full" data-node-id="28:5099">
                      <ul className="list-disc">
                        <li className="mb-0 ms-[48px]">
                          <span className="leading-[24px]">Visual hierarchy and visual principles</span>
                        </li>
                        <li className="mb-0 ms-[48px]">
                          <span className="leading-[24px]">Wire-framing and prototyping</span>
                        </li>
                        <li className="mb-0 ms-[48px]">
                          <span className="leading-[24px]">Responsive design</span>
                        </li>
                        <li className="ms-[48px]">
                          <span className="leading-[24px]">Finalised layouts and specifications</span>
                        </li>
                      </ul>
                    </ul>
                  </div>
                  <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="28:5100" data-name="Content">
                    <div className="content-stretch flex items-center justify-center pl-[24px] relative shrink-0 w-full" data-node-id="28:5101" data-name="Title">
                      <p className="[word-break:break-word] flex-[1_0_0] font-bold leading-[24px] min-w-px not-italic relative text-[24px] text-[color:var(--gray-600)]" data-node-id="28:5102">
                        Design systems and systems-thinking
                      </p>
                    </div>
                    <ul className="[word-break:break-word] block font-normal leading-[0] not-italic relative shrink-0 text-[16px] text-[color:var(--gray-600)] w-full" data-node-id="28:5103">
                      <ul className="list-disc">
                        <li className="mb-0 ms-[48px]">
                          <span className="leading-[24px]">Platform migrations and style guide convertions</span>
                        </li>
                        <li className="mb-0 ms-[48px]">
                          <span className="leading-[24px]">New libraries, styles, variables from scratch</span>
                        </li>
                        <li className="mb-0 ms-[48px]">
                          <span className="leading-[24px]">{`Accessible & responsive component building, documentation and specifications for development`}</span>
                        </li>
                        <li className="ms-[48px]">
                          <span className="leading-[24px]">Upkeep and support for large number of projects using the DS</span>
                        </li>
                      </ul>
                    </ul>
                  </div>
                </div>
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[30px] items-start min-w-px pl-[8px] relative" data-node-id="1:3890" data-name="Column">
                  <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="28:5110" data-name="Content">
                    <div className="content-stretch flex items-center justify-center pl-[16px] relative shrink-0 w-full" data-node-id="28:5111" data-name="Title">
                      <p className="[word-break:break-word] flex-[1_0_0] font-bold leading-[24px] min-w-px not-italic relative text-[24px] text-[color:var(--gray-600)]" data-node-id="28:5112">
                        UX Design
                      </p>
                    </div>
                    <ul className="[word-break:break-word] block font-normal leading-[0] not-italic relative shrink-0 text-[16px] text-[color:var(--gray-600)] w-full" data-node-id="28:5113">
                      <ul className="list-disc">
                        <li className="mb-0 ms-[48px]">
                          <span className="leading-[24px]">User research, business analysis, customer experience</span>
                        </li>
                        <li className="mb-0 ms-[48px]">
                          <span className="leading-[24px]">Information architechture, content design, interaction design</span>
                        </li>
                        <li className="mb-0 ms-[48px]">
                          <span className="leading-[24px]">Heuristic evaluation</span>
                        </li>
                        <li className="ms-[48px]">
                          <span className="leading-[24px]">User testing</span>
                        </li>
                      </ul>
                    </ul>
                  </div>
                  <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="28:5105" data-name="Content">
                    <div className="content-stretch flex items-center justify-center pl-[16px] relative shrink-0 w-full" data-node-id="28:5106" data-name="Title">
                      <p className="[word-break:break-word] flex-[1_0_0] font-bold leading-[24px] min-w-px not-italic relative text-[24px] text-[color:var(--gray-600)]" data-node-id="28:5107">
                        DesignOps
                      </p>
                    </div>
                    <ul className="[word-break:break-word] block font-normal leading-[0] not-italic relative shrink-0 text-[16px] text-[color:var(--gray-600)] w-full" data-node-id="28:5108">
                      <ul className="list-disc">
                        <li className="mb-0 ms-[48px]">
                          <span className="leading-[24px]">Design leadership, product managing and ownership</span>
                        </li>
                        <li className="mb-0 ms-[48px]">
                          <span className="leading-[24px]">Advocating for the importance and power of design throughout organizations and business landscape</span>
                        </li>
                        <li className="mb-0 ms-[48px]">
                          <span className="leading-[24px]">Workflow refinement</span>
                        </li>
                        <li className="ms-[48px]">
                          <span className="leading-[24px]">Agile design + dev, Scrum</span>
                        </li>
                      </ul>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-wrap gap-6 md:gap-0 items-center justify-center md:justify-between overflow-clip relative shrink-0 w-full" data-node-id="1:3910" data-name="Row">
              <div className="flex flex-row items-center self-stretch">
                <div className="content-stretch flex flex-col gap-[8px] h-full items-center justify-center overflow-clip relative shrink-0" data-node-id="1:3930" data-name="Tech">
                  <div className="h-[64px] relative shrink-0 w-[42.667px]" data-node-id="1:3931" data-name="icon-figma">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconFigma} />
                  </div>
                  <p className="[word-break:break-word] font-normal leading-[28px] not-italic relative shrink-0 text-[18px] text-[color:var(--gray-600)] whitespace-nowrap" data-node-id="1:3937">
                    Figma
                  </p>
                </div>
              </div>
              <div className="flex flex-row items-center self-stretch">
                <div className="content-stretch flex flex-col gap-[8px] h-full items-center justify-center overflow-clip relative shrink-0" data-node-id="28:5118" data-name="Tech">
                  <div className="overflow-clip relative shrink-0 size-[64px]" data-node-id="28:5119" data-name="icon-cypress">
                    <div className="absolute h-[58px] left-[0.25px] top-[6px] w-[64.147px]" data-node-id="28:5133" data-name="image 3">
                      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage3} />
                    </div>
                  </div>
                  <p className="[word-break:break-word] font-normal leading-[28px] not-italic relative shrink-0 text-[18px] text-[color:var(--gray-600)] whitespace-nowrap" data-node-id="28:5121">
                    Sketch
                  </p>
                </div>
              </div>
              <div className="flex flex-row items-center self-stretch">
                <div className="content-stretch flex flex-col gap-[8px] h-full items-center justify-center overflow-clip relative shrink-0" data-node-id="28:5122" data-name="Tech">
                  <div className="overflow-clip relative shrink-0 size-[64px]" data-node-id="28:5123" data-name="icon-cypress">
                    <div className="absolute left-[-0.2px] size-[64px] top-0" data-node-id="28:5149" data-name="image 5">
                      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage5} />
                    </div>
                  </div>
                  <p className="[word-break:break-word] font-normal leading-[28px] not-italic relative shrink-0 text-[18px] text-[color:var(--gray-600)] whitespace-nowrap" data-node-id="28:5125">
                    Penpot
                  </p>
                </div>
              </div>
              <div className="flex flex-row items-center self-stretch">
                <div className="content-stretch flex flex-col gap-[8px] h-full items-center justify-center overflow-clip relative shrink-0" data-node-id="1:3938" data-name="Tech">
                  <div className="overflow-clip relative shrink-0 size-[64px]" data-node-id="1:3939" data-name="icon-cypress">
                    <div className="absolute aspect-[68/68] left-[0.52%] right-[1.04%] top-px" data-node-id="28:5116" data-name="image 1">
                      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
                    </div>
                  </div>
                  <p className="[word-break:break-word] font-normal leading-[28px] not-italic relative shrink-0 text-[18px] text-[color:var(--gray-600)] whitespace-nowrap" data-node-id="1:3946">
                    Miro
                  </p>
                </div>
              </div>
              <div className="flex flex-row items-center self-stretch">
                <div className="content-stretch flex flex-col gap-[8px] h-full items-center justify-center overflow-clip relative shrink-0" data-node-id="1:3947" data-name="Tech">
                  <div className="overflow-clip relative shrink-0 size-[64px]" data-node-id="1:3948" data-name="icon-storybook">
                    <div className="absolute aspect-[1200/1170] left-[0.78%] right-[0.78%] top-[4px]" data-node-id="28:5127" data-name="image 2">
                      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2} />
                    </div>
                  </div>
                  <p className="[word-break:break-word] font-normal leading-[28px] not-italic relative shrink-0 text-[18px] text-[color:var(--gray-600)] whitespace-nowrap" data-node-id="1:3951">
                    Adobe Suite
                  </p>
                </div>
              </div>
              <div className="flex flex-row items-center self-stretch">
                <div className="content-stretch flex flex-col gap-[8px] h-full items-center justify-center overflow-clip relative shrink-0" data-node-id="28:5135" data-name="Tech">
                  <div className="overflow-clip relative shrink-0 size-[64px]" data-node-id="28:5136" data-name="icon-cypress">
                    <div className="absolute left-[0.5px] size-[64px] top-px" data-node-id="28:5146" data-name="image 4">
                      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage4} />
                    </div>
                  </div>
                  <p className="[word-break:break-word] font-normal leading-[28px] not-italic relative shrink-0 text-[18px] text-[color:var(--gray-600)] whitespace-nowrap" data-node-id="28:5138">
                    Atlassian Suite
                  </p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-node-id="1:3893" data-name="Row">
              <p className="[word-break:break-word] font-normal leading-[28px] max-w-[576px] not-italic relative shrink-0 text-[20px] text-[color:var(--gray-600)] text-center w-full" data-node-id="1:3894">
                ...with additional expertice and interest in:
              </p>
            </div>
            <div className="content-stretch flex items-start relative shrink-0 w-full" data-node-id="2:3975" data-name="Checklist">
              <div className="content-stretch flex flex-col md:flex-row flex-[1_0_0] items-start md:items-center justify-between min-w-px relative w-full gap-8 md:gap-0" data-node-id="2:3976" data-name="Row">
                <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] h-full items-start min-w-px pr-[8px] relative" data-node-id="2:3977" data-name="Column">
                    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="38:255" data-name="Content">
                      <div className="content-stretch flex items-center justify-center pl-[16px] relative shrink-0 w-full" data-node-id="38:256" data-name="Title">
                        <p className="[word-break:break-word] flex-[1_0_0] font-bold leading-[24px] min-w-px not-italic relative text-[20px] text-[color:var(--gray-600)]" data-node-id="38:257">
                          Accessibility
                        </p>
                      </div>
                      <ul className="[word-break:break-word] block font-normal leading-[0] not-italic relative shrink-0 text-[16px] text-[color:var(--gray-600)] w-full" data-node-id="38:258">
                        <ul className="list-disc">
                          <li className="mb-0 ms-[48px]">
                            <span className="leading-[24px]">WCAG 2.2 framework and understanding of accessibility-driven design</span>
                          </li>
                          <li className="mb-0 ms-[48px]">
                            <span className="leading-[24px]">Cognitive and visual accessibility</span>
                          </li>
                          <li className="ms-[48px]">
                            <span className="leading-[24px]">Assistive software and tools for checking accessibility</span>
                          </li>
                        </ul>
                      </ul>
                    </div>
                    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="45:300" data-name="Content">
                      <div className="content-stretch flex items-center justify-center pl-[16px] relative shrink-0 w-full" data-node-id="45:301" data-name="Title">
                        <p className="[word-break:break-word] flex-[1_0_0] font-bold leading-[24px] min-w-px not-italic relative text-[20px] text-[color:var(--gray-600)]" data-node-id="45:302">
                          Service Design
                        </p>
                      </div>
                      <ul className="[word-break:break-word] block font-normal leading-[0] not-italic relative shrink-0 text-[16px] text-[color:var(--gray-600)] w-full" data-node-id="45:303">
                        <ul className="list-disc">
                          <li className="mb-0 ms-[48px]">
                            <span className="leading-[24px]">{`Applying design thinking skills into larger scale service design projects `}</span>
                          </li>
                          <li className="mb-0 ms-[48px]">
                            <span className="leading-[24px]">Process modelling- and visualizing, service blueprints</span>
                          </li>
                          <li className="ms-[48px]">
                            <span className="leading-[24px]">Facilitation, co-design, workshops design sprints</span>
                          </li>
                        </ul>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] h-full items-start min-w-px pl-[8px] relative" data-node-id="2:3980" data-name="Column">
                    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="45:296" data-name="Content">
                      <div className="content-stretch flex items-center justify-center pl-[16px] relative shrink-0 w-full" data-node-id="45:297" data-name="Title">
                        <p className="[word-break:break-word] flex-[1_0_0] font-bold leading-[24px] min-w-px not-italic relative text-[20px] text-[color:var(--gray-600)]" data-node-id="45:298">{`Data & AI-assisted design work - future proofing`}</p>
                      </div>
                      <ul className="[word-break:break-word] block font-normal leading-[0] not-italic relative shrink-0 text-[16px] text-[color:var(--gray-600)] w-full" data-node-id="45:299">
                        <ul className="list-disc">
                          <li className="mb-0 ms-[48px]">
                            <span className="leading-[24px]">{`Fast prototyping with v02, Lovable, Figma Make, Cursor, Claude `}</span>
                          </li>
                          <li className="mb-0 ms-[48px]">
                            <span className="leading-[24px]">{`LLMs and agents for ease of work and applications in user research and analysis etc. `}</span>
                          </li>
                          <li className="ms-[48px]">
                            <span className="leading-[24px]">Validation with data, reporting, analytics</span>
                          </li>
                        </ul>
                      </ul>
                    </div>
                    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="45:305" data-name="Content">
                      <div className="content-stretch flex items-center justify-center pl-[16px] relative shrink-0 w-full" data-node-id="45:306" data-name="Title">
                        <p className="[word-break:break-word] flex-[1_0_0] font-bold leading-[24px] min-w-px not-italic relative text-[20px] text-[color:var(--gray-600)]" data-node-id="45:307">
                          Front-end technologies
                        </p>
                      </div>
                      <div className="[word-break:break-word] font-normal leading-[0] not-italic relative shrink-0 text-[16px] text-[color:var(--gray-600)] w-full" data-node-id="45:308">
                        <ul className="mb-0">
                          <ul>
                            <li className="list-disc ms-[48px]">
                              <span className="leading-[24px]">Understanding and basic capabilities of HTML/CSS, Javascript, Typescript, React and Web components</span>
                            </li>
                          </ul>
                        </ul>
                        <p className="leading-[24px]">​</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="1:469" data-name="Row">
              <div className="content-stretch flex flex-wrap gap-6 md:gap-0 items-center justify-center md:justify-between overflow-clip relative shrink-0 w-full" data-node-id="1:470" data-name="Row">
                <div className="flex flex-row items-center self-stretch">
                  <div className="content-stretch flex flex-col gap-[8px] h-full items-center justify-center overflow-clip relative shrink-0" data-node-id="28:5151" data-name="Tech">
                    <div className="overflow-clip relative shrink-0 size-[64px]" data-node-id="28:5152" data-name="icon-git">
                      <div className="absolute aspect-[600/600] left-0 right-0 top-0" data-node-id="28:5157" data-name="image 6">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage6} />
                      </div>
                    </div>
                    <p className="[word-break:break-word] font-normal leading-[28px] not-italic relative shrink-0 text-[18px] text-[color:var(--gray-600)] whitespace-nowrap" data-node-id="28:5154">
                      ChatGPT
                    </p>
                  </div>
                </div>
                <div className="flex flex-row items-center self-stretch">
                  <div className="content-stretch flex flex-col gap-[8px] h-full items-center justify-center overflow-clip relative shrink-0" data-node-id="45:288" data-name="Tech">
                    <div className="overflow-clip relative shrink-0 size-[64px]" data-node-id="45:289" data-name="icon-git">
                      <div className="absolute aspect-[600/600] left-0 right-0 top-0" data-node-id="45:290" data-name="image">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
                      </div>
                    </div>
                    <p className="[word-break:break-word] font-normal leading-[28px] not-italic relative shrink-0 text-[18px] text-[color:var(--gray-600)] whitespace-nowrap" data-node-id="45:291">
                      Claude
                    </p>
                  </div>
                </div>
                <div className="flex flex-row items-center self-stretch">
                  <div className="content-stretch flex flex-col gap-[8px] h-full items-center justify-center overflow-clip relative shrink-0" data-node-id="45:292" data-name="Tech">
                    <div className="overflow-clip relative shrink-0 size-[64px]" data-node-id="45:293" data-name="icon-git">
                      <div className="absolute aspect-[600/600] left-0 right-0 top-0" data-node-id="45:294" data-name="image">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage7} />
                      </div>
                    </div>
                    <p className="[word-break:break-word] font-normal leading-[28px] not-italic relative shrink-0 text-[18px] text-[color:var(--gray-600)] whitespace-nowrap" data-node-id="45:295">
                      Cursor
                    </p>
                  </div>
                </div>
                <div className="flex flex-row items-center self-stretch">
                  <div className="content-stretch flex flex-col gap-[8px] h-full items-center justify-center overflow-clip relative shrink-0" data-node-id="1:3952" data-name="Tech">
                    <div className="relative shrink-0 size-[64px]" data-node-id="1:3953" data-name="icon-git">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconGit} />
                    </div>
                    <p className="[word-break:break-word] font-normal leading-[28px] not-italic relative shrink-0 text-[18px] text-[color:var(--gray-600)] whitespace-nowrap" data-node-id="1:3955">
                      Git-versionhallinta
                    </p>
                  </div>
                </div>
                <div className="flex flex-row items-center self-stretch">
                  <div className="content-stretch flex flex-col gap-[8px] h-full items-center justify-center overflow-clip relative shrink-0" data-node-id="1:471" data-name="Tech">
                    <div className="relative shrink-0 size-[64px]" data-node-id="1:472" data-name="icon-javscript">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconJavscript} />
                    </div>
                    <p className="[word-break:break-word] font-normal leading-[28px] not-italic relative shrink-0 text-[18px] text-[color:var(--gray-600)] whitespace-nowrap" data-node-id="1:475">
                      Javascript
                    </p>
                  </div>
                </div>
                <div className="flex flex-row items-center self-stretch">
                  <div className="content-stretch flex flex-col gap-[8px] h-full items-center justify-center overflow-clip relative shrink-0" data-node-id="1:476" data-name="Tech">
                    <div className="relative shrink-0 size-[64px]" data-node-id="1:477" data-name="icon-typescript">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconTypescript} />
                    </div>
                    <p className="[word-break:break-word] font-normal leading-[28px] not-italic relative shrink-0 text-[18px] text-[color:var(--gray-600)] whitespace-nowrap" data-node-id="1:480">
                      Typescript
                    </p>
                  </div>
                </div>
                <div className="flex flex-row items-center self-stretch">
                  <div className="content-stretch flex flex-col gap-[8px] h-full items-center justify-end overflow-clip relative shrink-0" data-node-id="1:481" data-name="Tech">
                    <div className="h-[64px] relative shrink-0 w-[69.818px]" data-node-id="1:482" data-name="icon-react">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconReact} />
                    </div>
                    <p className="[word-break:break-word] font-normal leading-[28px] not-italic relative shrink-0 text-[18px] text-[color:var(--gray-600)] whitespace-nowrap" data-node-id="1:488">
                      React
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[var(--gray-50)] content-stretch flex flex-col items-center justify-center px-4 sm:px-8 md:px-[72px] py-12 md:py-[96px] relative shrink-0 w-full" data-node-id="1:562" data-name="Experience">
          <div className="content-stretch flex flex-col gap-[48px] items-center justify-center px-0 md:px-[32px] relative shrink-0 w-full" data-node-id="1:563" data-name="Container">
            <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="1:564" data-name="Row">
              <p className="[word-break:break-word] font-[family-name:var(--font-display)] font-normal leading-[var(--display-line-height)] relative shrink-0 text-[color:var(--gray-600)] text-[length:var(--display-size)] text-center tracking-[var(--display-tracking)] w-full" data-node-id="6:617">
                Experience
              </p>
              <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-node-id="1:567" data-name="Row">
                <p className="[word-break:break-word] font-normal leading-[28px] max-w-[576px] not-italic relative shrink-0 text-[20px] text-[color:var(--gray-600)] text-center w-full" data-node-id="1:568">
                  Here is a quick summary of my most recent experiences:
                </p>
              </div>
            </div>
            <div className="bg-[var(--gray-default)] content-stretch flex flex-col items-start overflow-clip p-6 md:p-[32px] relative rounded-[12px] shadow-[0px_4px_3px_0px_rgba(0,0,0,0.07),0px_2px_2px_0px_rgba(0,0,0,0.06)] shrink-0 w-full max-w-[896px]" data-node-id="1:569" data-name="Row">
              <div className="content-stretch flex flex-col lg:flex-row gap-6 lg:gap-[48px] items-start overflow-clip relative shrink-0 w-full" data-node-id="1:570" data-name="Row">
                <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-node-id="1:571" data-name="Column">
                  <div className="[word-break:break-word] font-semibold leading-[0] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap" data-node-id="2:3966">
                    <p className="leading-[28px] mb-0">Gofore Oyj,</p>
                    <p className="leading-[28px]">{`Tampere `}</p>
                  </div>
                </div>
                <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start not-italic relative shrink-0 w-full lg:w-[384px]" data-node-id="1:582" data-name="Column">
                  <p className=" font-semibold leading-[28px] relative shrink-0 text-[20px] text-[color:var(--gray-900)] w-full" data-node-id="1:583">
                    Senior Designer
                  </p>
                  <div className="content-stretch flex flex-col font-normal gap-[4px] items-start leading-[0] relative shrink-0 text-[16px] text-[color:var(--gray-600)] w-full" data-node-id="1:584" data-name="Column">
                    <div className="relative shrink-0 w-full whitespace-pre-wrap" data-node-id="1:585">
                      <p className="leading-[24px] mb-0">{`At Gofore I’ve had the change to gain extensive experience in 15+ digital service projects working as a consultant in multidisciplinary teams across design and development. `}</p>
                      <p className="leading-[24px] mb-0">​</p>
                      <p className="leading-[24px] mb-0">{`Highlights: `}</p>
                      <p className="leading-[24px]">​</p>
                    </div>
                    <ul className="block relative shrink-0 w-full" data-node-id="1:586">
                      <li className="list-disc ms-[24px]">
                        <span className="leading-[24px]">Applying design thinking methods to collaborate effectively in fast-paced, iterative (mostly) public sector projects.</span>
                      </li>
                    </ul>
                    <ul className="block relative shrink-0 w-full" data-node-id="1:587">
                      <li className="list-disc ms-[24px]">
                        <span className="leading-[24px]">Building and maintaining scalable design systems and layouts that support consistent user experiences.</span>
                      </li>
                    </ul>
                    <ul className="block list-disc relative shrink-0 w-full" data-node-id="1:588">
                      <li className="mb-0 ms-[24px]">
                        <span className="leading-[24px]">Ensuring accessibility standards are met in all digital products and services.</span>
                      </li>
                      <li className="ms-[24px]">
                        <span className="leading-[24px]">Actively contributing and participating in site Communality crew-activities.</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="content-stretch flex items-start relative shrink-0" data-node-id="1:589" data-name="Column">
                  <p className="[word-break:break-word] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-[color:var(--gray-700)] whitespace-nowrap" data-node-id="1:590">
                    Sept 2022 - Present
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[var(--gray-default)] content-stretch flex flex-col items-start overflow-clip p-6 md:p-[32px] relative rounded-[12px] shadow-[0px_4px_3px_0px_rgba(0,0,0,0.07),0px_2px_2px_0px_rgba(0,0,0,0.06)] shrink-0 w-full max-w-[896px]" data-node-id="1:591" data-name="Row">
              <div className="content-stretch flex flex-col lg:flex-row gap-6 lg:gap-[48px] items-start overflow-clip relative shrink-0 w-full" data-node-id="1:592" data-name="Row">
                <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-node-id="1:593" data-name="Column">
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="6:366" data-name="Column">
                    <div className="[word-break:break-word] font-semibold leading-[0] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap" data-node-id="6:367">
                      <p className="leading-[28px] mb-0">Yleisradio,</p>
                      <p className="leading-[28px]">Tampere</p>
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start not-italic relative shrink-0 w-full lg:w-[384px]" data-node-id="1:604" data-name="Column">
                  <p className=" font-semibold leading-[28px] relative shrink-0 text-[20px] text-[color:var(--gray-900)] w-full" data-node-id="1:605">
                    Media Creative
                  </p>
                  <p className=" font-normal leading-[24px] relative shrink-0 text-[16px] text-[color:var(--gray-600)] w-full" data-node-id="33:242">{`Highlights: `}</p>
                  <div className="content-stretch flex flex-col font-normal gap-[4px] items-start leading-[0] relative shrink-0 text-[16px] text-[color:var(--gray-600)] w-full" data-node-id="1:606" data-name="Column">
                    <ul className="block relative shrink-0 w-full" data-node-id="1:607">
                      <li className="list-disc ms-[24px]">
                        <span className="leading-[24px]">{`Visual design for multi-platform content creation, UI/UX development of the Yle Galaxi application `}</span>
                      </li>
                    </ul>
                    <ul className="block relative shrink-0 w-full" data-node-id="1:608">
                      <li className="list-disc ms-[24px]">
                        <span className="leading-[24px]">Designed and developed user interfaces for Yle Galaxi application with a focus on accessibility and ease of use.</span>
                      </li>
                    </ul>
                    <ul className="block relative shrink-0 w-full" data-node-id="1:609">
                      <li className="list-disc ms-[24px]">
                        <span className="leading-[24px]">Ran usability tests with primary school children to validate design and implementation</span>
                      </li>
                    </ul>
                    <ul className="block relative shrink-0 w-full" data-node-id="1:610">
                      <li className="list-disc ms-[24px]">
                        <span className="leading-[24px]">Ran constant customer research of running programmes and social media</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="content-stretch flex items-start relative shrink-0" data-node-id="1:611" data-name="Column">
                  <p className="[word-break:break-word] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-[color:var(--gray-700)] whitespace-nowrap" data-node-id="1:612">
                    Feb 2020 - Jan 2022
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <WorkSection />
        <div id="testimonials" className="bg-[var(--gray-50)] content-stretch flex flex-col items-center justify-center px-4 sm:px-8 md:px-[72px] py-12 md:py-[96px] relative shrink-0 w-full scroll-mt-24" data-node-id="1:696" data-name="Testimonials">
          <div className="content-stretch flex flex-col gap-[48px] items-center justify-center px-0 md:px-[32px] relative shrink-0 w-full" data-node-id="1:697" data-name="Container">
            <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="8:172" data-name="Row">
              <p className="[word-break:break-word] font-[family-name:var(--font-display)] font-normal leading-[var(--display-line-height)] relative shrink-0 text-[color:var(--gray-600)] text-[length:var(--display-size)] text-center tracking-[var(--display-tracking)] w-full" data-node-id="8:173">
                Testimonials
              </p>
              <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-node-id="8:174" data-name="Row">
                <p className="[word-break:break-word] font-normal leading-[28px] max-w-[576px] not-italic relative shrink-0 text-[20px] text-[color:var(--gray-600)] text-center w-full" data-node-id="8:175">
                  Some feedback I’ve received from co-workers and clients.
                </p>
              </div>
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-wrap gap-[48px] h-auto items-start not-italic relative rounded-[12px] shrink-0 w-full" data-node-id="1:703" data-name="Row">
              <div className="bg-[var(--gray-default)] content-stretch flex flex-[1_0_0] flex-col gap-[24px] h-auto items-center min-w-[min(100%,300px)] overflow-clip p-6 md:p-[48px] relative rounded-[12px] shadow-[0px_4px_3px_0px_rgba(0,0,0,0.07),0px_2px_2px_0px_rgba(0,0,0,0.06)]" data-node-id="1:704" data-name="Column">
                <div className=" font-normal leading-[0] relative shrink-0 text-[16px] text-[color:var(--gray-600)] w-full" data-node-id="1:708">
                  <p className="leading-[24px] mb-0">“Noora ottaa todella hienosti koppia tiimissä ja selvittää monimutkaisiakin ongelmia. Hän ottaa omistajuutta ja huolehtii yhteisestä viestistä, tekee erinomaista yhteistyötä. Käydessä esim. käyttöönottoa/handoveria läpi hän osaa aina hienosti täydentää tietoa myös devauspuolen rajoitteista ja tiedoista. Hän pitää huolta, että projektille saadaan yhtenäinen tieto, vaikka mentäisiinkin oman ydintehtävän ulkopuolelle.”</p>
                  <p className="leading-[24px]">​</p>
                </div>
                <div className="content-stretch flex flex-col gap-[4px] items-center justify-center relative shrink-0 text-center w-full" data-node-id="1:709" data-name="Customer Details">
                  <p className=" font-semibold leading-[28px] relative shrink-0 text-[20px] text-[color:var(--gray-900)] w-full" data-node-id="1:710">
                    Client
                  </p>
                  <p className=" font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--gray-600)] w-full" data-node-id="1:711">
                    Public sector
                  </p>
                </div>
              </div>
              <div className="bg-[var(--gray-default)] content-stretch flex flex-[1_0_0] flex-col gap-[24px] h-auto items-center min-w-[min(100%,300px)] overflow-clip p-6 md:p-[48px] relative rounded-[12px] shadow-[0px_4px_3px_0px_rgba(0,0,0,0.07),0px_2px_2px_0px_rgba(0,0,0,0.06)]" data-node-id="1:712" data-name="Column">
                <div className=" font-normal leading-[0] relative shrink-0 text-[16px] text-[color:var(--gray-600)] w-full" data-node-id="1:716">
                  <p className="leading-[24px] mb-0">“Nooralla on hyvä silmä visuaalisuudelle ja hän on järjestelmällinen palveluiden suunnittelija. Hän on ryhmätilanteissa harkitseva, rauhallinen ja ratkaisukeskeinen, samalla myös huumori pysyy mukana! Hankalassa asemassa eräässä palvelussa hän sai parannettua ja vietyä käyttökokemusta eteenpäin aikataulu- ja budjettipaineista huolimatta.”</p>
                  <p className="leading-[24px]">​</p>
                </div>
                <div className="content-stretch flex flex-col gap-[4px] items-center justify-center relative shrink-0 text-center w-full" data-node-id="1:717" data-name="Customer Details">
                  <p className=" font-semibold leading-[28px] relative shrink-0 text-[20px] text-[color:var(--gray-900)] w-full" data-node-id="1:718">
                    Co-worker in project
                  </p>
                  <p className=" font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--gray-600)] w-full" data-node-id="1:719">
                    Gofore
                  </p>
                </div>
              </div>
              <div className="bg-[var(--gray-default)] content-stretch flex flex-[1_0_0] flex-col gap-6 md:gap-[170px] h-auto items-center min-w-[min(100%,300px)] overflow-clip p-6 md:p-[48px] relative rounded-[12px] shadow-[0px_4px_3px_0px_rgba(0,0,0,0.07),0px_2px_2px_0px_rgba(0,0,0,0.06)]" data-node-id="1:720" data-name="Column">
                <p className=" font-normal leading-[24px] overflow-hidden relative shrink-0 text-[16px] text-[color:var(--gray-600)] text-ellipsis w-full" data-node-id="1:724">
                  “Noora is an a hard-working professional and her ability to adapt to new situations and large scopes is enviably good! I also appreciate her incredible skills in UX work and Figma. I hope to work with her again in the future.”
                </p>
                <div className="content-stretch flex flex-col gap-[4px] items-center justify-center relative shrink-0 text-center w-full" data-node-id="1:725" data-name="Customer Details">
                  <p className=" font-semibold leading-[28px] relative shrink-0 text-[20px] text-[color:var(--gray-900)] w-full" data-node-id="1:726">
                    Client
                  </p>
                  <p className=" font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--gray-600)] w-full" data-node-id="1:727">
                    Public sector
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="contact" className="bg-[var(--gray-default)] content-stretch flex flex-col items-center justify-center px-4 sm:px-8 md:px-[72px] py-12 md:py-[96px] relative shrink-0 w-full scroll-mt-24" data-node-id="1:728" data-name="Contact me">
          <div className="content-stretch flex flex-col gap-[48px] items-center justify-center px-0 md:px-[32px] relative shrink-0 w-full" data-node-id="1:729" data-name="Container">
            <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="9:182" data-name="Row">
              <p className="[word-break:break-word] font-[family-name:var(--font-display)] font-normal leading-[var(--display-line-height)] relative shrink-0 text-[color:var(--gray-600)] text-[length:var(--display-size)] text-center tracking-[var(--display-tracking)] w-full" data-node-id="9:183">
                Get in contact
              </p>
              <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-node-id="9:184" data-name="Row">
                <p className="[word-break:break-word] font-normal leading-[28px] max-w-[576px] not-italic relative shrink-0 text-[20px] text-[color:var(--gray-600)] text-center w-full" data-node-id="9:185">{`Feel free to reach out to me if you're interested in working together.`}</p>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[16px] items-center justify-center relative shrink-0" data-node-id="1:735" data-name="Column">
              <div className="content-stretch flex flex-col sm:flex-row gap-3 sm:gap-[20px] items-center justify-center overflow-clip relative shrink-0 w-full max-w-full" data-node-id="1:736" data-name="Email">
                <Icon className="overflow-clip relative shrink-0 size-[32px]" name="icon-inbox" size="32" />
                <p className="[word-break:break-word] font-semibold leading-[32px] md:leading-[40px] not-italic relative shrink-0 text-[20px] md:text-[36px] text-[color:var(--gray-900)] text-center tracking-[-0.72px] break-all sm:break-normal" data-node-id="1:738">
                  n.nenonen@gmail.com
                </p>
              </div>
              <div className="content-stretch flex flex-col sm:flex-row gap-3 sm:gap-[20px] items-center justify-center overflow-clip relative shrink-0 w-full max-w-full" data-node-id="1:740" data-name="Phone">
                <Icon className="overflow-clip relative shrink-0 size-[32px]" name="icon-phone" size="32" />
                <p className="[word-break:break-word] font-semibold leading-[32px] md:leading-[40px] not-italic relative shrink-0 text-[20px] md:text-[36px] text-[color:var(--gray-900)] text-center tracking-[-0.72px]" data-node-id="1:742">
                  +358440260496
                </p>
              </div>
            </div>
            <div className="content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 w-full" data-node-id="1:744" data-name="Row">
              <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="1:745" data-name="Social">
                <div className="content-stretch flex flex-wrap items-center justify-center gap-4 overflow-clip relative shrink-0 w-full max-w-[536px]" data-node-id="40:2630" data-name="Links">
                  <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-w-px relative" data-node-id="40:2631" data-name="social link">
                    <div className="overflow-clip relative shrink-0 size-[36px]" data-node-id="40:2632" data-name="linkedin-big-logo 1">
                      <div className="absolute inset-[11.11%_19.42%_25.07%_16.67%]" data-node-id="40:2633" data-name="Group">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup} />
                      </div>
                    </div>
                    <a className="[word-break:break-word] flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[color:var(--gray-600)] w-[117px]" href="https://www.linkedin.com/in/noora-nenonen/" data-node-id="40:2637" target="_blank">
                      <p className="[text-underline-position:from-font] cursor-pointer decoration-from-font decoration-solid leading-[normal] underline">LinkedIn</p>
                    </a>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-w-px relative" data-node-id="40:2638" data-name="social link">
                    <IconButton className="content-stretch flex items-center justify-center p-[6px] relative rounded-[8px] shrink-0" />
                    <a className="[word-break:break-word] flex flex-[1_0_0] flex-col font-medium h-[27px] justify-center leading-[0] min-w-px not-italic relative text-[16px] text-[color:var(--gray-600)]" href="https://github.com/Nooranen" data-node-id="40:2640" target="_blank">
                      <p className="[text-underline-position:from-font] cursor-pointer decoration-from-font decoration-solid leading-[normal] underline">GitHub</p>
                    </a>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-w-px relative" data-node-id="40:2641" data-name="social link">
                    <div className="content-stretch flex items-center justify-center p-[6px] relative rounded-[8px] shrink-0" data-node-id="40:2642" data-name="Icon Button">
                      <div className="overflow-clip relative shrink-0 size-[24px]" data-node-id="I40:2642;309:256" data-name="Icon">
                        <div className="absolute bottom-[62.5%] left-[20.83%] right-1/2 top-[8.33%]" data-node-id="I40:2642;309:256;165:28" data-name="Vector">
                          <div className="absolute inset-[-14.29%]">
                            <img alt="" className="block max-w-none size-full" src={imgVector7} />
                          </div>
                        </div>
                        <div className="absolute bottom-[62.5%] left-1/2 right-[20.83%] top-[8.33%]" data-node-id="I40:2642;309:256;165:29" data-name="Vector">
                          <div className="absolute inset-[-14.29%]">
                            <img alt="" className="block max-w-none size-full" src={imgVector8} />
                          </div>
                        </div>
                        <div className="absolute bottom-[33.33%] left-1/2 right-[20.83%] top-[37.5%]" data-node-id="I40:2642;309:256;165:30" data-name="Vector">
                          <div className="absolute inset-[-14.29%]">
                            <img alt="" className="block max-w-none size-full" src={imgVector9} />
                          </div>
                        </div>
                        <div className="absolute bottom-[4.17%] left-[20.83%] right-1/2 top-[66.67%]" data-node-id="I40:2642;309:256;165:31" data-name="Vector">
                          <div className="absolute inset-[-14.29%]">
                            <img alt="" className="block max-w-none size-full" src={imgVector10} />
                          </div>
                        </div>
                        <div className="absolute bottom-[33.33%] left-[20.83%] right-1/2 top-[37.5%]" data-node-id="I40:2642;309:256;165:32" data-name="Vector">
                          <div className="absolute inset-[-14.29%]">
                            <img alt="" className="block max-w-none size-full" src={imgVector11} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <a className="[word-break:break-word] flex flex-[1_0_0] flex-col font-medium h-[27px] justify-center leading-[0] min-w-px not-italic relative text-[16px] text-[color:var(--gray-600)]" href="https://www.figma.com/@nooranenonen" data-node-id="40:2643" target="_blank">
                      <p className="[text-underline-position:from-font] cursor-pointer decoration-from-font decoration-solid leading-[normal] underline">Figma community</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[var(--gray-50)] content-stretch flex flex-col items-end justify-center px-4 md:px-[80px] py-[24px] relative shrink-0 w-full" data-node-id="1:752" data-name="Footer">
          <button
            type="button"
            onClick={scrollToTop}
            className="content-stretch cursor-pointer flex items-center justify-center relative shrink-0 bg-transparent border-0 p-0"
            data-node-id="10:196"
            data-name="Link"
          >
            <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] [word-break:break-word] decoration-from-font decoration-solid font-semibold leading-[24px] not-italic relative shrink-0 text-[20px] text-[color:var(--gray-600)] text-left underline whitespace-nowrap" data-node-id="I10:196;1:2580">
              Back to top ↑
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}
