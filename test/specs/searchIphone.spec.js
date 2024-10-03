describe('Flipkart iPhone Search', () => {
    it('should open Flipkart and search for iPhone', async () => {
        // Open Flipkart's website
        await browser.url('https://www.flipkart.com');

        // Find the search bar and search for 'iPhone'
        const searchInput = await $('input[name="q"]');
        await searchInput.setValue('iPhone');
        await browser.keys('Enter');  // Simulate pressing Enter

        // Wait for the search results to load
        const searchResultHeader = await $('div[class="KzDlHZ"]');  // Locator for a search results header
        await searchResultHeader.waitForDisplayed({ timeout: 5000 });

        // Validate that the search result contains "iPhone"
        const searchResultText = await searchResultHeader.getText();
        expect(searchResultText).toContain('iPhone');
    });
});
