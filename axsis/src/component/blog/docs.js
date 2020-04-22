import React, { Component } from "react";
import "./../../css/component/blog.css";
import { CopyBlock, nord } from "react-code-blocks";
import ModalImage from "react-modal-image";
import VideoSection from "../../sections/video-section";

class Docs extends Component {
  render() {
    return (
      <div className="container">
        <div id="introduction" style={styles.headerOffsetTop}></div>
        <h2>What is Backless Js?</h2>
        <p>
          <strong>
            Backless Js is the open-source instant REST API Express generator
            that developers love.
          </strong>
        </p>
        <hr />
        <p className={styles.my3} style={(styles.lineSpacer, { padding: 2 })}>
          Have you ever noticed how long it took to create a simple CRUD REST
          API?
          <br />
          Backless Js are here to solve that problem, Backless Js will generate
          Express REST API within minutes.
          <br />
          Our server comes with MongoDB as our database, Mocha test for testing
          our REST API, and also we’ll generate full documentation for your REST
          API.
        </p>
        <div
          className={styles.py3 + " " + styles.my5}
          style={styles.notesBlock}
        >
          This package is meant to be a tool for making freelancer software
          developer easier.
          <br />
          So they could focus more on the front-end side.
        </div>

        <div id="features" style={styles.headerOffset}></div>
        <h2>Features</h2>
        <hr />
        <h4 id="developer-friendly-api">Developer-Friendly API</h4>
        <p>
          If your content has to be displayed to the world, an API is required.
          Backless provides you with an API that will easily match your needs.
          Fetch any data you might need via a REST API.
        </p>
        <h4 id="roles-permissions">Roles &amp; Permissions</h4>
        <p>
          Backless has a built-in user system that allows you to manage who can
          access what.
        </p>
        <h4 id="customization">Customization</h4>
        <p>
          Every part of your application can be easily customized. Backless Js
          architecture allows you to extend your app to match your exact use
          case.
        </p>
        <h4 id="roadmap">Roadmap</h4>
        <p>
          Backless Js is a community-oriented project with an emphasis on
          transparency. We want to share our vision of the future of Backless
          and have your help in realizing it. Your insights are very important
          and will help steer the project in the right direction, so please
          visit our{" "}
          <a
            href="https://github.com/Backless-Js/Backless-Js"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              x="0px"
              y="0px"
              viewBox="0 0 100 100"
              width="15"
              height="15"
              class="icon outbound"
            >
              <path
                fill="currentColor"
                d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"
              ></path>{" "}
              <polygon
                fill="currentColor"
                points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"
              ></polygon>
            </svg>
          </a>{" "}
          and share your ideas.
        </p>

        <div id="quick-demo" style={styles.headerOffset}></div>
        <h2 className={styles.mt5}>Quick Demo</h2>
        <hr />
        <p className={styles.my3} style={styles.lineSpacer}>
          Here's a short demonstration of how quick & easy it is to set up a
          RESTful API Server using Backless-Js.
        </p>
        <VideoSection />

        <div id="prerequisites" style={styles.headerOffset}></div>
        <h2 className={styles.mt5}>Prerequisites</h2>
        <hr />
        <h4
          id="node-js"
          style={{
            display: "block",
            marginBlockStart: "1.33em",
            marginBlockEnd: "1.33em",
            marginInlineStart: "0px",
            marginInlineEnd: "0px",
            fontWeight: "bold",
          }}
        >
          Node.js
        </h4>
        <p>
          Backless Js only requires{" "}
          <a
            href="https://nodejs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Node.js
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              x="0px"
              y="0px"
              viewBox="0 0 100 100"
              width="15"
              height="15"
              class="icon outbound"
            >
              <path
                fill="currentColor"
                d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"
              ></path>{" "}
              <polygon
                fill="currentColor"
                points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"
              ></polygon>
            </svg>
          </a>
          . The current recommended version to run Backless Js is Node v12
          (current LTS).
        </p>
        <p>
          This is everything you need to run Backless Js on your local
          environment.
        </p>

        <table style={styles.table}>
          <thead>
            <tr>
              <th
                style={{
                  border: "1px solid #dfe2e5",
                  padding: ".6em 1em",
                  display: "table-cell",
                  verticalAlign: "inherit",
                  fontWeight: "bold",
                  textAlign: "-internal-center",
                }}
              >
                Software
              </th>{" "}
              <th
                style={{
                  border: "1px solid #dfe2e5",
                  padding: ".6em 1em",
                  display: "table-cell",
                  verticalAlign: "inherit",
                  fontWeight: "bold",
                  textAlign: "-internal-center",
                }}
              >
                Minimum version
              </th>
            </tr>
          </thead>{" "}
          <tbody>
            <tr>
              <td
                style={{
                  border: "1px solid #dfe2e5",
                  padding: ".6em 1em",
                  display: "table-cell",
                  verticalAlign: "inherit",
                }}
              >
                Node.js
              </td>{" "}
              <td
                style={{
                  border: "1px solid #dfe2e5",
                  padding: ".6em 1em",
                  display: "table-cell",
                  verticalAlign: "inherit",
                }}
              >
                12.x
              </td>
            </tr>{" "}
            <tr>
              <td
                style={{
                  border: "1px solid #dfe2e5",
                  padding: ".6em 1em",
                  display: "table-cell",
                  verticalAlign: "inherit",
                }}
              >
                npm
              </td>{" "}
              <td
                style={{
                  border: "1px solid #dfe2e5",
                  padding: ".6em 1em",
                  display: "table-cell",
                  verticalAlign: "inherit",
                }}
              >
                6.x
              </td>
            </tr>
          </tbody>
        </table>

        <h4
          id="databases"
          style={{
            display: "block",
            marginBlockStart: "1.33em",
            marginBlockEnd: "1.33em",
            marginInlineStart: "0px",
            marginInlineEnd: "0px",
            fontWeight: "bold",
          }}
        >
          Databases
        </h4>
        <p>Backless Js currently support the following databases.</p>
        <table style={styles.table}>
          <thead>
            <tr>
              <th
                style={{
                  border: "1px solid #dfe2e5",
                  padding: ".6em 1em",
                  display: "table-cell",
                  verticalAlign: "inherit",
                  fontWeight: "bold",
                  textAlign: "-internal-center",
                }}
              >
                Database
              </th>{" "}
              <th
                style={{
                  border: "1px solid #dfe2e5",
                  padding: ".6em 1em",
                  display: "table-cell",
                  verticalAlign: "inherit",
                  fontWeight: "bold",
                  textAlign: "-internal-center",
                }}
              >
                Minimum version
              </th>
            </tr>
          </thead>{" "}
          <tbody>
            <tr>
              <td
                style={{
                  border: "1px solid #dfe2e5",
                  padding: ".6em 1em",
                  display: "table-cell",
                  verticalAlign: "inherit",
                }}
              >
                MongoDB
              </td>{" "}
              <td
                style={{
                  border: "1px solid #dfe2e5",
                  padding: ".6em 1em",
                  display: "table-cell",
                  verticalAlign: "inherit",
                }}
              >
                3.6
              </td>
            </tr>
          </tbody>
        </table>
        <div id="installation" style={styles.headerOffset}></div>
        <h2 className={styles.mt5}>Installation</h2>
        <hr />
        <p className={styles.my3} style={styles.lineSpacer}>
          Install Backless Js globally using this command
        </p>
        <div className={styles.mb5}>
          <CopyBlock
            text={"$ npm install -g backless"}
            language={"bash"}
            showLineNumbers={false}
            theme={nord}
            wrapLines
            codeBlock
          />
        </div>
        <h6 className={styles.my5}>OR</h6>
        <p className={styles.my3} style={styles.lineSpacer}>
          You could create Backless Js REST API instantly using this command
        </p>
        <div className={styles.mb5}>
          <CopyBlock
            text={"$ npx backless create"}
            language={"bash"}
            showLineNumbers={false}
            theme={nord}
            wrapLines
            codeBlock
          />
        </div>

        <div id="help" style={styles.headerOffset}></div>
        <h2 className={styles.mt5}>Help</h2>
        <hr />
        <p className={styles.my3} style={styles.lineSpacer}>
          To see all the command lines in our package, Use this command
        </p>
        <div className={styles.mb5}>
          <CopyBlock
            text={"$ backless --help"}
            language={"bash"}
            showLineNumbers={false}
            theme={nord}
            wrapLines
            codeBlock
          />
        </div>
        <p className={styles.my3} style={styles.lineSpacer}>
          And you will found this text below
        </p>
        <ModalImage
          small={"../assets/images/help.png"}
          large={"../assets/images/help.png"}
          alt="help"
        />

        <div id="version" style={styles.headerOffset}></div>
        <h2 className={styles.mt5}>Version</h2>
        <hr />
        <p className={styles.my3} style={styles.lineSpacer}>
          If you installed globally make sure you've already installed Backless
          Js correctly using this command
        </p>
        <div className={styles.mb5}>
          <CopyBlock
            text={"$ backless --v"}
            language={"bash"}
            showLineNumbers={false}
            theme={nord}
            wrapLines
            codeBlock
          />
        </div>
        <h6 className={styles.my5} style={styles.lineSpacer}>
          OR
        </h6>
        <div className={styles.mb5}>
          <CopyBlock
            text={"$ backless --version"}
            language={"bash"}
            showLineNumbers={false}
            theme={nord}
            wrapLines
            codeBlock
          />
        </div>

        <div id="updating" style={styles.headerOffset}></div>
        <h2 className={styles.mt5}>Updating</h2>
        <hr />
        <p className={styles.my3} style={styles.lineSpacer}>
          To make sure our INSTANT EXPRESS REST API generator work correctly
          please make sure to always updated it to newer version using this
          command
        </p>
        <div className={styles.mb5}>
          <CopyBlock
            text={"$ npm update -g backless"}
            language={"bash"}
            showLineNumbers={false}
            theme={nord}
            wrapLines
            codeBlock
          />
        </div>

        <div id="usage" style={styles.headerOffset}></div>
        <h2 className={styles.mt5}>Usage</h2>
        <hr />
        <p className={styles.my3} style={styles.lineSpacer}>
          You can run this command to start generating new server
        </p>
        <div
          className={styles.py3 + " " + styles.my5}
          style={styles.notesBlock}
        >
          <strong>Notes :</strong> Make sure there is no server folder in your
          working directory otherwise Backless wont create new server
        </div>
        <div className={styles.mb5}>
          <CopyBlock
            text={"$ backless create"}
            language={"bash"}
            showLineNumbers={false}
            theme={nord}
            wrapLines
            codeBlock
          />
        </div>

        <h4 className={styles.mt5}>1. Database Input</h4>
        <hr />
        <p className={styles.my3} style={styles.lineSpacer}>
          In this section please input database name to your database that you
          want to use and press enter. <br />
          The default name is (Backless-DB)
        </p>
        <ModalImage
          small={"../assets/images/databaseInput.png"}
          large={"../assets/images/databaseInput.png"}
          alt="database input"
        />

        <h4 className={styles.mt5}>2. Model Input</h4>
        <hr />
        <p className={styles.my3} style={styles.lineSpacer}>
          Please input model name to your database.
          <br />
          The default name is (Foobar)
        </p>
        <ModalImage
          small={"../assets/images/modelInput.png"}
          large={"../assets/images/modelInput.png"}
          alt="model input"
        />

        <h4 className={styles.mt5}>3. Attributes Input</h4>
        <hr />
        <p className={styles.my3} style={styles.lineSpacer}>
          In this part, you will found text below and you have to decide the
          attribute's name for your model.
          <br />
          The default attribute name is (name)
        </p>
        <ModalImage
          small={"../assets/images/AttributeInput.png"}
          large={"../assets/images/AttributeInput.png"}
          alt="attribute input"
        />
        <p className={styles.my3} style={styles.lineSpacer}>
          After you decided the attribute's name, choose the type for this
          attribute.
          <br />
          The default attribute type is (String)
        </p>
        <ModalImage
          small={"../assets/images/AttributeType.png"}
          large={"../assets/images/AttributeType.png"}
          alt="attribute type"
        />

        <p className={styles.my3} style={(styles.lineSpacer, { padding: 2 })}>
          The last step of this section, you can choose to add another attribute
          or not.
        </p>
        <ModalImage
          small={"../assets/images/addAnotherAttribute.png"}
          large={"../assets/images/addAnotherAttribute.png"}
          alt="add another attribute"
        />
        <h4 className={styles.mt5}>4. Port Input</h4>
        <hr />
        <ModalImage
          small={"../assets/images/portInput.png"}
          large={"../assets/images/portInput.png"}
          alt="port input"
        />
        <div
          className={styles.py3 + " " + styles.my5}
          style={styles.notesBlock}
        >
          Notes: The default port is 3000.
        </div>
        <h4 className={styles.mt5}>5. Jsonwebtoken Secret key Input</h4>
        <hr />
        <ModalImage
          small={"../assets/images/jsonwebtokenInput.png"}
          large={"../assets/images/jsonwebtokenInput.png"}
          alt="jsonwebtoken input"
        />
        <div
          className={styles.py3 + " " + styles.my5}
          style={styles.notesBlock}
        >
          Notes: The default jsonwebtoken secret key is Backless_Secret.
        </div>
        <h4 className={styles.mt5}>6. Wait for a minute and...</h4>
        <hr />
        <ModalImage
          small={"../assets/images/Loading.png"}
          large={"../assets/images/Loading.png"}
          alt="loading"
        />
        <h4 className={styles.mt5}>
          7. Voilaa... your server is ready to use !
        </h4>
        <hr />
        <ModalImage
          small={"../assets/images/finish.png"}
          large={"../assets/images/finish.png"}
          alt="finish"
        />

        <div id="backless-command" style={styles.headerOffset}></div>
        <h2 className={styles.mt5}>Backless Command Line</h2>
        <hr />
        <div className={(styles.w50, styles.mt5)}>
          <h4>Backless Prove</h4>
          <hr />
        </div>
        <p className={styles.my3} style={styles.lineSpacer}>
          To make sure everything was generated successfully we recommend to run
          this command first before everything started.
        </p>
        <div className={styles.mb5}>
          <CopyBlock
            text={"$ backless prove"}
            language={"bash"}
            showLineNumbers={false}
            theme={nord}
            wrapLines
            codeBlock
          />
        </div>
        <p className={styles.my3} style={styles.lineSpacer}>
          You will found this text message
        </p>
        <ModalImage
          small={"../assets/images/prove.png"}
          large={"../assets/images/prove.png"}
          alt="prove"
        />
        <p className={styles.my3} style={styles.lineSpacer}>
          All you have to do is to wait for a moment till this text message show
          up.
        </p>
        <ModalImage
          small={"../assets/images/doneProve.png"}
          large={"../assets/images/doneProve.png"}
          alt="done prove"
        />
        <div
          className={styles.py3 + " " + styles.my5}
          style={styles.notesBlock}
        >
          Notes: This message will show up by assuming that you're not changes
          anything in our package file.
        </div>
        <h6 className={styles.my5} style={styles.lineSpacer}>
          BUT
        </h6>
        <p className={styles.my3} style={styles.lineSpacer}>
          If you want to customize your own server and there is an error, you
          will found this text below.
        </p>
        <ModalImage
          small={"../assets/images/errorProve.png"}
          large={"../assets/images/errorProve.png"}
          alt="error prove"
        />
        <p className={styles.my3} style={styles.lineSpacer}>
          So, don't forget to customize all of related file to prevent the
          error.
        </p>
        <p className={styles.my3} style={styles.lineSpacer}>
          You also can run testing by move into your server's file and run this
          command in your terminal.
        </p>
        <div className={styles.mb5}>
          <CopyBlock
            text={"$ npm run test"}
            language={"bash"}
            showLineNumbers={false}
            theme={nord}
            wrapLines
            codeBlock
          />
        </div>
        <h6 className={styles.my5} style={styles.lineSpacer}>
          OR
        </h6>
        <div className={styles.mb5}>
          <CopyBlock
            text={"$ npm test"}
            language={"bash"}
            showLineNumbers={false}
            theme={nord}
            wrapLines
            codeBlock
          />
        </div>

        <div className={(styles.w50, styles.mt5)}>
          <h4>Backless Serve</h4>
          <hr />
        </div>
        <p className={styles.my3} style={styles.lineSpacer}>
          You can running the server by using this command in your terminal
        </p>
        <div className={styles.mb5}>
          <CopyBlock
            text={"$ backless serve"}
            language={"bash"}
            showLineNumbers={false}
            theme={nord}
            wrapLines
            codeBlock
          />
        </div>
        <p className={styles.my3} style={styles.lineSpacer}>
          You will found this text after you running the server by using command
          above
        </p>
        <ModalImage
          small={"../assets/images/serve.png"}
          large={"../assets/images/serve.png"}
          alt="serve"
        />
        <p className={styles.my3} style={styles.lineSpacer}>
          You can also use this command to run the server
        </p>
        <div className={styles.mb5}>
          <CopyBlock
            text={"$ npm run dev"}
            language={"bash"}
            showLineNumbers={false}
            theme={nord}
            wrapLines
            codeBlock
          />
        </div>

        <div id="add-another-model" style={styles.headerOffset}></div>
        <h2 className={styles.mt5}>Add Another Model</h2>
        <hr />
        <p className={styles.my3} style={styles.lineSpacer}>
          If you want to add another model for your server, you can use this
          command
        </p>

        <div
          className={styles.py3 + " " + styles.my5}
          style={styles.notesBlock}
        >
          <strong>Notes :</strong> Make sure you're currently on your working
          directory the same as Backless Server folder exist
        </div>

        <div className={styles.mb5}>
          <CopyBlock
            text={`$ backless add --name <Model Name> --attributes <key> : <dataTypes>,<key> : <dataTypes>`}
            language={"bash"}
            showLineNumbers={false}
            theme={nord}
            wrapLines
            codeBlock
          />
        </div>
        <p className={styles.my3} style={styles.lineSpacer}>
          "ModelName" is a name for your model (example: UserModel), "key" is
          for attribute's name and "dataTypes" is for attribute's type (String,
          Number, Boolean, Array) to add another attributes please use ',' to
          seperate each attribute
        </p>

        <div className={(styles.w50, styles.mt5)}>
          <h4>Example's Input</h4>
          <hr />
        </div>

        <p className={styles.my3} style={styles.lineSpacer}>
          Example to add one attribute.
        </p>
        <div className={styles.mb5}>
          <CopyBlock
            text={"$ backless add --name UserModel --attributes name:string"}
            language={"bash"}
            showLineNumbers={false}
            theme={nord}
            wrapLines
            codeBlock
          />
        </div>
        <p className={styles.my3} style={styles.lineSpacer}>
          You also can add multiple attributes for one model.
        </p>
        <iframe
          src="https://giphy.com/embed/l3aBqp1bZVGDzvyd3o"
          width="480"
          height="214"
          frameBorder="0"
          class="giphy-embed"
          allowFullScreen
        ></iframe>

        <div id="authentication" style={styles.headerOffset}></div>
        <h2 className={styles.mt5}>Authentication</h2>
        <hr />
        <p className={styles.my3} style={styles.lineSpacer}>
          We gave you authentication method already. You can comment the
          authentication's route, if you didn't need that.
        </p>
        <div
          className={styles.py3 + " " + styles.my5}
          style={styles.notesBlock}
        >
          <strong>Notes :</strong> this images below are located on index routes
          folder
        </div>
        <ModalImage
          small={"../assets/images/authentication.png"}
          large={"../assets/images/authentication.png"}
          alt="authentication"
        />
      </div>
    );
  }
}

