class Header {
    elements = {
        header_title: () => cy.get('a.logo img')
}
}
export default new Header();