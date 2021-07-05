import {logout as apiLogout} from '../data.js'
import {showInfo,showError} from '../notification.js'

export default async function logout() {
    
    const result = await apiLogout();
    try {
       
        if(result.hasOwnProperty('errorData')){
            const error = new Error();
            Object.assign(error,result)
            throw error;
        }

        this.app.userData.username = '';
        this.app.userData.userId = '';

        showInfo('Successfully logged out')

        this.redirect('#/home ')
    } catch (error) {
        console.log(error);
        showError(error.message); 
    }
}