This is a responsive WordPress theme for Northwest Orthotics and Prosthetics.
It's still missing features but works OK. To install:

1. Go to http://icomoon.io/app. Click the menu button, go to **manage projects**.
Click **Import Project** and open `fonts/src.json`.
2. Click **Load** next to the entry for the imported set. Make sure all the icons are selected with the **select** tool, then click **Generate Font**. Click **Download** and extract the contents of the zip archive to `fonts/nworthotics-icons`. You can delete the demo files if you want.
3. Process the stylesheets with Sass. From the main directory of the repository, execute

`sass scss/main.scss main.css --style compressed`

4. Install and active the theme.
