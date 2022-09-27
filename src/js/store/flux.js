const getState = ({
    getStore,
    getActions,
    setStore
}) => {
    return {
        store: {
            demo: [{
                    title: "FIRST",
                    background: "white",
                    initial: "white"
                },
                {
                    title: "SECOND",
                    background: "white",
                    initial: "white"
                }
            ],
            auth: false,
            perfil: {},
            redi_to_log: false
        },
        actions: {
            // Use getActions to call a function within a fuction
            exampleFunction: () => {
                getActions().changeColor(0, "green");
            },
            loadSomeData: () => {
                /**
                	fetch().then().then(data => setStore({ "foo": data.bar }))
                */
            },
            login: (email, password) => {
                /**
                	fetch().then().then(data => setStore({ "foo": data.bar }))
                */
                // console.log("Sí funciono")
                // getStore(store)
                fetch('https://3000-4geeksacade-flaskresthe-11p5woexic8.ws-us67.gitpod.io/login', {
                        method: "POST",
                        body: JSON.stringify({
                            email: email,
                            password: password
                        }),
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    })
                    .then((response) => {
                        setStore({auth: true})
                        // console.log(store.auth)
                        return response.json()})
                    .then((data) => localStorage.setItem("token", data.access_token))

            },
            signup: (email, password) => {
                setStore({redi_to_log: true})
                console.log("Sí funciono")
                fetch('https://3000-4geeksacade-flaskresthe-11p5woexic8.ws-us67.gitpod.io/signup', {
                        method: "POST",
                        body: JSON.stringify({
                            email: email,
                            password: password
                        }),
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    })
                    .then((response) => response.json())
                    .then((data) => console.log(data))

            },
            get_profile: () => {
                let token = localStorage.getItem("token")
                // console.log("Sí funciono")
                fetch('https://3000-4geeksacade-flaskresthe-11p5woexic8.ws-us67.gitpod.io/profile', {
                        method: "GET",
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': "Bearer "+token
                        }
                    })
                    .then((response) => response.json())
                    .then((data) => setStore({perfil: data}))

            },
            logout: () => {
                localStorage.removeItem('token');
                setStore({auth: false})

            },
            changeColor: (index, color) => {
                //get the store
                const store = getStore();

                //we have to loop the entire demo array to look for the respective index
                //and change its color
                const demo = store.demo.map((elm, i) => {
                    if (i === index) elm.background = color;
                    return elm;
                });

                //reset the global store
                setStore({
                    demo: demo
                });
            }
        }
    };
};

export default getState;