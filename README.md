# **STEPS**

- Run the following command -> `npm install`

- After the packages are installed, you need to run the following command -> `grunt build`

   - With this command the project's assets are built by using the files in resources (css, scss, js, images)

- Before developing, open the `grunt-settings.js` and change the `proxy` and `host` name according to your virtual host name 

- When developing, run the default command `grunt`
 
   - With this command you activate the `watcher` and `browsersync`
   
   - The files that are watched are: JS, SCSS and IMAGES

- Make changes **ONLY** to the resources directory

**If you need to upload it to server, add the html files and the assets directory only**

**Note: If you need to use external stylesheets, add them in the `resources/css` directory and run `grunt build`. When the build is done, run `grunt` and continue developing. The external stylesheets will be copied to `assets/css` and you can use them from there.**

**Note: If you need to use external js plugins, add the js files to `resources/js`. They will be copied and minified to `assets/js`.**


## IMAGES

- add original images (JPG, PNG, GIF, SVG) in `resources/images`. After running `grunt dist` the image will be copied, optimized and added in `assets/images`

- convert all the images to `avif` format [here](https://avif.io/) and add them manually in `resources/images` and run `grunt dist`

- `grunt dist` will copy the `avif` files in the `assets/images` directory and also will convert and optimize the png, jpg, gif files to `webp` format and save them in the `assets/images` as well