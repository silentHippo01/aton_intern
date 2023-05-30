import { StateSchema } from "../../../app/StoreProvider";

export const getCatalog = (state: StateSchema) => state.catalog.catalog;