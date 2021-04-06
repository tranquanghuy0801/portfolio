import Portfolio from '../../models/portfolio'
import calendarImage from '../../img/calendar-gspt.png'
import billImage from '../../img/bill-splitter.png'
import tweetImage from '../../img/tweet-analytics.png'

export const initState: Portfolio = {
	meta: {
		title: "Harry Tran's Portfolio",
		description: 'My profile',
		showRepoLink: true,
	},
	menu: {
		home: 'Hello',
		about: 'Resume',
	},
	intro: {
		headline: "Hi, I'm Harry. Let's talk.",
		typed: [
			"I'm a software developer",
			'who wants to build great products',
			'and deploy it.',
		],
	},
	resume: {
		headline: 'About Me',
		summary: [
			'Hi, I am Harry, a software engineer student at Queensland University of Technology (Brisbane, Australia) who has a passion for technology and innovation. I really enjoy exploring emerging technologies, solving problems and would like build great software products for people. My major interests are web development, data-driven architecture and sports (football and basketball). ',
		],
		jobsHeadline: 'Employment',
		jobs: [
			{
				title: 'Web Developer',
				company: 'Grace Simpkins Personal Tutors',
				timeframe: '2020-2021',
				summary: [
					'Analyzed performance data and optimized legacy back-end code for internal tutoring management websites, improving query caching',
					'Designed and implemented worksheets e-commerce website for the primary education, which enabled customers to access multiple worksheets based on paid subscriptions'
				]
			},
			{
				title: 'Software Developer',
				company: 'Regatta Capital',
				timeframe: '2020-2021',
				summary: [
					'Design new data schemas and SQL Server databases to migrate the business operations in the Excel sheets to Microsoft SQL Server',
					'Built and deployed data management website integrated with Microsoft SQL Server using Code On Time software to handle business tasks'
				]
			},
			{
				title: 'Software Developer',
				company: 'Base Enterprise',
				timeframe: '2019-2020',
				summary: [
					'Designed and built an OCR system for detecting Vietnamese Identification cards, achieving 95% accuracy by using Google Vision API',
					'Renovated the user interface of the check-in application to integrate this OCR system for internal users'
				]
			},
		],
		toolsHeadline: 'Skills',
		tools: [
			{
				name: 'Languages',
				list: 'Javascript, HTML/CSS, Python, Java, SQL',
			},
			{
				name: 'Front-end & Back-end',
				list: 'Bootstrap, Tailwind CSS, Angular, React.js & Express.js, Django, MongoDB, MySQL',
			},
			{
				name: 'Software',
				list: 'Atlassian (Bitbucket, Jira), AWS (DynamoDB, EC2, Lambda, RDS, ALB), Microsoft (Azure DevOps, MS SQL Server, Visual Studio Code), GitHub, Heroku, IntelliJ',
			},
		],
	},
	sections: [
		{
			id: 'portfolio',
			menu: 'Portfolio',
			headline: 'Portfolio',
			subhead: '',
			projects: [
				{
					id: 'section-1-project-1',
					title: 'Bill Splitter',
					summary:
						'An online website which provides the solution for keeping the bill record in a group of people',
					image: billImage,
					links: [
						{
							label: 'Github',
							url:
								'https://github.com/tranquanghuy0801/bill-splitter',
						},
					],
				},
				{
					id: 'section-1-project-2',
					title: 'Tweet Your Sentiments',
					summary:
						'A scalable website for searching Australian trend keywords and visualizing most popular words between positive and negative related Twitter posts',
					image: tweetImage,
					links: [
						{
							label: 'Github',
							url:
								'https://github.com/tranquanghuy0801/tweet_your_sentiment',
						},
					],
				},
				{
					id: 'section-1-project-3',
					title: 'GSPT Calendar',
					summary:
						'A student management website for organizing lessons in 4 different centres and pushing data to Accounting & CRM softwares (Xero & Zoho)',
					image: calendarImage,
					links: [
						{
							label: 'Github',
							url:
								'https://github.com/tranquanghuy0801/gspt-cal',
						},
					],
				},
			],
		},
		// {
		// 	id: 'more',
		// 	menu: 'More',
		// 	headline: 'Certifications',
		// 	subhead: '',
		// 	projects: [
		// 		{
		// 			id: 'section-2-project-1',
		// 			title: 'Project 1',
		// 			summary:
		// 				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
		// 			image: '',
		// 		},
		// 		{
		// 			id: 'section-2-project-2',
		// 			title: 'Project 2',
		// 			summary:
		// 				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
		// 			image: '',
		// 		},
		// 		{
		// 			id: 'section-2-project-3',
		// 			title: 'Project 3',
		// 			summary:
		// 				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
		// 			image: '',
		// 		},
		// 	],
		// },
	],
	footer: {
		social: [
			{
				service: 'github',
				link: 'https://github.com/tranquanghuy0801',
			},
			{
				service: 'linkedin',
				link: 'https://www.linkedin.com/in/huy-quang-tran-983a89144/',
			},
		],
		footerMessage: 'Thanks for reading.',
		background: '',
	},
}

export default (state: Portfolio = initState) => {
	return state
}
