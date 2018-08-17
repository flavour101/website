// Action Types
export const SET_REVIEWS = "SET_REVIEWS";

// Action Creators
export default class Actions {
    static setReviews(value) {
        return {
            type: SET_REVIEWS,
            value: value
        }
    }
}
