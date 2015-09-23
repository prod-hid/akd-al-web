---
title:  "Starting this blog"
date:   2015-09-20 18:45:00
description: How to set up a blog like this
---

After "years" of searching for the perfect template for a blog, which would be **easy to read**, **minimal design** and **mobile friendly**, I finally decided
to give it a go with a [Jekyll][jekyll] theme, a domain from [GoDaddy][godaddy] and hosting with Github Pages.

#Domain
I got my personal domain [teodorrupi.com][teodorrupi] some time ago and experimented for a long time with different small projects. Shortly after, I was already
facing a huge limitation from GoDaddy, the inability to run java based applications. I was unable to deploy any enterprice application or big project, because the backend, based on java, had to either be removed/changed, or hosted somewhere else. So I thought of using the domain for mostly static information, about me, project info and so on.

#Jekyll
I decided to go for Jekyll and then started searching for the perfect theme, which was [Cactus][cactus]. Minimalistic, ideal for a blog, and already had all I need ready, 
such as Google Analytics, Disqus commenting and nice sharing options.

#Building
I followed a few simple tutorials on how to get things started, like [Godaddy-Github-Config][godaddy-github-config] and [Starting-Jekyll-On-Github][starting-jekyll-github]
and everything worked as a charm. After creating a Disqus account and registering for the "Use on site" option, everything was working fine, except for the base-url. 

#A small issue
My domain was http://www.teodorrupi.com . My blog was going to be hosted on teodorrupi.com/blog. After modifying the **_config.yml** file with a "/blog/" base url, my blog
was now hosted at www.teodorrupi.com/blog// . Using "/blog" fixed the problem, but the assets and post pages were missing :(. The fix was to keep base url as "/blog" and to add "/" at every use of  { base-url } in the project files. That was all.

#Run and Develop
To run the project, you can use 
{% highlight bash %}
$ jekyll serve ''
{% endhighlight %}
and do not forget to have the project in a special branch "gh-pages", if you want to also serve additional things on your github io page.
To make modifications and publish, on the "your-blog-repository-name" folder
{% highlight bash %}
$ git checkout gh-pages
$ git git add . 
$ git commit -m "my commit to the pages branch of this repository"
$ git push origin gh-pages
{% endhighlight %}

#Resouces
To get to the same point as this blog, please follow this post and then feel free to fork the project on [github][github-blog-repo]

[jekyll-gh]: https://github.com/mojombo/jekyll
[jekyll]: http://jekyllrb.com
[godaddy]:http://godaddy.com
[teodorrupi]:http://teodorrupi.com
[cactus]: https://github.com/nickbalestra/kactus
[godaddy-github-config]:http://andrewsturges.com/blog/jekyll/tutorial/2014/11/06/github-and-godaddy.html
[starting-jekyll-github]: http://andrewsturges.com/blog/jekyll/tutorial/2013/09/15/hosting-a-jekyll-blog-on-github.html
[github-blog-repo]:https://github.com/teodorrupi/blog
