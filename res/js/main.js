
/* Clock */
window.setTimeout("waktu()", 1000);
 
	/*function waktu() {
		var waktu = new Date();
		setTimeout("waktu()", 1000);
		document.getElementById("tahun").innerHTML = waktu.getFullYear();
		document.getElementById("bulan").innerHTML = waktu.getMonth();
		document.getElementById("tanggal").innerHTML = waktu.getDate();
     }*/

    function waktu() {
      var waktu = new Date();
      setTimeout("waktu()", 1000);
          document.getElementById("jam").innerHTML = waktu.getHours();
		document.getElementById("menit").innerHTML = waktu.getMinutes();
		document.getElementById("detik").innerHTML = waktu.getSeconds();
          document.getElementById("tahun").innerHTML = waktu.getFullYear();
		document.getElementById("bulan").innerHTML = waktu.getMonth();
		document.getElementById("tanggal").innerHTML = waktu.getDate();
    }