---
layout: project
type: project
image: images/ai-robotics/planning-static.png
title: AI for robotics projects
permalink: projects/ai-robotics
date: 2019
featured: true
labels:
  - Computer Vision
  - Perception
  - Planning
  - Control
summary: A series of projects where I design and implement core subsystems of an autonomous vehicle. These are perception (computer vision, sensor fusion and localization), planning (route planning, prediction, behavior planning, trajectory generation) and control (PID)
---
## Computer vision

### Advanced lane line tracking

<div class="ui small rounded images">
  <img class="ui image zoom" src="../images/ai-robotics/original.png">
  <img class="ui image zoom" src="../images/ai-robotics/binary.png">
  <img class="ui image zoom" src="../images/ai-robotics/perspective-transform.png">
  <img class="ui image zoom" src="../images/ai-robotics/curvature-position.png">
</div>

<img class="ui medium right floated rounded image chime zoom medium-amp2" src="../images/ai-robotics/estimations-warped.png">

<p class="pjustify">In this project, I developed a software pipeline to identify the lane boundaries of a road in a video. A series of steps are followed to identify the lanes:

<ol style="text-align: justify !important;"> 
<li> Compute the camera calibration matrix and distortion coefficients given a set of chessboard images. </li> 
<li> Apply a distortion correction to raw images. </li> 
<li> Use color transforms, gradients, etc., to create a thresholded binary image. </li> 
<li> Apply a perspective transform to rectify binary image ("birds-eye view"). </li> 
<li> Detect lane pixels and fit to find the lane boundary. </li> 
<li> Determine the curvature of the lane and vehicle position with respect to center </li> 
<li> Warp the detected lane boundaries back onto the original image. </li>
<li> Output visual display of the lane boundaries and numerical estimation of lane curvature and vehicle position. </li></ol>
The final result is shown in the right hand side image. Steps 3, 4, 5 and 6 are illustrated in the collection of images above.</p>

<p class="pjustify">Source: <a class="hlink" href="https://github.com/juandarr/Advanced-lane-line-tracking"><i class="large github icon"></i>Advanced lane line tracking.</a></p>

### Traffic signed classifier with CNN

<div class="ui medium rounded images">
  <img class="ui image zoom medium-amp1_3" src="../images/ai-robotics/traffic-signs.png">
</div>

<p class="pjustify">Summary in progress. In the mean time you can explore the Github source.</p>

<p class="pjustify">Source: <a class="hlink" href="https://github.com/juandarr/German-traffic-sign-classifier"><i class="large github icon"></i>Traffic sign classifier.</a></p>

### Behavioral cloning

<div class="ui medium rounded images">
  <img class="ui image zoom medium-amp1_3" src="../images/ai-robotics/behavioral-cloning.png">
</div>

<p class="pjustify">Summary in progress. In the mean time you can explore the Github source.</p>

<p class="pjustify">Source: <a class="hlink" href="https://github.com/juandarr/Behavioral-cloning"><i class="large github icon"></i>Behavioral cloning.</a></p>

## Sensor fusion and localization

### Extended kalman filter

<div class="ui medium rounded images">
  <img class="ui image zoom medium-amp1_3" src="../images/ai-robotics/kalman-filter.png">
</div>

<p class="pjustify">Summary in progress. In the mean time you can explore the Github source.</p>

<p class="pjustify">Source: <a class="hlink" href="https://github.com/juandarr/Extended-kalman-filter"><i class="large github icon"></i>Extended kalman filter.</a></p>

### Particle filter

<div class="ui medium rounded images">
  <img class="ui image zoom medium-amp1_3" src="../images/ai-robotics/particle-filter.png">
</div>

<p class="pjustify">Summary in progress. In the mean time you can explore the Github source.</p>

<p class="pjustify">Source: <a class="hlink" href="https://github.com/juandarr/Particle-filter"><i class="large github icon"></i>Particle filter.</a></p>

## Path planning

<div class="ui medium rounded images">
  <img class="ui image zoom medium-amp1_3" src="../images/ai-robotics/planning2.gif">
</div>

<p class="pjustify">Summary in progress. In the mean time you can explore the Github source.</p>

<p class="pjustify">Source: <a class="hlink" href="https://github.com/juandarr/Path-planning"><i class="large github icon"></i>Path planning.</a></p>

## PID Controller 

<div class="ui medium rounded images">
  <img class="ui image zoom medium-amp1_3" src="../images/ai-robotics/PID-control.png">
</div>

<p class="pjustify">Summary in progress. In the mean time you can explore the Github source.</p>

<p class="pjustify">Source: <a class="hlink" href="https://github.com/juandarr/PID-controller"><i class="large github icon"></i>PID controller.</a></p>

## Self driving car

<div class="ui medium rounded images">
  <img class="ui image zoom medium-amp1_3" src="../images/ai-robotics/carla.jpeg">
</div>

<p class="pjustify">Summary in progress. In the mean time you can explore the Github source.</p>

<p class="pjustify">Source: <a class="hlink" href="https://github.com/juandarr/Self-driving-car-Capstone"><i class="large github icon"></i>Self driving car architecture.</a></p>