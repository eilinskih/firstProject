import { StoreType, createTestStore } from './redux-store';
import { AuthStateType, initialize, setInitialize } from "./appReducer"

describe("appReducer", () => {
    let store: StoreType;
    jest.mock("./authReducer");
    let initialState: AuthStateType;
    beforeEach(() => {
        store = createTestStore();
        initialState = {
            isInitialized: false
          };
    });
    test("authprofile", async () => {
        const thunk = initialize()
        const dispatchMock = jest.fn()
        await thunk(dispatchMock, store.getState, "")
        expect(dispatchMock).toBeCalledTimes(2)
        expect(dispatchMock).toHaveBeenNthCalledWith(2, setInitialize())
    })
})

