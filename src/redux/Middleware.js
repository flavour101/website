import Actions from "./Actions";

const httpCall = (method, url, body) => {
    let request = {};
    request.method = method.toUpperCase();

    request.headers = new Headers();
    request.headers.append("Content-Type", "application/json");

    if (!(request.method === "GET" || request.method === "HEAD")) {
        request.body = JSON.stringify(body); // To work with the Fetch API, the body needs to be stringified first.
    }

    return fetch(url, request)
        .catch(error => {
            console.log("Error occurred in completing " + request.method + " request to: " + url + " \n" + error);
        })
        .then(response => {
            if (response.ok) {
                return response
            }
            else {
                throw response;
            }
        })
}

export default class Middleware {
    static fetchReviews() {
        return dispatch => {
            httpCall("GET", "/tmp_resources/reviews.json")
                .then(response => response.json().then(data => {
                    dispatch(Actions.setReviews(data));
                }))
                .catch(response => {
                    // Handle error
                    console.log(response.status);
                })
        }
    }

    static fetchRecipes() {
        return dispatch => {
            httpCall("GET", "/tmp_resources/recipes.json")
                .then(response => response.json().then(data => {
                    dispatch(Actions.setReviews(data));
                }))
                .catch(response => {
                    // Handle error
                    console.log(response.status);
                })
        }
    }

    static fetchBlogs() {
        return dispatch => {
            httpCall("GET", "/tmp_resources/blogs.json")
                .then(response => response.json().then(data => {
                    dispatch(Actions.setReviews(data));
                }))
                .catch(response => {
                    // Handle error
                    console.log(response.status);
                })
        }
    }

    static fetchPhotos() {
        return dispatch => {
            dispatch(Actions.setPhotos([]));
            // httpCall("GET", "")
            //     .then(response => {
            //         dispatch(Actions.setReviews(response));
            //     })
            //     .catch(response => {
            //         // Handle error
            //         console.log(response.status);
            //     })
        }
    }
}