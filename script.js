function palindrome(str) {
    let palin = str.split("").reverse().join("");

    if(palin === str){
        alert("Chuỗi : " + palin + " là chuỗi palindrome");
        return true
    }else{
        alert("Chuỗi : " + palin + " không phải là chuỗi palindrome");
        return false;
    }
}

palindrome("eye");
palindrome("oke");

