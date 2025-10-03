import { DEMO_REPO_1 } from "@/constants";
import type { RepoSearchItem } from "./../types/types";
import type { RepoStateProps } from "@/types/types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: RepoStateProps = {
  linkedRepos: [DEMO_REPO_1],
  loading: false,
  currentRepo: DEMO_REPO_1,
};

export const repoSlice = createSlice({
  name: "repo",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setCurrentRepo: (state, action: PayloadAction<RepoSearchItem | null>) => {
      state.currentRepo = action.payload;
    },
  },
});

export const { setLoading, setCurrentRepo } = repoSlice.actions;
export default repoSlice.reducer;
