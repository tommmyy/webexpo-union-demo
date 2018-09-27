# React-union project for WebExpo 2018 conference

The repo contains a demonstration code of my [talk](https://www.webexpo.net/prague2018/talk?id=live-demo-react-js-portals-and-modern-js-apps-for-cms) about [React Union](https://github.com/lundegaard/react-union) for WebExpo 2018 conference.

## Presentation

See [video](https://www.webexpo.net/videos/).

## Slides

See [slides](https://www.konrady.cz/m/portals-in-react.pdf).

## Usage

Before you start, you should know that there is our documentation site [react-union.org](http://react-union.org) that can help you to get started.

### Install

```sh
yarn
```

### Config union-scripts

Please update the configuration in `union.config.js` with location of your WordPress repo.

### Run development server

```sh
yarn start
```

### Run proxy server

```sh
yarn start:wordpress
```

### Deploy to Wordpress

Before the deploy configure the path to the location of the WordPress in the `tools/deploy.js` file.

```sh
yarn deploy
```

## Notes about WordPress

In the demo I just slightly updated `twentyfifteen` - the default theme of WordPress.

Firstly I added the php script that adds JS bundles to the page (names are read from `assetManifest.json`).
Code bellow should be pasted in the `footer.php` at the end of the `<body />`:

```php
<?php
$manifest = json_decode(file_get_contents(
	get_template_directory_uri() . '/webexpo-app-twentyfifteen/assetManifest.json'
), true);
?>

    <script src="<?php echo $manifest["vendor.js"]; ?>"></script>
    <script src="<?php echo $manifest["webexpo-app-twentyfifteen.js"]; ?>"></script>
```

Then just create a post with the widget descriptor of `hero` or `newsletter` widget. E.g.:

```html
<div id="hero"></div>
<script data-union-widget="hero" data-union-container="hero"></script>
```

If you would like to use [shortcode](https://codex.wordpress.org/Shortcode_API), add this script to the `functions.php`:

```php
function union_widget_shortcode($atts, $content = null){
	$container = $atts["namespace"] ? $atts["namespace"] : $atts["name"] . "-". wp_generate_uuid4();

	ob_start();
	?>
	<div id="<?php echo $container ?>"></div>
<script data-union-widget="<?php echo $atts["name"] ?>" data-union-container="<?php echo $container ?>" type="application/json"><?php echo $content ?></script>
	<?php
	return ob_get_clean();
}

add_shortcode('union-widget', 'union_widget_shortcode');
```

Then instead of writing whole widget descriptor you can just write:

```
[union-widget name="hero"]
```

or

```
[union-widget name="hero" container="hero-id"]
```
