import axios from "axios"

export function postSample(url, formData) {
    axios.post(url, formData)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}