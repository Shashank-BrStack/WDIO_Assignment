// describe('Flipkart iPhone Search', () => {
//     it('should open Flipkart and search for iPhone', async () => {
//         // Open Flipkart's website
//         await browser.url('https://www.flipkart.com');

//         // Find the search bar and search for 'iPhone'
//         const searchInput = await $('input[name="q"]');
//         await searchInput.setValue('iPhone');
//         await browser.keys('Enter');  // Simulate pressing Enter

//         // Wait for the search results to load
//         const searchResultHeader = await $('div[class="KzDlHZ"]');  // Locator for a search results header
//         await searchResultHeader.waitForDisplayed({ timeout: 5000 });

//         // Validate that the search result contains "iPhone"
//         const searchResultText = await searchResultHeader.getText();
//         expect(searchResultText).toContain('iPhone');
//     });
// });


describe('Flipkart iPhone Search', () => {
    
    // Step 1: Open Flipkart home page
    it('should open Flipkart home page', async () => {
        await browser.url('https://www.flipkart.com');

        // Validate that the page has loaded
        const flipkartLogo = await $('img[title="Flipkart"]');
        await flipkartLogo.waitForDisplayed({ timeout: 5000 });
        expect(await flipkartLogo.isDisplayed()).toBe(true);
    });

    // Step 2: Search for iPhone
    it('should search for iPhone', async () => {
        // Ensure Flipkart homepage is open (if starting fresh)
        const searchInput = await $('input[name="q"]');
        await searchInput.setValue('iPhone');
        await browser.keys('Enter');  // Simulate pressing Enter
        
        // Wait for the search results to load
        const searchResultHeader = await $('div[class="KzDlHZ"]');
        await searchResultHeader.waitForDisplayed({ timeout: 5000 });
    });

    // Step 3: Assert iPhone is in the search result text
    it('should assert iPhone is present in the search results', async () => {
        // Validate that the search result contains "iPhone"
        const searchResultHeader = await $('div[class="KzDlHZ"]');
        const searchResultText = await searchResultHeader.getText();
        expect(searchResultText).toContain('iPhone');
    });
});
