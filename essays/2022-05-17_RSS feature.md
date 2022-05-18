---
layout: essay
type: essay
draft: false
title: Adding RSS to my personal blog
subtitle: RSS as a tool for the open web
author:
  name: Juan Ríos
date: 2022-05-17
tags: [Open web, RSS, blogging]
---
After several weeks of internal deliberation I decided to add RSS to the blog section of my personal website. I have been using RSS for years as a way to quickly glance and filter the news relevant to me from different sources. It is quite useful to save time, since you generally have access to the tittle and a short description of the article, giving you enough information to decide whether such content is worth to read, listen to or explore. It also is quite private, since different sources are generally unaware of our identity while making a request for information. Finally, the flexibility and efficacy of the format is wide. RSS can be used to get information from a wide variety of platforms: YouTube, Reddit, Twitter and of course blogs. This makes it the perfect swiss knife to collect, manage, and explore information from the web in one glance, and continuosly. 

## My motivation
Bringing RSS as a tool to communicate with the world is also a way to free myself from the dependence on algorithms and systems deciding what matters to me, trained with arbitrary data collected from different services/platforms and used to profile my interests, personality, preferences. I am done with such practice. I really think the human experience should not be left to randomness and less to the tasteless manipulation of bits and knowledge predicted about us by a model that doesn't take into consideration our whole being, just the limited context, from which the machine tries to extrapolate our essence and infer possible futures. The intricacies of who we are, what we love and enjoy, why we live, how we spend our time, as well as other relevant aspects of being human are too important to be kept safe by machines or even worse, corporations, whose selfish and only motivation for profit should quickly give us an idea of where their priorities and loyalties lie.  

## How did I do it?
I am using [Jekyll](https://jekyllrb.com/) to create and manage my personal blog. Jekyll is a framework that renders markdown and produces a complete, static website ready to be served  by Apache, Nginx or other web server. Here are the steps I took while adding this feature to my Jekyll blog:

### 1) Add site detail to your Jekyll config file
Add the key/value pairs to your `_config.yml` as follows:

```yml
name: Your blog's name
description: description of your blog
url: https://example.com
```

### 2) Add `feed.xml` to the root
The Jekyll community has created several ways to include RSS in a blog. In my case I created  a `feed.xml` file at the root of the main folder using the generic template (`feed.xml`) included in the Github repository [jekyll-rss-feeds](https://github.com/georgemandis/jekyll-rss-feeds) by George Mandis.

```xml
---

---
<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
xmlns:atom="http://www.w3.org/2005/Atom"
xmlns:dc="http://purl.org/dc/elements/1.1/"
xmlns:sy="http://purl.org/rss/1.0/modules/syndication/">
<channel>
<title>{{ site.name | xml_escape }}</title>
<description>{% if site.description %}{{ site.description | xml_escape }}{% endif %}</description>
<sy:updatePeriod>{{ site.feed_update_period | default: "daily" | xml_escape }}</sy:updatePeriod>
<sy:updateFrequency>{{ site.feed_update_frequency | default: 1 | xml_escape }}</sy:updateFrequency>
<link>{{ site.url }}</link>
<atom:link href="{{ site.url }}/{{ page.path }}" rel="self" type="application/rss+xml" />
<lastBuildDate>{% for post in site.posts limit:1 %}{{ post.date | date_to_rfc822 }}{% endfor %}</lastBuildDate>
{% assign feed_items = site.feed_items | default: 10 %}
{% for post in site.posts limit:feed_items %}
<item>
<title>{{ post.title | xml_escape }}</title>
{% if post.author.name %}
<dc:creator>{{ post.author.name | xml_escape }}</dc:creator>
{% endif %}
{% if post.excerpt %}
<description>{{ post.excerpt | xml_escape }}</description>
{% else %}
<description>{{ post.content | xml_escape }}</description>
{% endif %}
<pubDate>{{ post.date | date_to_rfc822 }}</pubDate>
<link>{{ site.url }}{{ post.url }}</link>
<guid isPermaLink="true">{{ site.url }}{{ post.url }}</guid>
</item>
{% endfor %}
</channel>
</rss>
```

### 3) Build your site and push
Finally, just `jekyll build` your site and push. If you are in Github pages, push your changes to master and your new RSS will be ready as soon as the changes are updated in Github. 

It is also a good idea to add a `<link>` element in the document `<head>` for browsers that have built in support for RSS feed-readers. A line like the following one should work: 

```html
<link href="/blog/feed.xml" type="application/rss+xml" rel="alternate" title="Latest 10 blog posts (atom)" />
```


## Final impressions
I am quite happy with the results. Right now I am uploading this brief article as a post. My commitment is to write my experiences while exploring the world of computers, programming and the open web as often as possible. 
