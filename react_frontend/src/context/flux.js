const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			user_id: null,
			email: null,
			username: null,
			currentLocation: null,
		},
		actions: {
			setUserData: (user_id ,email, username) => {
				setStore({
					user_id:user_id,
					email: email,
					username: username
				})
				console.log('Store set. Values: ', 'email:', email, 'username:', username,'user_id:', user_id)
			},
			setCurrentLocation: (location) => {
				setStore({currentLocation: location})
			},
			logout: () => {
				const Cookies = require("js-cookie")
				Cookies.remove('token')
				setStore({
					user_id: null,
					email: null,
					username: null
				})
				console.log('Logged out. Store reset, cookie removed')
			}
		}
	};
};

export default getState;