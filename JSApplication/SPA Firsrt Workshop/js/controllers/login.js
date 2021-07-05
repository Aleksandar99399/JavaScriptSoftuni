import {login as apiLogin} from '../data.js'

export default async function login() {
    this.partials = {
        header: await this.load('./templates/common/header.hbs'),
        footer: await this.load('./templates/common/footer.hbs'),
        loginForm: await this.load('./templates/user/loginForm.hbs')
    };

    
    this.partial('./templates/user/login.hbs',this.app.userData);
}


export async function loginPost() {
    
    const result = await apiLogin(this.params.username,this.params.password)
    try {
        if(result.hasOwnProperty('errorData')){
            const error = new Error();
            Object.assign(error,result)
            throw error;
        }

        this.app.userData.username = result.username;
        this.app.userData.userId = result.objectId;
        this.app.userData.userToken = result['user-token'];
        this.redirect('#/home ')
    } catch (error) {
        console.log(error);
        alert(error.message)
    }
}
