import React, { Component } from 'react';
import './../../css/component/blog.css';
import { CopyBlock, nord } from 'react-code-blocks';
import ModalImage from 'react-modal-image';

class Docs extends Component {
	render() {
		return (
			<div className="container">
<div id="pre-requisite" style={styles.headerOffset}></div>
				<h2 className={styles.mt5}>Pre-requisite</h2>
				<hr />
				<p className={styles.mt5} style={styles.lineSpacer}>All items below must already installed in your machine</p>
				<ul>
					<li className="mb-2">NodeJS <a className="badge badge-success" target="_blank" href="https://nodejs.org/en/download/">get it here</a></li>
					<li className="mb-2">MongoDB <a className="badge badge-success" target="_blank" href="https://docs.mongodb.com/guides/server/install/">get it here</a></li>
				</ul>

<div id="installation" style={styles.headerOffset}></div>
				<h2 className={styles.mt5}>Installation</h2>
				<hr />
				<p className={styles.my5} style={styles.lineSpacer}>Install Backless Js globally using this command</p>
				<div className={styles.mb5}>
					<CopyBlock
						text={'$ npm install -g backless'}
						language={'bash'}
						showLineNumbers={false}
						theme={nord}
						wrapLines
						codeBlock
					/>
				</div>
				<h6 className={styles.my5}>OR</h6>
				<p className={styles.my5} style={styles.lineSpacer}>
					You could create Backless Js REST API instantly using this command
				</p>
				<div className={styles.mb5}>
					<CopyBlock
						text={'$ npx backless create'}
						language={'bash'}
						showLineNumbers={false}
						theme={nord}
						wrapLines
						codeBlock
					/>
				</div>

<div id="help" style={styles.headerOffset}></div>
				<h2 className={styles.mt5}>Help</h2>
				<hr />
				<p className={styles.my5} style={styles.lineSpacer}>To see all the command lines in our package, Use this command</p>
				<div className={styles.mb5}>
					<CopyBlock
						text={'$ backless --help'}
						language={'bash'}
						showLineNumbers={false}
						theme={nord}
						wrapLines
						codeBlock
					/>
				</div>
				<p className={styles.my5} style={styles.lineSpacer}>And you will found this text below</p>
				{/* <img src="../assets/images/help.png" alt="help" /> */}
				<ModalImage
					small={'../assets/images/help.png'}
					large={'../assets/images/help.png'}
					alt="help"
				/>

<div id="version" style={styles.headerOffset}></div>
				<h2 className={styles.mt5}>Version</h2>
				<hr />
				<p className={styles.my5} style={styles.lineSpacer}>
					If you installed globally make sure you've already installed Backless
					Js correctly using this command
				</p>
				<div className={styles.mb5}>
					<CopyBlock
						text={'$ backless --v'}
						language={'bash'}
						showLineNumbers={false}
						theme={nord}
						wrapLines
						codeBlock
					/>
				</div>
				<h6 className={styles.my5} style={styles.lineSpacer}>OR</h6>
				<div className={styles.mb5}>
					<CopyBlock
						text={'$ backless --version'}
						language={'bash'}
						showLineNumbers={false}
						theme={nord}
						wrapLines
						codeBlock
					/>
				</div>

<div id="updating" style={styles.headerOffset}></div>
				<h2 className={styles.mt5}>Updating</h2>
				<hr />
				<p className={styles.my5} style={styles.lineSpacer}>
					To make sure our INSTANT EXPRESS REST API generator work correctly
					please make sure to always updated it to newer version using this
					command
				</p>
				<div className={styles.mb5}>
					<CopyBlock
						text={'$ npm update -g backless'}
						language={'bash'}
						showLineNumbers={false}
						theme={nord}
						wrapLines
						codeBlock
					/>
				</div>

<div id="usage" style={styles.headerOffset}></div>
				<h2 className={styles.mt5}>Usage</h2>
				<hr />
				<p className={styles.my5} style={styles.lineSpacer}>You can run this command to start generating new server</p>
				<div className={styles.py3 + ' ' + styles.my5} style={styles.notesBlock}>
					<strong>Notes :</strong> Make sure there is no server folder in your
					working directory otherwise Backless wont create new server
				</div>
				<div className={styles.mb5}>
					<CopyBlock
						text={'$ backless create'}
						language={'bash'}
						showLineNumbers={false}
						theme={nord}
						wrapLines
						codeBlock
					/>
				</div>

		<h4 className={styles.mt5}>1. Database Input</h4>
				<hr />
				<p className={styles.my5} style={styles.lineSpacer}>
					In this section please input database name to your database that you
					want to use and press enter. The default name is (Backless-DB)
				</p>
				{/* <img src="../assets/images/databaseInput.png" alt="database input" /> */}
				<ModalImage
					small={'../assets/images/databaseInput.png'}
					large={'../assets/images/databaseInput.png'}
					alt="database input"
				/>

		<h4 className={styles.mt5}>2. Model Input</h4>
				<hr />
				<p className={styles.my5} style={styles.lineSpacer}>
					Please input model name to your database.The default name is (Foobar)
				</p>
				{/* <img src="../assets/images/modelInput.png" alt="model input" /> */}
				<ModalImage
					small={'../assets/images/modelInput.png'}
					large={'../assets/images/modelInput.png'}
					alt="model input"
				/>

		<h4 className={styles.mt5}>3. Attributes Input</h4>
				<hr />
				<p className={styles.my5} style={styles.lineSpacer}>
					In this part, you will found text below and you have to decide the
					attribute's name for your model. The default name is (name)
				</p>
				{/* <img src="../assets/images/AttributeInput.png" alt="attribute input" /> */}
				<ModalImage
					small={'../assets/images/AttributeInput.png'}
					large={'../assets/images/AttributeInput.png'}
					alt="attribute input"
				/>
				<p className={styles.my5} style={styles.lineSpacer}>
					After you decided the attribute's name, choose the type for this
					attribute. The default type is (String)
				</p>
				{/* <img src="../assets/images/AttributeType.png" alt="attribute type" /> */}
				<ModalImage
					small={'../assets/images/AttributeType.png'}
					large={'../assets/images/AttributeType.png'}
					alt="attribute type"
				/>

				<p className={styles.my5} style={styles.lineSpacer}>
					The last step of this section, you can choose to add another attribute
					by type "Y" or "yes" (this is the default if you're not choose or type
					anything) or you can choose NO by type "n" or "no".
				</p>
				{/* <img src="../assets/images/addAnotherAttribute.png" alt="add another attribute" /> */}
				<ModalImage
					small={'../assets/images/addAnotherAttribute.png'}
					large={'../assets/images/addAnotherAttribute.png'}
					alt="add another attribute"
				/>
		<h4 className={styles.mt5}>4. Port Input</h4>
				<hr />
				<p className={styles.my5} style={styles.lineSpacer}>
					In this section, you choose in which port you want to use. The default
					for this port is 3000.
				</p>
				{/* <img src="../assets/images/portInput.png" alt="port input" /> */}
				<ModalImage
					small={'../assets/images/portInput.png'}
					large={'../assets/images/portInput.png'}
					alt="port input"
				/>
		<h4 className={styles.mt5}>5. Jsonwebtoken Secret key Input</h4>
				<hr />
				<p className={styles.my5} style={styles.lineSpacer}>
					After you input the port before port, you will found this text below
					and input that text to set your jsonwebtoken secret key in your '.env'
					file. The secret key default is 'Backless_Secret' if you let it empty.
				</p>
				{/* <img src="../assets/images/jsonwebtokenInput.png" alt="jsonwebtoken input" /> */}
				<ModalImage
					small={'../assets/images/jsonwebtokenInput.png'}
					large={'../assets/images/jsonwebtokenInput.png'}
					alt="jsonwebtoken input"
				/>
		<h4 className={styles.mt5}>6. Wait for a minute and...</h4>
				<hr />
				{/* <img src="../assets/images/Loading.png" alt="loading" /> */}
				<ModalImage
					small={'../assets/images/Loading.png'}
					large={'../assets/images/Loading.png'}
					alt="loading"
				/>
		<h4 className={styles.mt5}>7. Voilaa... your server is ready to use !</h4>
				<hr />
				{/* <img src="../assets/images/finish.png" alt="finish" /> */}
				<ModalImage
					small={'../assets/images/finish.png'}
					large={'../assets/images/finish.png'}
					alt="finish"
				/>

<div id="backless-command" style={styles.headerOffset}></div>
				<h2 className={styles.mt5}>Backless Command</h2>
				<hr />
				<div className={(styles.w50, styles.mt5)}>
					<h4>Backless Prove</h4>
					<hr />
				</div>
				<p className={styles.my5} style={styles.lineSpacer}>
					This options is a command to run all testing file. by use this command
				</p>
				<div className={styles.mb5}>
					<CopyBlock
						text={'$ backless prove'}
						language={'bash'}
						showLineNumbers={false}
						theme={nord}
						wrapLines
						codeBlock
					/>
				</div>
				<p className={styles.my5} style={styles.lineSpacer}>You will found this text message</p>
				{/* <img src="../assets/images/prove.png" alt="prove" /> */}
				<ModalImage
					small={'../assets/images/prove.png'}
					large={'../assets/images/prove.png'}
					alt="prove"
				/>
				<p className={styles.my5} style={styles.lineSpacer}>
					All you have to do is to wait for a moment till this text message show
					up.
				</p>
				{/* <img src="../assets/images/doneProve.png" alt="done prove" /> */}
				<ModalImage
					small={'../assets/images/doneProve.png'}
					large={'../assets/images/doneProve.png'}
					alt="done prove"
				/>
				<div className={styles.py3 + ' ' + styles.my5} style={styles.notesBlock}>
					Notes: This message will show up by assuming that you're not changes
					anything in our package file.
				</div>
				<h6 className={styles.my5} style={styles.lineSpacer}>BUT</h6>
				<p className={styles.my5} style={styles.lineSpacer}>
					If you want to customize your own server and there is an error, you
					will found this text below.
				</p>
				{/* <img src="../assets/images/errorProve.png" alt="error prove" /> */}
				<ModalImage
					small={'../assets/images/errorProve.png'}
					large={'../assets/images/errorProve.png'}
					alt="error prove"
				/>
				<p className={styles.my5} style={styles.lineSpacer}>
					So, don't forget to customize all of related file to prevent the
					error.
				</p>
				<p className={styles.my5} style={styles.lineSpacer}>
					You also can run testing by move into your server's file and run this
					command in your terminal.
				</p>
				<div className={styles.mb5}>
					<CopyBlock
						text={'$ npm run test'}
						language={'bash'}
						showLineNumbers={false}
						theme={nord}
						wrapLines
						codeBlock
					/>
				</div>
				<h6 className={styles.my5} style={styles.lineSpacer}>OR</h6>
				<div className={styles.mb5}>
					<CopyBlock
						text={'$ npm test'}
						language={'bash'}
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
				<p className={styles.my5} style={styles.lineSpacer}>
					You can running the server by using this command in your terminal
				</p>
				<div className={styles.mb5}>
					<CopyBlock
						text={'$ backless serve'}
						language={'bash'}
						showLineNumbers={false}
						theme={nord}
						wrapLines
						codeBlock
					/>
				</div>
				<p className={styles.my5} style={styles.lineSpacer}>
					You will found this text after you running the server by using command
					above
				</p>
				{/* <img src="../assets/images/serve.png" alt="serve" /> */}
				<ModalImage
					small={'../assets/images/serve.png'}
					large={'../assets/images/serve.png'}
					alt="serve"
				/>
				<p className={styles.my5} style={styles.lineSpacer}>You can also use this command to run the server</p>
				<div className={styles.mb5}>
					<CopyBlock
						text={'$ npm run dev'}
						language={'bash'}
						showLineNumbers={false}
						theme={nord}
						wrapLines
						codeBlock
					/>
				</div>

<div id="add-another-model" style={styles.headerOffset}></div>
				<h2 className={styles.mt5}>Add Another Model</h2>
				<hr />
				<p className={styles.my5} style={styles.lineSpacer}>
					If you want to add another model for your server, you can use this
					command
				</p>
				<div className={styles.py3 + ' ' + styles.my5} style={styles.notesBlock}>
					<strong>Notes :</strong> Make sure you're currently on your working
					directory the same as Backless Server folder exist
				</div>
				<div className={styles.mb5}>
					<CopyBlock
						text={`$ backless add --name <Model Name> --attributes <key> : <dataTypes>,<key> : <dataTypes>`}
						language={'bash'}
						showLineNumbers={false}
						theme={nord}
						wrapLines
						codeBlock
					/>
				</div>
				<p className={styles.my5} style={styles.lineSpacer}>
					"ModelName" is a name for your model (example: UserModel), "key" is
					for attribute's name and "dataTypes" is for attribute's type (String,
					Number, Boolean, Array) to add another attributes please use ',' to
					seperate each attribute
				</p>

				<div className={(styles.w50, styles.mt5)}>
					<h4>Example's Input</h4>
					<hr />
				</div>
				<p className={styles.my5} style={styles.lineSpacer}>Example to add one attribute.</p>
				<div className={styles.mb5}>
					<CopyBlock
						text={'$ backless add --name UserModel --attributes name:string'}
						language={'bash'}
						showLineNumbers={false}
						theme={nord}
						wrapLines
						codeBlock
					/>
				</div>
				<p className={styles.my5} style={styles.lineSpacer}>You also can add multiple attributes for one model.</p>
				<div className={styles.mb5}>
					<CopyBlock
						text={
							'$ backless add --name UserModel --attributes name:string,bornDate:number,isMale:boolean'
						}
						language={'bash'}
						showLineNumbers={false}
						theme={nord}
						wrapLines
						codeBlock
					/>
				</div>

<div id="authentication" style={styles.headerOffset}></div>
				<h2 className={styles.mt5}>Authentication</h2>
				<hr />
				<p className={styles.my5} style={styles.lineSpacer}>
					We gave you authentication method already. You can comment the
					authentication's route, if you didn't need that.
				</p>
				<div className={styles.py3 + ' ' + styles.my5} style={styles.notesBlock}>
					<strong>Notes :</strong> this images below are located on index routes
					folder
				</div>
				{/* <img src="../assets/images/authentication.png" alt="authentication" /> */}
				<ModalImage
					small={'../assets/images/authentication.png'}
					large={'../assets/images/authentication.png'}
					alt="authentication"
				/>
			</div>
		);
	}
}

const styles = {
	mt5: 'mt-5',
	mb5: 'mb-5',
	my5: 'my-5',
	py3: 'py-3',
	w50: 'w-50',
	lineSpacer: {
		lineHeight: '50px',
	},
	notesBlock: {
		backgroundColor: '#f3f5f7',
		borderColor: '#42b983',
		padding: '.1rem 1.5rem',
		borderLeftWidth: '.5rem',
		borderLeftStyle: 'solid',
		margin: '1rem 0',
	},
	notesTitle: {
		fontWeight: '600',
		marginBottom: '.5rem',
	},
	headerOffset:{
		paddingTop: '75px',
    marginTop: '-75px',
}
};

export default Docs;
