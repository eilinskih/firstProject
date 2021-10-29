import { fireEvent, render, screen } from '@testing-library/react';
import * as reactRedux from 'react-redux';
import { createTestStore, StoreType } from '../../../Redux/redux-store';
import {Provider} from "react-redux";

import Posts from './Posts';

describe("Posts", () => {
    const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');
    let store: StoreType
    beforeEach(() => {
        useDispatchMock.mockClear();
        store = createTestStore();
      });
    test("Posts renders", () => {
        useDispatchMock.mockReturnValue(jest.fn());
        render(<Provider store={store}><Posts profilePage={{posts: [{id: 1, message: "string"}], 
        profile: {
        contacts: {github: "string",
            vk: "string",
            facebook: "string",
            instagram: "string",
            twitter: "string",
            website: "string",
            youtube: "string",
            mainLink: "string"},
        fullName: "oreh",
        lookingForAJob: false,
        lookingForAJobDescription: null,
        photos: {small: "", large: ""},
        userId: 20454}, 
        status: "test status"}}/></Provider>)
        expect(screen.getByText(/My posts/i)).toBeInTheDocument()
    })

    test("submiting post", () => {
        useDispatchMock.mockReturnValue(jest.fn());
        render(<Provider store={store}><Posts profilePage={{posts: [{id: 1, message: "string"}], 
        profile: {
        contacts: {github: "string",
            vk: "string",
            facebook: "string",
            instagram: "string",
            twitter: "string",
            website: "string",
            youtube: "string",
            mainLink: "string"},
        fullName: "oreh",
        lookingForAJob: false,
        lookingForAJobDescription: null,
        photos: {small: "", large: ""},
        userId: 20454}, 
        status: "test status"}}/></Provider>)
        fireEvent.submit(screen.getByRole('textbox'), {target: {value: "test value"}})
        expect(useDispatchMock).toBeCalledTimes(1)
    })
})