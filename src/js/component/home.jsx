import React from "react";
import Navbar from '/workspaces/pt-48-Anderson-landing-page/src/js/component/Navbar.jsx';
import EnviarMail from '/workspaces/pt-48-Anderson-landing-page/src/js/component/EnviarMail.jsx';
import odontologia from '/workspaces/pt-48-Anderson-landing-page/src/img/odontologia.jpg'



//create your first component
const Home = () => {
	return (<>
		<div> 
		  <Navbar />
		  <EnviarMail />
		</div>
		</>
		
	);
};

export default Home;
