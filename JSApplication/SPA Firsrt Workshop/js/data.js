

function host(endpoint) {
    return `https://api.backendless.com/704742A4-F721-070C-FFF4-C8DCA554D000/4E7CC50D-458D-40E8-B72E-3DC4E965F59F/${endpoint}`
    
}

const endpoint = {
    REGISTER: 'users/register',
    LOGIN: 'users/login',
    LOGOUT: 'users/logout',
    MOVIES: 'data/movies',
    MOVIE_BY_ID: 'data/movies'
}

async function register(username,password) {
    return (await fetch(host(endpoint.REGISTER),{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username,
            password
        })
    })).json();
}


async function login(username,password) {
    const result = await (await fetch(host(endpoint.LOGIN),{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            login: username,
            password
        })
    })).json();
    localStorage.setItem('user-token',result['user-token']);
    localStorage.setItem('username',result.username); 
    localStorage.setItem('userId',result.objectId); 

    return result;
}


function logout() {
    //localStorage.setItem('userToken','YOUR TOKEN IN CONSOLE ON BROWSER')
    const token = localStorage.getItem('userToken')
    return fetch(host(endpoint.LOGOUT),{
        headers: {
            'user-token': token
        } 
    });  
}

//get all movies
async function getMovies() {
    const token = localStorage.getItem('userToken')
    

    return (await fetch(host(endpoint.MOVIES),{
        headers: {
            'user-token': token
        } 
    })).json();
}

//get movie by ID
async function getMovieById(id) {
    const token = localStorage.getItem('userToken')

    return (await fetch(host(endpoint.MOVIE_BY_ID + "/" + id),{
        headers: {
            'user-token': token
        } 
    })).json();
}

//create movie
async function createMovie(movie) {
    const token = localStorage.getItem('userToken')

    return (await fetch(host(endpoint.MOVIES),{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'user-token': token
        },
        body: JSON.stringify(movie)
    })).json();
}

//edit movie
async function updateMovie(id, updatedProps) {
    const token = localStorage.getItem('userToken')

    return (await fetch(host(endpoint.MOVIE_BY_ID + "/" +id),{
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'user-token': token
        },
        body: JSON.stringify(updatedProps)
    })).json();
}
//delete movie
async function deleteMovie(id) {
    const token = localStorage.getItem('userToken')

    return await fetch(host(endpoint.MOVIE_BY_ID + id),{
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'user-token': token
        },
    }).json();
}

//get movies by userID

async function getMoviesByOwner(ownerId) {
    const token = localStorage.getItem('userToken')

    return (await fetch(host(endpoint.MOVIES + `?where=ownerId%3D%27${ownerId}%27`),{
        headers: {
            'user-token': token
        }
    }
    )).json();

}

async function buyTickets(movie) {

    const newTickets = movie.tickets - 1;
    const movieId = movie.objectId;

    return updateMovie(movieId, {tickets: newTickets});

    

}


//buy ticket
async function buyTicket(movieId) {
    const token = localStorage.getItem('userToken')
    
    //
}

