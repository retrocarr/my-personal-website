import { ShapedDiv } from "./lib/ShapedDiv/ShapedDiv";
import { Bg } from "./bg";
import { path1, path2, path3 } from "./paths";
import './App.scss'
import { AnimatedPath } from "./lib/ShapedDiv/AnimatedPath";

/** todo: list
 *  1-try deploying 
 *  2-font sizes
 *  3-
 */ 


function App() {

  return <main>

    <Bg />

    <ShapedDiv width="default" height="510px" bgShape="polygon(0 0, 100% 0, 100% 40%, 0 100%)"
      afterShape="polygon(92.14% 204px, 100% 0px, 100% 100%, 1px 100.83%, 0.64% 94.85%);"
      shapeMargin="1em" padding=".5em" bgColor="#333"
      className="trapezoid"
    >
      <h1 className="trapizoidH1">Hi. im murtatha</h1>
      <p className="trapizoidP">
        Self-taught full-stack web developer with 3+ years of experience
        based in turkey activley looking for a role in the industry. please
        do contact me if you like my work. Thanks
      </p>

      <div className="links">
        <a>Experience</a>
        <a>Contact</a>
        <a>About</a>
      </div>

    </ShapedDiv>

    {/* todo: redraw svgs to have circles on both ends. only leave the last one  */}
    <AnimatedPath d={path1} className="shape-1" />
    <AnimatedPath d={path2} className="shape-2" />
    <AnimatedPath d={path3} className="shape-3" width={'50px'} style={{border: '2px solid tomato'}}/>


    <section className="scroll"></section>

  </main>

}


export default App
