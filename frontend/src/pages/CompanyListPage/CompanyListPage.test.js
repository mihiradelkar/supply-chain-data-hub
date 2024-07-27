import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import CompanyListPage from "./CompanyListPage";
import { I18nextProvider } from "react-i18next";
import i18n from "../../i18n/config"; // Adjust the import based on your i18n configuration path

const mockStore = configureStore([]);

test("renders company list page", () => {
  const initialState = {
    companies: {
      companies: [],
      search: "",
      status: "idle",
      error: null,
    },
  };

  const store = mockStore(initialState);

  const { getByText } = render(
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <CompanyListPage />
      </I18nextProvider>
    </Provider>
  );

  expect(getByText(/Find Your Company Here!/i)).toBeInTheDocument();
});
