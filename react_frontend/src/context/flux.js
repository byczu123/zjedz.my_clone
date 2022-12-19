const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			email: null,
			username: null
		},
		actions: {
			setUserData: (email, username) => {
				setStore({
					email: email,
					username: username
				})
				console.log('Store set. Values: ', 'email:', email, 'username:', username)
			},
			logout: () => {
				const Cookies = require("js-cookie")
				Cookies.remove('token')
				setStore({
					email: null,
					username: null
				})
				console.log('Logged out. Store reset, cookie removed')
			}
		}
	};
};

export default getState;