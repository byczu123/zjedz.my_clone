const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			email: null,
			username: null,
			id: null,
			currentLocation: null,
			currentDate: null,
			currentHour: null,
			currentPeople: null
		},
		actions: {
			setUserData: (email, username, id) => {
				setStore({
					email: email,
					username: username,
					id: id
				})
				console.log('Store set. Values: ', 'email:', email, 'username:', username)
			},
			setCurrentLocation: (currentLocation) => {
				setStore({currentLocation: currentLocation})
			},
			setCurrentDate: (currentDate) => {
				setStore({currentDate: currentDate})
			},
			setCurrentHour: (currentHour) => {
				setStore({currentHour: currentHour})
			},
			setCurrentPeople: (currentPeople) => {
				setStore({currentPeople: currentPeople})
			},
			logout: () => {
				const Cookies = require("js-cookie")
				Cookies.remove('token')
				setStore({
					email: null,
					username: null,
					id: null,
				})
				console.log('Logged out. Store reset, cookie removed')
			}
		}
	};
};

export default getState;