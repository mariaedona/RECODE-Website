//navbar
var navLinks = document.getElementById("navLinks");
        function showMenu(){
            navLinks.style.right = "0";
        }
        function hideMenu(){
            navLinks.style.right = "-200px";
        }


//randomizer link
var urls = ["speed_quiz/speed_1.html","speed_quiz/speed_2.html","speed_quiz/speed_3.html", "speed_quiz/speed_4.html", "speed_quiz/speed_5.html"];

        function goRandom(){
            location.href = urls[ Math.floor( Math.random() * urls.length ) ];
            return false;
        }

        
