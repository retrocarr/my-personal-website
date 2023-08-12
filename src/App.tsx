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
import pdf from "../Resume.pdf";

import './scss/App.scss'
import './scss/sizes.scss'
import './scss/colors.scss'
import './scss/trapezoid.scss'
import './scss/scroll.scss'
import './scss/paths.scss'

/** todo list
 * todo: links to github...
 * todo: redraw paths 
 * todo: disable bg for firefox
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

function App() {

  const color = '99'
  return <main>

    <Bg strokeColor={`#${color.repeat(3)}`} />

    <Trapizoid>

      <h1 className="trapizoidH1">Hi. im murtatha</h1>
      <p className="trapizoidP">
        Self-taught full-stack web developer with 3+ years of experience
        based in turkey activley looking for a role in the industry. please
        do contact me if you like my work. Thanks
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

      <div className="projectCon">
        <img src={bb} alt="image of the main page" height='100' />
        <div>
          <h2>Hospital App
            <WebsiteLink href="https://border-control-66718.web.app/" />
          </h2>
          <p>my first full-stack project. single page using the google maps api. </p>
        </div>
      </div>

    </section>

  </main>

}


export default App
