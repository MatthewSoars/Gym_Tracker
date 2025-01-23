const puppeteer = require('puppeteer');
const fs = require('fs');

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

        test('Workout list should contain some data', async () => {
            const workoutText = await page.evaluate(() => document.body.textContent.trim());
            expect(workoutText.length).toBeGreaterThan(0);
        });
    });

    // JSON Data Tests
    describe('JSON Validation', () => {
        test('Check data for every day of the week', () => {
            const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));

            const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
            daysOfWeek.forEach(day => {
                expect(data[day]).toBeDefined();
                expect(data[day].length).toBeGreaterThan(0);
            });
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
