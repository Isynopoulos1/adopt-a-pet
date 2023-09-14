import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  const tested = render(<App />);
  expect(tested).toMatchSnapshot();
});
