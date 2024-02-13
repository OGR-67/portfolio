import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { contactFormApi, useSubmitContactFormMutation } from "./apis/contactForm";

const store = configureStore({
  reducer: {
    [contactFormApi.reducerPath]: contactFormApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(contactFormApi.middleware),
});

setupListeners(store.dispatch);

export default store;
export { useSubmitContactFormMutation };