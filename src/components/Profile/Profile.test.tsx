import { act, render, screen } from "@testing-library/react";
import { createMemoryHistory } from 'history';
import { Router } from "react-router";
import Profile from './Profile';
import * as reactRedux from 'react-redux';
import { createTestStore, StoreType } from "../../Redux/redux-store";
import { Provider } from "react-redux";

describe("Profile", () => {
    const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
    const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');
    let store: StoreType;

    beforeEach(() => {
        useSelectorMock.mockClear();
        useDispatchMock.mockClear();
        store = createTestStore();
      });
      
    test("Profile renders with correct props", () => {
        useSelectorMock.mockReturnValue({profilePage: {posts: [{id: 1, message: "string"}], 
            profile: {aboutMe: null,
            contacts: {},
            fullName: "oreh",
            lookingForAJob: false,
            lookingForAJobDescription: null,
            photos: {},
            userId: 20454}, 
            status: "test status"}});
        useDispatchMock.mockReturnValue(jest.fn());
        const history = createMemoryHistory();
        act(() => {
                   render(<Provider store={store}><Router history={history}><Profile match={{params:{userId: '20457'}}}/></Router></Provider>)
        });
        expect(screen.queryByText(/PUBLIC/i)).toBeInTheDocument();
        expect(screen.queryByText("oreh")).toBeInTheDocument();
    })
})