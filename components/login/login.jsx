import React from 'react';
import ReactDOM from 'react-dom';
import Ajax from '../ajax/ajax.jsx';

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username : '用户名',
			password : '密码',
		};
		this.setUsername = this.setUsername.bind(this);
		this.setPassword = this.setPassword.bind(this);
	}
	
	setUsername(e) {
		this.setState({
			username : e.target.value,
		});
	}

	setPassword(e) {
		this.setState({
			password : e.target.value,
		});
	}

	login(e) {
		// Ajax.get('http://localhost:8900/www', r => {
		// 	console.log(r);
		// });
		Ajax.post('http://localhost:8900/login', 
			{username : 'xyz12', password : 'xyz987'}, 
			r => {
				console.log(r);
		});
	}
	
	render() {
		return (<div className='login'>
			<span>帐号:&nbsp;&nbsp;&nbsp;</span>
				<input type='text' name='username' value={this.state.username} onChange={this.setUsername.bind(this)} />
			<br /><br />
			<span>密码:&nbsp;&nbsp;&nbsp;</span>
				<input type='password' name='password' value={this.state.password} onChange={this.setPassword.bind(this)} />
			<br /><br />
			<button onClick={this.login}>登录</button>
		</div>);
	}
}

ReactDOM.render(<Login />, document.getElementById('main'));