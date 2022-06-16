# ASSESSMENT 5: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is a hash in Ruby?

  Your answer:
  A hash in ruby is a collection of key:value pairs. 

  Researched answer:
  A hash in ruby is a collection of key:value pairs. A hash is similar to an array except taht indexing is done via arbitrary keys of an object type and not trough integer index.If you attempt to access a hash with a key that does not exist, the method will return nil. During our cohort we practiced with ruby hashes by creating hash method for a bbq. Our hash had keys and values. the keys referred to bbq food like brisket or ribs and the values referred to the students. Our output took each key and value and returned the students name along with their bbq food of choice.


2. What is a gem?

  Your answer:
  Gems are used to modify and even speed up code in ruby applications.

  Researched answer:
  Gems are equivalent to a plugin or an extension for the Ruby language programming. Gems can be used to extend or modify functionality in Ruby applications. Gems can be created and sharded amongst developers through a shared community to be used in their applications and libraries. Some gems provide command line utilities to help automate tasks and speed up your work. Active record and Rspec.

3. What is Ruby on Rails?

  Your answer:
  Ruby on Rails is a web application framework written in Ruby. Rails is a MVC framework.

  Researched answer:
  Rails is a model–view–controller (MVC) framework, providing default structures for a database, a web service, and web pages. Rails facilitates the use of web standards such as JSON or XML for data transfer and HTML, CSS and JavaScript for user interfacing. Rails can be used to build web applications taht span both the front end and back end. The Model and Controller would be considered the back-end part of the application. The View handles the front end by generating the actual web page that people see in the browser, along with included JavaScript and HTML. You can also use Rails to create web services or APIs that return JSON for use by other applications.
  
  Rails is framework that was written in the ruby language and released in 2004. It allows developers to create full stack web applications. It allows developers to take in, save, and show data through the MVC model view controller. 
  The model is like the brain of the application. The view is what the user sees. And the controller controls the interaction between the user and the application. In class we built a simple blog on ruby on rails which allows a user to create, read, update, and delete blogs. 

4. What is a relational database? Are there other kinds of databases?

  Your answer:
  Relational databases store data similar to excel spreadsheets.

  Researched answer:
  A relational database is a type of database that stores and provides access to data points that are related to one another. Relational databases are based on the relational model, an intuitive, straightforward way of representing data in tables. In a relational database, each row in the table is a record with a unique ID called the key. The columns of the table hold attributes of the data, and each record usually has a value for each attribute, making it easy to establish the relationships among data points. A database can have many tables that have relationships to each other. The description of the layout of all the tables in a database and the name and data type of each column within each table in a database is called a schema. There are realtional and non-relational databases.

5. What are primary keys? Why are they important?

  Your answer:
  Primary keys are unique keys that identify individual rows in databases.

  Researched answer:
  A primary key, also called a primary keyword, is a key in a relational database that is unique for each record. It is a unique identifier, similar to a driver license number,  telephone number (including area code), or vehicle identification number (VIN). A relational database must always have one and only one primary key. Primary keys typically appear as columns in relational database tables.
  Database operations like searching for records are faster because an index is used, based on the primary key.
  Using the primary key, you can easily identify and find unique rows in the database table. They allow you to update/delete only specific records by uniquely identifying them.

## Looking Ahead: Terms for Next Week
Research and define the following terms to the best of your ability.

1. RESTful routes:
  Rails follows a RESTful pattern for interaction between the client and the server. REST stands for Representational State Transfer. REST is a pattern to follow when structuring routes between the server and the client. RESTful routes are an attempt to bring the operations that can be applied to an object into HTTP requests. CRUD Creating, Reading, Updating, and Deleting will accomplish almost all the tasks needed to do to an object creating a standard language and structure across all of the objects in our application.

2. JSON:
  JSON is short for Javascript Object Notation. It is the simplest and easiest way to transfer data using the internet which makes the language extremely popular for APIs, enabling developers to work across multiple languages. Although many 3rd party RESTful API’s deliver JSON as the response they are not exactly very readable or scalable.

3. ERB:
  erb extension stands for embedded Ruby. Embedded Ruby or Templated Ruby is a file structure that allows us to code in HTML and drop Ruby code into the view file.

4. Params:
  URL parameters, also known as params or query strings, are a way to pass in additional information into a controller method to query the database or dynamically modify the view. Using params: Parameters allow us to add more information to our program by passing a value into the route rather than directly to the URL.

5. API:
  API is the acronym for Application Programming Interface, which is a software intermediary that allows two applications to talk to each other. Each time you use an app like Facebook, send an instant message, or check the weather on your phone, you’re using an API.
