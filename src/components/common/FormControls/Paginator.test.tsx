import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Paginator from './../Paginator'

describe("Paginator", () => {
    const onClickMock = jest.fn()
    test("render paginator", () => {
        render(<Paginator totalCountItems={100} pageSize={15} currentPortion={1} currentPage={1} onPageClick={onClickMock}/>)
        expect(screen.getByText("next")).toBeInTheDocument()
    })

    test("handler for next button works", () => {
        act(() => {
            render(<Paginator totalCountItems={100} pageSize={15} currentPortion={1} currentPage={1} onPageClick={onClickMock}/>)
            fireEvent.click(screen.getByText("next"))    
        })
        expect(screen.queryByText("pre")).toBeInTheDocument()
    })

    test("handler for pre button works", () => {
        act(() => {
            render(<Paginator totalCountItems={100} pageSize={15} currentPortion={2} currentPage={1} onPageClick={onClickMock}/>)
            fireEvent.click(screen.getByText("pre"))    
        })
        expect(screen.queryByText("pre")).not.toBeInTheDocument()
    })
})