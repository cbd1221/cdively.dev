
import styles from "../Styles/Bio.module.css";
import WelcomeImage from "./WelcomeImage";
import wizard from "../assets/wizard_anim1.png";

import ContactForm from "./ContactForm";

interface TextContainerProps {
  currentView: string;
}

export default function TextContainer({ currentView }: TextContainerProps) {
  let headerText = "Hi, I'm Colin";

  const renderCurrentView = (currentView: string) => {
    switch (currentView) {
      case "about":
        return <AboutMe />;
      case "skills":
        return <Skills />;
      case "contact":
        return <ContactForm />;
      default:
        return <AboutMe />;
    }
  };

  switch (currentView) {
    case "about":
      headerText = "Hi, I'm Colin";
      break;
    case "skills":
      headerText = "I'm Talented!";
      break;
    case "contact":
      headerText = "";
      break;
  }

  return (
    <div className={styles.ContainerDiv}>
      <div className={styles.ContentDiv}>
        <WelcomeImage
          src={wizard}
          alt={"a wizard, unlikely that it is colin"}
        />
        <h1 className={styles.HeaderIntro}>{headerText}</h1>
        {renderCurrentView(currentView)}
      </div>
    </div>
  );
}

const AboutMe = () => {
  return (
    <div className={styles.BioText}>
      <p>
        TLDR: I am dedicated, versatile, and talented. Master of nothing but
        experienced with everything. I really like mobile development, and I'd
        say that's where I am most talented. It's been awhile since I've typed
        out any HTML, in case this site isn't already proof of that, but I did
        learn to code with Python/JS/React and once I shake off the dust I'll
        make this place more presentable. <br></br>
        <li>
          Autistic and Attention Deficited, just like the rest of the computer
          nerds.
        </li>
        <li>
          Currently enrolled in Oregon State's Computer Science program because
          I think it sounds like fun to study this full time.
        </li>
      </p>
      <h3>So, Who Am I?</h3>
      <p>
        Since I was a child I've always been fascinated by computers. There was
        a solid portion of my youth where I was nearly certain that I would
        devote my life to music (I am still an avid bass player), but I never
        quite got over my urge to take things apart to see how they work.
      </p>
      <p>
        That sense of curiosity carried me far. I taught myself to write code
        through the ancient and lost art of creation engine/creation kit
        scripting for Bethesda Softworks' 2002 masterpiece "Morrowind". It
        released when I was 9, but I thought it was the most amazing thing —
        being able type out a few lines of words and see effects in the game I
        was playing. It felt as close to magic as I could ever get and I never
        lost that feeling
      </p>
      <p>
        I am a dedicated, versatile software developer with a strong foundation
        to build upon. I bring a lot to any table I sit at, least of all is my
        desire and capacity to learn and grow. I didn't have anyone holding my
        hand when I taught myself to code, so I am accustomed to finding my own
        answers, pushing through the brick walls, and peeking under the hood. If
        I don't know how or why it works, I don't feel satisfied.
      </p>
      <p>
        As someone who is disabled and Autistic, accessibility is something I am
        passionate about, as well as the intersection of modern tech and mental
        health. I love working on ambitious projects, even if they are too much
        for me alone, and I can't help but tinker with game development because
        who doesn't love turning code and engineering into an interactive form
        of art. If any of this sounds like something you can get behind, message
        me from the contact form — even if it's not a job (freelance or
        otherwise), it's always nice to be part of a community. Besides, there's always room for one more side project. 
      </p>
    </div>
  );
};

const Skills = () => {
  const skillList = [
    // list of coding languages and frameworks
    "HTML | CSS | TypeScript",
    "SwiftUI | React Native | Flutter",
    "Swift | C++ | C#",
    "Python | Java | Kotlin",
    "Native iOS Development",
  ];
  return (
    <div className={styles.BioText}>
      <p>
        These are my skills! <br />
        If I list it below, I enjoy working with it and have experience with it.
        If I <i>don't</i> list it below, unless it's extremely niche, I probably
        have experience with it too, I just don't want to claim it as a skill.
        I've had a lot of timme to learn and grow as a developer, and I'm always
        looking to learn more, so this list will likely change and is relatively
        broad
      </p>
      <ul>
        {skillList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};