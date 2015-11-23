# Content Management System

## Technical Evaluation Criteria

*	Workflow for editing and publishing content
*	Multi-hierarchy of templates, sites and pages
*	Globalization and localization
*	Notifications – email, SMS, push
*	Social media integration support
*	Users and rights management
*	Built-in applications – blog and chat
*	Analytics management – SEO, Tracking
*	Admin user experience, Mobile responsiveness
*	DAM integration

## Options

*	Adobe AEM
*	Censhare
*	Kentico
*	Sitecore

## Proof of Concept Technical criteria

Sl. No|Feature|Feature Details|CenShare|AEM|Kentico|Sitecore
---------|-------------|------------------|----------------|-----------|------------|-------------
1|Demonstration of rendering templates out side the CMS from  custom application|<ul><li>Create a template in CMS admin</li>	<li>Create a content page in admin</li><li>Create a custom application that reads CMS content, templates and render the webpage</li><li>It can be done with SDK, API, Plugins or any other options</li></ul>||||
2|Demonstration of consumption of content through API from custome applications|Web application - <ul><li>Create a content page in admin</li><li>Create a custom application that reads CMS content through API and display in the web application</li></ul>||||
3||Mobile App<ul><li>Create a content page in admin</li><li>Create a custom application that reads CMS content through API and display in the web application</li></ul>||||
4|Demonstration of Custom Authentication|Active Directory for Internal Employees - Integrate Single Signon by Stubbing AD||||
5||Vexiere for end users-  Integrate Single Signon by stubbing the Vexiere||||
6|Demonstration of Localization Cababilities|Retrieving content through API for different languages<ul>  <li>Create a content page in admin for multiple languages - English, Simplied Chinese, Traditional Chinese</li>  <li>Create a custom application that retrieves languagae specific  content through API based on the request</li></ul>||||
7||Rendering of a page with different languages<ul>  <li>Create a content page and template in admin for multiple languages - English, Simplied Chinese, Traditional Chinese</li>  <li>Create a custom application that renders languagae specific  web pages</li></ul>||||
8|Create widget in CMS and consume out side of the CMS|Search widget testing to fortius services <ul>  <li>Create search widget in CMS Admin</li>  <li>Create a custom application that retrieves widget render</li>  <li>Custom application should consume fortius services </li>  <li>Custom application should display result list</li></ul>||||
9|Performance|2000 concurrent * 10X - Jmeter - Using Amazon environment||||
10|Demonstration of integration of DAM|Highlevel integration of DAM into CMS<ul>  <li>Able to select image from DAM</li>  <li>Able to upload image to DAM</li></ul>||||

## Conclusion - Pending

All the content management systems provide the generic features, however, some of the unique features of the above systems such as eco system, developer support, skill set actually needs to be considers for the selection of the tool. It’s still being discussed and tried out to choose one of the above for the platform. 

