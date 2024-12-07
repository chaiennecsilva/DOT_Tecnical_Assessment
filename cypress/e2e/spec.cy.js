describe('DemoBlaze Tests - Products', () => {
  beforeEach(() => {
    cy.visit('https://www.demoblaze.com/index.html');
  });

  afterEach(() => {
    cy.screenshot();
});

  it('Teste 1: Filtrando produtos por categoria - Laptops', () => {
    cy.contains('Laptops').click();
    cy.get('.card-title').contains('Sony vaio i5').should('be.visible');
  });

  it('Teste 2: Visualizando os detalhes do produto', () => {
    cy.contains('Laptops').click();
    cy.contains('Sony vaio i5').click(); // Clicando diretamente no título do produto
    cy.get('.name').should('contain', 'Sony vaio i5');
    cy.get('.price-container').should('contain', '$');
  });

  it('Teste 3: Adicionando um produto ao carrinho', () => {
    cy.contains('Laptops').click();
    cy.contains('Sony vaio i5').click();
    cy.get('.col-sm-12 > .btn').click(); 
    cy.on('window:alert', (txt) => {
      expect(txt).to.contains('Product added');
    });
  });

});