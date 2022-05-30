# **Basic Starter SCSS template** 

------------------------------------

### **STEPS**

- Run the following command -> **npm install**

- After the packages are installed, you need to run the following command -> **grunt build**

   - With this command the project's assets are built by using the files in resources (css, scss, js, images)

- Before developing, open the **grunt-settings.js** and change the **proxy** and **host** name according to your virtual host name 

- When developing, run the default command **grunt**
 
   - With this command you activate the watcher and browsersync
   
   - The files that are watched are: JS, SCSS and IMAGES

- You can **add and remove** scss files from the **resources/scss** directory as needed (the ones below are the most common used)

- Make changes **ONLY** to the resources directory

- If you need to upload it to server, add the php files and the assets directory only

Note: If you want to use **source maps** while developing, open **includes/head.php** and change **main.min.css** to **main.css**. Don't forget to change it back when you are done.

**Source Map**: File that maps the transformed source (main.css) to the original source (app.scss) enabling the browser to reconstruct the original source. 

This means that when you open dev tools, instead of seeing the class being in main.css, you will see in precisely which scss file it is located. 

This **doesn't** work on minified css, so unless you change main.min.css to main.css you won't be able to use it.  

**Note: If you need to use external stylesheets, add them in the **css** directory inside resources and run grunt build. When the build is done, run grunt and continue developing. The external stylesheets will be copied to assets/css and you can use them from there.**

**Note: If you need to use external js plugins, add the js files to resources/js. They will be copied to assets/js.**

### **Includes**

- assets directory (it will be filled when you run grunt build)

    - fonts/fontawesome

- includes directory 

    - footer.php - the code for the footer (this should be the same for every page)
    
    - head.php - the code for the head (this is where the stylesheets and fonts are included)
    
    - header.php - the code for the header (this should be the same for every page)
    
    - scripts.php - this is where the scripts are included (jquery and an empty js are already added)

- partials directory 

    - this directory should be added if you use partials. It should be used if you have sections that are repeated throughout the design 

- resources directory

    - css directory (this is where the external stylesheets need to be placed)
  
         - fancybox.min.css (if you don't need to use fancybox in the project, remove it and delete if from head.php )

    - scss directory
    
    - js directory
      
         - fancybox.min.js (if you don't need to use fancybox in the project, remove it and delete it from scripts.php)
  
         - jquery.min.js (if you don't need to use jquery, remove it and delete it from scripts.php)
    
    - images directory

- grunt-settings.js

- Gruntfile.js

### **resources/scss/**

------------------------------------

##### **Contains**

- 1-tools 
   
    - _reset.scss - reset css

    - _grid.scss - bootstrap grid

    - fontawesome - the files for fontawesome 5 (initially commented out in app.scss - uncomment if needed)
  
    - _fonts.scss - initially empty, add fonts here
   
- 2-helpers

    - _variables.scss (global variables, screen sizes, colors, font-size..)
    
    - _functions.scss (place for scss functions, initially there are some helpful ones inside)
 
    - _mixins.scss (place for scss mixins, initially there are some helpful ones inside)
    
    - _utilities.scss (helper classes)
  
- 3-basics

    - _typography.scss ( headings, elements font size)

    - _background.scss (everything connected with background style)
  
    - _buttons.scss (everything connected with buttons style)
  
    - _dropdown.scss (everything connected with dropdowns style)
    
    - _images.scss (everything connected with images style)
  
    - _input.scss (everything connected with input style)
  
    - _lines.scss (everything connected with lines style)
  
    - _lists.scss (everything connected with lists style)
    
- 4-layout

    - _header.scss (everything connected with header style)
  
    - _main.scss (style that is unique and can't be added to any of the added files and there is no need for separate file)
  
    - _footer.scss (everything connected with footer style)


- 5-components

    - _box.scss (everything connected with box elements style)
  
    - _effects.scss (everything connected with animations and effects style)
  
    - _messages.scss (everything connected with messages style)
  
    - _panels.scss (everything connected with panels style)
  
    - _social-icons.scss (everything connected with social icons style)

- 6-responsive 
 
     - _responsive.scss (place for responsive global style - you can use media queries inside the scss classes)

- app.scss (all of the above files are imported into app.scss and app.scss is the source for the generated css file)


### **grunt-settings.js**

____________________________________

- Includes the paths for the source directories and destination directories for the tasks in **Gruntfile.js**

- You need to change the **proxy** and **host** according to the virtual host of your project


### **Gruntfile.js**
------------------------------------

##### **Contains**

- task for building the assets directory - run **grunt build**

- task for activating the watcher and browsersync - run **grunt**

- task for preparing for distribution - run **grunt dist** 

Note: If you run **grunt dist**, and then need to make more changes, run **grunt build**, **grunt** and when you are done **grunt dist**
   
   - Running **grunt build** is a must, so the original css will overwrite the purged css before you start making new changes     

### grunt build

1. compile scss to css and write it to resources/css-dev/ and assets/css/

1. combine media queries at the end of the file 

1. create source maps and write it to resources/css-dev/ and assets/css/

1. minify the css file and write it to resources/css-dev and assets/css

1. copy the js files from resources/js to assets/js

1. run babel for the app.js file (convert js to a format recognizable by old browsers)

1. minify the app.js file in assets/js

1. optimize images from resources/images and write them in assets/images

1. copy external css from resources/css to assets/css

### grunt

1. activate watcher - watch for changes in resources directory (images, js, scss, css) and php files in project

    - if new image is added in resources/images it automatically copies it to assets/images - without optimization
    
    - if new js files is added in resources/js it automatically copies it to assets/js
    
    **Note: if new css files is added in resources/css, it doesn't copy it automatically, you need to run grunt build**

1. activate browsersync - your browser will be updated with every change you make in .php files and in resources directory - images, js, css

### grunt dist

1. remove source maps from assets/css/

1. optimize images from resources/images and copy them in assets/images

1. compile scss to css and write it to resources/css-dev/ and assets/css/
   
1. combine media queries at the end of the file

1. remove unused classes - purge the css and overwrite the css in assets/css with the purged one 

1. minify the purged css and overwrite the assets/css/main.min.css

1. copy js files from resources/js to assets/js

1. run babel for the app.js file (convert js to a format recognizable by old browsers)

1. minify the app.js in assets/js

1. copy external css from resources/css to assets/css

____________________________________________

The output will be written in assets directory 

- assets/images 

- assets/js 

- assets/css
