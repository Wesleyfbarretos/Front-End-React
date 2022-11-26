import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { describe, it } from "vitest";
import App from "./home";

describe("Home Page", () => {
  it("should render home page", async () => {
    const { getAllByTestId } = render(<App />);

    const totalCards = getAllByTestId("pokemon-id");

    expect(totalCards.length).toBe(24);
  });
});
