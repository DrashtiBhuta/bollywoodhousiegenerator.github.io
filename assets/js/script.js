        $(document).ready(function(){

            generate()

            function generate() {
                var text = "Dolly ki doli,Amjad Khan,Fukrey,Shivaay,Hrithik Roshan,DDLJ,Bipasha Basu,Feroz Khan,Alia Bhatt,Karan Johar,Pulkit Samrat,Chennai Express,Cocktail,Ompuri, Kartik Aryan,Farting,Ladies Vs Ricky Bahl,Ek chutki sindoor,Kanika Kapoor,Aishwarya Rai,Vidya Balan,Kanchi,History Professor,Akshay Khanna,Ranveer Singh,Nushrat Bharucha,Jai Ho,Anil Kapoor,Dil charta hai,Deepika Padukone,K3G,Katrina Kaif,Baahubali,Aashiqui-2,Jadoo,Tabu,Devdas,Kuch Kuch Hota hai,Talaash,Amrita Rao,Tamasha,Gulaab Gang,Imraan Khan,Saif Ali Khan,Pankaj Kapoor,Ashutosh Gowarikar,Bombay velvet,Bhoothnath Returns,Sonakshi Sinha,Piku,Akshay Kumar,Top of a water tank,R Balki,Revolver Rani,Priyanka Chopra,Mr India,Ajay Devgan,Randeep Hoda,Singham,Abbas Mustan,Jab tak hai jaan,shahid kapoor,A.R. Rahman,3 Idiots,lagaan,Amitabh Bachan,Varun Dhawan,Aamir Khan,Sonal Chauhan,Karishma Kapoor";
                //console.log("hello")
                var titles = text.split(',');
                //console.log(titles[1])
                for (var j=1;j<13;j++){
                    var table = document.getElementById("table"+j);
                    var row = 0;
                    for(var i = 1; i<16; i++){

                        num = Math.floor(Math.random() * (70 - 0) ) + 0;
                        var title = titles[num];
                        console.log("row "+row)
                        console.log(i)
                        console.log(table.rows[row].cells["cell"+i])
                        table.rows[row].cells["cell"+i].innerHTML=title;
                        if(i%5 == 0) {

                            row++;
                        }
                    }
                }
            }

            function printDiv() {
                var toPrint = document.getElementById('printarea');
                var popupWin = window.open('', '_blank', 'width=350,height=150,location=no,left=200px');
                popupWin.document.open();
                popupWin.document.write('<html><title>::Preview::</title><link rel="stylesheet" type="text/css" href="assets/css/style.css" /></head><body onload="window.print()">')
                popupWin.document.write(toPrint.innerHTML);
                popupWin.document.write('</html>');
                popupWin.document.close();
            }

                $('#newCard').click(function(){
                    generate();

                });

                $('#printBut').click(function(){
                    console.log("printing")
                    printDiv()
                });


        });