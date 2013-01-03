# Lazy Loading Nivo Slider

A fork of Nivo Slider enabling lazy loading of images. 

Use cases:

 * Dozens of images in the slideshow
 * Very large images
 * Mobile environments

## Usage

Works exactly like the existing Nivo Slider with one little change. Add a `data-src` attribute to your images:

Before:

  `<img src="my-image.jpg" alt="" title="Caption for my image.">`

After:

  `<img data-src="my-image.jpg" alt="" title="Caption for my image.">`

And that's it! 

Though it's highly recommended to include a `src` to small placeholder image for valid HTML markup. (And for non-javascript users). Note that `data-src` has precedence over `src` 

View the live example: [http://leepowers.net/files/nivo/demo/demo-lazy.html](http://leepowers.net/files/nivo/demo/demo-lazy.html)

See `demo/demo-lazy.html` in the repository for example code. (Or view source on the demo)

## Events

The custom `onImageLoad` event is exposed and triggered whenever an image starts loading. May be called multiple times per image.   

## About the author

Forked by Lee Powers: [http://leepowers.net](http://leepowers.net)

I've needed this for a while for slideshows with large images or a large number of images. Tried dabbling in creating my own jQuery slideshow plugin, but Nivo already has 99% of what I'm looking for. Reading [this Stack Overflow question](http://stackoverflow.com/questions/5502531/how-can-i-control-how-nivoslider-preloads-images/) provided any additional push needed to get this working!

## About Nivo Slider

To find out more about Nivo Slider visit the home page at [http://nivo.dev7studios.com](http://nivo.dev7studios.com)

Nivo Slider GitHub Project Page: [https://github.com/ho-nl/Nivo-Slider](https://github.com/ho-nl/Nivo-Slider)

