import { act, render, screen } from "@testing-library/react";
import DialogsItem from './DialogsItem';
import {createMemoryHistory} from 'history'
import { Router } from 'react-router';

test("DialogsItem renders", () => {
    const history = createMemoryHistory();
        act(() => {
                   render(<Router history={history}><DialogsItem id={1} name={"test name"}/></Router>);
        })
    expect(screen.getByText("test name")).toBeInTheDocument()
})