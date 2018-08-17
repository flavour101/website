import {
    SET_REVIEWS
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
