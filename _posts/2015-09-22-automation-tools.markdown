---
title:  "Automation in Testing - Is it needed?"
date:   2015-09-22 23:50:00
description: Why and how automation is a must, in parallel to manual testing
---

# Automation in Quality Assurance
Quality Assurance is maybe one of the top departments which needs software automation. The group of people on the development side are always fewer than the people in the user side, hence something developet by a group of people, might go into the hands of millions. Quality Assurance is there to make sure that MOST out of those million people get what the product is required to be like and what to do. BUT there is no million people quality assurance team, who are experts and vigilent enough to make sure the product follows those specifications. **Here is where machines come to the rescue.** Maybe machines will NEVER be as smart as a human, but its sure that a machine has a very high uptime. It never gets distracted or bored from doing the same thing over and over again, it never reduces its quality. BUT machines alone can never fully cover a complex project, the human eye and mind is always needed.

# Desktop Application Testing Automation
Nowadays most application are becoming part of the web, connected to the cloud, all working through the browser. But since with a web application there are still restrictions which apply due to infrastructure, sometimes its easier for different purposes to have a desktop based application. They are huge, they need to be robust and sometimes they need to be very very reliable.

Two fields in which I have been mostly attracted to from the testing point of view are medicine and finance. Both medical and financial applications, but mostly the medical ones, need to reach a very high level of reliability before they can be rolled out. So testing is a very important part of the work.

What I found out during 2 years part time working at a medical software company was that due to differences in Operating Systems, machine architectures and many other mysteries of a machine, testing that a software did what it was supposed to do was NOT ENOUGH. What had to be tested was :

- Is the software able to do the same thing for millions of times, without having any memory issues, breaking due to bugs?
- Is the software able to endure being used by a non professional user, who could at any point do actions which were logically not supposed to be done in that order?
- Is the software able to endure infrastructure problems, used under low CPU and RAM, restarting after an electrical failure?

From the moment you read the list of requirements needed to pass a software as ready for release, you understand that no person or team will be able to use the software a million times just to reach those test conditions. This is the moment where automation is a MUST.


# Web/Mobile Application Testing Automation
On the other hand, web and mobile applications have been exploding all over the internet and "the cloud". Easier to break, easier to fix and easier to give it to people. With a few exceptions, these are the applications where there is a big number of technologies working togather and at any point, being dependent on the service of other applications, being live and functional is more important than exceptional quality and reliability.

While currently working in web applications automated testing, I have come to the following conclusions why automation is needed here is as well and is a MUST for a company which aspires to grow its product and make it more and more complex:

- Continuous acceptance testing to make sure the service is alive, and the main functionalities are still working
- Continuous in depth testing of all the functionalities, links, redirects, form submissions and network requrests and responses, to make sure everything is still running
- Server testing to be reachable and live
- Different browser and OS testing
- Stress testing of the browsers to simulate a big wave of requests and how the server handles it

All the above mentioned points are doable by human exploratory testing, which the exception of continuous. Having a testing project which works for you day and night, even on weekends and while you have to sleep is what a company has to count on and invest for better peformance


# Tools
Python was the best tool I have found that can be used in desktop application testing. With a GUI creator, you can easily have a test environemnt where you can control your simulations, in different operating systems with easy. Easy to use, easy to learn and with tons of plugins out there, as well as very lightweight and robust.

For web/mobile testing, there are many tools out there which fit to differnt projects. But as an idea, you could have great luck with using a javascript terminal based testing framework which is lightweight, fast and easy to MAINTAIN. For a robust testing application which is also browser based in parallel, **Selenium** is the closest thing you can get to a perfect multipurpose browser based solution. With an easy to maintain and well orgranized framework, the power of Selenium is enormous.

#Resources
- [Selenium][selenium-web] 
- [Casperjs][casper-web]
- [Slimerjs][slimer-web]
- [Phantomjs][phantom-web]

[selenium-web]:http://www.seleniumhq.org/	
[casper-web]:http://casperjs.org/
[slimer-web]:http://slimerjs.org/
[phantom-web]:http://phantomjs.org/
