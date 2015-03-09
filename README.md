# ember-cli-x-marquee

Plugin for ember-cli that makes anchor-element component available.

## Installation

To install simply run:

```
npm install git+ssh://git@github.com:webnuts/ember-cli-anchor-element.git --save-dev
```

## Usage

Once installed, you can use the plugin right away inside your template files:

```
{{#anchor-element scrollTo='.some-css-selector'}}Name of the link{{/anchor-element}}
```

## Configuration

You can set the scrollTo attribute to a CSS selector, which is scrolled to, when the user clicks on the link.