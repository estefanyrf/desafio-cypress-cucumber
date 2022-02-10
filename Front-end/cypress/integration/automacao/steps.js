
Given(/^que estou na tela de inicio do site jsonplaceholder$/, () => {
	cy.visit('/')
});

When(/^clico no link Guide$/, () => {
	cy.get('body > header > nav > ul > li:nth-child(1) > a').click()
});

Then(/^o site é redirecionado para a tela do menu Guide$/, () => {
	cy.get('title').invoke('text').then(title => {
        expect(title).to.be.equals('JSONPlaceholder - Guide')
    });
});

Given(/^que estou na tela do menu Guide$/, () => {
	cy.get('title').invoke('text').then(title => {
        expect(title).to.be.equals('JSONPlaceholder - Guide')
    });
});

When(/^clico no link de posts$/, () => {
    cy.get('body > div > main > ul > li:nth-child(1) > a').click()
});

Then(/^realizo uma validação dos campos retornados$/, () => {
	cy.get('pre').invoke('text').then(jsonText => {
        const arr = JSON.parse(jsonText)
        const item = arr.find(i => i.id === 1)
        
        expect(item).to.not.be.null
        expect(item.postId).to.be.a('number')
        expect(item.id).to.be.a('number')
        expect(item.name).to.be.a('string')
        expect(item.email).to.be.a('string')
        expect(item.body).to.be.a('string')
    });
});