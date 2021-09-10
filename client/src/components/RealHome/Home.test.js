import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { render, cleanup, fireEvent, waitFor, screen } from '@testing-library/react';
import reducer  from '../../reducers';
import Home from './Home.js';
import { Router } from 'react-router-dom'
import "@testing-library/jest-dom/extend-expect";
import { createMemoryHistory } from 'history';
import { applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import * as api from "../../api";
const init_posts = [{
        "likes": [],
        "createdAt": "2021-09-06T12:57:13.701Z",
        "_id": "6136140f08c693000485610e",
        "title": "i want to die",
        "message": "somebody knows the best way to kill mysel right off the bat?",
        "subRedditName": "Argentina",
        "creator": "ernestiño",
        "subreddit": "612f3d6a8271ef3ce8348e74",
        "comments": [],
        "__v": 0
    }] 
const init_posts_liked = {
        "likes": ["6136140f08c693000485610e"],
        "createdAt": "2021-09-06T12:57:13.701Z",
        "_id": "6136140f08c693000485610e",
        "title": "i want to die",
        "message": "somebody knows the best way to kill mysel right off the bat?",
        "subRedditName": "Argentina",
        "creator": "ernestiño",
        "subreddit": "612f3d6a8271ef3ce8348e74",
        "comments": [],
        "__v": 0
    }
jest.mock('../../api', () => {
  return {
    fetchPosts: () => {
      return new Promise((resolve, reject) => {
            resolve({ data: init_posts })
          })
    },
    likePost: () => {
      return new Promise((resolve, reject) => {
            resolve({ data: init_posts_liked })
          })
    }
  } 
});

const renderWithRedux = (
  component,
  { initialState, store = createStore(reducer, initialState, compose(applyMiddleware(thunk))) } = {}
) => {
    const history = createMemoryHistory();
  return {
      
    ...render(
        <Router history={history}>
              <Provider store={store}>{component}</Provider>
        </Router>
  ),
    store,
  }
}


describe("Actions", () => {
  it('LikePost works out ', async () => {
    const { rerender } = renderWithRedux(<Home />, { initialState: { posts: init_posts, auth: { authData: null }, subs: [] }});
    expect(screen.getByTestId("Tvotes").textContent).toBe("0");
    fireEvent.click(screen.getByTestId("upvote"));
    await waitFor(() =>  expect(screen.getByTestId("Tvotes").textContent).toBe("1"));
  })
})
       