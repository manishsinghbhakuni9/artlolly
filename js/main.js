$(document).ready(function () {
    $('#myModal').modal('show');
});

let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;

        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}
$(function () {
    $(".upload-link").on('click', function (e) {
        e.preventDefault();
        $("#upload:hidden").trigger('click');
    });
});



if (document.body.id === "artistpage") {
    let firstformsect = document.querySelector("#firstformsect");
    let secondformsect = document.querySelector("#secondformsect");
    let thirdformsect = document.querySelector("#thirdformsect");
    let forthformsect = document.querySelector("#forthformsect");

    let personalinfo = document.querySelector("#personalinfo");
    let professionalinfo = document.querySelector("#professionalinfo");
    let linkaccount = document.querySelector("#linkaccount");
    let accsecurity = document.querySelector("#accsecurity");

    let bground1 = document.querySelector("#bground1");
    let bground2 = document.querySelector("#bground2");
    let bground3 = document.querySelector("#bground3");
    let bground4 = document.querySelector("#bground4");

    let personal1 = document.querySelector("#personal1");
    let personal2 = document.querySelector("#personal2");
    let personal3 = document.querySelector("#personal3");
    let personal4 = document.querySelector("#personal4");

    let artistfirstbtn = document.querySelector("#artistfirstbtn");
    let artistsecondbtn = document.querySelector("#artistsecondbtn");
    let artistthirdbtn = document.querySelector("#artistthirdbtn");

    let number1 = document.querySelector("#number1");
    let checkedone = document.querySelector("#checkedone");
    let number2 = document.querySelector("#number2");
    let checkedtwo = document.querySelector("#checkedtwo");
    let number3 = document.querySelector("#number3");
    let checkedthree = document.querySelector("#checkedthree");

    let myprofile = document.querySelector("#myprofile");
    let portfolio = document.querySelector("#portfolio");
    let myprofilesect = document.querySelector("#myprofilesection");
    let portfoliosect = document.querySelector("#portfoliosection");

    personalinfo.addEventListener("click", () => {
        firstformsect.style.display = "block";
        bground1.classList.remove("bgcircle2");
        bground1.classList.add("bgcircle");
        bground2.classList.remove("bgcircle");
        bground2.classList.add("bgcircle2");
        bground3.classList.remove("bgcircle");
        bground3.classList.add("bgcircle2");
        bground4.classList.remove("bgcircle");
        bground4.classList.add("bgcircle2");
        personal1.classList.add("coloraccsite");
        personal2.classList.remove("coloraccsite");
        personal3.classList.remove("coloraccsite");
        personal4.classList.remove("coloraccsite");
        secondformsect.style.display = "none";
        thirdformsect.style.display = "none";
        forthformsect.style.display = "none";
        number1.style.display = "block";
        checkedone.style.display = "none";
        number2.style.display = "block";
        checkedtwo.style.display = "none";
        number3.style.display = "block";
        checkedthree.style.display = "none";
    });

    professionalinfo.addEventListener("click", () => {
        firstformsect.style.display = "none";
        bground1.classList.remove("bgcircle");
        bground1.classList.add("bgcircle2");
        bground2.classList.remove("bgcircle2");
        bground2.classList.add("bgcircle");
        bground3.classList.remove("bgcircle");
        bground3.classList.add("bgcircle2");
        bground4.classList.remove("bgcircle");
        bground4.classList.add("bgcircle2");
        personal1.classList.remove("coloraccsite");
        personal2.classList.add("coloraccsite");
        personal3.classList.remove("coloraccsite");
        personal4.classList.remove("coloraccsite");
        secondformsect.style.display = "block";
        thirdformsect.style.display = "none";
        forthformsect.style.display = "none";
        number1.style.display = "block";
        checkedone.style.display = "none";
        number2.style.display = "block";
        checkedtwo.style.display = "none";
        number3.style.display = "block";
        checkedthree.style.display = "none";
    });

    linkaccount.addEventListener("click", () => {
        firstformsect.style.display = "none";
        bground1.classList.remove("bgcircle");
        bground1.classList.add("bgcircle2");
        bground2.classList.remove("bgcircle");
        bground2.classList.add("bgcircle2");
        bground3.classList.remove("bgcircle2");
        bground3.classList.add("bgcircle");
        bground4.classList.remove("bgcircle");
        bground4.classList.add("bgcircle2");
        personal1.classList.remove("coloraccsite");
        personal2.classList.remove("coloraccsite");
        personal3.classList.add("coloraccsite");
        personal4.classList.remove("coloraccsite");
        secondformsect.style.display = "none";
        thirdformsect.style.display = "block";
        forthformsect.style.display = "none";
        number1.style.display = "block";
        checkedone.style.display = "none";
        number2.style.display = "block";
        checkedtwo.style.display = "none";
        number3.style.display = "block";
        checkedthree.style.display = "none";
    });

    accsecurity.addEventListener("click", () => {
        firstformsect.style.display = "none";
        bground1.classList.remove("bgcircle");
        bground1.classList.add("bgcircle2");
        bground2.classList.remove("bgcircle");
        bground2.classList.add("bgcircle2");
        bground3.classList.remove("bgcircle");
        bground3.classList.add("bgcircle2");
        bground4.classList.remove("bgcircle2");
        bground4.classList.add("bgcircle");
        personal1.classList.remove("coloraccsite");
        personal2.classList.remove("coloraccsite");
        personal3.classList.remove("coloraccsite");
        personal4.classList.add("coloraccsite");
        secondformsect.style.display = "none";
        thirdformsect.style.display = "none";
        forthformsect.style.display = "block";
        number1.style.display = "block";
        checkedone.style.display = "none";
        number2.style.display = "block";
        checkedtwo.style.display = "none";
        number3.style.display = "block";
        checkedthree.style.display = "none";
    });

    myprofile.addEventListener("click", () => {
        myprofilesect.style.display = "block";
        portfoliosect.style.display = "none";
        myprofile.classList.add("active");
        portfolio.classList.remove("active");
    });
    portfolio.addEventListener("click", () => {
        myprofilesect.style.display = "none";
        portfoliosect.style.display = "block";
        portfolio.classList.add("active");
        myprofile.classList.remove("active");
    });


    artistfirstbtn.addEventListener("click", () => {
        firstformsect.style.display = "none";
        bground1.classList.remove("bgcircle");
        bground1.classList.add("bgcircle2");
        bground2.classList.remove("bgcircle2");
        bground2.classList.add("bgcircle");
        bground3.classList.remove("bgcircle");
        bground3.classList.add("bgcircle2");
        bground4.classList.remove("bgcircle");
        bground4.classList.add("bgcircle2");
        personal1.classList.remove("coloraccsite");
        personal2.classList.add("coloraccsite");
        personal3.classList.remove("coloraccsite");
        personal4.classList.remove("coloraccsite");
        secondformsect.style.display = "block";
        thirdformsect.style.display = "none";
        forthformsect.style.display = "none";
        number1.style.display = "none";
        checkedone.style.display = "block";
    });

    artistsecondbtn.addEventListener("click", () => {
        firstformsect.style.display = "none";
        bground1.classList.remove("bgcircle");
        bground1.classList.add("bgcircle2");
        bground2.classList.remove("bgcircle");
        bground2.classList.add("bgcircle2");
        bground3.classList.remove("bgcircle2");
        bground3.classList.add("bgcircle");
        bground4.classList.remove("bgcircle");
        bground4.classList.add("bgcircle2");
        personal1.classList.remove("coloraccsite");
        personal2.classList.remove("coloraccsite");
        personal3.classList.add("coloraccsite");
        personal4.classList.remove("coloraccsite");
        secondformsect.style.display = "none";
        thirdformsect.style.display = "block";
        forthformsect.style.display = "none";
        number1.style.display = "none";
        checkedone.style.display = "block";
        number2.style.display = "none";
        checkedtwo.style.display = "block";
    });

    artistthirdbtn.addEventListener("click", () => {
        firstformsect.style.display = "none";
        bground1.classList.remove("bgcircle");
        bground1.classList.add("bgcircle2");
        bground2.classList.remove("bgcircle");
        bground2.classList.add("bgcircle2");
        bground3.classList.remove("bgcircle");
        bground3.classList.add("bgcircle2");
        bground4.classList.remove("bgcircle2");
        bground4.classList.add("bgcircle");
        personal1.classList.remove("coloraccsite");
        personal2.classList.remove("coloraccsite");
        personal3.classList.remove("coloraccsite");
        personal4.classList.add("coloraccsite");
        secondformsect.style.display = "none";
        thirdformsect.style.display = "none";
        forthformsect.style.display = "block";
        number1.style.display = "none";
        checkedone.style.display = "block";
        number2.style.display = "none";
        checkedtwo.style.display = "block";
        number3.style.display = "none";
        checkedthree.style.display = "block";
    });


}

