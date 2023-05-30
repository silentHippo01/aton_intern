import { DeepPartial } from "@reduxjs/toolkit";
import { StateSchema } from "../../../../../app/StoreProvider";
import { getUsers } from "./getUsers";

describe('getUsers', () => {
    test('should users', () => {
        const state: DeepPartial<StateSchema> = {
            users: {
                isLoading: false,
                error: undefined,
                usersData: {
                    page: 1,
                    per_page: 0,
                    total: 0,
                    total_pages: 0,
                    data: [{
                        id: 1,
                        email: 'email',
                        first_name: 'Andrew',
                        last_name: 'Novikov',
                    }],
                },
            }
        }
        expect(getUsers).toEqual([{
            id: 1,
            email: 'email',
            first_name: 'Andrew',
            last_name: 'Novikov',
        }]);
    });

});