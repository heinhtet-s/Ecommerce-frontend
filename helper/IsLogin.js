export const IsLogin = () => {
    if (typeof window !== 'undefined') {

        console.log(localStorage.getItem('l-token'));
        return localStorage.getItem('l-token') !== null;

    }

};