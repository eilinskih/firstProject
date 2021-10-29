import { render, screen } from "@testing-library/react";
import Post from './Post';

test("Post renders with props", () => {
    render(<Post message={'test msg'} ava={'test path'}/>)
    expect(screen. queryByText(/test msg/i)).toBeInTheDocument()
});