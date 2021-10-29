import { authAPI } from './../api/api';
import { authProfile } from './authReducer';
import { StoreType } from './redux-store';
import { createTestStore } from './redux-store'
jest.mock('./../api/api')

describe("authReducer", () => {
    let store: StoreType;
    
    const authAPIMock = authAPI as jest.Mocked<typeof authAPI>
    const mockMeData = {
        resultCode: 1,
        messages: ["test value"],
        data: {
          id: 1,
          email: "test email",
          login: "test login"
        }
    };
    const mockLoginData = {
        resultCode: 0,
        messages: [],
        data: {
          userId: 1
        }
    };
    const mockLogOutData = {
        resultCode: 0,
        messages: [],
        data: {}
      };
    beforeEach(() => {
        store = createTestStore();
    })
    authAPIMock.me.mockReturnValue(Promise.resolve(mockMeData))
    authAPIMock.login.mockReturnValue(Promise.resolve(mockLoginData))
    authAPIMock.logout.mockReturnValue(Promise.resolve(mockLogOutData))
    test("auth profile", async() => {
        const useDispatchMock = jest.fn()
        const thunk = authProfile()
        await thunk(useDispatchMock, store.getState, "")
    })
})