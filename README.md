# Cat Clicker

Just an experiment based in some exercises from [Udacity Full Stack Web Developer Nanodegree](https://www.udacity.com/course/full-stack-web-developer-nanodegree--nd004) to make DOM manipulation in 2 approaches.

So there are 2 versions of the same single page application where users can manipulate an existing cat dataset and change some attributes as name, picture* and clicks. There's no data persistence.

By directly clicking in a cat picture, it also increments its click count.

_*Pictures are restricted to available local images (cat1.jpg, cat2.jpg,..., cat5.jpg) or any URL image._

### Approach 1 (MV*):

This version uses plain speration of concerns in a **MVO** pattern (aka, "Model View Octopus", lol) and some [JQuery](https://jquery.com/) to manipulate DOM.

### Approach 2 (Knockout.Js):

This version only uses [Knockout.Js](https://knockoutjs.com) framework. Since it works with **MVVM** pattern using declarative bindings and automatic UI refreshing, the overall code decreased by half.

**Images:**

<table align="center">
  <tr>
     <td>
       <img src="screenshots/image1.jpg" width="400" title="Main View">
       <p align="center">Main View</p>
     </td>
     <td>
       <img src="screenshots/image2.jpg" width="400" title="Admin View">
       <p align="center">Admin View</p>
     </td>
  </tr>
</table>
