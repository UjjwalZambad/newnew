
// mobile menu
const burger = document.getElementById("burger");
const navlist = document.getElementById("navlist");
const closeburger = document.getElementById("closeburger");
burger.addEventListener("click", () => {
  navlist.style.display = "flex";
  burger.style.display = "none";
  closeburger.style.display = "block";
});
closeburger.addEventListener("click", () => {
  navlist.style.display = "none";
  closeburger.style.display = "none";
  burger.style.display = "block";
});

var open = [false, false, false, false, false, false, false];
document
  .getElementById("openquery1")
  .addEventListener("click", function () {
    if (open[0] == true) {
      document.getElementById("openquery1").style.backgroundColor =
        "#fff";
      document.getElementById(
        "accordion-collapse-body-1"
      ).style.backgroundColor = "#fff";
      open[0] = false;
    } else {
      document.getElementById("openquery1").style.backgroundColor =
        "#4bff7e";
      document.getElementById(
        "accordion-collapse-body-1"
      ).style.backgroundColor = "#4bff7e";
      open[0] = true;
      document.getElementById("openquery2").style.backgroundColor =
        "#fff";
      document.getElementById(
        "accordion-collapse-body-2"
      ).style.backgroundColor = "#fff";
      open[1] = false;
      document.getElementById("openquery3").style.backgroundColor =
        "#fff";
      document.getElementById(
        "accordion-collapse-body-3"
      ).style.backgroundColor = "#fff";
      open[2] = false;
      document.getElementById("openquery4").style.backgroundColor =
        "#fff";
      document.getElementById(
        "accordion-collapse-body-4"
      ).style.backgroundColor = "#fff";
      open[3] = false;
      document.getElementById("openquery5").style.backgroundColor =
        "#fff";
      document.getElementById(
        "accordion-collapse-body-5"
      ).style.backgroundColor = "#fff";
      open[4] = false;
      document.getElementById("openquery6").style.backgroundColor =
        "#fff";
      document.getElementById(
        "accordion-collapse-body-6"
      ).style.backgroundColor = "#fff";
      open[5] = false;
      document.getElementById("openquery7").style.backgroundColor =
        "#fff";
      document.getElementById(
        "accordion-collapse-body-7"
      ).style.backgroundColor = "#fff";
      open[6] = false;
    }
  });

document
  .getElementById("openquery2")
  .addEventListener("click", function () {
    if (open[1] == true) {
      document.getElementById("openquery2").style.backgroundColor =
        "#fff";
      document.getElementById(
        "accordion-collapse-body-2"
      ).style.backgroundColor = "#fff";
      open[1] = false;
    } else {
      document.getElementById("openquery2").style.backgroundColor =
        "#4bff7e";
      document.getElementById(
        "accordion-collapse-body-2"
      ).style.backgroundColor = "#4bff7e";
      open[1] = true;
      document.getElementById("openquery1").style.backgroundColor =
        "#fff";
      document.getElementById(
        "accordion-collapse-body-1"
      ).style.backgroundColor = "#fff";
      open[0] = false;
      document.getElementById("openquery3").style.backgroundColor =
        "#fff";
      document.getElementById(
        "accordion-collapse-body-3"
      ).style.backgroundColor = "#fff";
      open[2] = false;
      document.getElementById("openquery4").style.backgroundColor =
        "#fff";
      document.getElementById(
        "accordion-collapse-body-4"
      ).style.backgroundColor = "#fff";
      open[3] = false;
      document.getElementById("openquery5").style.backgroundColor =
        "#fff";
      document.getElementById(
        "accordion-collapse-body-5"
      ).style.backgroundColor = "#fff";
      open[4] = false;
      document.getElementById("openquery6").style.backgroundColor =
        "#fff";
      document.getElementById(
        "accordion-collapse-body-6"
      ).style.backgroundColor = "#fff";
      open[5] = false;
      document.getElementById("openquery7").style.backgroundColor =
        "#fff";
      document.getElementById(
        "accordion-collapse-body-7"
      ).style.backgroundColor = "#fff";
      open[6] = false;
    }
  });

