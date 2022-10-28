import axios from 'axios';

module.exports = {
    status()
    {
        return axios.get(ip+'/status')
    },
    /*            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
*/

}