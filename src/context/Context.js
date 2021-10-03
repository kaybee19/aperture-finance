import * as React from 'react';

const AppContext = React.createContext();

export function useApp() {
  return React.useContext(AppContext);
}

const AppProvider = ({children}) => {

	const [language, setLanguage] = React.useState('english');

	React.useEffect(() => {

		// Check local storage on page load to get last saved language
	  const langCheck = localStorage.getItem("language");
	  if (langCheck !== null && (langCheck === 'english' || langCheck === 'chinese')) {
	  	setLanguage(langCheck);
	  }
	  // Set primary language to english
	  else {
	  	setLanguage('english');
	  }

	}, [])

	// Color switch based on theme palette
	const colorSelect = (clr) => {		
		let color;
		switch (clr) {
			case 'primary':
				color = '#5234F9';
				break;
			case 'secondary':
				color = '#10B981';
				break;
			case 'light':
				color = '#F9C846';
				break;
			case 'dark':
				color = '#F58451';
				break;
			case 'grey':
				color = '#222225';
				break;
			case 'black':
				color = '#16141F';
				break;
			default:
				color = '#16141F'
		}
		return color;
	}

	const langSelect = (lan) => {

		// Update state of language in application and local storage
		setLanguage(lan);
  	localStorage.setItem("language", lan);
	}

  return (
    <AppContext.Provider value={{
    	language,
    	colorSelect,
    	langSelect,
    }}>
      {children}
    </AppContext.Provider>
  )
}

export { AppProvider,  AppContext }