const styles = {
  mt5: "mt-5",
  mb5: "mb-5",
  my5: "my-5",
  my3: "my-4",
  py3: "py-3",
  w50: "w-50",
  lineSpacer: {
    lineHeight: "50px",
  },
  notesBlock: {
    backgroundColor: "#f3f5f7",
    borderColor: "#42b983",
    padding: ".1rem 1.5rem",
    borderLeftWidth: ".5rem",
    borderLeftStyle: "solid",
    margin: "1rem 0",
  },
  notesTitle: {
    fontWeight: "600",
    marginBottom: ".5rem",
  },
  headerOffsetTop: {
    paddingTop: "110px",
    marginTop: "-110px",
  },
  headerOffset: {
    paddingTop: "75px",
    marginTop: "-75px",
  },
  table: {
    borderCollapse: "collapse",
    margin: "1rem 0",
    display: "block",
    overflowX: "auto",
    borderSpacing: "2px",
    borderColor: "grey",
  },
  cell: {
    border: "1px solid #dfe2e5",
    padding: ".6em 1em",
  },
  th: {
    display: "table-cell",
    verticalAlign: "inherit",
    fontWeight: "bold",
    textAlign: "-internal-center",
  },
  td: {
    display: "table-cell",
    verticallign: "inherit",
  },
};

export default Docs;
