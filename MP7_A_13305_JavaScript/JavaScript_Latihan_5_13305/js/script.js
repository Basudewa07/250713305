function fn_ValForm() {
    var sMsg = "";

        if(document.getElemenById("nama").value == "") {
            sMsg += "\n* Anda belum mengisikan nama";
        }

        if(document.getElemenById("email").value == ""){
            sMsg += "\n* Anda belum mengisikan email";
        }

        if(document.getElemenById("umur").value == ""){
            sMsg += "\n* Anda belum mengisikan umur";
            if(umur >= 10 && umur <= 18){
                if(umur <= 14){
                    alert("Kategori Junior");
                }else{
                    alert("Kategori Senior");
                }
            }else{
                alert("Umur tidak valid");
            }
        }else{
            alert("Pilihan tidak valid")
        }
        
        if(sMsg == ""){
            alert("Peringatan:\n" + sMsg);
            return false;
        }else{
            return true;
        }
    }