/* gig */
if (document.body.id === "gigpage") {
    let gigoverview = document.querySelector("#gigoverview");
    let gigpricing = document.querySelector("#gigpricing");
    let gigdescription = document.querySelector("#gigdescription");
    let gigrequirement = document.querySelector("#gigrequirement");
    let giggallery = document.querySelector("#giggallery");
    let gigpublish = document.querySelector("#gigpublish");

    let gigfirstbtn = document.querySelector("#gigfirstbtn");
    let gigsecondbtn = document.querySelector("#gigsecondbtn");
    let gigthirdbtn = document.querySelector("#gigthirdbtn");
    let gigforthbtn = document.querySelector("#gigforthbtn");
    let gigfifthbtn = document.querySelector("#gigfifthbtn");

    let gigbground1 = document.querySelector("#gigbground1");
    let gigbground2 = document.querySelector("#gigbground2");
    let gigbground3 = document.querySelector("#gigbground3");
    let gigbground4 = document.querySelector("#gigbground4");
    let gigbground5 = document.querySelector("#gigbground5");
    let gigbground6 = document.querySelector("#gigbground6");

    let gignumber1 = document.querySelector("#gignumber1");
    let gignumber2 = document.querySelector("#gignumber2");
    let gignumber3 = document.querySelector("#gignumber3");
    let gignumber4 = document.querySelector("#gignumber4");
    let gignumber5 = document.querySelector("#gignumber5");
    let gignumber6 = document.querySelector("#gignumber6");

    let gigcheckedone = document.querySelector("#gigcheckedone");
    let gigcheckedtwo = document.querySelector("#gigcheckedtwo");
    let gigcheckedthree = document.querySelector("#gigcheckedthree");
    let gigcheckedfour = document.querySelector("#gigcheckedfour");
    let gigcheckefive = document.querySelector("#gigcheckefive");
    let gigcheckedsix = document.querySelector("#gigcheckedsix");


    gigoverview.addEventListener("click", () => {
        firstgigsect.style.display = "block";
        secondgigsect.style.display = "none";
        thirdgigsect.style.display = "none";
        forthgigsect.style.display = "none";
        fifthgigsect.style.display = "none";
        sixthgigsect.style.display = "none";
        gigbground1.classList.add("bgcircle");
        gigbground1.classList.remove("bgcircle2");
        gigbground2.classList.add("bgcircle2");
        gigbground2.classList.remove("bgcircle");
        gigbground3.classList.remove("bgcircle");
        gigbground3.classList.add("bgcircle2");
        gigbground4.classList.remove("bgcircle");
        gigbground4.classList.add("bgcircle2");
        gigbground5.classList.add("bgcircle2");
        gigbground5.classList.remove("bgcircle");
        gigbground6.classList.remove("bgcircle");
        gigbground6.classList.add("bgcircle2");
        gigpersonal1.classList.add("coloraccsite");
        gigpersonal2.classList.remove("coloraccsite");
        gigpersonal3.classList.remove("coloraccsite");
        gigpersonal4.classList.remove("coloraccsite");
        gigpersonal5.classList.remove("coloraccsite");
        gigpersonal6.classList.remove("coloraccsite");
        gignumber1.style.display = "block";
        gigcheckedone.style.display = "none";
        gignumber2.style.display = "block";
        gigcheckedtwo.style.display = "none";
        gignumber3.style.display = "block";
        gigcheckedthree.style.display = "none";
        gignumber4.style.display = "block";
        gigcheckedfour.style.display = "none";
        gignumber5.style.display = "block";
        gigcheckedfive.style.display = "none";
        gignumber6.style.display = "block";
        gigcheckedsix.style.display = "none";
    });

    gigpricing.addEventListener("click", () => {
        firstgigsect.style.display = "none";
        secondgigsect.style.display = "block";
        thirdgigsect.style.display = "none";
        forthgigsect.style.display = "none";
        fifthgigsect.style.display = "none";
        sixthgigsect.style.display = "none";

        gigbground1.classList.remove("bgcircle");
        gigbground1.classList.add("bgcircle2");
        gigbground2.classList.add("bgcircle");
        gigbground2.classList.remove("bgcircle2");
        gigbground3.classList.add("bgcircle2");
        gigbground3.classList.remove("bgcircle");
        gigbground4.classList.remove("bgcircle");
        gigbground4.classList.add("bgcircle2");
        gigbground5.classList.add("bgcircle2");
        gigbground5.classList.remove("bgcircle");
        gigbground6.classList.remove("bgcircle");
        gigbground6.classList.add("bgcircle2");
        gigpersonal1.classList.remove("coloraccsite");
        gigpersonal2.classList.add("coloraccsite");
        gigpersonal3.classList.remove("coloraccsite");
        gigpersonal4.classList.remove("coloraccsite");
        gigpersonal5.classList.remove("coloraccsite");
        gigpersonal6.classList.remove("coloraccsite");
        gignumber1.style.display = "block";
        gigcheckedone.style.display = "none";
        gignumber2.style.display = "block";
        gigcheckedtwo.style.display = "none";
        gignumber3.style.display = "block";
        gigcheckedthree.style.display = "none";
        gignumber4.style.display = "block";
        gigcheckedfour.style.display = "none";
        gignumber5.style.display = "block";
        gigcheckedfive.style.display = "none";
        gignumber6.style.display = "block";
        gigcheckedsix.style.display = "none";
    });
    gigdescription.addEventListener("click", () => {
        firstgigsect.style.display = "none";
        secondgigsect.style.display = "none";
        thirdgigsect.style.display = "block";
        forthgigsect.style.display = "none";
        fifthgigsect.style.display = "none";
        sixthgigsect.style.display = "none";
        gigbground1.classList.remove("bgcircle");
        gigbground1.classList.add("bgcircle2");
        gigbground2.classList.add("bgcircle2");
        gigbground2.classList.remove("bgcircle");
        gigbground3.classList.add("bgcircle");
        gigbground3.classList.remove("bgcircle2");
        gigbground4.classList.remove("bgcircle");
        gigbground4.classList.add("bgcircle2");
        gigbground5.classList.remove("bgcircle");
        gigbground5.classList.add("bgcircle2");
        gigbground6.classList.remove("bgcircle");
        gigbground6.classList.add("bgcircle2");
        gigpersonal1.classList.remove("coloraccsite");
        gigpersonal2.classList.remove("coloraccsite");
        gigpersonal3.classList.add("coloraccsite");
        gigpersonal4.classList.remove("coloraccsite");
        gigpersonal5.classList.remove("coloraccsite");
        gigpersonal6.classList.remove("coloraccsite");
        gignumber1.style.display = "block";
        gigcheckedone.style.display = "none";
        gignumber2.style.display = "block";
        gigcheckedtwo.style.display = "none";
        gignumber3.style.display = "block";
        gigcheckedthree.style.display = "none";
        gignumber4.style.display = "block";
        gigcheckedfour.style.display = "none";
        gignumber5.style.display = "block";
        gigcheckedfive.style.display = "none";
        gignumber6.style.display = "block";
        gigcheckedsix.style.display = "none";
    });
    gigrequirement.addEventListener("click", () => {
        firstgigsect.style.display = "none";
        secondgigsect.style.display = "none";
        thirdgigsect.style.display = "none";
        forthgigsect.style.display = "block";
        fifthgigsect.style.display = "none";
        sixthgigsect.style.display = "none";
        gigbground1.classList.remove("bgcircle");
        gigbground1.classList.add("bgcircle2");
        gigbground2.classList.remove("bgcircle");
        gigbground2.classList.add("bgcircle2");
        gigbground3.classList.add("bgcircle2");
        gigbground3.classList.remove("bgcircle");
        gigbground4.classList.add("bgcircle");
        gigbground4.classList.remove("bgcircle2");
        gigbground5.classList.add("bgcircle2");
        gigbground5.classList.remove("bgcircle");
        gigbground6.classList.remove("bgcircle");
        gigbground6.classList.add("bgcircle2");
        gigpersonal1.classList.remove("coloraccsite");
        gigpersonal2.classList.remove("coloraccsite");
        gigpersonal3.classList.remove("coloraccsite");
        gigpersonal4.classList.add("coloraccsite");
        gigpersonal5.classList.remove("coloraccsite");
        gigpersonal6.classList.remove("coloraccsite");
        gignumber1.style.display = "block";
        gigcheckedone.style.display = "none";
        gignumber2.style.display = "block";
        gigcheckedtwo.style.display = "none";
        gignumber3.style.display = "block";
        gigcheckedthree.style.display = "none";
        gignumber4.style.display = "block";
        gigcheckedfour.style.display = "none";
        gignumber5.style.display = "block";
        gigcheckedfive.style.display = "none";
        gignumber6.style.display = "block";
        gigcheckedsix.style.display = "none";
    });
    giggallery.addEventListener("click", () => {
        firstgigsect.style.display = "none";
        secondgigsect.style.display = "none";
        thirdgigsect.style.display = "none";
        forthgigsect.style.display = "none";
        fifthgigsect.style.display = "block";
        sixthgigsect.style.display = "none";
        gigbground1.classList.remove("bgcircle");
        gigbground1.classList.add("bgcircle2");
        gigbground2.classList.add("bgcircle2");
        gigbground2.classList.remove("bgcircle");
        gigbground3.classList.remove("bgcircle");
        gigbground3.classList.add("bgcircle2");
        gigbground4.classList.remove("bgcircle");
        gigbground4.classList.add("bgcircle2");
        gigbground5.classList.add("bgcircle");
        gigbground5.classList.remove("bgcircle2");
        gigbground6.classList.remove("bgcircle");
        gigbground6.classList.add("bgcircle2");
        gigpersonal1.classList.remove("coloraccsite");
        gigpersonal2.classList.remove("coloraccsite");
        gigpersonal3.classList.remove("coloraccsite");
        gigpersonal4.classList.remove("coloraccsite");
        gigpersonal5.classList.add("coloraccsite");
        gigpersonal6.classList.remove("coloraccsite");
        gignumber1.style.display = "block";
        gigcheckedone.style.display = "none";
        gignumber2.style.display = "block";
        gigcheckedtwo.style.display = "none";
        gignumber3.style.display = "block";
        gigcheckedthree.style.display = "none";
        gignumber4.style.display = "block";
        gigcheckedfour.style.display = "none";
        gignumber5.style.display = "block";
        gigcheckedfive.style.display = "none";
        gignumber6.style.display = "block";
        gigcheckedsix.style.display = "none";
    });
    gigpublish.addEventListener("click", () => {
        firstgigsect.style.display = "none";
        secondgigsect.style.display = "none";
        thirdgigsect.style.display = "none";
        forthgigsect.style.display = "none";
        fifthgigsect.style.display = "none";
        sixthgigsect.style.display = "block";

        gigbground1.classList.remove("bgcircle");
        gigbground1.classList.add("bgcircle2");
        gigbground2.classList.remove("bgcircle");
        gigbground2.classList.add("bgcircle2");
        gigbground3.classList.add("bgcircle2");
        gigbground3.classList.remove("bgcircle");
        gigbground4.classList.remove("bgcircle");
        gigbground4.classList.add("bgcircle2");
        gigbground5.classList.add("bgcircle2");
        gigbground5.classList.remove("bgcircle");
        gigbground6.classList.add("bgcircle");
        gigbground6.classList.remove("bgcircle2");
        gigpersonal1.classList.remove("coloraccsite");
        gigpersonal2.classList.remove("coloraccsite");
        gigpersonal3.classList.remove("coloraccsite");
        gigpersonal4.classList.remove("coloraccsite");
        gigpersonal5.classList.remove("coloraccsite");
        gigpersonal6.classList.add("coloraccsite");

        gignumber1.style.display = "block";
        gigcheckedone.style.display = "none";
        gignumber2.style.display = "block";
        gigcheckedtwo.style.display = "none";
        gignumber3.style.display = "block";
        gigcheckedthree.style.display = "none";
        gignumber4.style.display = "block";
        gigcheckedfour.style.display = "none";
        gignumber5.style.display = "block";
        gigcheckedfive.style.display = "none";
        gignumber6.style.display = "block";
        gigcheckedsix.style.display = "none";
    });


    gigfirstbtn.addEventListener("click", () => {
        firstgigsect.style.display = "none";
        secondgigsect.style.display = "block";
        thirdgigsect.style.display = "none";
        forthgigsect.style.display = "none";
        fifthgigsect.style.display = "none";
        sixthgigsect.style.display = "none";

        gigbground1.classList.remove("bgcircle");
        gigbground1.classList.add("bgcircle2");
        gigbground2.classList.add("bgcircle");
        gigbground2.classList.remove("bgcircle2");
        gigbground3.classList.add("bgcircle2");
        gigbground3.classList.remove("bgcircle");
        gigbground4.classList.remove("bgcircle");
        gigbground4.classList.add("bgcircle2");
        gigbground5.classList.add("bgcircle2");
        gigbground5.classList.remove("bgcircle");
        gigbground6.classList.remove("bgcircle");
        gigbground6.classList.add("bgcircle2");
        gigpersonal1.classList.remove("coloraccsite");
        gigpersonal2.classList.add("coloraccsite");
        gigpersonal3.classList.remove("coloraccsite");
        gigpersonal4.classList.remove("coloraccsite");
        gigpersonal5.classList.remove("coloraccsite");
        gigpersonal6.classList.remove("coloraccsite");
        gignumber1.style.display = "none";
        gigcheckedone.style.display = "block";
        gignumber2.style.display = "block";
        gigcheckedtwo.style.display = "none";
        gignumber3.style.display = "block";
        gigcheckedthree.style.display = "none";
        gignumber4.style.display = "block";
        gigcheckedfour.style.display = "none";
        gignumber5.style.display = "block";
        gigcheckedfive.style.display = "none";
        gignumber6.style.display = "block";
        gigcheckedsix.style.display = "none";
    });
    gigsecondbtn.addEventListener("click", () => {
        firstgigsect.style.display = "none";
        secondgigsect.style.display = "none";
        thirdgigsect.style.display = "block";
        forthgigsect.style.display = "none";
        fifthgigsect.style.display = "none";
        sixthgigsect.style.display = "none";

        gigbground1.classList.remove("bgcircle");
        gigbground1.classList.add("bgcircle2");
        gigbground2.classList.remove("bgcircle");
        gigbground2.classList.add("bgcircle2");
        gigbground3.classList.remove("bgcircle2");
        gigbground3.classList.add("bgcircle");
        gigbground4.classList.remove("bgcircle");
        gigbground4.classList.add("bgcircle2");
        gigbground5.classList.add("bgcircle2");
        gigbground5.classList.remove("bgcircle");
        gigbground6.classList.remove("bgcircle");
        gigbground6.classList.add("bgcircle2");
        gigpersonal1.classList.remove("coloraccsite");
        gigpersonal2.classList.remove("coloraccsite");
        gigpersonal3.classList.add("coloraccsite");
        gigpersonal4.classList.remove("coloraccsite");
        gigpersonal5.classList.remove("coloraccsite");
        gigpersonal6.classList.remove("coloraccsite");
        gignumber1.style.display = "none";
        gigcheckedone.style.display = "block";
        gignumber2.style.display = "none";
        gigcheckedtwo.style.display = "block";
        gignumber3.style.display = "block";
        gigcheckedthree.style.display = "none";
        gignumber4.style.display = "block";
        gigcheckedfour.style.display = "none";
        gignumber5.style.display = "block";
        gigcheckedfive.style.display = "none";
        gignumber6.style.display = "block";
        gigcheckedsix.style.display = "none";
    });
    gigthirdbtn.addEventListener("click", () => {
        firstgigsect.style.display = "none";
        secondgigsect.style.display = "none";
        thirdgigsect.style.display = "none";
        forthgigsect.style.display = "block";
        fifthgigsect.style.display = "none";
        sixthgigsect.style.display = "none";
        gigbground1.classList.remove("bgcircle");
        gigbground1.classList.add("bgcircle2");
        gigbground2.classList.remove("bgcircle");
        gigbground2.classList.add("bgcircle2");
        gigbground3.classList.add("bgcircle2");
        gigbground3.classList.remove("bgcircle");
        gigbground4.classList.add("bgcircle");
        gigbground4.classList.remove("bgcircle2");
        gigbground5.classList.add("bgcircle2");
        gigbground5.classList.remove("bgcircle");
        gigbground6.classList.remove("bgcircle");
        gigbground6.classList.add("bgcircle2");
        gigpersonal1.classList.remove("coloraccsite");
        gigpersonal2.classList.remove("coloraccsite");
        gigpersonal3.classList.remove("coloraccsite");
        gigpersonal4.classList.add("coloraccsite");
        gigpersonal5.classList.remove("coloraccsite");
        gigpersonal6.classList.remove("coloraccsite");
        gignumber1.style.display = "none";
        gigcheckedone.style.display = "block";
        gignumber2.style.display = "none";
        gigcheckedtwo.style.display = "block";
        gignumber3.style.display = "none";
        gigcheckedthree.style.display = "block";
        gignumber4.style.display = "block";
        gigcheckedfour.style.display = "none";
        gignumber5.style.display = "block";
        gigcheckedfive.style.display = "none";
        gignumber6.style.display = "block";
        gigcheckedsix.style.display = "none";
    });
    gigforthbtn.addEventListener("click", () => {
        firstgigsect.style.display = "none";
        secondgigsect.style.display = "none";
        thirdgigsect.style.display = "none";
        forthgigsect.style.display = "none";
        fifthgigsect.style.display = "block";
        sixthgigsect.style.display = "none";
        gigbground1.classList.remove("bgcircle");
        gigbground1.classList.add("bgcircle2");
        gigbground2.classList.remove("bgcircle");
        gigbground2.classList.add("bgcircle2");
        gigbground3.classList.add("bgcircle2");
        gigbground3.classList.remove("bgcircle");
        gigbground4.classList.remove("bgcircle");
        gigbground4.classList.add("bgcircle2");
        gigbground5.classList.remove("bgcircle2");
        gigbground5.classList.add("bgcircle");
        gigbground6.classList.remove("bgcircle");
        gigbground6.classList.add("bgcircle2");
        gigpersonal1.classList.remove("coloraccsite");
        gigpersonal2.classList.remove("coloraccsite");
        gigpersonal3.classList.remove("coloraccsite");
        gigpersonal4.classList.remove("coloraccsite");
        gigpersonal5.classList.add("coloraccsite");
        gigpersonal6.classList.remove("coloraccsite");
        gignumber1.style.display = "none";
        gigcheckedone.style.display = "block";
        gignumber2.style.display = "none";
        gigcheckedtwo.style.display = "block";
        gignumber3.style.display = "none";
        gigcheckedthree.style.display = "block";
        gignumber4.style.display = "none";
        gigcheckedfour.style.display = "block";
        gignumber5.style.display = "block";
        gigcheckedfive.style.display = "none";
        gignumber6.style.display = "block";
        gigcheckedsix.style.display = "none";
    });
    gigfifthbtn.addEventListener("click", () => {
        firstgigsect.style.display = "none";
        secondgigsect.style.display = "none";
        thirdgigsect.style.display = "none";
        forthgigsect.style.display = "none";
        fifthgigsect.style.display = "none";
        sixthgigsect.style.display = "block";
        gigbground1.classList.remove("bgcircle");
        gigbground1.classList.add("bgcircle2");
        gigbground2.classList.remove("bgcircle");
        gigbground2.classList.add("bgcircle2");
        gigbground3.classList.add("bgcircle2");
        gigbground3.classList.remove("bgcircle");
        gigbground4.classList.remove("bgcircle");
        gigbground4.classList.add("bgcircle2");
        gigbground5.classList.add("bgcircle2");
        gigbground5.classList.remove("bgcircle");
        gigbground6.classList.add("bgcircle");
        gigbground6.classList.remove("bgcircle2");
        gigpersonal1.classList.remove("coloraccsite");
        gigpersonal2.classList.remove("coloraccsite");
        gigpersonal3.classList.remove("coloraccsite");
        gigpersonal4.classList.remove("coloraccsite");
        gigpersonal5.classList.remove("coloraccsite");
        gigpersonal6.classList.add("coloraccsite");
        gignumber1.style.display = "none";
        gigcheckedone.style.display = "block";
        gignumber2.style.display = "none";
        gigcheckedtwo.style.display = "block";
        gignumber3.style.display = "none";
        gigcheckedthree.style.display = "block";
        gignumber4.style.display = "none";
        gigcheckedfour.style.display = "block";
        gignumber5.style.display = "none";
        gigcheckedfive.style.display = "block";
        gignumber6.style.display = "block";
        gigcheckedsix.style.display = "none";
    });
}

if (document.body.id === "artworklisting") {
    let projectsubmit1 = document.querySelector("#projectsubmit1");
    let projectsubmit2 = document.querySelector("#projectsubmit2");
    let delete1 = document.querySelector("#delete1");
    let delete2 = document.querySelector("#delete2");

    delete1.addEventListener("click", ()=>{
        projectsubmit1.style.display = "none";
    })
    delete2.addEventListener("click", ()=>{
        projectsubmit2.style.display = "none";
    })

}