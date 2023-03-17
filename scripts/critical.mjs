import {generate} from 'critical';

generate({
  inline: true,
  base: '_includes/critical',
  src: '_site/index.html',
  target: {
    css: 'critical.css',
  }
});
