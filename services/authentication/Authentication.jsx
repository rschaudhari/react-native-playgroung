import FbApp from '../../config/FbApp'

export default function Authentication() {

}

export const Login =  (email, password) => {
    const auth = FbApp.auth();
return auth.signInWithEmailAndPassword(email, password).then(data => {
        console.log("login ",data)
        return data;
    },
    error => {
        console.log("error",error);
        return error;
    })
    
} 