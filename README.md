# Example Next.js Commerce

## Live Site Preview

Visit [https://example-nextjs-commerce.vercel.app](https://example-nextjs-commerce.vercel.app) to see results

## Local Development Instructions

This requires you to have Node, NPM, and Git installed on your computer.

1. Download or `git clone` this repository
2. `cd` to this directory
3. Run `npm install` to install necessary dependencies
4. Run `npm run dev` to see local dev server version at [localhost:3000](http://localhost:3000)

## Briefing Notes

I come from a Drupal front-end development background, with some Laravel and Vue.js experience. I choose the following languages and technologies for this challenge because the JavaScript ecosystem, specifically [JAMstack](https://jamstack.org), is something I have currently have an interest in.

1. Uses [Next.js](https://github.com/vercel/next.js) as a framework for React.js
2. Styling CSS-in-JS components with [styled-components](https://github.com/styled-components/styled-components)
3. Transitions and animations done with [Framer Motion](https://github.com/framer/motion)
4. Progressive and responsive image loading with [react-progressive-image](https://github.com/FormidableLabs/react-progressive-image)
5. Images:
   - Exported JPG images as WebP format (file sizes shrunk up to ~40% using [Squoosh](https://squoosh.app))
   - Compressed and set JPG format images as fallback for Safari browser
   - Removed cruft code from SVG images (file sizes shrunk up to ~80% using [SVGOMG](https://jakearchibald.github.io/svgomg/))

## Site Performance Overview

1. [CSS Stats](https://cssstats.com/stats?url=https%3A%2F%2Fexample-nextjs-commerce.vercel.app)
2. [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fexample-nextjs-commerce.vercel.app)
3. [Pingdom Tools](https://tools.pingdom.com/#5cec4379bec00000)

## To Do

1. Style header and nav
2. Simple mobile nav setup
3. Bind state between products and images
4. Crop and re-export all images
5. Configure react-progressive-images
6. Add Framer Motion transitions
