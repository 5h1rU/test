$(document).ready(function () {
    var wordsCount = 0;

    var List = function () {
      var self = this;

      //Call the methods for add list element, count the words and count list items.
      $("#addWordList").on("click", function () {
          if ($("#insertWordList").val() != "") {
            self.addList();
            self.countWords();
            self.countList();
          }
        });

      //When the element "img" is created the code can execute the delete process and calculate the current words and list items 
      $(document.body).on("click", "img", function () {
          var found = $(this).parent().text().split(' ');
          wordsCount -= found.length;
          $("#numberWords").text(wordsCount);
          $(this).parent().remove();
          self.countList();

        });

    };

    
    //Get the input text value and attach this to the HTML embed in a <li> in tthe top position
    List.prototype.addList = function () {
      var self = this;
      var item = $("#insertWordList").val();
      if (item !== "") {
        $("ul").prepend("<li>" + item + "<img class='algo' src='img/close.png' alt='close' /></li>");
        $("#insertWordList").val("");
      }
    };

    //Count the words of every <li>. I need convert to array because between <li>'s the words was together and the calculatio was wrong
    List.prototype.countWords = function () {
      var item = $("#insertWordList").val();
      var found = $("li").toArray();
      if (found.length > 0) {
        found = found[0].innerText;
        words = found.split(' ');
        wordsCount += words.length;
        $("#numberWords").text(wordsCount);
      }
    };

    //Count the number of items. Conver to array and count the actual number of <li>
    List.prototype.countList = function () {
      var found = $("li").toArray();
      found = found.length;
      if (found == 0) {
        $("#numberText").text("0");
      } else {
        $("#numberText").text(found);
      }
    };


    var itemList = new List();

});