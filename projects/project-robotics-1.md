---
layout: project
type: project
image: images/robot/robot-main.jpg
title: Surveillance robot
permalink: projects/robot
date: 2013
labels:
  - Robotics
  - Computer Vision
  - Arduino
  - C++
summary: I developed a robotic system for surveillance. The system features an android camera with computer vision algorithms for object detection, sonar sensors and bumpers for obstacle avoidance and an array of IR sensors for line tracking.
---

<div class="ui small rounded images">
  <img class="ui image" src="../images/robot/robot-field.png">
  <img class="ui image" src="../images/robot/robot-track.png">
  <img class="ui image" src="../images/robot/robot-pointing.png">
  <img class="ui image" src="../images/robot/robot-main.jpg">
</div>

AlienBot is an autonomous wheeled robot which can be used for surveillance using a smartphone camera and pattern recognition algorithms (for face, object and motion recognition). It also include a set of ultrasonic modules for obstacle avoidance and an array of IR sensors to detect patterns in flat surfaces.

<div class="ui small rounded images">
  <img class="ui image" src="../images/robot/robot-origins.jpg">
  <img class="ui image" src="../images/robot/robot-origins2.png">
  <img class="ui image" src="../images/robot/robot-origins3.jpg">
</div>

AlienBot can follow lines (with IR sensors), perform object tracking  and avoid obstacles. If the robot reaches a dead end (this is, there is no trajectory or lines to follow), it will move forward avoiding obstacles (with a configuration of sonar sensors) until finds a colored object. Then the robot will use a laser (controlled by a pan/tilt system) to point over whatever is ahead and an alarm will turn on, indicating gun fire. In order to perform color tracking, the robot uses the built-in camera of an android smartphone with OpenCV and Python. The robot is composed by a simple two wheeled platform with an extra support caster wheel in the back. The priority order of the actions done by the robot is as follows:

1. Avoid obstacles
2. Object recognition
3. Line tracking
4. Move forward

## Collision avoidance
<iframe width="560" height="315" src="https://www.youtube.com/embed/o0P5m1t8Hhg?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
You can learn more at the [UH Micromouse Website](http://www-ee.eng.hawaii.edu/~mmouse/about.html).

## Object recognition
<iframe width="560" height="315" src="https://www.youtube.com/embed/LN0dzoi4bZw?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## Line tracking
<iframe width="560" height="315" src="https://www.youtube.com/embed/wj9VCHaooy4?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## Manual operation mode
<iframe width="560" height="315" src="https://www.youtube.com/embed/zWjKY17BtYQ?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

