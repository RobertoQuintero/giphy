import React from "react";
import { render, waitForElement } from "@testing-library/react";
import App from "../App";

test("Home work as expect", async () => {
  const { container } = render(<App />);
  const gifLinks = await waitForElement(() =>
    container.querySelector(".Gif-link")
  );
  expect(gifLinks).toBeVisible();
});
