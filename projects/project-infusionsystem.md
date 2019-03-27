---
layout: project
type: project
image: images/infusion/infusion-main.jpg
title: Infusion system
permalink: projects/infusion
date: 2007
featured: false
labels:
  - C/C++
  - Medical devices
  - Embedded electronics
  - Industrial design
summary: This infusion device is designed to provide liquid medicine to ill patients via bloodstream using a syringe. The solution integrates a step motors, rotary sensors and embedded microcontrollers to control the dosification process.
---

<div class="ui small rounded images">
  <img class="ui image zoom" src="../images/infusion/infusion-diagram.jpg">
  <img class="ui image zoom" src="../images/infusion/infusion-cad.jpg">
  <img class="ui image zoom" src="../images/infusion/infusion-main4.jpg">
</div>

<img class="ui medium right floated rounded image zoom" src="../images/infusion/infusion-schematic.jpg">

<p class="pjustify">An infusion system infuses fluids, medications or nutrients into a patient's circulatory system. Infusion pumps can administer fluids in ways that would be impractically expensive or unreliable if performed manually by nursing staff.
The development of this system involved the use of embedded systems (microcontrollers), sensors (liquid volume and rotor speed) and mechanical design. Programming skills were required to write all the code behind every function in the device and hardware integration.</p>

<p class="pjustify">The system was initally modeled in Pro Engineer. Then it was built. Functionally, the piston syringe is pressed and moved slightly by a black box with a dc motor in its interior. The motor speed is sensed with an enconder which provides a signal to control the amount of energy feeding the motor, gaining control over the fluid volume ejected in the syringe output. The system features a visualization system (display) and a matrix keypad for input commands such as the desired volumen or infusion periodicity. A buzzer provides alert sounds to indicate the init of the system, system malfunction, among other indicators.</p>



