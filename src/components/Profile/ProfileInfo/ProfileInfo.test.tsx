import { act, fireEvent, render, screen } from '@testing-library/react';
import * as reactRedux from 'react-redux';
import ProfileInfo from './ProfileInfo';

describe("ProfileInfo", () => {
    const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');
    beforeEach(() => {
        useDispatchMock.mockClear();
      });
    test("ProfileInfo renders", () => {
        useDispatchMock.mockReturnValue(jest.fn());
        act(() => {
                    render(<ProfileInfo profile={{userId: 1,
            lookingForAJob: false,
            lookingForAJobDescription: "",
            fullName: "test name",
            contacts: {
              github: "string",
              vk: "string",
              facebook: "string",
              instagram: "string",
              twitter: "string",
              website: "string",
              youtube: "string",
              mainLink: "string"
            },
            photos: {small: "", large: ""}}} isOwnPage={false} status="test status"/>)
        })
    expect(screen.queryByText(/test name/i)).toBeInTheDocument()
});
    
    test("change handler test", () => {
        useDispatchMock.mockReturnValue(jest.fn());
        act(() => {
                    render(<ProfileInfo profile={{userId: 1,
            lookingForAJob: false,
            lookingForAJobDescription: "",
            fullName: "test name",
            contacts: {
              github: "string",
              vk: "string",
              facebook: "string",
              instagram: "string",
              twitter: "string",
              website: "string",
              youtube: "string",
              mainLink: "string"
            },
            photos: {small: "", large: ""}}} isOwnPage={true} status="test status"/>)
        });
    fireEvent.change(screen.getByLabelText(/CHANGE PHOTO/i));
    expect(useDispatchMock).toBeCalledTimes(1);
});

});