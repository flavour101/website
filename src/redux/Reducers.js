import * as Actions from "./Actions";

export const rootReducer = (state, action) => {
    return {
        reviews: reviewsReducer(state.reviews, action),
        recipes: recipesReducer(state.recipes, action),
        blogs: blogsReducer(state.blogs, action),
        gallery: galleryReducer(state.gallery, action),
        selectedReview: selectedReviewReducer(state.selectedReview, action),
        selectedRecipe: selectedRecipeReducer(state.selectedRecipe, action),
        selectedBlog: selectedBlogReducer(state.selectedBlog, action),
        markdown: markdownReducer(state.markdown, action)
    }
}

export const reviewsReducer = (reviewsState, action) => {
    let reviews = Object.assign([], reviewsState);

    switch (action.type) {
        case Actions.SET_REVIEWS:
            reviews = action.value
            break;
    }

    return reviews;
}

export const recipesReducer = (recipesState, action) => {
    let recipes = Object.assign([], recipesState);

    switch (action.type) {
        case Actions.SET_RECIPES:
            recipes = action.value
            break;
    }

    return recipes;
}

export const blogsReducer = (blogsState, action) => {
    let blogs = Object.assign([], blogsState);

    switch (action.type) {
        case Actions.SET_BLOGS:
            blogs = action.value
            break;
    }

    return blogs;
}

export const galleryReducer = (galleryState, action) => {
    let gallery = Object.assign([], galleryState);

    switch (action.type) {
        case Actions.SET_GALLERY:
            gallery = action.value
            break;
    }

    return gallery;
}

export const selectedReviewReducer = (selectedReviewState, action) => {
    let selectedReview = Object.assign({}, selectedReviewState);

    switch (action.type) {
        case Actions.SET_SELECTED_REVIEW:
            selectedReview = action.value
            break;
    }

    return selectedReview;
}

export const selectedRecipeReducer = (selectedRecipeState, action) => {
    let selectedRecipe = Object.assign({}, selectedRecipeState);

    switch (action.type) {
        case Actions.SET_SELECTED_RECIPE:
            selectedRecipe = action.value
            break;
    }

    return selectedRecipe;
}

export const selectedBlogReducer = (selectedBlogState, action) => {
    let selectedBlog = Object.assign({}, selectedBlogState);

    switch (action.type) {
        case Actions.SET_SELECTED_BLOG:
            selectedBlog = action.value
            break;
    }

    return selectedBlog;
}

export const markdownReducer = (markdownState, action) => {
    let markdown = markdownState;

    switch (action.type) {
        case Actions.SET_MARKDOWN:
            markdown = action.value
            break;
    }

    return markdown;
}
