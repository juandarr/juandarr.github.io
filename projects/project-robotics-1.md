---
layout: project
type: project
image: images/robot/robot-pointing.jpg
title: Surveillance robot
permalink: projects/robot
date: 2013
featured: true
labels:
  - Robotics
  - Computer Vision
  - Arduino
  - C/C++
  - Android
summary: This autonomous wheeled robot features an android camera with computer vision algorithms for object detection. Besides, it incorporates sonar sensors, an array of IR sensors for line tracking and bumpers for obstacle avoidance.
---

<div class="ui small rounded images">
  <img class="ui image zoom" src="../images/robot/robot-origins3.jpg">
  <img class="ui image zoom" src="../images/robot/robot-track.jpg">
  <img class="ui image zoom" src="../images/robot/robot-pointing.jpg">
  <img class="ui image zoom" src="../images/robot/robot-main.jpg">
</div>

<img class="ui medium right floated rounded image zoom" src="../images/robot/robot-field.jpg">
<p class="pjustify">I designed and built an autonomous wheeled robot to surveil physical spaces using an android camera and pattern recognition algorithms for face, object and motion recognition. The system also features a set of ultrasonic modules for obstacle avoidance and an array of IR sensors to detect patterns in flat surfaces such as black lines over a white surface, which is used here to design the robot's line tracking capabilities.</p>

## Functional description

<p class="pjustify">As far as functionality goes, the robot can follow lines, perform object tracking and avoid obstacles.  The priority order of the actions done by the robot is as follows:</p>

<ol style="text-align:left !important;">
  <li>Avoid obstacles</li>
  <li>Object recognition</li>
  <li>Line tracking</li>
  <li>Move forward</li>
</ol>

<img class="ui medium left floated rounded image zoom medium-amp2" src="../images/robot/robot-origins2.jpg">

<p class="pjustify">Normally the robot will move forward until it finds lines to follow or a colored object (green color in the demo video) or obstacles to avoid. In the latter case, the robot will turn around and if there are no more obstacles ahead will choose among actions 2,3 and 4 as the next action to follow. When the robot's camera detects and object, it will stop and the device will start to follow the object with the attached pan/tilt system. Once the object of attention is in the center ofr the frame the robot will use a laser (also attached and controlled by the pan/tilt system) to point over whatever is ahead and an alarm will go on, indicating gun fire. The object tracking software uses the built-in camera of an android smartphone with OpenCV and Python. When the robot detects lines to follow it will try to stay on track unless there is an obstacle ahead. The robot body actuation is achieved by two 9V DC motor controlled by an H-bridge connected to an arduino board. This system moves a simple two wheeled platform with an extra support caster wheel in the back.</p>

## Demos
### Collision avoidance
<div class="resp-container">
    <iframe class="resp-iframe" src="https://www.youtube.com/embed/o0P5m1t8Hhg?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" gesture="media"  allowfullscreen></iframe>
</div>

### Object recognition
<div class="resp-container">
    <iframe class="resp-iframe" src="https://www.youtube.com/embed/LN0dzoi4bZw?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" gesture="media"  allowfullscreen></iframe>
</div>

### Line tracking
<div class="resp-container">
    <iframe class="resp-iframe" src="https://www.youtube.com/embed/wj9VCHaooy4?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" gesture="media"  allowfullscreen></iframe>
</div>

### Manual operation mode
<div class="resp-container">
    <iframe class="resp-iframe" src="https://www.youtube.com/embed/zWjKY17BtYQ?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" gesture="media"  allowfullscreen></iframe>
</div>

### Pan/tilt system testing
<div class="resp-container">
    <iframe class="resp-iframe" src="https://www.youtube.com/embed/QPomn0754iE?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" gesture="media"  allowfullscreen></iframe>
</div>

<p class="pjustify">You can learn more at the following link: <a class="hlink" href="https://www.mil.ufl.edu/5666/papers/IMDL_Report_Fall_12/Final%20Reports/Juan_Rios/Juan_Rios.pdf"><i class="file pdf outline icon"></i>Robot final report</a>.</p>
