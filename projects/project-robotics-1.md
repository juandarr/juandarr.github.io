---
layout: project
type: project
image: images/robot/robot-main.jpg
title: Surveillance robot
permalink: projects/robot
date: 2013
featured: 10
labels:
  - Robotics
  - Computer Vision
  - Arduino
  - C/C++
  - Android
summary: I developed a robotic system for surveillance. The system features an android camera with computer vision algorithms for object detection, sonar sensors and bumpers for obstacle avoidance and an array of IR sensors for line tracking.
---

<div class="ui small rounded images">
  <img class="ui image" src="../images/robot/robot-origins3.png">
  <img class="ui image" src="../images/robot/robot-track.png">
  <img class="ui image" src="../images/robot/robot-pointing.png">
  <img class="ui image" src="../images/robot/robot-main.jpg">
</div>

<img class="ui medium right floated rounded image" src="../images/robot/robot-field.png">
I designed and built an autonomous wheeled robot to surveil physical spaces using an android camera and pattern recognition algorithms for face, object and motion recognition. The system also features a set of ultrasonic modules for obstacle avoidance and an array of IR sensors to detect patterns in flat surfaces such as black lines over a white surface, which is used here to design the robot's line tracking capabilities.

## Functional description

As far as functionality goes, the robot can follow lines, perform object tracking and avoid obstacles.  The priority order of the actions done by the robot is as follows:

1. Avoid obstacles
2. Object recognition
3. Line tracking
4. Move forward

<img class="ui medium left floated rounded image" src="../images/robot/robot-origins2.png">

Normally the robot will move forward until it finds lines to follow or a colored object (green color in the demo video) or obstacles to avoid. In the latter case, the robot will turn around and if there are no more obstacles ahead will choose among actions 2,3 and 4 as the next action to follow. When the robot's camera detects and object, it will stop and the device will start to follow the object with the attached pan/tilt system. Once the object of attention is in the center ofr the frame the robot will use a laser (also attached and controlled by the pan/tilt system) to point over whatever is ahead and an alarm will go on, indicating gun fire. The object tracking software uses the built-in camera of an android smartphone with OpenCV and Python. When the robot detects lines to follow it will try to stay on track unless there is an obstacle ahead. The robot body actuation is achieved by two 9V DC motor controlled by an H-bridge connected to an arduino board. This system moves a simple two wheeled platform with an extra support caster wheel in the back.

## Demos
### Collision avoidance
<iframe width="560" height="315" src="https://www.youtube.com/embed/o0P5m1t8Hhg?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

### Object recognition
<iframe width="560" height="315" src="https://www.youtube.com/embed/LN0dzoi4bZw?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

### Line tracking
<iframe width="560" height="315" src="https://www.youtube.com/embed/wj9VCHaooy4?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

### Manual operation mode
<iframe width="560" height="315" src="https://www.youtube.com/embed/zWjKY17BtYQ?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

### Pan/tilt system testing
<iframe width="560" height="315" src="https://www.youtube.com/embed/QPomn0754iE?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

You can learn more at the following link: [Robot final report](https://www.mil.ufl.edu/5666/papers/IMDL_Report_Fall_12/Final%20Reports/Juan_Rios/Juan_Rios.pdf).
