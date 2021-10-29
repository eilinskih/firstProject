import { fireEvent, render, screen } from '@testing-library/react';
import Dialogs from './Dialogs';
import * as reactRedux from 'react-redux';
import {createMemoryHistory} from 'history';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import { createTestStore, StoreType } from '../../Redux/redux-store';
import { act } from 'react-dom/test-utils';


describe("Dialogs", () => {
    const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
    const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');
    let store: StoreType;

    beforeEach(() => {
        useSelectorMock.mockClear();
        useDispatchMock.mockClear();
        store = createTestStore();
      })
    test("Dialogs renders", () => {
        useDispatchMock.mockReturnValue(jest.fn());
        useSelectorMock.mockReturnValue({
            dialogsData: [{
                id: 1,
                name: "test name"
            }],
            messagesData: [{
                message: "test message"
            }]
        });
        
        const history = createMemoryHistory();
            render(<Provider store={store}><Router history={history}><Dialogs/></Router></Provider>);
 
        expect(screen.getByPlaceholderText("New messsage")).toBeInTheDocument();
    });

    test("form handler", () => {
        useDispatchMock.mockReturnValue(jest.fn());
        useSelectorMock.mockReturnValue({
            dialogsData: [{
                id: 1,
                name: "test name"
            }],
            messagesData: [{
                message: "test message"
            }]
        });
        
        const history = createMemoryHistory();
        act(() => {
            render(<Provider store={store}><Router history={history}><Dialogs/></Router></Provider>);
        })
        
        const form = screen.queryByPlaceholderText("New messsage")
        fireEvent.change(form as HTMLElement, {target: {value: "test value"}})
        expect(screen.getByText("test value")).toBeInTheDocument()
    })
});