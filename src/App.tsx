import { ShapedDiv } from "./lib/ShapedDiv";
import { Bg } from "./bg";
import { path1, path2, path3 } from "./paths";
import { AnimatedPath } from "./lib/AnimatedPath";
import { RiGitRepositoryLine } from "react-icons/ri";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { GiLetterBomb } from "react-icons/gi";
import { BsFillFilePdfFill } from "react-icons/bs";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

import ss from "./assets/SS.png";
import bb from "./assets/BB.png";
import sw from "./assets/SW.jpg";
import pdf from "../Resume.pdf";

import './scss/App.scss'
import './scss/intro.scss'
import './scss/trapezoid.scss'
import './scss/scroll.scss'
import './scss/paths.scss'
import './scss/socials.scss'

/** todo list
 * todo: disable bg for firefox
 * todo: update resume link this webpage to it
 * todo: links to github linkdin 
 * 
 * after deploy
 * todo: svg scroll bar 
 */


/** 
 * !usecount:5
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
    bgColor: "#33333350",

    backgroundStyle: { background: 'linear-gradient(#333333cc, #ddd)', backdropFilter: 'blur(2px)' },
  };
  return <ShapedDiv {...config}>{children}</ShapedDiv>
}

function AnimatedIntro() {
  return <svg className="intro" viewBox="0 0 132 132" preserveAspectRatio="none">
    <path d="M 20.6375,132.29166 C 13.758335,124.75104 6.87917,117.21042 5.0491661,109.22873 3.2191623,101.24705 6.4381938,92.824653 13.626154,96.595125 20.814115,100.3656 31.970487,116.32847 42.774409,123.4722 53.578332,130.61593 64.029165,128.94027 56.84107,117.87167 49.652975,106.80306 24.826737,86.342361 14.067047,71.194866 3.3073578,56.047372 6.6145831,46.213889 23.327732,57.282611 40.04088,68.351333 70.158682,100.32118 88.67958,115.33626 c 18.5209,15.01509 25.44403,13.07485 8.730778,-7.32051 C 80.697108,87.620403 40.348959,48.771528 23.195199,27.693023 6.0414402,6.6145171 12.082639,3.3072915 32.301559,20.240996 52.52048,37.1747 86.915626,74.347914 105.06165,89.561387 c 18.14603,15.213473 20.04217,8.466737 5.62207,-9.525222 C 96.26362,62.044206 65.528472,32.808333 54.460155,18.2783 43.391838,3.7482674 51.990624,3.9246527 66.322422,13.515989 80.65422,23.107325 100.71806,42.11285 110.99271,48.220246 c 10.27466,6.107395 10.75972,-0.68344 3.63787,-9.855779 C 107.50873,29.192129 92.780555,17.638889 89.296952,11.509368 85.813349,5.379847 93.574305,4.6743057 101.00476,7.6509343 c 7.43045,2.9766287 14.52996,9.6351767 18.41052,9.8996987 3.88056,0.264521 4.54201,-5.864869 5.20347,-11.9943831"
    />

  </svg>
}

function App() {

  const color = '99'

  return <>
    <main>

      <AnimatedIntro />
      {window.innerWidth > 900 &&
        <Bg strokeColor={`#${color.repeat(3)}`} />}

      <Trapizoid>


        <h1 className="trapizoidH1">Hi. im murtatha</h1>
        <p className="trapizoidP">
          Self-taught front-end web developer with 3+ years of experience
          based in turkey activley looking for a role in the industry. please
          do contact me if you like my work. Thanks.
        </p>

        <div className="links">
          <a href={pdf}>resume <BsFillFilePdfFill style={{ color: 'red' }} /></a>
          <a className="contactAnchor" href="mailto:murtathaalnajjar@gmail.com">
            Contact <GiLetterBomb style={{ color: 'red' }} />
          </a>
        </div>

      </Trapizoid>

      {/* todo: redraw svgs to have circles on both ends. only leave the last one  */}
      <AnimatedPath d={path1.d} className="shape-1" viewbox={path1.viewbox} preserveAspectRatio="none" />
      <AnimatedPath d={path2.d} className="shape-2" viewbox={path2.viewbox} preserveAspectRatio="none" />
      <AnimatedPath d={path3.d} className="shape-3" viewbox={path3.viewbox} preserveAspectRatio="none" />

      <section className="scroll">
        <h1 style={{ fontSize: '2.5em', textAlign: 'center' }}>
          Projects </h1>

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
            <p>Responsive landing page layout.</p>
          </div>
        </div>


      </section>

    </main>
    <div className="socials">
      <a style={{ color: '#333' }} target="_blank" href="https://github.com/retrocarr"><AiFillGithub /></a>
      <a style={{ color: '#0b66c2' }} target="_blank" href="https://linkedin.com/in/murtatha-alnajjar"><AiFillLinkedin /></a>
    </div>
  </>

}


export default App
