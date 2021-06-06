var sideBar = document.getElementById('nav');
        var mobileMenu = document.querySelector('.menu-btn');
        var overlay = document.querySelector('.mobile-overlay');
        var imageZoom = document.querySelector('.img-clicked');
        var imageSection = document.querySelector('.img-clicked img');
        var exitBtn = document.querySelector('.exit-btn');
        var sloganElement = document.querySelector('.img-slogan');
        var imageElements = document.querySelectorAll('.img-section');
        var closeSideBar = document.querySelector('.close');
        function w3_open(){
            sideBar.style.display = 'block';
            overlay.style.display = 'block';
        }

        function w3_close(){
            sideBar.style.display = 'none';
            overlay.style.display = 'none';
        }

        mobileMenu.onclick = function(){
            w3_open()
            isOpened = true;
        }
        overlay.onclick = function(){
            w3_close();
            isOpened = false;
        }

        function slogan(number){
            switch(number){
                case 0: return 'A boy surrounded by beautiful nature';
                        break;
                case 1: return 'What a beautiful scenery this sunset';
                        break;
                case 2: return 'The Beach. Me. Alone. Beautiful';
                        break;   
                case 3: return 'Quiet day at the beach. Cold, but beautiful';
                        break;
                case 4: return 'Waiting for the bus in the desert';
                        break;
                case 5: return 'Nature again.. At its finest!';
                        break;
                case 6: return 'Canoeing again';
                        break;
                case 7: return 'A girl, and a train passing';
                        break;
                case 8: return 'What a beautiful day!';
                        break;
            }
        }
        
        for(let i=0; i<imageElements.length; i++){
            imageElements[i].onclick = function(e){
                imageSection.src = e.target.currentSrc;
                sloganElement.textContent = slogan(i);
                imageZoom.style.display = 'block';
            }
        }

        exitBtn.onclick = function(){
            imageZoom.style.display = 'none';
        }

        closeSideBar.onclick = function(){
            w3_close();
        }