import { render } from '@testing-library/react'
import * as reactRedux from 'react-redux'
import AppRoot from '../App'
import {createMemoryHistory} from 'history'
import { Router } from 'react-router'
import '@testing-library/jest-dom'

describe("App", () => {
    const useSelectorMock = jest.spyOn(reactRedux, 'useSelector')
    const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch')

    beforeEach(() => {
        useSelectorMock.mockClear()
        useDispatchMock.mockClear()
      })

    test("App renders", () => {
        useSelectorMock.mockReturnValue({isInitialized: false})
        useDispatchMock.mockReturnValue(jest.fn())
        render(<AppRoot/>)
        expect(useDispatchMock).toBeCalled()
    })

    test("App routs", () => {
        useSelectorMock.mockReturnValue({isInitialized: true})
        useDispatchMock.mockReturnValue(jest.fn())
        const history = createMemoryHistory()
        const {container} = render(<Router history={history}><AppRoot/></Router>)
        expect(container.innerHTML).toMatch("EI")
    })

    test("App rotes changes", () => {
        useSelectorMock.mockReturnValue({isInitialized: true})
        useDispatchMock.mockReturnValue(jest.fn())
        const history = createMemoryHistory()
        history.push("settings")
        const {container} = render(<Router history={history}><AppRoot/></Router>)
        expect(container.innerHTML).toMatch(/settings/i)
    })
})