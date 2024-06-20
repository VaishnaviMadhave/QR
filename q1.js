function domReady(fn)
{
    if(document.readyState === "complete" ||
        document.readyState === "interactive"
    )
    {
        setTimeout(fn ,1000);
    }
    else{
        document.addEventListener("DOMContentLoaded",fn);
    }
}
domReady(function ()
{
    //if found qr code
    function oneScanSuccess(decodeText, decodeResult)
    {
        alert("Your QR is: "+ decodeText, decodeResult);
    }
    let htmlscaneer =new Html5QrcodeScanner(
        "my-qr-reader",{fps:10,qrbos:250}
    );
    htmlscaneer.render(oneScanSuccess);
})