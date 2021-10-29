import { render, screen } from "@testing-library/react"
import Message from './Message'

test("Message renders", () => {
    render(<Message message={"test message"}/>);
    expect(screen.getByText("test message")).toBeInTheDocument();
});