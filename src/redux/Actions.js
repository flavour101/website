// Action Types
export const SET_REVIEWS = "SET_REVIEWS";
export const SET_RECIPES = "SET_RECIPES";
export const SET_BLOGS = "SET_BLOGS";

// Action Creators
export default class Actions {
    static setReviews(value) {
        return {
            type: SET_REVIEWS,
            value: value
        }
    }

    static setRecipes(value) {
        return {
            type: SET_RECIPES,
            value: value
        }
    }

    static setBlogs(value) {
        return {
            type: SET_BLOGS,
            value: value
        }
    }
}
