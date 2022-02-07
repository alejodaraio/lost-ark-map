import { configureStore } from '@reduxjs/toolkit'
import World from './slices/World'
import Zone from './slices/Zone'

export const store = configureStore({
  reducer: {
    world: World,
    zone: Zone
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch