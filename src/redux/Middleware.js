import Actions from "./Actions";

const apiURL = process.env.API_URL;
const markdownURL = "/md";

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
            httpCall("GET", apiURL + "/review")
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
            httpCall("GET", apiURL + "/recipe")
                .then(response => response.json().then(data => {
                    dispatch(Actions.setRecipes(data));
                }))
                .catch(response => {
                    // Handle error
                    console.log(response.status);
                })
        }
    }

    static fetchBlogs() {
        return dispatch => {
            httpCall("GET", apiURL + "/blog")
                .then(response => response.json().then(data => {
                    dispatch(Actions.setBlogs(data));
                }))
                .catch(response => {
                    // Handle error
                    console.log(response.status);
                })
        }
    }

    static fetchGallery() {
        return dispatch => {
            httpCall("GET", apiURL + "/gallery")
                .then(response => response.json().then(data => {
                    dispatch(Actions.setGallery(data));
                }))
                .catch(response => {
                    // Handle error
                    console.log(response.status);
                })
        }
    }

    static fetchBlog(id) {
        return dispatch => {
            httpCall("GET", apiURL + `/blog/${id}`)
                .then(response => response.json().then(data => {
                    dispatch(Actions.setSelectedBlog(data));
                }))
                .catch(response => {
                    // Handle error
                    console.log(response.status);
                })
        }
    }

    static fetchReview(id) {
        return dispatch => {
            httpCall("GET", apiURL + `/review/${id}`)
                .then(response => response.json().then(data => {
                    dispatch(Actions.setSelectedReview(data));
                }))
                .catch(response => {
                    // Handle error
                    console.log(response.status);
                })
        }
    }

    static fetchRecipe(id) {
        return dispatch => {
            httpCall("GET", apiURL + `/recipe/${id}`)
                .then(response => response.json().then(data => {
                    dispatch(Actions.setSelectedRecipe(data));
                }))
                .catch(response => {
                    // Handle error
                    console.log(response.status);
                })
        }
    }

    static fetchMarkdown(fileLocation) {
        return dispatch => {
            httpCall("GET", fileLocation)
                .then(response => response.text().then(data => {
                    dispatch(Actions.setMarkdown(data))
                }))
                .catch(response => {
                    // Handle error
                    console.log(response.status);
                })
        }
    }

    static fetchWelcomeScreenMarkdown() {
        return dispatch => {
            dispatch(this.fetchMarkdown("/md/welcome-screen.md"));
        }
    }
}