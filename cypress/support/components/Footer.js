class Footer {
    elements = {
        footer_message: ()=> cy.get("small[class='copyright'] span")
    }
}
export default new Footer();