document
  .getElementById("openquery3")
  .addEventListener("click", function () {
    if (open[2] == true) {
      document.getElementById("openquery3").style.backgroundColor =
        "#fff";
      document.getElementById(
        "accordion-collapse-body-3"
      ).style.backgroundColor = "#fff";
      open[2] = false;
    } else {
      document.getElementById("openquery3").style.backgroundColor =
        "#4bff7e";
      document.getElementById(
        "accordion-collapse-body-3"
      ).style.backgroundColor = "#4bff7e";
      open[2] = true;
      document.getElementById("openquery2").style.backgroundColor =
        "#fff";
      document.getElementById(
        "accordion-collapse-body-2"
      ).style.backgroundColor = "#fff";
      open[1] = false;
      document.getElementById("openquery1").style.backgroundColor =
        "#fff";
      document.getElementById(
        "accordion-collapse-body-1"
      ).style.backgroundColor = "#fff";
      open[0] = false;
      document.getElementById("openquery4").style.backgroundColor =
        "#fff";
      document.getElementById(
        "accordion-collapse-body-4"
      ).style.backgroundColor = "#fff";
      open[3] = false;
      document.getElementById("openquery5").style.backgroundColor =
        "#fff";
      document.getElementById(
        "accordion-collapse-body-5"
      ).style.backgroundColor = "#fff";
      open[4] = false;
      document.getElementById("openquery6").style.backgroundColor =
        "#fff";
      document.getElementById(
        "accordion-collapse-body-6"
      ).style.backgroundColor = "#fff";
      open[5] = false;
      document.getElementById("openquery7").style.backgroundColor =
        "#fff";
      document.getElementById(
        "accordion-collapse-body-7"
      ).style.backgroundColor = "#fff";
      open[6] = false;
    }
  });

document
  .getElementById("openquery4")
  .addEventListener("click", function () {
    if (open[3] == true) {
      document.getElementById("openquery4").style.backgroundColor =
        "#fff";
      document.getElementById(
        "accordion-collapse-body-4"
      ).style.backgroundColor = "#fff";
      open[3] = false;
    } else {
      document.getElementById("openquery4").style.backgroundColor =
        "#4bff7e";
      document.getElementById(
        "accordion-collapse-body-4"
      ).style.backgroundColor = "#4bff7e";
      open[3] = true;
      document.getElementById("openquery2").style.backgroundColor =
        "#fff";
      document.getElementById(
        "accordion-collapse-body-2"
      ).style.backgroundColor = "#fff";
      open[1] = false;
      document.getElementById("openquery3").style.backgroundColor =
        "#fff";
      document.getElementById(
        "accordion-collapse-body-3"
      ).style.backgroundColor = "#fff";
      open[2] = false;
      document.getElementById("openquery1").style.backgroundColor =
        "#fff";
      document.getElementById(
        "accordion-collapse-body-1"
      ).style.backgroundColor = "#fff";
      open[0] = false;
      document.getElementById("openquery5").style.backgroundColor =
        "#fff";
      document.getElementById(
        "accordion-collapse-body-5"
      ).style.backgroundColor = "#fff";
      open[4] = false;
      document.getElementById("openquery6").style.backgroundColor =
        "#fff";
      document.getElementById(
        "accordion-collapse-body-6"
      ).style.backgroundColor = "#fff";
      open[5] = false;
      document.getElementById("openquery7").style.backgroundColor =
        "#fff";
      document.getElementById(
        "accordion-collapse-body-7"
      ).style.backgroundColor = "#fff";
      open[6] = false;
    }
  });

document
  .getElementById("openquery5")
  .addEventListener("click", function () {
    if (open[4] == true) {
      document.getElementById("openquery5").style.backgroundColor =
        "#fff";
      document.getElementById(
        "accordion-collapse-body-5"
      ).style.backgroundColor = "#fff";
      open[4] = false;
    } else {
      document.getElementById("openquery5").style.backgroundColor =
        "#4bff7e";
      document.getElementById(
        "accordion-collapse-body-5"
      ).style.backgroundColor = "#4bff7e";
      open[4] = true;
      document.getElementById("openquery2").style.backgroundColor =
        "#fff";
      document.getElementById(
        "accordion-collapse-body-2"
      ).style.backgroundColor = "#fff";
      open[1] = false;
      document.getElementById("openquery3").style.backgroundColor =
        "#fff";
      document.getElementById(
        "accordion-collapse-body-3"
      ).style.backgroundColor = "#fff";
      open[2] = false;
      document.getElementById("openquery4").style.backgroundColor =
        "#fff";
      document.getElementById(
        "accordion-collapse-body-4"
      ).style.backgroundColor = "#fff";
      open[3] = false;
      document.getElementById("openquery1").style.backgroundColor =
        "#fff";
      document.getElementById(
        "accordion-collapse-body-1"
      ).style.backgroundColor = "#fff";
      open[0] = false;
      document.getElementById("openquery6").style.backgroundColor =
        "#fff";
      document.getElementById(
        "accordion-collapse-body-6"
      ).style.backgroundColor = "#fff";
      open[5] = false;
      document.getElementById("openquery7").style.backgroundColor =
        "#fff";
      document.getElementById(
        "accordion-collapse-body-7"
      ).style.backgroundColor = "#fff";
      open[6] = false;
    }
  });

