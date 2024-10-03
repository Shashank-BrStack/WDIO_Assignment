describe('Flipkart iPhone Search', () => {
    
    it('should open Flipkart home page', async () => {
        await browser.url('https://www.flipkart.com');

        const flipkartLogo = await $('img[title="Flipkart"]');
        await flipkartLogo.waitForDisplayed({ timeout: 5000 });
        expect(await flipkartLogo.isDisplayed()).toBe(true);
    });

    it('should search for iPhone', async () => {
        const searchInput = await $('input[name="q"]');
        await searchInput.setValue('iPhone');
        await browser.keys('Enter'); 
        
        const searchResultHeader = await $('div[class="KzDlHZ"]');
        await searchResultHeader.waitForDisplayed({ timeout: 5000 });
    });

    it('should assert iPhone is present in the search results', async () => {
        const searchResultHeader = await $('div[class="KzDlHZ"]');
        const searchResultText = await searchResultHeader.getText();
        expect(searchResultText).toContain('iPhone');
    });
});
