import {API} from '../Config';

// export const signup = ( user )=>{
//         return fetch(`${API}/signup`,{
//             method: "POST",
//             headers: {
//                 Accept: "application/json",
//                 "Content-Type": "application/json",
//         },
//         body: JSON.stringify(user)
//         })
//         .then(res=>{
//             return res.json()
//         })
//         .catch(err=>{
//             console.log(err)
//         })
//     }

    export const signup = ({ name, email, password }) => {
        return new Promise((resolve, reject) => {
          fetch(`${API}/signup`,
            {
                method: 'POST',
                headers: {
                    Accept:'application/json',
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify({ name, email, password })
            })
            .then(response => response.json())
            .then(jsonData => resolve(jsonData))
            .catch(err => resolve({error: `something went wrong err : ${err}`}));
      })
    }
    
    /*
    signup(user).then(data => {
      if (data.error) {
        // handle error case 
      } else {
        // handle success case
      }
    })
    */

    export const signin = ( user )=>{
        return fetch(`${API}/signin`,{
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
        },
        body: JSON.stringify(user)
        })
        .then(res=>{
            return res.json()
        })
        .catch(err=>{
            console.log(err)
        })
    }

    export const authenticate = (data, next) => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('jwt', JSON.stringify(data));
            next();
        }
    };

    export const signout = next => {
        if (typeof window !== 'undefined') {
            localStorage.removeItem('jwt');
            next();
            return fetch(`${API}/signout`, {
                method: 'GET'
            })
                .then(response => {
                    console.log('signout', response);
                })
                .catch(err => console.log(err));
        }
    };

    export const isAuthenticated = () => {
        if (typeof window == 'undefined') {
            return false;
        }
        if (localStorage.getItem('jwt')) {
            return JSON.parse(localStorage.getItem('jwt'));
        } else {
            return false;
        }
    };