document
  .getElementById("openquery6")
  .addEventListener("click", function () {
    if (open[5] == true) {
      document.getElementById("openquery6").style.backgroundColor =
        "#fff";
      document.getElementById(
        "accordion-collapse-body-6"
      ).style.backgroundColor = "#fff";
      open[5] = false;
    } else {
      document.getElementById("openquery6").style.backgroundColor =
        "#4bff7e";
      document.getElementById(
        "accordion-collapse-body-6"
      ).style.backgroundColor = "#4bff7e";
      open[5] = true;
      document.getElementById("openquery2").style.backgroundColor =
        "#fff";
      document.getElementById(
        "accordion-collapse-body-2"
      ).style.backgroundColor = "#fff";
      open[1] = false;
      document.getElementById("openquery3").style.backgroundColor =
        "#fff";
      document.getElementById(
        "accordion-collapse-body-3"
      ).style.backgroundColor = "#fff";
      open[2] = false;
      document.getElementById("openquery4").style.backgroundColor =
        "#fff";
      document.getElementById(
        "accordion-collapse-body-4"
      ).style.backgroundColor = "#fff";
      open[3] = false;
      document.getElementById("openquery5").style.backgroundColor =
        "#fff";
      document.getElementById(
        "accordion-collapse-body-5"
      ).style.backgroundColor = "#fff";
      open[4] = false;
      document.getElementById("openquery1").style.backgroundColor =
        "#fff";
      document.getElementById(
        "accordion-collapse-body-1"
      ).style.backgroundColor = "#fff";
      open[0] = false;
      document.getElementById("openquery7").style.backgroundColor =
        "#fff";
      document.getElementById(
        "accordion-collapse-body-7"
      ).style.backgroundColor = "#fff";
      open[6] = false;
    }
  });

document
  .getElementById("openquery7")
  .addEventListener("click", function () {
    if (open[6] == true) {
      document.getElementById("openquery7").style.backgroundColor =
        "#fff";
      document.getElementById(
        "accordion-collapse-body-7"
      ).style.backgroundColor = "#fff";
      open[6] = false;
    } else {
      document.getElementById("openquery7").style.backgroundColor =
        "#4bff7e";
      document.getElementById(
        "accordion-collapse-body-7"
      ).style.backgroundColor = "#4bff7e";
      open[6] = true;
      document.getElementById("openquery2").style.backgroundColor =
        "#fff";
      document.getElementById(
        "accordion-collapse-body-2"
      ).style.backgroundColor = "#fff";
      open[1] = false;
      document.getElementById("openquery3").style.backgroundColor =
        "#fff";
      document.getElementById(
        "accordion-collapse-body-3"
      ).style.backgroundColor = "#fff";
      open[2] = false;
      document.getElementById("openquery4").style.backgroundColor =
        "#fff";
      document.getElementById(
        "accordion-collapse-body-4"
      ).style.backgroundColor = "#fff";
      open[3] = false;
      document.getElementById("openquery5").style.backgroundColor =
        "#fff";
      document.getElementById(
        "accordion-collapse-body-5"
      ).style.backgroundColor = "#fff";
      open[4] = false;
      document.getElementById("openquery6").style.backgroundColor =
        "#fff";
      document.getElementById(
        "accordion-collapse-body-6"
      ).style.backgroundColor = "#fff";
      open[5] = false;
      document.getElementById("openquery1").style.backgroundColor =
        "#fff";
      document.getElementById(
        "accordion-collapse-body-1"
      ).style.backgroundColor = "#fff";
      open[0] = false;
    }
  });

