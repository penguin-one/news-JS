import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '5e0c7e6ae97c4797acf4ca6f7572eca3', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
