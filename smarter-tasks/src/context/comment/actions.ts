import { API_ENDPOINT } from "../../config/constants";
import {
  CommentListAvailableAction,
  CommentsDispatch,
} from "./types";

export const addComment = async (
  dispatch: CommentsDispatch,
  projectID: string,
  taskID: string,
  arg: { description: string}
) => {
  const token = localStorage.getItem("authToken") ?? "";
  try {
    // The following action will toggle `isLoading` to `true`
    dispatch({ type: CommentListAvailableAction.CREATE_COMMENT_REQUEST });
    // Invoke the backend server with POST request and create a comment.
    const response = await fetch(
      `${API_ENDPOINT}/projects/${projectID}/tasks/${taskID}/comments`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(arg),
      }
    );
    if (!response.ok) {
      throw new Error("Failed to create comment");
    }
    // Turn `isLoading` to `false`
    dispatch({ type: CommentListAvailableAction.CREATE_COMMENT_SUCCESS });
    refreshComments(dispatch, projectID, taskID);
  } catch (error) {
    console.error("Operation failed:", error);
    // Update error status in the state.
    dispatch({
      type: CommentListAvailableAction.CREATE_COMMENT_FAILURE,
      payload: "Unable to create comment",
    });
  }
};
export const refreshComments = async (
  dispatch: CommentsDispatch,
  projectID: string,
  taskID: string
) => {
  const token = localStorage.getItem("authToken") ?? "";
  try {
    dispatch({ type: CommentListAvailableAction.FETCH_COMMENTS_REQUEST });
    const response = await fetch(
      `${API_ENDPOINT}/projects/${projectID}/tasks/${taskID}/comments`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (!response.ok) {
      throw new Error("Failed to fetch comments");
    }
    // extract the response body as JSON data
    const data = await response.json();
    dispatch({
      type: CommentListAvailableAction.FETCH_COMMENTS_SUCCESS,
      payload: data,
    });
    console.log(" comments fetched from the api:" ,data);
  } catch (error) {
    console.error("Operation failed:", error);
    dispatch({
      type: CommentListAvailableAction.FETCH_COMMENTS_FAILURE,
      payload: "Unable to load comments",
    });
  }
};