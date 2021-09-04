import puppeteer from 'puppeteer';

describe('show/hide an event details', () => {
	let browser;
	let page;

	beforeAll(async () => {
		jest.setTimeout(30000);
		browser = await puppeteer.launch({ 
			headless: false,
			slowMo: 250,
			ignoreDefaultArgs: ['--disable-extensions']
		});
		page = await browser.newPage();
		await page.goto('http://localhost:3000/');
		await page.waitForSelector('.Event');
		
	});

	afterAll(() => {
		browser.close();
	});

	test('An Event element is collaped by default', async () => {
		const details = await page.$('.Event .details');
		expect(details).toBeNull();
	});

	test('User can expand an event to see its details', async () => {
		await page.click('.Event button');
		const details = await page.$('.Event .details');
		expect(details).toBeDefined();
	});

	test('User can collapse an event to hide its details', async () => {
		await page.click('.Event button');
		const details = await page.$('.Event .details');
		expect(details).toBeNull();
	});
});
