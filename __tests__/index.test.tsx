/**
 * @jest-environment jsdom
 */
import Index from "@/app/page";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'

describe("Home", () => {
  it("renders a heading", async () => {
    render(await (Index()));

    const heading = screen.getByRole("heading", {
      name: /next steps/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
