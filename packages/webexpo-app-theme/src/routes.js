import loadHeroWidget from 'webexpo-widget-hero';
import loadNewletterWidget from 'webexpo-widget-newsletter';

export default [
	{
		path: 'hero',
		getComponent: done => {
			loadHeroWidget(mod => done(mod.default));
		},
	},
	{
		path: 'newsletter',
		getComponent: done => {
			loadNewletterWidget(mod => done(mod.default));
		},
	},

];
