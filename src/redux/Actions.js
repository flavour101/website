// Action Types
export const SET_REVIEWS = 'SET_REVIEWS';
export const SET_RECIPES = 'SET_RECIPES';
export const SET_BLOGS = 'SET_BLOGS';
export const SET_GALLERY = 'SET_GALLERY';

export const SET_SELECTED_REVIEW = 'SET_SELECTED_REVIEW';
export const SET_SELECTED_RECIPE = 'SET_SELECTED_RECIPE';
export const SET_SELECTED_BLOG = 'SET_SELECTED_BLOG';

export const SET_MARKDOWN = 'SET_MARKDOWN';

// Action Creators
export default class Actions {
	static setReviews(value) {
		return {
			type: SET_REVIEWS,
			value: value,
		};
	}

	static setRecipes(value) {
		return {
			type: SET_RECIPES,
			value: value,
		};
	}

	static setBlogs(value) {
		return {
			type: SET_BLOGS,
			value: value,
		};
	}

	static setGallery(value) {
		return {
			type: SET_GALLERY,
			value: value,
		};
	}

	static setSelectedReview(value) {
		return {
			type: SET_SELECTED_REVIEW,
			value: value,
		};
	}

	static setSelectedRecipe(value) {
		return {
			type: SET_SELECTED_RECIPE,
			value: value,
		};
	}

	static setSelectedBlog(value) {
		return {
			type: SET_SELECTED_BLOG,
			value: value,
		};
	}

	static setMarkdown(value) {
		return {
			type: SET_MARKDOWN,
			value: value,
		};
	}
}
