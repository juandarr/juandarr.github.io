---
layout: project
type: project
image: images/chime/chime-main.jpg
title: Chime
permalink: projects/chime
date: 2013
featured: true
labels:
  - IoT
  - Python
  - Arduino
  - Bluetooth
  - Music
summary: This musical device creates music from motion and spatial gestures. Chime takes inputs from different physical variables via an accelerometer, gyroscope, microphone, temperature and humidity sensors. Variations in these inputs are used to generate music.
---
<div class="ui small rounded images">
  <img class="ui image zoom" src="../images/chime/chime-color.jpg">
  <img class="ui image zoom" src="../images/chime/chime-hackerhouse.jpg">
  <img class="ui image zoom" src="../images/chime/chime-internals.jpg">
  <img class="ui image zoom" src="../images/chime/chime-wood.jpg">
</div>

<p class="pjustify">Chime is a musical device to create music from motion and spatial gestures. It uses artificial intelligence and gesture recognition to generate music from multidimensional sensor input. The idea came up the day before a hackathon in Atlanta, Georgia, when a group of four people originated the idea in a bar during a brainstorming session where topics such as music, hardware, artificial intelligence and environment collided with each other. We won the first place with this idea, giving us access to an incubator based in Silicon Valley and travel tickets for a two week pitch training in San Francisco during September, 2013.</p>

<img class="ui medium right floated rounded image chime zoom medium-amp1_3" src="../images/chime/chime-logo.jpg">

<p class="pjustify">This prototype was built using the <a class="hlink" href="https://www.arduino.cc/">Arduino</a> (variations MEGA 2560 and nano were used in different versions of the prototype) and a set of sensors providing input data from the environment: sonar, temperature, humidity, accelerometer and gyroscope. The data was captured by the arduino board and sent wirelessly via Bluetooth to a music engine we built in Python for PC. The music engine is based on the <a class="hlink" href="https://github.com/belangeo/pyo">Pyo</a> module for Python, a library for audio signal processing.</p>

<p class="pjustify">Source: <a class="hlink" href="https://github.com/juandarr/chime"><i class="large github icon"></i>Chime</a></p>
