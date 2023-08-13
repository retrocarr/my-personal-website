import { ShapedDiv } from "./lib/ShapedDiv";
import { Bg } from "./bg";
import { path1, path2, path3 } from "./paths";
import { AnimatedPath } from "./lib/AnimatedPath";
import { RiGitRepositoryLine } from "react-icons/ri";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { GiLetterBomb } from "react-icons/gi";
import { BsFillFilePdfFill } from "react-icons/bs";

import ss from "./assets/SS.png";
import bb from "./assets/BB.png";
import sw from "./assets/SW.jpg";
import pdf from "../Resume.pdf";

import './scss/App.scss'
import './scss/intro.scss'
import './scss/colors.scss'
import './scss/trapezoid.scss'
import './scss/scroll.scss'
import './scss/paths.scss'

/** todo list
 * todo: disable bg for firefox
 * todo: update resume link this webpage to it
 * 
 * after deploy
 * todo: svg scroll bar 
 */


var WebsiteLink = ({ href }: { href: string }) => <a href={href} target="_blank" title="Visit website"><BsBoxArrowUpRight /></a>
var GithubLink = ({ href }: { href: string }) => <a href={href} target="_blank" title="Visit github repo"><RiGitRepositoryLine /></a>

function Trapizoid({ children }: { children: React.ReactNode }) {
  const config = {
    width: "default",
    height: "510px",
    className: "trapezoid",

    bgShape: "polygon(0 0, 100% 0, 100% 40%, 0 100%)",
    afterShape: "polygon(92.14% 204px, 100% 0px, 100% 100%, 1px 100.83%, 0.64% 94.85%);",

    shapeMargin: "1em",
    padding: ".5em",
    bgColor: "#333",

    backgroundStyle: { background: '#33333390', backdropFilter: 'blur(2px)' },
  };
  return <ShapedDiv {...config}>{children}</ShapedDiv>
}

function AnimatedIntro() {
  return <svg className="intro" viewBox="20 10 100 100" preserveAspectRatio="none">
    <path d="m 66.145836,66.145836 c -0.424508,3.316446 -4.679941,1.06399 -5.512152,-0.70556 -2.255241,-4.795369 2.47858,-9.505993 6.923271,-10.318744 7.950509,-1.45382 14.511952,5.658776 15.125336,13.140983 0.900167,10.980439 -8.8623,19.61145 -19.358693,19.931928 C 49.333556,88.62159 38.576083,76.122935 38.585077,62.618038 38.596394,45.623503 53.867869,32.716213 70.379193,33.072925 90.37662,33.50495 105.44577,51.568043 104.7309,71.084753 103.88845,94.08452 83.022826,111.32262 60.501359,110.24305 34.499434,108.99665 15.087845,85.321602 16.536469,59.7958 18.182489,30.791761 44.671595,9.2035795 73.201432,11.024318 105.2076,13.06691 128.97458,42.373345 126.77951,73.906991 124.34256,108.91532 92.216404,134.86274 57.679121,132.29166"
    />

  </svg>
}

function App() {

  const color = '99'
  return <main>

    <AnimatedIntro />
    <Bg strokeColor={`#${color.repeat(3)}`} />

    <Trapizoid>

      <h1 className="trapizoidH1">Hi. im murtatha</h1>
      <p className="trapizoidP">
        Self-taught full-stack web developer with 3+ years of experience
        based in turkey activley looking for a role in the industry. please
        do contact me if you like my work. Thanks.
      </p>

      <div className="links">
        <a href={pdf}>resume <BsFillFilePdfFill style={{ color: 'red' }} /></a>
        <a className="contactAnchor" href="mailto:murtathaalnajjar@gmail.com">
          Contact <GiLetterBomb style={{ color: 'red' }} />
        </a>
        <a></a>
      </div>

    </Trapizoid>

    {/* todo: redraw svgs to have circles on both ends. only leave the last one  */}
    <AnimatedPath d={path1.d} className="shape-1" viewbox={path1.viewbox} preserveAspectRatio="none" />
    <AnimatedPath d={path2.d} className="shape-2" viewbox={path2.viewbox} preserveAspectRatio="none" />
    <AnimatedPath d={path3.d} className="shape-3" viewbox={path3.viewbox} preserveAspectRatio="none" />

    <section className="scroll">
      <h1 style={{ fontSize: '2.5em', textAlign: 'center' }}>
        ---------------------- Projects --------------------</h1>

      {/* social sphere */}
      <div className="projectCon">
        <img src={ss} alt="image of the main page" height='100' />
        <div>
          <h2>Social sphere
            <WebsiteLink href="https://social-sphere-one.vercel.app" />
            <GithubLink href="https://github.com/retrocarr/Social-Sphere-mantine-template-" />
          </h2>
          <p>social sphere is a little social media app i made from scratch
            with liking, following and commenting functionality.
          </p>
        </div>
      </div>
      {/* hospital app */}
      <div className="projectCon">
        <img src={bb} alt="image of the main page" height='100' />
        <div>
          <h2>Hospital App
            <WebsiteLink href="https://border-control-66718.web.app/" />
          </h2>
          <p>my first full-stack project. single page using the google maps api. </p>
        </div>
      </div>
      {/* still waves */}
      <div className="projectCon">
        <img src={sw} alt="image of the main page" height='100' />
        <div>
          <h2>Layout
            <WebsiteLink href="https://still-waters.vercel.app" />
            <GithubLink href="https://github.com/retrocarr/Still-Waters" />
          </h2>
          <p>Responsive landing page layout</p>
        </div>
      </div>

    </section>

  </main>

}


export default App
