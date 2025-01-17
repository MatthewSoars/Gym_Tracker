const puppeteer = require('puppeteer');

describe('Gym Tracker HTML and CSS Tests', () => {
    let browser;
    let page;

    // Launch Puppeteer
    beforeAll(async () => {
        browser = await puppeteer.launch();
        page = await browser.newPage();
        await page.goto(`file://${process.cwd()}/index.html`);
    });

    afterAll(async () => {
        await browser.close();
    });

    // HTML Tests
    describe('Structure', () => {
        test('The page should have title "Gym Tracker"', async () => {
            const title = await page.title();
            expect(title).toBe('Gym Tracker');
        });

        test('Centered heading with text "Gym Tracker"', async () => {
            const heading = await page.$eval('h1', el => el.textContent.trim());
            expect(heading).toBe('Gym Tracker');
        });

        test('List of workouts should contain', async () => {
            const textContent = await page.evaluate(() => document.body.textContent);
            expect(textContent).toContain('Push-ups 3 Sets of 15 Reps');
            expect(textContent).toContain('Squats 3 Sets of 20 Reps');
            expect(textContent).toContain('Plank 3 Sets of 1 Minute');
        });
    });

    // CSS Tests
    describe('CSS', () => {
        test('The container should adapt', async () => {
            await page.setViewport({ width: 375, height: 667 }); // Simulate a mobile device
            const containerWidth = await page.$eval('.container', el => parseInt(getComputedStyle(el).width));
            expect(containerWidth).toBeLessThanOrEqual(400); // Ensure it fits within a mobile viewport
        });
    });
});
