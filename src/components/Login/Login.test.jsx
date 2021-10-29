import { render } from '@testing-library/react';
import * as reactRedux from 'react-redux';
import {createMemoryHistory} from 'history'
import Login from './Login'
import { Router } from 'react-router';
import { act } from 'react-dom/test-utils';

describe("Login", () => {
    const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
    const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');

    beforeEach(() => {
        useSelectorMock.mockClear();
        useDispatchMock.mockClear();
      });

    test( "Login renders" , () => {
        useDispatchMock.mockReturnValue(jest.fn());
        useSelectorMock.mockReturnValue({isAuth: true});
        const history = createMemoryHistory();
        act(() => {
                   render(<Router history={history}><Login/></Router>);
        })
        expect(useDispatchMock).toBeCalledTimes(1)
    })
})