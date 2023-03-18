# Slideshow

I wanted a basic application where I could upload a folder of pictures and get back a very basic, speed-variable slideshow of the pictures but somehow I couldn't find that anywhere. Maybe I didn't look hard enough.

So, I decided to enlist the help of my good friend GPT-4 and whipped this up. To be honest, GPT-4 did about 80% of the work and I barely know how Express or React work. But somehow it whips up a server using Express.js, grabs the pictures out of /public/images, then gives you a very nice little slideshow of them.

I made start.sh to streamline the startup process and then symlinked it to /usr/local/bin/slideshow to streamline it even more, so now I can type "slideshow" in any terminal window and it'll start this bad boy up for me.

If you don't want to use start.sh then this is how I get it going "manually":

- $node server.js
- npm start

Have fun!
