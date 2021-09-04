var x = 3 ,Menang = 0, Kalah = 0, Seri = 0;
var i = 1;
var limit = 0;//batas 
// x = 1 adalah botComputer memilih Gunting
// x = 2 adalah botComputer memilih Batu
// x = 3 adalah botComputer memilih Kertas
var ulang = false;
var tingkatKesulitan = true;
var status = "";
while(tingkatKesulitan){
    var kesulitan = prompt("Pilih Tingkat Kesulitan : Easy, Normal, Hard, Nightmare.");
    if(kesulitan == "Easy" || kesulitan == "Normal" || kesulitan == "Hard" || kesulitan == "Nightmare"){
        switch(kesulitan){
            case "Easy" :
                limit = 3;
            break;
            case "Normal" :
                limit = 5;
            break;
            case "Hard" :
                limit = 7;
            break;
            case "Nightmare" :
                limit = 10;
            break;
        }
        ulang = true;
        tingkatKesulitan = false;
    }else{
        tingkatKesulitan = confirm("Masukan pilihan dengan benar!");
    }
}
while(ulang){
    var botComputer = Math.floor(Math.random() * x) + 1;
    var user = prompt("Pilih Gunting, Batu, Kertas (Match : "+ i +")");
    if(user != "Gunting" || user != "Batu" || user != "Kertas"){
        //Pengkondisian Gunting
        switch(user){
            case "Gunting" :
                if(botComputer == 1){
                    alert("Anda : " + user + "\nBot : Gunting" + "\nSERI!");
                    status = "SERI";
                    Seri++;
                }else if(botComputer == 2){
                    alert("Anda : " + user + "\nBot : Batu" + "\nKALAH!");
                    status = "KALAH";
                    Kalah++;
                }else if(botComputer == 3){
                    alert("Anda : " + user + "\nBot : Kertas" + "\nMENANG!");
                    status = "MENANG";
                    Menang++;
                }
            break;
            case "Batu" :
                if(botComputer == 1){
                    alert("Anda : " + user + "\nBot : Gunting" + "\nMENANG!");
                    status = "MENANG";
                    Menang++;
                }else if(botComputer == 2){
                    alert("Anda : " + user + "\nBot : Batu" + "\nSERI");
                    status = "SERI";
                    Seri++;
                }else if(botComputer == 3){
                    alert("Anda : " + user + "\nBot : Kertas" + "\nKALAH!");
                    status = "KALAH";
                    Kalah++;
                }
            break;
            case "Kertas" :
                if(botComputer == 1){
                    alert("Anda : " + user + "\nBot : Gunting" + "\nKALAH!");
                    status = "KALAH";
                    Kalah++;
                }else if(botComputer == 2){
                    alert("Anda : " + user + "\nBot : Batu" + "\nMENANG!");
                    status = "MENANG";
                    Menang++;
                }else if(botComputer == 3){
                    alert("Anda : " + user + "\nBot : Kertas" + "\nSERI!");
                    status = "SERI";
                    Seri++;
                }
            break;
        }
            switch(botComputer){
                case 1 :
                    var botDataValue = "Gunting";
                break;
                case 2 :
                    var botDataValue = "Batu";
                break;
                case 3 :
                    var botDataValue = "Kertas";
                break;
            }
            console.log("MATCH : " + i + "(" + status + ")\nBOT   : " + botDataValue + "\nANDA  : " + user); 
            i++;
            if(i == (limit + 1)){
                console.log("Batas Terlampaui")
                ulang = false;
            }else if(i > 3){
                ulang = confirm("Lanjut ke stage selanjutnya?"); 
            }     
    }else{
        ulang = confirm("Masukan pilihan dengan benar!");
        i--;
    }
    
    
}
var point = ((Menang * 3) + Seri + (Kalah * -1));
if(i >= 3){
    alert((i-1) + " MATCH\nMenang : " + Menang + "\nKalah : " + Kalah + "\nSeri : " + Seri + "\n\nPoint : " + point + "\nTerima Kasih Sudah Bermain");
}

