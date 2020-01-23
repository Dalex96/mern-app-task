import React, { Component } from 'react'

class App extends Component {
	render(){
		return (
			<div>
				{/*NAVEGACION */}
				<nav className="light-blue darken-4">
					<div className="container">
						<a className="brand-logo" href="/">AppTasks</a>
					</div>
				</nav>
				<div className="container">
					<div className="row">
						<div className="col s5">
							<div className="card">
								<div className="card-content">
									<form>
										<div className="row">
											<div className="input-field col s12">
												<input type="text" placeholder="title"/>
											</div>
										</div>
										<div className="row">
											<div className="input-field col s12">
												<textarea placeholder="message" className="materialize-textarea"></textarea>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
						<div className="col s7"></div>
					</div>
				</div>
			</div>
		)
		
	}
}


export default App