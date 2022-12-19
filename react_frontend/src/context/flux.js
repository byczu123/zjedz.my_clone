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
			resetStore: () => {
				setStore({
					email: null,
					username: null
				})
				console.log('Store reset')
			}
		}
	};
};

export default getState;