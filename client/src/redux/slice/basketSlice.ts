import { createAsyncThunk, createSlice, isAnyOf } from "@reduxjs/toolkit";
import agent from "../../actions/agent";
import { Basket } from "../../models/basket";

interface BasketState {
  basket: Basket | null | undefined;
  status: string;
}

const initialState: BasketState = {
  basket: null,
  status: "idle",
};

function getCookie(name: string) {
  return (
    document.cookie.match("(^|;)\\s*" + name + "\\s*=\\s*([^;]+)")?.pop() || ""
  );
}

export const fetchBasketItemAsync = createAsyncThunk<Basket>(
  "basket/fetchBasketAsync",
  async (_, thunkAPI) => {
    try {
      return await agent.Baskets.get();
    } catch (err: any) {
      return thunkAPI.rejectWithValue({ err: err });
    }
  },
  {
    condition: () => {
      if (!getCookie("clientId")) return false;
    },
  }
);

export const addBasketItemAsync = createAsyncThunk<
  Basket | undefined,
  { courseId: string }
>("basket/addBasketItemAsync", async ({ courseId }, thunkAPI) => {
  try {
    return await agent.Baskets.addItem(courseId);
  } catch (err) {
    return thunkAPI.rejectWithValue({ err: err });
  }
});

export const removeBasketItemAsync = createAsyncThunk<
  void,
  { courseId: string }
>("basket/removeBasketItemAsync", async ({ courseId }, thunkAPI) => {
  try {
    await agent.Baskets.removeItem(courseId);
  } catch (err) {
    return thunkAPI.rejectWithValue({ err: err });
  }
});

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    setBasket: (state, action) => {
      state.basket = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addBasketItemAsync.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(removeBasketItemAsync.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(removeBasketItemAsync.fulfilled, (state, action) => {
      const { courseId } = action.meta.arg;
      const itemIndex = state.basket?.items.findIndex(
        (i) => i.courseId === courseId
      );
      if (itemIndex === undefined || itemIndex === -1) return;
      state.basket?.items.splice(itemIndex, 1);
      state.status = "idle";
    });
    builder.addCase(removeBasketItemAsync.rejected, (state) => {
      state.status = "idle";
    });
    builder.addMatcher(
      isAnyOf(addBasketItemAsync.fulfilled, fetchBasketItemAsync.fulfilled),
      (state, action) => {
        state.basket = action.payload;
        state.status = "idle";
      }
    );
    builder.addMatcher(
      isAnyOf(addBasketItemAsync.rejected, fetchBasketItemAsync.rejected),
      (state) => {
        state.status = "idle";
      }
    );
  },
});

export const { setBasket } = basketSlice.actions;
