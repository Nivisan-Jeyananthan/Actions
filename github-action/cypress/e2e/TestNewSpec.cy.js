describe("Navigation", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000/");
    cy.get("h1").contains("Vite");
  });
});

// prevent reading typescript this file as legacy
export {};
