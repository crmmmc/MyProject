

function showPic_btn1(src1) {
    document.getElementById("img1").src=src1;

}

function showPic_btn2(src2) {
    document.getElementById("img2").src=src2;
}

function uploadFile() {
    document.getElementById("btn_file").click();
    getFileName(document.getElementById("btn_file"));
}


function getFileName(path){
        var pos1 = path.lastIndexOf('/');
        var pos2 = path.lastIndexOf('\\');
        var pos = Math.max(pos1, pos2)
        if( pos<0 )
            return path;
        else
            return path.substring(pos+1);
        var str=document.getElementById("p");
        p.innerText("path");
        console.log("path");
}

function displayFilename() {
    document.getElementsByClassName("p2")
}