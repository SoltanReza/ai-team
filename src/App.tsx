import ImageComponent from "./ImageComponent";
import profile from "./Hajitoon.jpg";
import ghazal from "./photos/ghazal.jpeg";
import ghazal1 from "./photos/ghazal1.jpeg";
import fatima from "./photos/fatima.jpeg";
import fatima1 from "./photos/fatima1.jpeg";
import moein from "./photos/moein.jpeg";
import moein1 from "./photos/moein1.jpeg";
import ali from "./photos/ali.jpeg";
import sania from "./photos/sania.jpeg";
import styled from "styled-components";
import { ReactComponent as Blob } from "./blob.svg";
import { ReactComponent as AISvg } from "./svgfile.svg";
import { ReactComponent as ProjectsSvg } from "./projects.svg";

function App() {
  return (
    <AppContainer className="App">
      <Header>
        <h1>
          <span>AI</span>-Team
        </h1>
      </Header>

      <Showcase>
        <h1>
          In this place we try to done our tasks with <span>learning</span> and
          <span>teaching</span>
          eachother
        </h1>
        <AISvg />
      </Showcase>

      <HeroSectionWrapper>
        <ProjectsSvg height="300" />
        <div className="text-container">
          <h2>Up comming projects...</h2>
          <ul>
            <li>Language detection</li>
            <li>Text normalizer</li>

            <li>Tweeter crawler</li>
          </ul>
        </div>
      </HeroSectionWrapper>

      <ReportWrapper>
        <h2>We are currently working on...</h2>
        <p>
          what is language Detection? In natural language processing, language
          identification or language guessing is the problem of determining
          which natural language given content is in this week we tried to find
          the best and the most optimized method and library in python, which
          has the best accuracy and speed.
        </p>

        {/* <p></p> */}
      </ReportWrapper>
      <h2 className="red">Hands behind the scenes</h2>
      <TeamWrapper>
        <ImageComponent
          image={profile}
          job="Developer / Leader "
          name="Reza Soltan Mohammadi"
        />

        <ImageComponent
          image={ghazal}
          image1={ghazal1}
          job="Developer"
          name="Ghazal Seyed Far"
        />

        <ImageComponent
          image={fatima}
          image1={fatima1}
          job="Developer"
          name="Fatima"
        />

        <ImageComponent
          image={moein}
          image1={moein1}
          job="Developer"
          name="Moein Karami"
        />

        <ImageComponent image={ali} job="Developer" name="Ali" />

        <ImageComponent image={sania} job="Developer" name="Sania" />
      </TeamWrapper>

      <FunnyContainer>
        {/* <Blob className="blob" /> */}

        <h2 className="title">
          In <span>AI</span>-Team
        </h2>
        <div className="col col1">
          <h2>
            What we <span>do</span>
          </h2>

          <ul>
            <li>pay attention to details</li>
            <li>group meetings</li>
            <li>Help eachother to grow up</li>
            <li>Respect eachother</li>
            <li>Gain experience</li>
          </ul>
        </div>

        <div className="col col2">
          <h2>
            What we <span>don't</span>
          </h2>
          <ul>
            <li>Ignore tasks</li>
            <li>Ignore teammates hard work</li>
            <li>Mumbling</li>
            <li>Unfair competition</li>
          </ul>
        </div>
      </FunnyContainer>
    </AppContainer>
  );
}

const ReportWrapper = styled.div`
  margin-bottom: 2em;
  padding: 2em 4em;
  p {
    margin-bottom: 1em;
  }
`;
const HeroSectionWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 50vh;
  margin-bottom: 2em;
  ul {
    list-style: none;
  }
`;
const Showcase = styled.div`
  height: 70vh;
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    color: rgba(244, 13, 21, 1);
  }
`;
const AppContainer = styled.div`
  min-height: 100vh;
  padding: 2em;
  text-align: left;

  h2.red {
    text-align: center;
    margin: auto;
    margin-bottom: 2em;
    font-size: 1.3em;
    width: fit-content;
    border-bottom: 1px solid rgba(244, 13, 21, 1);
  }
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2em;
  span {
    color: rgba(244, 13, 21, 1);
  }
`;

// const Showcase = styled.div`

// `
const TeamWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2em;
  place-items: center;
`;

const FunnyContainer = styled.div`
  display: flex;
  position: relative;
  margin-top: 2em;
  width: 100%;
  height: 80vh;
  .blob {
    position: absolute;
    width: 600px;
    right: 0%;
    z-index: 0;
  }
  h2.title {
    position: absolute;
    top: 20%;
    left: 30%;
    border-bottom: 1px solid rgba(244, 13, 21, 1);
    padding: 5px;
    span {
      color: rgba(244, 13, 21, 1);
    }
  }
  .col {
    z-index: 999;
    width: 300px;
    border-radius: 5px;
    position: absolute;
    box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.25);
    padding: 1em;
    h2 {
      margin-bottom: 1em;
      border-bottom: 1px solid rgba(244, 13, 21, 1);
      padding-bottom: 0.5em;
    }
    ul {
      list-style-type: none;

      li {
        font-size: 1em;
      }
    }

    span {
      color: rgba(244, 13, 21, 1);
    }
  }

  .col1 {
    top: 20%;
    right: 20%;
  }

  .col2 {
    top: 40%;
    left: 20%;
  }
`;
export default App;
