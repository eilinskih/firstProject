import { render, screen } from '@testing-library/react';
import * as reactRedux from 'react-redux';
import {createMemoryHistory} from 'history'
import Header from './Header'
import { Router } from 'react-router';

describe("Header", () => {
    const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
    const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');

    beforeEach(() => {
        useSelectorMock.mockClear();
        useDispatchMock.mockClear();
      });

    test( "Header render with auth 'false' " , () => {
        useDispatchMock.mockReturnValue(jest.fn());
        useSelectorMock.mockReturnValue({isAuth: false, login: "test name"});
        const history = createMemoryHistory();
        render(<Router history={history}><Header/></Router>);
        expect(screen.getByText(/login/i)).toBeInTheDocument()
    })

    test( "Header render with auth 'true' " , () => {
        useDispatchMock.mockReturnValue(jest.fn());
        useSelectorMock.mockReturnValue({isAuth: true, login: "test name"});
        const history = createMemoryHistory();
        render(<Router history={history}><Header/></Router>);
        expect(screen.getByText(/test name/i)).toBeInTheDocument()
    })
})