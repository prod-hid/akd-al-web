# Akademia Albania Web
The project, in simple words is about providing video and scripted information, in the form of tutorials mostly in Albanian to students/unskilled personas and whoever interested in order to give the people some skill, keep track of how they progress, collaborate with schools and ministry in order to increase motivation to this platform and take over university lectures which are taught in a very non professional way; basically, a video provider of tutorials.

## Development Stack
- Webapp level, using `Angularjs Model-View-Control` architecture https://angularjs.org/
- Template Generation level, using `Jade` (Javascript) http://jade-lang.com/ or `Thymeleaf` (Java) http://www.thymeleaf.org/
- Webservice level, using `Spring RESTful` https://spring.io/guides/gs/rest-service/
- Database level, using `MongoDB` https://www.mongodb.org/

## Database level
- The application requires really low database complexity. It will contain mostly page data and not static small CHAR chunks, that’s why MongoDB seems the most useful and the best in collaborating between all these different technologies, as is generates JSON
- MongoDB is document/page based so it achieves fast query functions on reading and since the writing will be mostly static from our side, there wont be much speed needed.
- The main page structure for the videos, as an idea, could be:
  
  ```json
    {
      "id" : "(generated)",
      "name" : "how to cat",
      "category" : "cat lessons",
      "url" : "http://youtube.com/how_to_cat_file",
      "description" : "this video shows how to cat",
      "rating" : "100 (based on %"
    }
  ```

## Webservice level
- The REST service will be a bridge between the database and the templates which will generate the html pages.
- The REST service will send back information of a video, video-sets and descriptions of video-sections.
- The REST service MUST be able to do searches on YouTube, using the YouTube API.
- The REST service MUST be able to get view count of any video from YouTube in real time.
- Basic implementation of the REST could be based on Spring Framework and accept calls through API, so that it could be extended in the future and have no effects on the web-app, and also it will have different deploy from the web app.