$(document).ready(function () {
  $(".customer-logos").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1040,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 660,
        settings: {
          slidesToShow: 1,
        },
      },

    ],
  });
});


$(document).ready(function () {
  $(".customer-logos2").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1200,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1040,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 660,
        settings: {
          slidesToShow: 1,
        },
      },

    ],
  });
});


const data = [
  {
    0: `
      <p class="font-space text-4xl font-bold">Lorem </p>
      <p>Nostrud nulla ullamco excepteur reprehenderit incididunt laboris. Voluptate et amet commodo nulla cillum velit laboris.</p>
    `,
    1: `
    <p class="font-space text-4xl font-bold">Lorem</p>
    <p>Nostrud nulla ullamco excepteur reprehenderit incididunt laboris. Voluptate et amet commodo nulla cillum velit laboris.</p>
    `,
    2: `
    <p class="font-space text-4xl font-bold">Lorem</p>
    <p>Nostrud nulla ullamco excepteur reprehenderit incididunt laboris. Voluptate et amet commodo nulla cillum velit laboris.</p>
    `,
    3: `
    <p class="font-space text-4xl font-bold">Lorem</p>
    <p>Nostrud nulla ullamco excepteur reprehenderit incididunt laboris. Voluptate et amet commodo nulla cillum velit laboris.</p>
    `
  },
  {
    0: `
  <p class="font-space text-4xl font-bold">Lorem Ipsum</p>
  <p>Nostrud nulla ullamco excepteur reprehenderit incididunt laboris. Voluptate et amet commodo nulla cillum velit laboris.</p>
`,
    1: `
<p class="font-space text-4xl font-bold">Lorem Ipsum</p>
<p>Nostrud nulla ullamco excepteur reprehenderit incididunt laboris. Voluptate et amet commodo nulla cillum velit laboris.</p>
`,
    2: `
<p class="font-space text-4xl font-bold">Lorem Ipsum</p>
<p>Nostrud nulla ullamco excepteur reprehenderit incididunt laboris. Voluptate et amet commodo nulla cillum velit laboris.</p>
`,
    3: `
<p class="font-space text-4xl font-bold">Lorem Ipsum</p>
<p>Nostrud nulla ullamco excepteur reprehenderit incididunt laboris. Voluptate et amet commodo nulla cillum velit laboris.</p>
`
  },
  {
    0: `
  <p class="font-space text-4xl font-bold">Lorem Ipsum</p>
  <p>Nostrud nulla ullamco excepteur reprehenderit incididunt laboris. Voluptate et amet commodo nulla cillum velit laboris.</p>
`,
    1: `
<p class="font-space text-4xl font-bold">Lorem Ipsum</p>
<p>Nostrud nulla ullamco excepteur reprehenderit incididunt laboris. Voluptate et amet commodo nulla cillum velit laboris.</p>
`,
    2: `
<p class="font-space text-4xl font-bold">Lorem Ipsum</p>
<p>Nostrud nulla ullamco excepteur reprehenderit incididunt laboris. Voluptate et amet commodo nulla cillum velit laboris.</p>
`,
    3: `
<p class="font-space text-4xl font-bold">Lorem Ipsum</p>
<p>Nostrud nulla ullamco excepteur reprehenderit incididunt laboris. Voluptate et amet commodo nulla cillum velit laboris.</p>
`
  },
  {
    0: `
  <p class="font-space text-4xl font-bold">Lorem Ipsum</p>
  <p>Nostrud nulla ullamco excepteur reprehenderit incididunt laboris. Voluptate et amet commodo nulla cillum velit laboris.</p>
`,
    1: `
<p class="font-space text-4xl font-bold">Lorem Ipsum</p>
<p>Nostrud nulla ullamco excepteur reprehenderit incididunt laboris. Voluptate et amet commodo nulla cillum velit laboris.</p>
`,
    2: `
<p class="font-space text-4xl font-bold">Lorem Ipsum</p>
<p>Nostrud nulla ullamco excepteur reprehenderit incididunt laboris. Voluptate et amet commodo nulla cillum velit laboris.</p>
`,
    3: `
<p class="font-space text-4xl font-bold">Lorem Ipsum</p>
<p>Nostrud nulla ullamco excepteur reprehenderit incididunt laboris. Voluptate et amet commodo nulla cillum velit laboris.</p>
`
  },
  {
    0: `
  <p class="font-space text-4xl font-bold">Lorem Ipsum</p>
  <p>Nostrud nulla ullamco excepteur reprehenderit incididunt laboris. Voluptate et amet commodo nulla cillum velit laboris.</p>
`,
    1: `
<p class="font-space text-4xl font-bold">Lorem Ipsum</p>
<p>Nostrud nulla ullamco excepteur reprehenderit incididunt laboris. Voluptate et amet commodo nulla cillum velit laboris.</p>
`,
    2: `
<p class="font-space text-4xl font-bold">Lorem Ipsum</p>
<p>Nostrud nulla ullamco excepteur reprehenderit incididunt laboris. Voluptate et amet commodo nulla cillum velit laboris.</p>
`,
    3: `
<p class="font-space text-4xl font-bold">Lorem Ipsum</p>
<p>Nostrud nulla ullamco excepteur reprehenderit incididunt laboris. Voluptate et amet commodo nulla cillum velit laboris.</p>
`
  },
  {
    0: `
  <p class="font-space text-4xl font-bold">Lorem Ipsum</p>
  <p>Nostrud nulla ullamco excepteur reprehenderit incididunt laboris. Voluptate et amet commodo nulla cillum velit laboris.</p>
`,
    1: `
<p class="font-space text-4xl font-bold">Lorem Ipsum</p>
<p>Nostrud nulla ullamco excepteur reprehenderit incididunt laboris. Voluptate et amet commodo nulla cillum velit laboris.</p>
`,
    2: `
<p class="font-space text-4xl font-bold">Lorem Ipsum</p>
<p>Nostrud nulla ullamco excepteur reprehenderit incididunt laboris. Voluptate et amet commodo nulla cillum velit laboris.</p>
`,
    3: `
<p class="font-space text-4xl font-bold">Lorem Ipsum</p>
<p>Nostrud nulla ullamco excepteur reprehenderit incididunt laboris. Voluptate et amet commodo nulla cillum velit laboris.</p>
`
  }]




