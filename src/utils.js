class Utils {
    generateId = () => {
        return Buffer.from(String( Math.random() * Date.now())).toString('base64');
    }
}
global.utils = new Utils();