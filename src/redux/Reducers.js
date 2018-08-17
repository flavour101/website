import {
    SET_REVIEWS, SET_RECIPES, SET_BLOGS
} from "./Actions";

export const rootReducer = (state, action) => {
    return {
        reviews: reviewsReducer(state.reviews, action)
    }
}

export const reviewsReducer = (reviewsState, action) => {
    let reviews = Object.assign([], reviewsState);

    switch (action.type) {
        case SET_REVIEWS:
            reviews = action.value
            break;
    }

    return reviews;
}

export const recipesReducer = (recipesState, action) => {
    let recipes = Object.assign([], recipesState);

    switch (action.type) {
        case SET_RECIPES:
            recipes = action.value
            break;
    }

    return recipes;
}

export const blogsReducer = (blogsState, action) => {
    let blogs = Object.assign([], blogsState);

    switch (action.type) {
        case SET_BLOGS:
            blogs = action.value
            break;
    }

    return blogs;
}