const childrenbelief2 = Array.from(document.getElementById('belief-box2').children);
const childrenbelief3 = Array.from(document.getElementById('belief-box3').children);

const childrenbelief1 = Array.from(document.getElementById('belief-box1').children);

childrenbelief1.forEach((element, index) => {
  element.addEventListener('click', () => {
    childrenbelief1.forEach(chi => {
      chi.style.backgroundColor = '#fff';
      chi.classList.remove('shadow-[2px_2px_#000000]');
    });
    element.style.backgroundColor = '#4ade80';
    element.classList.add('shadow-[2px_2px_#000000]');
    document.getElementsByClassName('card1')[0].innerHTML = data[index][0];
    document.getElementsByClassName('card2')[0].innerHTML = data[index][1];
    document.getElementsByClassName('card3')[0].innerHTML = data[index][2];
    document.getElementsByClassName('card4')[0].innerHTML = data[index][3];
  });
});

childrenbelief2.forEach((element, index) => {
  element.addEventListener('click', () => {
    childrenbelief2.forEach(chi => {
      chi.style.backgroundColor = '#fff';
      chi.classList.remove('shadow-[2px_2px_#000000]');
    });
    element.style.backgroundColor = '#4ade80';
    element.classList.add('shadow-[2px_2px_#000000]');
    document.getElementsByClassName('card1')[0].innerHTML = data[index][0];
    document.getElementsByClassName('card2')[0].innerHTML = data[index][1];
    document.getElementsByClassName('card3')[0].innerHTML = data[index][2];
    document.getElementsByClassName('card4')[0].innerHTML = data[index][3];
  });
});


childrenbelief3.forEach((element, index) => {
  element.addEventListener('click', () => {
    childrenbelief3.forEach(chi => {
      chi.style.backgroundColor = '#fff';
      chi.classList.remove('shadow-[2px_2px_#000000]');
    });
    element.style.backgroundColor = '#4ade80';
    element.classList.add('shadow-[2px_2px_#000000]');
    document.getElementsByClassName('card5')[0].innerHTML = data[index][0];
    document.getElementsByClassName('card6')[0].innerHTML = data[index][1];
    document.getElementsByClassName('card7')[0].innerHTML = data[index][2];
    document.getElementsByClassName('card8')[0].innerHTML = data[index][3];
  });
});