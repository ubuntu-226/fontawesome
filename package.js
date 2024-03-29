Package.describe({
	summary: "fontawesome 4.2.0 re-packaged for meteorjs",
	version: "4.2.2",
	git: "https://github.com/HedCET/fontawesome.git"
});

Package.onUse(function(api) {
	api.versionsFrom('METEOR@0.9.0');

	api.add_files("4.2.0/fonts/fontawesome.otf", "client");
	api.add_files("4.2.0/fonts/fontawesome-webfont.eot", "client");
	api.add_files("4.2.0/fonts/fontawesome-webfont.svg", "client");
	api.add_files("4.2.0/fonts/fontawesome-webfont.ttf", "client");
	api.add_files("4.2.0/fonts/fontawesome-webfont.woff", "client");

	api.add_files("4.2.0/css/fontawesome.css", "client");
});
