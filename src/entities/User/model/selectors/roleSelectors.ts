import {StateSchema} from "app/providers/StoreProvider";
import {createSelector} from "@reduxjs/toolkit";
import {UserRole} from "entities/User/model/types/user";

const getUserRoles = (state: StateSchema) => state.user.authData?.roles

export const isUserAdmin = createSelector(getUserRoles, roles => Boolean(roles?.includes(UserRole.USER)))
export const isUserManager = createSelector(getUserRoles, roles => Boolean(roles?.includes(UserRole.MANAGER)))